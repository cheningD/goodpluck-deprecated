import { BasketItemData, GoodPluckJSONResponse, OrderDetail, SignedInData } from './types'

import { navigate } from 'gatsby'
import { saveSignedInUserToLocalStorage } from './util'

// For testing api on localhost
const LOCAL_API_PREFIX = process.env.GATSBY_DEPLOY_ENVIRONMENT === 'DEVELOPMENT' ? 'http://localhost:8787' : ''

export const createUser = async (params: Record<string, any>) => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/createuser`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  const responseJson = await response.json()

  return responseJson
}

export const signIn = async params => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/signin`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return response
}

/** If parameters validate, client recieves a session cookie
 *
 * @param authCodeId - The ID of the AuthCode created at sign in
 * @param code - The 'secret' part of the AuthCode
 * @param email - The email logging in
 * @returns {boolean} - true iof you are now signed in
 */
export const verifyEmail = async (authCodeId: string, code: string, email: string, setErrorTextFunc: Function) => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/verifyemail`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ authCodeId, code, email }),
  })

  if (response.ok) {
    return true
  } else {
    let responseJSON: Record<string, any>
    try {
      responseJSON = await response.json()
      if (responseJSON.data.signedInUser.email) {
        saveSignedInUserToLocalStorage(responseJSON.data.signedInUser)
      }
    } catch (err) {}
    if (responseJSON.error) {
      setErrorTextFunc(responseJSON.error)
    }
  }

  return response.ok
}

export const getSignedInData = async (): Promise<SignedInData | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/getsignedinuser`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON = await response.json()
    return responseJSON.data
  } catch (err) {
    return null
  }
}

export const restartSubscription = async (): Promise<GoodPluckJSONResponse> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/orders`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subscriptionIsActive: true, reason: 'Subscription Restarted' }),
  })

  try {
    return await response.json()
  } catch (err) {
    return {
      success: false,
      error: 'Something went wrong. Please contact us if this issue persists',
    }
  }
}

export const pauseSubscription = async (reason: string): Promise<GoodPluckJSONResponse> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/orders`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subscriptionIsActive: false, reason: reason }),
  })

  try {
    return await response.json()
  } catch (err) {
    return {
      success: false,
      error: 'Something went wrong. Please contact us if this issue persists',
    }
  }
}

export const getOrders = async (): Promise<Record<string, OrderDetail> | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/orders`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON: GoodPluckJSONResponse = await response.json()
    return responseJSON.data
  } catch (err) {
    return null
  }
}

export const getOrdersDemo = async (): Promise<OrderDetail | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/orders/demo`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON: GoodPluckJSONResponse = await response.json()
    return responseJSON.data as OrderDetail
  } catch (err) {
    return null
  }
}

export const getBasket = async (): Promise<Map<string, BasketItemData> | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/basket`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON = await response.json()
    return new Map(responseJSON.data)
  } catch (err) {
    return null
  }
  return null
}

export const updateBasket = async (basket: Map<string, BasketItemData>): Promise<boolean> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/basket`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: JSON.stringify(Array.from(basket.entries())) }),
  })

  try {
    const responseJSON = await response.json()
    if (responseJSON.data) {
      return true
    }
  } catch (err) {
    return false
  }
  return false
}

export const logout = async () => {
  if (typeof localStorage !== `undefined`) {
    localStorage.clear()
  }

  await fetch(`${LOCAL_API_PREFIX}/api/logout`, {
    credentials: 'same-origin',
  })
  navigate('/')
}
