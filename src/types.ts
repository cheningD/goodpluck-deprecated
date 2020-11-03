interface SignedInUser {
  email: string
  first: string
  last: string
}

export interface SignedInData {
  signedInUser: SignedInUser
  missiveDigest: string
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
