export interface SignedInUser {
  email: string
  first: string
  last: string
  orderFrequency: string // either "every week" or "every other week"
  addressLine1: string
  addressLine2?: string
  zip: string
}

export interface SignedInData {
  signedInUser: SignedInUser
  missiveDigest: string
}

interface StripeAddress {
  postal_code: string | null
}
interface StripeBillingDetails {
  address: StripeAddress
}

interface StripeCard {
  brand: string
  country: string
  exp_month: number
  exp_year: number
  funding: string // "credit"
  last4: string
}

interface DefaultSourceObject {
  card: StripeCard
  billing_details: StripeBillingDetails
}

export interface StripeCustomer {
  defaultSourceObject: DefaultSourceObject
  livemode: boolean
}
export interface GoodpluckJSONResponse {
  data?: Record<string, any>
  success?: boolean
  error?: string
}
export interface OrderDetail {
  mondayOfOrderDateString: string // Orders are indexed by the YYYY-MM-DD of the Monday of the delivery date
  scheduledStatus: string | null // null or "active" or "done" or "error"
  editStatus: string | null // null or "active" or "done" or "error"
  chargedStatus: string | null // null or "active" or "done" or "error"
  deliveredStatus: string | null // null or "active" or "done" or "error"
  editBasketStartDate: string // in ISO format
  editBasketEndDate: string // in ISO format
  chargedDate: string // in ISO format
  deliveryDate: string // in ISO format
  isFullfilled: boolean
  isPaused: boolean
  basket?: [string, BasketItemAndProduct][] | null //A basket is represented asthe entries form of a js MAP e.g. [[key, object ] ...]
  amountReceivedInCents: number | null
  isCancelled: boolean
  cancelledReason: string | null
}

interface MissiveChatConfigUser {
  name: string
  email: string
  digest: string
}

export interface MissiveChatConfig {
  id: string
  user: MissiveChatConfigUser | Record<string, string>
}

export interface BasketItemData {
  stripePriceId: string
  quantity: number
  unitPriceInCents: number
}

export interface BasketItemAndProduct {
  stripePriceId: string
  quantity: number
  unitPriceInCents: number
  name: string
  isLocalPluck: string
  isOrganic: string
  priceInCents: number
  priceInDollars: string
  unitQuantity: number
  unitLabel: string
  supplier: string
}

export interface createSetupIntentResponseJSON {
  id: string
  object: string
  client_secret: string
}
export interface CreateUserSuccessResponseJSONData {
  createCustomerResponseJSON: any
  createSetupIntentResponseJSON: createSetupIntentResponseJSON
  message: string
  missiveDigest: string
  signedInUser: SignedInUser
}

export interface CreateUserSuccessResponseJSON {
  data: CreateUserSuccessResponseJSONData
  message: string
}

export interface CheckEmailAndZipJSONResponse {
  email?: string
  zip?: string
  userExists?: boolean
  zipInDeliveryZone?: boolean
  zipInWaitlistZone?: boolean
  zipCity?: string
  zipCounty?: string
  error?: string
  success: boolean
}
