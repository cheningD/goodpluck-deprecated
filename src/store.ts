import { SetterOrUpdater, atom, selector } from 'recoil'

import { updateBasket } from './actions'

export const signedInUser = atom({
  key: 'signed_in_user', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

export const isSignedIn = selector({
  key: 'isSignedIn',
  get: ({ get }) => {
    const user = get(signedInUser)
    if (user !== null && user.email) {
      return true
    }
    return false
  },
})

export const myOrders = atom({
  key: 'orders', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

export const basketItems = atom({
  key: 'basket_items', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
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

export const setItemQuantity = async (
  stripePriceId: string,
  quantity: number,
  unitPriceInCents: number,
  setBasketFunc: SetterOrUpdater<Map<any, any>>,
): Promise<void> => {
  let newBasket
  setBasketFunc(oldBasket => {
    newBasket = new Map(oldBasket)
    if (quantity > 0) {
      newBasket.set(stripePriceId, { stripePriceId, quantity, unitPriceInCents })
    } else {
      newBasket.delete(stripePriceId)
    }
    console.log(`basket set ${stripePriceId} -> ${quantity}`)
    return newBasket
  })
  // Todo should the update basket
  await updateBasket(newBasket)
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

export const onboardingOrderFrequency = atom({
  key: 'onboardingOrderFrequency',
  default: 'every week',
})

export const onboardingNotifyDeliveryDates = atom({
  key: 'onboardingNotifyDeliveryDates',
  default: false,
})
