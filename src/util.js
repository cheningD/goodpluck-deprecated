export const VALID_EMAIL_PATTERN = /^[0-9]{5}(?:-[0-9]{4})?$/

export function listToClass(className) {
  const classNames = Array.isArray(className) ? className : [className]
  return classNames.filter(c => typeof c === "string").join(" ")
}

//Returns a string with all non letters [a-z] removed
export const removeNonLetters = string => string.replace(/[^a-z]/gi, "")
export const removeNonNumbers = string => string.replace(/[^0-9]/gi, "")

export const getAndValidateZipFromLocalStorage = () => {
  let zip = localStorage.getItem("goodpluck_data_zip")

  if (zip && zip.match(VALID_EMAIL_PATTERN)) {
    return zip
  }
  return null
}

export const setZipToLocalStorage = zip => {
  localStorage.setItem("goodpluck_data_zip", zip)
}
