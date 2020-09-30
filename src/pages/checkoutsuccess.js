import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import axios from "axios"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

import Footer from "../components/footer"

import "./cart.css"
import Nav from "../components/Nav"
import CartItem from "../components/CartItem"

export const query = graphql`
  query productsForCheckoutSuccess {
    allAirtable(filter: { table: { eq: "productv2" } }) {
      nodes {
        data {
          name
          stripePriceId
          unitLabel
          unitQuantity
          supplier {
            id
            data {
              name
            }
          }
        }
      }
    }
  }
`
const CheckoutSucessContent = ({ data, checkoutData }) => {
  if (checkoutData.loading) {
    return (
      <div className="cart-content">
        <div className="cart-content--overview">
          <h2>Finishing up your order...</h2>
        </div>
      </div>
    )
  }

  if (checkoutData.error) {
    return (
      <div className="cart-content">
        <div className="cart-content--overview">
          <h2>404: Could not find your order... </h2>
          <a href="mailto:help@goodpluck.com?subject=I'm having checkout issues...">
            If this problem persists, let us know here
          </a>
        </div>
      </div>
    )
  }

  if (checkoutData.payment_status && checkoutData.payment_status !== "paid") {
    return (
      <div className="cart-content">
        <div className="cart-content--overview">
          {`Your payment of ${formatCurrencyString({
            value: checkoutData.amount_total,
            currency: checkoutData.currency,
          })} was not successful. Please try `}
          <Link to="/cart">checking out one more time...</Link>
        </div>
      </div>
    )
  }

  let arrivalDateComponent = ""

  if (true) {
    arrivalDateComponent = (
      <>
        <h3>Arriving on:</h3>
        <p>Saturday morning</p>
      </>
    )
  }

  let shippingLabel = ""
  if (checkoutData.shipping?.address?.line1) {
    shippingLabel = (
      <>
        <h3>Shipping to:</h3>
        <p>{checkoutData.shipping.name}</p>
        <p>{`${checkoutData.shipping.address.line1 || ""}, ${
          checkoutData.shipping.address.city || ""
        }, ${checkoutData.shipping.address.state || ""}`}</p>
      </>
    )
  }

  const stripePriceId_ProductInfoMap = new Map()

  checkoutData.lineItems.forEach(item => {
    stripePriceId_ProductInfoMap.set(item.stripePriceId, item)
  })

  data.allAirtable.nodes.forEach(node => {
    if (stripePriceId_ProductInfoMap.has(node.data.stripePriceId)) {
      stripePriceId_ProductInfoMap.set(
        node.data.stripePriceId,
        Object.assign(
          {},
          node.data,
          stripePriceId_ProductInfoMap.get(node.data.stripePriceId)
        )
      )
    }
  })

  const lineItems = Array.from(stripePriceId_ProductInfoMap, ([key, info]) => {
    let suppliers = ""
    if (info.supplier) {
      info.supplier.forEach(node => {
        suppliers = suppliers + node.data.name || ""
      })
    }
    return (
      <div className="cart-item-card" key={key}>
        <div className="cart-item-info">
          <CartItem
            name={info.description || info.name}
            image={null}
            supplier={suppliers}
            quanityPurchased={info.quanityPurchased}
            unitQuantity={info.unitQuantity || "1"}
            unitLabel={info.unitLabel || ""}
            unitPrice={info.unitAmount}
            currency={"usd"}
            formattedTotal={formatCurrencyString({
              value: info.amountTotal,
              currency: "usd",
            })}
          />
        </div>
      </div>
    )
  })

  return (
    <div className="cart-content">
      <div className="cart-content--overview">
        <h2 className="cart-items--overview-header subheader--font">
          Thanks for your order!
        </h2>
        {arrivalDateComponent}
        {shippingLabel}
      </div>
      <div className="cart-item-list--wrapper">
        <h2 className="cart-items--produce-header">What's in the box:</h2>
        {lineItems}
      </div>
    </div>
  )
}

export default function CheckoutSuccess({ data }) {
  const { clearCart } = useShoppingCart()
  const [checkoutData, setCheckoutData] = useState({
    loading: true,
    error: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://getstripecheckoutsession.pluck.workers.dev${window.location.search}`
      )

      if (result.data) {
        setCheckoutData(result.data)
      } else {
        setCheckoutData({ loading: false, error: true })
      }
    }

    fetchData()
  }, [])

  if (checkoutData.payment_status === "paid") {
    clearCart()
  }

  return (
    <>
      <Nav />
      <div className="cart">
        <CheckoutSucessContent data={data} checkoutData={checkoutData} />
      </div>
      <Footer />
    </>
  )
}
