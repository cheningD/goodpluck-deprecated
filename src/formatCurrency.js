// cached as `Intl.NumberFormat` is slow as hell to instantiate.
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

const currencyFormatters = {}

/**
 *
 * @param currency string
 * @return number
 */
export function currencyToNumber(currency) {
  const withoutCurrencySymbol = currency.replace(currencyRegEx, "")
  const parsed = +withoutCurrencySymbol

  if (isNaN(parsed)) {
    throw new Error(`Failed to parse value: ${currency}`)
  }

  return parsed
}

const CURRENCY_TO_SYMBOLS = {
  USD: "$", // US Dollar
  EUR: "€", // Euro
  CRC: "₡", // Costa Rican Colón
  GBP: "£", // British Pound Sterling
  ILS: "₪", // Israeli New Sheqel
  INR: "₹", // Indian Rupee
  JPY: "¥", // Japanese Yen
  KRW: "₩", // South Korean Won
  NGN: "₦", // Nigerian Naira
  PHP: "₱", // Philippine Peso
  PLN: "zł", // Polish Zloty
  PYG: "₲", // Paraguayan Guarani
  THB: "฿", // Thai Baht
  UAH: "₴", // Ukrainian Hryvnia
  VND: "₫", // Vietnamese Dong
}


const currencyRegEx = new RegExp(
  `[${Object.values(CURRENCY_TO_SYMBOLS).join("")}]`
)

