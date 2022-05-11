import {
  BasketItemData,
  CheckEmailAndZipJSONResponse,
  CreateUserSuccessResponseJSON,
  GoodpluckJSONResponse,
  OrderDetail,
  SignedInData,
  StripeCustomer,
  SubscriptionRecord,
} from './types'

import { navigate } from 'gatsby'
import toast from 'react-hot-toast'

// For testing the api on localhost
export const LOCAL_API_PREFIX =
  process.env.GATSBY_DEPLOY_ENVIRONMENT === 'DEVELOPMENT' ? 'https://localhost.goodpluck.com' : ''

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

export const signInAsTestUser = async (): Promise<any> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/signinastestuser`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })

  let data

  try {
    data = await response.json()
  } catch (err) {
    return response
  }

  return data
}

/** If parameters validate, client recieves a session cookie
 *
 * @param authCodeId - The ID of the AuthCode created at sign in
 * @param code - The 'secret' part of the AuthCode
 * @param email - The email logging in
 * @returns {boolean} - true iof you are now signed in
 */
export const verifyEmail = async (
  authCodeId: string,
  code: string,
  email: string,
): Promise<GoodpluckJSONResponse | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/verifyemail`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ authCodeId, code, email: email.toLowerCase() }),
  })

  try {
    const responseJSON = await response.json()
    return responseJSON
  } catch (err) {
    console.log(`Error in verify email: ${err.message || err}`)
    return { error: 'Something went wrong, please try again' }
  }
}

export const checkEmailZip = async (email: string, zip: string): Promise<CheckEmailAndZipJSONResponse> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/checkemail`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: email.toLowerCase(), zip }),
  })
  return await response.json()
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

export const retrieveCustomer = async (): Promise<StripeCustomer | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/retrievecustomer`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON = await response.json()
    return responseJSON.data
  } catch (err) {
    console.log(`Error in retrieveCustomer: ${err.message || err}`)
    return null
  }
}

export const changeDeliveryDay = async (
  day: string,
  setUser: Function,
  setOrders: Function,
  setShowSpinner: Function,
): Promise<GoodpluckJSONResponse> => {
  setShowSpinner(true)
  const response = await fetch(`${LOCAL_API_PREFIX}/api/changedeliveryday`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ day: day.toLowerCase() }),
  })

  try {
    const data = await response.json()
    if (data.updatedUser) {
      console.log(`Updating user updated user: ${JSON.stringify(data.updatedUser)}`)
      setUser(data.updatedUser)
    }
    if (data.updatedOrders) {
      console.log(`Updating orders: ${JSON.stringify(data.updatedOrders)}`)
      setOrders(data.updatedOrders)
    }
  } catch (err) {
    console.log(`Error in restartSubscription: ${err.message || err}`)
    return {
      success: false,
      error: 'Something went wrong. Please contact us if this issue persists',
    }
  }
  setShowSpinner(false)
}

export const restartSubscription = async (): Promise<GoodpluckJSONResponse> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/restartsubscription`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export const pauseSubscription = async (reason: string): Promise<GoodpluckJSONResponse> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/pausesubscription`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ reason: reason }),
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

export const getSetSkippedFunc = (orders, setOrders: Function) => {
  const setSkipped = async (orderMondayIndex: string, skip: boolean) => {
    const response = await editOrder(orderMondayIndex, skip)
    let data: Record<string, any>
    try {
      data = (await response.json()).data
    } catch (err) {}

    if (data && data.updatedOrder) {
      setOrders(Object.assign({}, orders, { [orderMondayIndex]: data.updatedOrder }))
    } else if (data && data.error) {
      toast.error(`That didn't work: ${data.error || ''}`)
    } else {
      toast.error('That didnt work: Something went wrong when we tried to edit this order.')
      // Todo: Alert sentry
    }
  }
  return setSkipped
}

export const editOrder = async (orderMondayIndex: string, skip: boolean): Promise<Response> => {
  return await fetch(`${LOCAL_API_PREFIX}/api/editorder`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderMondayIndex, skip }),
  })
}

export const updateStripeCard = async (tokenID: string): Promise<Record<string, string> | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/updatecard`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tokenID: tokenID }),
  })

  if (!response.ok) {
    console.log(`Error in updateStripeCard: ${response.statusText}`)
    return null
  }

  try {
    const responseJSON: GoodpluckJSONResponse = await response.json()
    return responseJSON.data
  } catch (err) {
    console.log(`Error in updateStripeCard: ${err.message || err}`)
    return null
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
    const responseJSON: GoodpluckJSONResponse = await response.json()
    return responseJSON.data
  } catch (err) {
    console.log(`Error in getOrders: ${err.message || err}`)
    return null
  }
}

export const getOldOrders = async (): Promise<Record<string, OrderDetail> | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/pastorders`, {
    credentials: 'same-origin',
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON: GoodpluckJSONResponse = await response.json()
    return responseJSON.data
  } catch (err) {
    console.log(`Error in getOrders: ${err.message || err}`)
    return null
  }
}

export const getOrdersDemo = async (deliveryDayPreference): Promise<OrderDetail | null> => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/orders/demo`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ deliveryDay: deliveryDayPreference }),
  })

  if (!response.ok) {
    return null
  }

  try {
    const responseJSON: GoodpluckJSONResponse = await response.json()
    return responseJSON.data as OrderDetail
  } catch (err) {
    console.log(`Error in getOrdersDemo: ${err.message || err}`)
    return null
  }
}

type JSONResponse = {
  data?: {
    subscriptions: SubscriptionRecord[]
  }
  errors?: Array<{ message: string }>
}

export const getSubscriptions = async () => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/getsubscriptions`, {
    credentials: 'same-origin',
  })
  const { data, errors }: JSONResponse = await response.json()
  if (data.subscriptions && !errors) {
    return data.subscriptions
  } else {
    throw new Error(`Error in get subscriptions: ${errors}`)
  }
}

export const updateSubscriptions = async (
  subscriptions: SubscriptionRecord[],
  setSubscriptionsOnSuccessFunc: Function,
) => {
  const response = await fetch(`${LOCAL_API_PREFIX}/api/updatesubscriptions`, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subscriptions }),
  })

  const responseJSON = await response.json()
  console.log('The subscriprions JSON::', responseJSON)
  if (responseJSON.data.subscriptions) {
    console.log('IM Updating the subscriprions YAAY::')
    setSubscriptionsOnSuccessFunc(responseJSON.data.subscriptions)
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
    const newBasket: Map<string, BasketItemData> = new Map(JSON.parse(responseJSON.data))
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
