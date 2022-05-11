import { DateTime } from 'luxon'
import get from 'lodash-es/get'
import isNil from 'lodash-es/isNil'
import isObject from 'lodash-es/isObject'
import { useState } from 'react'

// Mondays only - Weeks that no delivieries are available
export const BLACKOUT_DATES: Record<string, string> = {
  '2020-12-21': 'No deliveries this week because of the holiday',
  '2021-09-20': 'Service Break Sep 20 - Oct 11',
  '2021-09-27': 'Service Break Sep 20 - Oct 11',
  '2021-10-04': 'Service Break Sep 20 - Oct 11',
  '2021-12-20': 'No deliveries this week because of the holiday',
  '2021-12-27': 'Happy 2022! No deliveries today!',
}

export const sleep = async (ms: number) => {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export const sortByPathFunc = path => {
  return (a, b) => {
    // Compare strings
    if (typeof get(a, path, 0) === 'string') {
      return get(a, path, '') < get(b, path, '') ? -1 : 1
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

//Returns a string with all non letters [a-z] removed
export const removeNonLetters = (input: string): string => (input && input.replace ? input.replace(/[^a-z]/gi, '') : '')
export const removeNonNumbers = (input: string): string => (input && input.replace ? input.replace(/[^0-9]/gi, '') : '')

export const isoToNiceDate = (isoString: string, format: string = '') => {
  return DateTime.fromISO(isoString, {
    zone: 'America/Detroit',
  }).toFormat(format || `ccc, LLL d`)
}

export const getAndValidateZipFromLocalStorage = () => {
  let zip = ''
  //Check localStorage is defined for SSR
  if (typeof localStorage !== `undefined`) {
    zip = localStorage.getItem('goodpluck_data_zip')
  }

  if (zip && zip.match(VALID_ZIP_PATTERN)) {
    return zip
  }
  return null
}

export const setZipToLocalStorage = zip => {
  if (typeof localStorage !== `undefined`) {
    localStorage.setItem('goodpluck_data_zip', zip)
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

export const saveMissiveDigestToLocalStorage = missiveDigest => {
  if (typeof localStorage !== `undefined`) {
    localStorage.setItem('goodpluck_missive_digest', missiveDigest)
  }
}

export const centsToString = (priceInCents: number) => {
  const num = priceInCents / 100.0
  return num.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

// Hook
export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }
  return [storedValue, setValue] as const
}
