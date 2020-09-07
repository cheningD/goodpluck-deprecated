/**
 * @throws
 * cached as `Intl.NumberFormat` is slow as hell to instantiate.
 * @param val {string | number}
 * @param currency {string}
 * @param locale {string}
 * @return {number}
 */
export function formatCurrency(val, currency = "USD", locale = "en-US") {
  const number = +val
  if (isNaN(number)) {
    throw new Error(`Expected number received: ${typeof val}`)
  }

  if (!(currency in currencyFormatters)) {
    try {
      currencyFormatters[currency] = new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
      })
    } catch (e) {
      throw e
    }
  }

  return currencyFormatters[currency].format(val)
}

/**
 *
 * @type {Object<string, any>}
 */
const currencyFormatters = {}
