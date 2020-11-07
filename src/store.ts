import { SetterOrUpdater, atom, selector } from 'recoil'

// Helps for serializing maps
function replacer(key, value) {
  const originalObject = this[key]
  if (originalObject instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
    }
  } else {
    return value
  }
}

function reviver(key, value) {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value)
    }
  }
  return value
}

const localStorageEffect = key => ({ setSelf, onSet }) => {
  if (typeof localStorage === `undefined`) {
    return
  }
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue, reviver))
  }

  onSet((newValue: Map<string, any>) => {
    if (newValue.size === 0) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue, replacer))
    }
  })
}

export const signedInUser = atom({
  key: 'signed_in_user', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

export const myOrders = atom({
  key: 'orders', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

export const basketItems = atom({
  key: 'basket_items', // unique ID (with respect to other atoms/selectors)
  default: new Map(), // default value (aka initial value)
  effects_UNSTABLE: [localStorageEffect('goodpluck_basket')],
})

export const basketCount = selector({
  key: 'basketCount',
  get: ({ get }) => get(basketItems).size,
})

export const subtotalInCents = selector({
  key: 'subtotalInCents',
  get: ({ get }) => {
    let priceInCents: number = 0
    get(basketItems).forEach(item => {
      console.log('theee item:', item)
      priceInCents = priceInCents + item.quantity * item.unitPriceInCents
    })
    return priceInCents
  },
})

export const shippingInCents = selector({
  key: 'shippingInCents',
  get: ({ get }) => {
    console.log('subtotalInCents:', get(subtotalInCents))

    if (get(subtotalInCents) >= 3000) {
      return 0
    } else {
      return 699 // $6.99
    }
  },
})

export const setItemQuantity = (
  stripePriceId: string,
  quantity: number,
  unitPriceInCents: number,
  setBasketFunc: SetterOrUpdater<Map<any, any>>,
): void => {
  setBasketFunc(oldBasket => {
    let newBasket = new Map(oldBasket)
    if (quantity > 0) {
      newBasket.set(stripePriceId, { stripePriceId, quantity, unitPriceInCents })
    } else {
      newBasket.delete(stripePriceId)
    }
    console.log(`basket set ${stripePriceId} -> ${quantity}`)
    return newBasket
  })
}

// Onboarding Quiz Data

export const onboardingEmail = atom({
  key: 'onboardingEmail',
  default: '', // Empty string is correct default for text forms
})

export const onboardingZip = atom({
  key: 'onboardingZip', // unique ID (with respect to other atoms/selectors)
  default: '', // Empty string is correct default for text forms
})

export const onboardingShoppingFor = atom({
  key: 'onboardingShoppingFor', // unique ID (with respect to other atoms/selectors)
  default: [], // Empty array of strings is correct default for checkbox group
})

export const onboardingMyCauses = atom({
  key: 'onboardingMyCauses', // unique ID (with respect to other atoms/selectors)
  default: [], // Empty array of strings is correct default for checkbox group
})
