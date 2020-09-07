export function listToClass(className) {
  const classNames = Array.isArray(className) ? className : [className]
  return classNames.filter(c => c !== typeof "string").join(" ")
}

export function debounce(cb, delay) {
  let timeoutId

  const debouncedFunc = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(cb, delay)
  }

  debouncedFunc.cancel = () => (timeoutId ? clearTimeout(timeoutId) : void 0)

  return debouncedFunc
}

export function isNil(arg) {
  return arg === undefined || arg === null
}

/**
 *
 * @param value {number}
 * @param min {number}
 * @param max {number}
 * @return {boolean}
 */
export function inRange(value, min, max) {
  return value >= min && value <= max
}

//Returns a string with all non letters [a-z] removed
export function removeNonLetters(str) {
  return str.replace(/[^a-z]/gi, "")
}
