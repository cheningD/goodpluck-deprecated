import { SignedInData } from "./types"
import { navigate } from "gatsby"
import { saveSignedInUserToLocalStorage } from "./util"

export const createUser = async (params: Record<string, any>) => {
  const response = await fetch("/api/createuser", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })

  const responseJson = await response.json()

  return responseJson
}

export const signIn = async params => {
  const response = await fetch("/api/signin", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
export const verifyEmail = async (
  authCodeId: string,
  code: string,
  email: string,
  setErrorTextFunc: Function
) => {
  const response = await fetch("/api/verifyemail", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const response = await fetch("/api/getsignedinuser", {
    credentials: "same-origin",
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

export const logout = async () => {
  if (typeof localStorage !== `undefined`) {
    localStorage.clear()
  }

  await fetch("/api/logout", {
    credentials: "same-origin",
  })
  navigate("/")
}
