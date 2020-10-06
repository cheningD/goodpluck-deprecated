import "./src/styles/normalize.css"
import "./src/styles/fonts.css"
import "./src/styles/goodpluck.css"
import "./src/styles/react-select-search.css"

import wrapWithCartProvider from "./wrap-with-cart-provider"

export const wrapRootElement = wrapWithCartProvider

if (!process.env.GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID) {
  throw "Missing required env variable GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID"
}
