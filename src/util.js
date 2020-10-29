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

export const getUnverifiedUserEmailFromOnboarding = () => {
  if (typeof localStorage === undefined) {
    return null
  }
  const goodpluckNewUserForm = JSON.parse(
    localStorage.getItem("goodpluck-new-user-form")
  )
  return goodpluckNewUserForm.email
}

/** put signed in user info into localStorage
 *
 * @param {*} signedInUser - object containing user data
 */
export const updateSignedInUserInLocalStorage = signedInUser => {
  if (typeof localStorage !== undefined) {
    localStorage.setItem("goodpluck_user", JSON.stringify(signedInUser))
  }
}

export const isSignedIn = () => false //Todo: Implement!

export const showGetStarted = () => {
  if (typeof window === `undefined`) {
    return true
  }

  const path = window.location.pathname
  if (path.startsWith("/checkout") || path.startsWith("/getstarted")) {
    return false
  }

  if (isSignedIn()) {
    return false
  }
  return true
}

export const hasCompletedOnboarding = () => {
  if (typeof localStorage === `undefined`) {
    return false
  }
  return localStorage.getItem("goodpluck_onboarding_status") === "done"
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
