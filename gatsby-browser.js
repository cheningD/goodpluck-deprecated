import "./src/styles/normalize.css"
import "./src/styles/fonts.css"
import "./src/styles/goodpluck.css"
import "./src/styles/react-select-search.css"

import MissiveChatBox from "./src/components/MissiveChatBox"
import React from "react"
import { RecoilRoot } from "recoil"

export const wrapRootElement = ({ element }) => {
  return (
    <RecoilRoot>
      <MissiveChatBox />
      {element}
    </RecoilRoot>
  )
}

console.log(
  `GATSBY_DEPLOY_ENVIRONMENT: ${process.env.GATSBY_DEPLOY_ENVIRONMENT}`
)

if (!process.env.GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID) {
  throw new Error(
    "Missing required env variable: GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID"
  )
}
