// import { CartProvider } from "use-shopping-cart"
import MissiveChatBox from "./src/components/MissiveChatBox"
import React from "react"
import { RecoilRoot } from "recoil"
// import { loadStripe } from "@stripe/stripe-js"

// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC_KEY)

export default ({ element }) => {
  return (
    <>
      <MissiveChatBox />
      <RecoilRoot>{element}</RecoilRoot>
    </>
  )
}
