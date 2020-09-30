import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_API_PUBLIC_KEY)

export default ({ element }) => {
  return (
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
  )
}
