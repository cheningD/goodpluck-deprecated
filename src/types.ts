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
  balance: number
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
  skipped: boolean
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

export interface SubscriptionRecord {
  sku: string
  quantity: number
  frequency: string // "every week" or "every other week"
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

interface stripeResponseError {
  code: string // e.g. 'card_declined'
  decline_code: string // e.g. 'insufficient_funds'
  doc_url: string // e.g. 'https:/string // e.g. /stripe.com/docs/error-codes/card-declined'
  message: string // e.g. 'Your card has insufficient funds.'
  param: string // e.g. ''
  type: string // e.g. 'card_error'
}
interface createCustomerResponseJSON {
  error?: stripeResponseError
  id?: string // e.g.  "cus_AJ6y9TsgwMryBy"
  object?: string // e.g.  "customer"
  address?: string // e.g.  null
  balance?: number // e.g.  0
  created?: number // e.g.  1489794295
  currency?: string // e.g.  "usd"
  default_source?: string // e.g.  "card_19yUkd2eZvKYlo2CLbEQmC4z"
  delinquent?: boolean // e.g.  true
  description?: string // e.g.  "My First Test Customer (created for API docs)"
  discount?: string // e.g.  null
  email?: string // e.g.  "hellen_denesik@example.com"
  invoice_prefix?: string // e.g.  "9B6FEC4"
  invoice_settings?: any
  livemode?: boolean // e.g.  false
  metadata?: any
  name?: string // e.g.  null
  next_invoice_sequence?: number // e.g.  47194
  phone?: string // e.g.  null
  preferred_locales?: string[] // e.g.  []
  shipping?: any // e.g.  null. or {address: xxx, name: xxx, phone:xxx}
  tax_exempt?: string // e.g.  "none"
}

export interface createSetupIntentResponseJSON {
  id?: string
  object?: string
  client_secret?: string
  error?: stripeResponseError
}
export interface CreateUserSuccessResponseJSONData {
  createCustomerResponseJSON: createCustomerResponseJSON
  createSetupIntentResponseJSON: createSetupIntentResponseJSON
  message: string
  missiveDigest: string
  signedInUser: SignedInUser
}

export interface CreateUserSuccessResponseJSON {
  data?: CreateUserSuccessResponseJSONData
  message?: string
  error?: string
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

export interface SignupData {
  addressLine1?: string
  addressLine2?: string
  deliveryDate?: string
  deliveryFrequency?: string
  email: string
  first: string
  last: string
  goal: string
  instructions?: string
  numHousehold?: string // e.g.  "1-2", "3-4", "5+"
  organicPreference?: string // e.g. "Both"
  phone?: string
  zip: string
}
