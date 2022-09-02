import { BasketItemData, OrderSupabase, StripeCustomer, SubscriptionRecord } from './types'
import { atom, selector } from 'recoil'

export const signedInUser = atom({
  key: 'signed_in_user', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

const stripeCustomerDefault: StripeCustomer | null = null
export const stripeCustomer = atom({
  key: 'stripeCustomer', // unique ID (with respect to other atoms/selectors)
  default: stripeCustomerDefault, // default value (aka initial value),
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

export const pastOrders = atom({
  key: 'pastorders', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value),
})

const ordersDefault: OrderSupabase[] | null = null

export const pastOrders2 = atom({
  key: 'pastorders2', // unique ID (with respect to other atoms/selectors)
  default: ordersDefault, // default value (aka initial value),
})

const subscriptionsDefault: SubscriptionRecord[] | null = null

export const mySubscriptions = atom({
  key: 'subscriptions', // unique ID (with respect to other atoms/selectors)
  default: subscriptionsDefault, // default value (aka initial value)
})

const basketDefault: Map<string, BasketItemData> | null = null

export const basketItems = atom({
  key: 'basket_items', // unique ID (with respect to other atoms/selectors)
  default: basketDefault, // default value (aka initial value)
})

export const basketCount = selector({
  key: 'basketCount',
  get: ({ get }) => {
    if (get(basketItems) === null) {
      return 0
    }
    return get(basketItems).size
  },
})

export const subtotalInCents = selector({
  key: 'subtotalInCents',
  get: ({ get }) => {
    let priceInCents: number = 0
    if (get(basketItems) === null) {
      return 0
    }
    get(basketItems).forEach(item => {
      priceInCents = priceInCents + item.quantity * item.unitPriceInCents
    })
    return priceInCents
  },
})

export const shippingInCents = selector({
  key: 'shippingInCents',
  get: ({ get }) => {
    if (get(subtotalInCents) === 0 || get(subtotalInCents) >= 3000) {
      return 0
    } else {
      return 699 // $6.99
    }
  },
})

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
