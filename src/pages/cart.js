import React, { useState } from "react"
import { Link } from "gatsby"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Select from "react-select"

import "./cart.css"
import Nav from "../components/Nav"
import { CartItem } from "./CartItem"
import { listToClass } from "../util"

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <CartContent />
    </div>
  )
}

const CartContent = () => {
  const [status, setStatus] = useState("idle")
  const {
    totalPrice,
    cartCount,
    addItem,
    redirectToCheckout,
  } = useShoppingCart()

  const isEligibleForFreeShipping = totalPrice < minPriceForFreehipping

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
        No items yet! <Link to="/">Why not try one of these?</Link>{" "}
        <button style={{ color: "red" }} onClick={() => addItem(demoProduct)}>
          DELETE ME Add demo item. Status ({status})
        </button>
      </div>
    )
  }

  return (
    <div className="cart-content">
      <div className="cart-content--overview">
        <h2 className="cart-items--overview-header">Your order</h2>
        <div>
          Subtotal ({cartCount} items) :
          <span
            className={listToClass([
              isEligibleForFreeShipping && "peach-highlight", "cart-subtotal--count"
            ])}
          >
            {formatCurrencyString({
              value: totalPrice,
              currency: "USD",
            })}
          </span>
        </div>
        {isEligibleForFreeShipping && (
          <div className="peach-highlight">
            {`Add ${formatCurrencyString({
              value: minPriceForFreehipping - totalPrice,
              currency: "USD",
            })} for free shipping`}
          </div>
        )}
        <div className="cart-checkout--wrapper">
          <button className="cart-checkout--btn" onClick={handleCheckout}>
            <span>Checkout</span>
          </button>
          <div className="cart-checkout--secure">
            <span className="fas fa-solid cart-checkout--secure-lock"></span>
            <span className="cart-checkout--secure-text">secure checkout</span>
          </div>
        </div>

        <button style={{ color: "red" }}  onClick={() => addItem(demoProduct)}>
          DELETE ME Add demo item. Status ({status})
        </button>
      </div>
      <div className="cart-item-list--wrapper">
        <h2 className="cart-items--produce-header">Produce</h2>
        <CartItems />
      </div>
    </div>
  )
}

// Get min price from server
const minPriceForFreehipping = 3500

const demoProduct = {
  name: "English Cucumber (Box of 3)",
  supplier: "Avid Farmers",
  description: "Snappable fresh salad eater",
  sku: "price_1HNCA8DnJ2NuGUX1VgULHVTE",
  price: 299,
  currency: "USD",
  image: "https://files.stripe.com/links/fl_live_6nyliyzinCLYEL7RrNSxDDca",
}

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

const CartItems = () => {
  const { cartDetails, setItemQuantity, removeItem } = useShoppingCart()
  const cartDetailKeys = Object.keys(cartDetails)

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
    const product = cartDetails[sku]
    return (
      <div key={sku}>
        <div className="cart-item-card">
          <div className="cart-item-info">
            <CartItem product={product} sku={sku} />
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
}

const SelectQuantity = React.memo(props => {
  const handleChange = React.useCallback(
    option => props.handleQuantityUpdate(option),
    [props.quantityOptions]
  )

  return (
    <Select
      className="quantity-drop-down"
      classNamePrefix="react-select"
      options={props.quantityOptions}
      onChange={handleChange}
      isSearchable={false}
      components={{
        IndicatorSeparator: null,
        DropdownIndicator: () => (
          <span className="fas fa-solid quantity-drop-down--arrow"></span>
        ),
      }}
      value={{
        label: `QTY: ${props.product.quantity}`,
        value: props.product.quantity
      }}
    />
  )
})

export default Cart
