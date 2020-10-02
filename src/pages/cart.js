import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import isNil from "lodash-es/isNil"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Select from "react-select"
import Footer from "../components/footer"

import "./cart.css"
import Nav from "../components/Nav"
import CartItem from "../components/CartItem"
import { listToClass } from "../util"
import DeliveryDateSelector from "../components/DeliveryDateSelector"

const suppliers = graphql`
  query productv2ForCartQuery {
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

const Cart = () => {
  return (
    <>
      <div className="cart">
        <Nav />
        <CartContent />
      </div>
      <Footer />
    </>
  )
}

const CartContent = () => {
  const [status, setStatus] = useState("idle")
  const { totalPrice, cartCount, redirectToCheckout } = useShoppingCart()

  console.info(`Cart is ${status}`)
  const isInEligibleForFreeShipping = totalPrice < minPriceForFreehipping

  async function handleCheckout(event) {
    event.preventDefault()
    if (cartCount > 0) {
      setStatus("idle")
      const error = await redirectToCheckout()
      if (error) setStatus("redirect-error")
    } else {
      setStatus("missing-items")
    }
  }

  if (cartCount === 0) {
    return (
      <div className="cart-content">
        <Link to="/market/produce">
          There's nothing in your cart, add something good!
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-content">
      <div className="cart-content--overview">
        <h2 className="cart-items--overview-header subheader--font">
          Your order
        </h2>
        <DeliveryDateSelector />
        <div>
          Subtotal ({cartCount} items):{" "}
          <span
            className={listToClass([
              isInEligibleForFreeShipping && "cart-subtotal--count__warning",
              "cart-subtotal--count",
            ])}
          >
            {formatCurrencyString({
              value: totalPrice,
              currency: "USD",
            })}
          </span>
        </div>
        <div className="cart-shipping--warning">
          Shipping is free until Halloween!
        </div>
        {/* {isInEligibleForFreeShipping && (
          <div className="cart-shipping--warning">
            {`Add ${formatCurrencyString({
              value: minPriceForFreehipping - totalPrice,
              currency: "USD",
            })} for free shipping`}
          </div>
        )} */}

        <div className="cart-checkout--wrapper">
          <div className="cart-checkout--btn--wrapper">
            <button className="cart-checkout--btn" onClick={handleCheckout}>
              <span>Checkout</span>
            </button>
          </div>
          <div className="cart-checkout--secure">
            <span className="fas fa-solid cart-checkout--secure-lock"></span>
            <span className="cart-checkout--secure-text">secure checkout</span>
          </div>
        </div>
      </div>
      <div className="cart-item-list--wrapper">
        <h2 className="cart-items--produce-header">What's in the box:</h2>
        <CartItems />
      </div>
    </div>
  )
}

// Get min price from server
const minPriceForFreehipping = 3500

const quantityOptions = [
  { value: 0, label: "0 (Delete)" },
  { value: 1, label: "QTY 1" },
  { value: 2, label: "QTY 2" },
  { value: 3, label: "QTY 3" },
  { value: 4, label: "QTY 4" },
  { value: 5, label: "QTY 5" },
  { value: 6, label: "QTY 6" },
  { value: 7, label: "QTY 7" },
  { value: 8, label: "QTY 8" },
  { value: 9, label: "QTY 9" },
]

const CartItems = React.memo(() => {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const cartDetailKeys = Object.keys(cartDetails)

  const queryResult = useStaticQuery(suppliers)
  const extraCartDetailsMap = queryResult.allAirtable.nodes.reduce(
    (extraCartDetailsMap, node) => {
      const sku = node?.data?.stripePriceId
      if (isNil(sku)) return extraCartDetailsMap

      const supplierName = node?.data?.supplier?.[0]?.data?.name
      if (isNil(supplierName)) return extraCartDetailsMap

      const extraCartDetails = {
        supplier: supplierName,
        unitLabel: node?.data?.unitLabel,
        unitQuantity: node?.data?.unitQuantity,
      }

      extraCartDetailsMap.set(sku, extraCartDetails)

      return extraCartDetailsMap
    },
    new Map()
  )

  if (!cartDetailKeys.length) {
    console.warn("No cart details!")
    return null
  }

  const handleQuantityUpdate = (sku, option) => {
    let value = option.value
    if (value === "10+") {
      console.info("Thats a lot!")
      //Do something
      return
    } else if (isNaN(value)) {
      return
    } else {
      setItemQuantity(sku, value)
    }
  }

  return cartDetailKeys.map(sku => {
    const product = Object.assign(
      {},
      cartDetails[sku],
      extraCartDetailsMap.get(sku)
    )

    return (
      <div key={sku}>
        <div className="cart-item-card">
          <div className="cart-item-info">
            <CartItem
              name={product.name}
              image={product.image}
              supplier={product.supplier}
              unitQuantity={product.unitQuantity}
              unitLabel={product.unitLabel}
              unitPrice={product.price}
              currency={product.currency}
              formattedTotal={product.formattedValue}
            />
          </div>

          <div className="cart-item-controls">
            <SelectQuantity
              handleQuantityUpdate={opt => handleQuantityUpdate(sku, opt)}
              quantityOptions={quantityOptions}
              product={product}
            />
            <button
              className="remove-from-cart--btn"
              onClick={() => removeItem(sku)}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    )
  })
})

const SelectQuantity = React.memo(
  ({ quantityOptions, handleQuantityUpdate, product }) => {
    const handleChange = option => handleQuantityUpdate(option)

    return (
      <Select
        className="quantity-drop-down"
        classNamePrefix="react-select"
        options={quantityOptions}
        onChange={handleChange}
        isSearchable={false}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: () => (
            <span className="fas fa-solid quantity-drop-down--arrow"></span>
          ),
        }}
        value={{
          label: `QTY: ${product.quantity}`,
          value: product.quantity,
        }}
      />
    )
  }
)

export default Cart
