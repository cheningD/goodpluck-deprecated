interface SignedInUser {
  email: string
  first: string
  last: string
}

export interface SignedInData {
  signedInUser: SignedInUser
  missiveDigest: string
}

export interface GoodPluckJSONResponse {
  data: Record<string, any>
}

export interface OrderDetail {
  orderNumber: number
  mondayOfOrderDateString: string // Orders are indexed by the YYYY-MM-DD of the Monday of the delivery date
  scheduledStatus: string | null // null or "active" or "done" or "error"
  editStatus: string | null // null or "active" or "done" or "error"
  chargedStatus: string | null // null or "active" or "done" or "error"
  deliveredStatus: string | null // null or "active" or "done" or "error"
  editBasketStartDate: Date
  editBasketEndDate: Date
  chargedDate: Date
  deliveryDate: Date
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
