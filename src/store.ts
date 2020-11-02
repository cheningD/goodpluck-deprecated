import { SetterOrUpdater, atom, selector } from "recoil"

// Helps for serializing maps
function replacer(key, value) {
  const originalObject = this[key]
  if (originalObject instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(originalObject.entries()), // or with spread: value: [...originalObject]
    }
  } else {
    return value
  }
}

function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
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

export const basketItems = atom({
  key: "basket_items", // unique ID (with respect to other atoms/selectors)
  default: new Map(), // default value (aka initial value)
  effects_UNSTABLE: [localStorageEffect("goodpluck_basket")],
})

export const basketCount = selector({
  key: "basketCount",
  get: ({ get }) => get(basketItems).size,
})

export const setItemQuantity = (
  stripePriceId: string,
  quantity: number,
  setBasketFunc: SetterOrUpdater<Map<any, any>>
): void => {
  setBasketFunc(oldBasket => {
    let newBasket = new Map(oldBasket)

    if (quantity > 0) {
      newBasket.set(stripePriceId, quantity)
    } else {
      newBasket.delete(stripePriceId)
    }
    console.log(`basket set ${stripePriceId} -> ${quantity}`)
    return newBasket
  })
}
