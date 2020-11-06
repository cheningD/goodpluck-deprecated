interface SignedInUser {
  email: string
  first: string
  last: string
  orderFrequency: string // either "every week" or "every other week"
}

export interface SignedInData {
  signedInUser: SignedInUser
  missiveDigest: string
}

export interface GoodPluckJSONResponse {
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
