import { updateSignedInUserInLocalStorage } from "./util"

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
  const responseJson = await response.json()

  return responseJson
}

export const checkEmailVerificationAndSignIn = async (nonce, email) => {
  const response = await fetch("https://api.goodpluck.com/checkemailverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ none: nonce, email: email }),
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
