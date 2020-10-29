import { navigate } from "gatsby"
import {
  getUnverifiedUserEmailFromOnboarding,
  updateSignedInUserInLocalStorage,
} from "./util"

export const createUser = async params => {
  console.log("Sending data to backend... ", params)
  const response = await fetch("https://api.goodpluck.com/createuser", {
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
  console.log("Sending data to backend... ", params)
  const response = await fetch("https://api.goodpluck.com/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
  return response
}

/**
 *
 * @param {*} AuthCodeId {string} - The id of the AuthCodeItem created on server during the signin request
 * @param {*} email {string}
 */
export const checkEmailVerificationAndSignIn = async (authCodeId, email) => {
  const response = await fetch("https://api.goodpluck.com/checkemailverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authCodeId: authCodeId, email: email }),
  })
  if (response.status !== 200) {
    console.log("Something went wrong checking email")
    return false
  } else {
    const responseJson = await response.json()
    if (responseJson.signedInUser) {
      updateSignedInUserInLocalStorage(responseJson.signedInUser)
      return true
    } else {
      console.log("You havent verified your email yet.", responseJson)
      return false
    }
  }
}

export const getSignedInUserAndUpdateLocalStorage = async () => {
  const response = await fetch("https://api.goodpluck.com/getsignedinuser")
  if (response.status !== 200) {
    return false
  }

  if (responseJson.signedInUser) {
    localStorage.setItem(
      "goodpluck_user",
      JSON.stringify(responseJson.signedInUser)
    )
  }

  if (responseJson.missiveDigest) {
    localStorage.setItem("goodpluck_missive_digest", responseJson.missiveDigest)
  }
}

/** Missive Chat config can take name, email and digest properties
 * If digest is filled in it can verify who we are speaking to
 */
export const getMissiveChatConfig = async () => {
  await getSignedInUserAndUpdateLocalStorage() //Todo: cache/debounce this result?
  const missiveChatConfig = {
    id: "1ea1215d-b61c-4638-b7b1-65acdb00bd1c",
    user: {},
  }

  // Is user signed in? Use that data
  if (localStorage.getItem("goodpluck_user")) {
    const goodpluck_user = JSON.parse(goodpluck_user)
    missiveChatConfig.user.name = `${goodpluck_user.first} ${goodpluck_user.last}`
    missiveChatConfig.user.email = goodpluck_user.email

    // Add a digest to verify user for chat
    if (localStorage.getItem("goodpluck_missive_digest")) {
      missiveChatConfig.user.disgest = localStorage.getItem(
        "goodpluck_missive_digest"
      )
    }
  } else if (getUnverifiedUserEmailFromOnboarding()) {
    missiveChatConfig.user.email = getUnverifiedUserEmailFromOnboarding()
  }

  return missiveChatConfig
}

export const logout = () => {
  localStorage.clear()
  await fetch("https://api.goodpluck.com/logout")
  navigate("/")
}
