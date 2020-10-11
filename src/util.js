import isNil from "lodash-es/isNil"
import isObject from "lodash-es/isObject"

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
