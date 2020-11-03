import get from "lodash-es/get"
import isNil from "lodash-es/isNil"
import isObject from "lodash-es/isObject"

export const sortByPathFunc = path => {
  return (a, b) => {
    // Compare strings
    if (typeof get(a, path, 0) === "string") {
      return get(a, path, "") < get(b, path, "") ? -1 : 1
    }
    // Compare numerical values
    return get(a, path, 0) - get(b, path, 0)
  }
}

export const getMaxlengthFunc = max => {
  const func = val => {
    if (val && val.length) {
      return val.length < max
    }
    return true //If string is null, its not too long
  }
  return func
}

export const VALID_ZIP_PATTERN_5_DIGITS = /^[0-9]{5}$/
export const VALID_ZIP_PATTERN = /^[0-9]{5}(?:-[0-9]{4})?$/

export function listToClass(className) {
  const classNames = Array.isArray(className) ? className : [className]
  return classNames.filter(c => typeof c === "string").join(" ")
}

//Returns a string with all non letters [a-z] removed
export const removeNonLetters = string =>
  string && string.replace ? string.replace(/[^a-z]/gi, "") : ""
export const removeNonNumbers = string =>
  string && string.replace ? string.replace(/[^0-9]/gi, "") : ""

export const getAndValidateZipFromLocalStorage = () => {
  let zip = ""
  //Check localStorage is defined for SSR
  if (typeof localStorage !== `undefined`) {
    zip = localStorage.getItem("goodpluck_data_zip")
  }

  if (zip && zip.match(VALID_ZIP_PATTERN)) {
    return zip
  }
  return null
}

export const setZipToLocalStorage = zip => {
  if (typeof localStorage !== `undefined`) {
    localStorage.setItem("goodpluck_data_zip", zip)
  }
}

// get first element from an object
export function getFirstFromObject(obj) {
  if (isNil(obj) || !isObject(obj)) return null

  for (const key in obj) {
    return obj[key]
  }

  return null
}

export const isCurrentLink = pathToCheck => {
  if (typeof window === `undefined`) {
    return false
  }
  const path = window.location.pathname
  return path.startsWith(pathToCheck)
}

export const getUnverifiedUserEmailFromOnboarding = (): string | null => {
  if (typeof localStorage === `undefined`) {
    return null
  }

  try {
    return JSON.parse(localStorage.getItem("goodpluck-new-user-form")).email
  } catch (err) {
    return null
  }
}

export const saveSignedInUserToLocalStorage = signedInUser => {
  if (typeof localStorage !== `undefined`) {
    localStorage.setItem("goodpluck_user", JSON.stringify(signedInUser))
  }
}

export const saveMissiveDigestToLocalStorage = missiveDigest => {
  if (typeof localStorage !== `undefined`) {
    localStorage.setItem("goodpluck_missive_digest", missiveDigest)
  }
}

export const getSignedInUser = async () => {
  //First check localstorage
  if (typeof localStorage === `undefined`) {
    return null
  }

  let userToRestore = localStorage.getItem("goodpluck_user")

  if (!userToRestore) {
    await getSignedInData()
    userToRestore = localStorage.getItem("goodpluck_user")
    if (!userToRestore) {
      return null //Still no user, probably not signed in
    }
  }

  let user
  try {
    user = JSON.parse(userToRestore)
  } catch (err) {}
  if (user && user.email) {
    return user
  }

  return null
}

export const isSignedIn = () => {
  if (typeof localStorage === `undefined`) {
    return false
  }

  const signedInUser = localStorage.getItem("goodpluck_user")
  if (signedInUser && signedInUser.email) {
    return true
  }
}

export const setOnboardingComplete = () => {
  if (typeof localStorage === `undefined`) {
    return false
  }
  localStorage.setItem("goodpluck_onboarding_status", "done")
}

export const hasCompletedOnboarding = () => {
  if (typeof localStorage === `undefined`) {
    return false
  }
  return localStorage.getItem("goodpluck_onboarding_status") === "done"
}

export const showGetStarted = () => {
  if (typeof window === `undefined`) {
    return true
  }

  const path = window.location.pathname
  if (path.startsWith("/checkout") || path.startsWith("/getstarted")) {
    return false
  }

  if (hasCompletedOnboarding() || isSignedIn()) {
    return false
  }
  return true
}

export const showCartIcon = () => {
  if (hasCompletedOnboarding()) {
    return true
  } else if (
    typeof window !== `undefined` &&
    window.location.pathname === "/" // Homepage
  ) {
    return true
  } else {
    return false
  }
}
