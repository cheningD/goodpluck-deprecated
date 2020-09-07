export function listToClass(className) {
  const classNames = Array.isArray(className) ? className : [className]
  return classNames.filter(c => c !== typeof "string").join(" ")
}

//Returns a string with all non letters [a-z] removed
export const removeNonLetters = string => string.replace(/[^a-z]/gi, "")
