import {
  BasketItemData,
  CreateUserSuccessResponseJSON,
  GoodPluckJSONResponse,
  OrderDetail,
  SignedInData,
} from './types'

import { navigate } from 'gatsby'

// For testing api on localhost
const LOCAL_API_PREFIX = process.env.GATSBY_DEPLOY_ENVIRONMENT === 'DEVELOPMENT' ? 'http://localhost:8787' : ''

export const createUser = async (params: Record<string, any>): Promise<CreateUserSuccessResponseJSON> => {
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
    console.log(`Error in getSignedInData: ${err.message || err}`)
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
    console.log(`Error in restartSubscription: ${err.message || err}`)
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
    console.log(`Error in pauseSubscription: ${err.message || err}`)
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
    console.log(`Error in getOrders: ${err.message || err}`)
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
    console.log(`Error in getOrdersDemo: ${err.message || err}`)
    return null
  }
}

export const getBasket = async (): Promise<Map<string, BasketItemData> | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/basket`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    console.log(`Error in getBasket: ${response}`)
    return null
  }

  try {
    const responseJSON = await response.json()
    const newBasket: Map<string, BasketItemData> = new Map()
    responseJSON.data.forEach(([key, value]) => {
      newBasket.set(key, value)
    })
    console.log('GP LOG new Basket', newBasket)
    return newBasket
  } catch (err) {
    console.log(`Error in getBasket: ${err.message || err}`)
    return null
  }
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
    console.log(`Error in updateBasket: ${err.message || err}`)
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
