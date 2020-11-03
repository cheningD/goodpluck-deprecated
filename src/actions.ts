import {
  getUnverifiedUserEmailFromOnboarding,
  updateSignedInUserInLocalStorage,
} from "./util"

import { navigate } from "gatsby"

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
        updateSignedInUserInLocalStorage(responseJSON.data.signedInUser)
      }
    } catch (err) {}
    if (responseJSON.error) {
      setErrorTextFunc(responseJSON.error)
    }
  }

  return response.ok
}

/**
 *
 * @param {*} AuthCodeId {string} - The id of the AuthCodeItem created on server during the signin request
 * @param {*} email {string}
 */
export const checkEmailVerificationAndSignIn = async (authCodeId, email) => {
  const response = await fetch("/api/checkemailverify", {
    credentials: "same-origin",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authCodeId: authCodeId, email: email }),
  })
  return response
}

export const getSignedInUserAndUpdateLocalStorage = async () => {
  if (typeof localStorage === undefined) {
    return false
  }

  const response = await fetch("/api/getsignedinuser", {
    credentials: "same-origin",
  })
  if (response.status !== 200) {
    return false
  }

  const responseJSON = await response.json()
  if (responseJSON.data.signedInUser.email) {
    updateSignedInUserInLocalStorage(responseJSON.data.signedInUser)
  }

  if (responseJSON.missiveDigest) {
    localStorage.setItem("goodpluck_missive_digest", responseJSON.missiveDigest)
  }
}

/** Missive Chat config can take name, email and digest properties
 * If digest is filled in it can verify who we are speaking to
 */
export const getMissiveChatConfig = async () => {
  await getSignedInUserAndUpdateLocalStorage() //Todo: cache/debounce this result?
  const missiveChatConfig = {
    id: "1ea1215d-b61c-4638-b7b1-65acdb00bd1c",
  }

  if (typeof localStorage === undefined) {
    return missiveChatConfig
  }

  // Is user signed in? Use that data
  if (localStorage.getItem("goodpluck_user")) {
    const goodpluck_user = JSON.parse(localStorage.getItem("goodpluck_user"))
    missiveChatConfig.user = {}
    missiveChatConfig.user.name = `${goodpluck_user.first} ${goodpluck_user.last}`
    missiveChatConfig.user.email = goodpluck_user.email

    // Add a digest to verify user for chat.
    if (localStorage.getItem("goodpluck_missive_digest")) {
      missiveChatConfig.user.disgest = localStorage.getItem(
        "goodpluck_missive_digest"
      )
    }
  } else if (getUnverifiedUserEmailFromOnboarding()) {
    missiveChatConfig.user = {}
    missiveChatConfig.user.email = getUnverifiedUserEmailFromOnboarding()
  }

  return missiveChatConfig
}

export const logout = async () => {
  if (typeof localStorage !== undefined) {
    localStorage.clear()
  }

  await fetch("/api/logout", {
    credentials: "same-origin",
  })
  navigate("/")
}
