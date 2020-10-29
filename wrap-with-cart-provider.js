import { CartProvider } from "use-shopping-cart"
import MissiveChatBox from "./src/components/MissiveChatBox"
import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC_KEY)

export default ({ element }) => {
  return (
    <>
      <MissiveChatBox />
      <CartProvider
        mode="client-only"
        stripe={stripePromise}
        successUrl="https://goodpluck.com/checkoutsuccess?session_id={CHECKOUT_SESSION_ID}"
        cancelUrl="https://goodpluck.com/cart?cancel=1"
        currency="USD"
        allowedCountries={["US"]}
        billingAddressCollection={true}
      >
        {element}
      </CartProvider>
    </>
  )
}
