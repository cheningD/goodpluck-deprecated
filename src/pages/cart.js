import React, { useState } from "react"
import Nav from "../components/Nav"
import { Link } from "gatsby"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Select from "react-select"
import "./cart.css"

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

const StockLabel = sku => {
  if (sku) {
    return <div className="in-stock-label">In Stock</div>
  } else if (sku === "something else") {
    return (
      <div className="low-stock-label">
        Only a few left!{" "}
        <span>
          <input type="checkbox" id="allow-substitutions">
            <label for="allow-substitutions">(Allow Substitutions)</label>
          </input>
        </span>
      </div>
    )
  } else {
    return (
      <div className="out-of-stock-label">
        Out of stock <Link to="/">find a substitute</Link>
      </div>
    )
  }
}

const CartItems = () => {
  let { cartDetails, setItemQuantity, removeItem } = useShoppingCart()

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

  const quantityOptions = [
    { value: 0, label: "0 (Delete)" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    // { value: "10+", label: "10+" }, // Todo encode this option
  ]

  return Object.keys(cartDetails).map(sku => {
    let product = cartDetails[sku]
    return (
      <div key={sku}>
        <div className="cart-item-card">
          <div className="cart-item-image"></div>
          <div className="cart-item-info">
            <div>{product.name}</div>
            <div>{product.supplier}</div>
            <div>
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </div>
            <StockLabel />
          </div>
        </div>
        <div className="cart-item-controls">
          <Select
            options={quantityOptions}
            onChange={option => handleQuantityUpdate(sku, option)}
            value={quantityOptions.filter(
              option => option.value === product.quantity
            )}
          />

          <button onClick={() => removeItem(sku)}>remove</button>
        </div>
      </div>
    )
  })
}

const CartContent = () => {
  const [status, setStatus] = useState("idle")
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

  let { totalPrice, cartCount, addItem, redirectToCheckout } = useShoppingCart()

  if (cartCount === 0) {
    return (
      <div className="cart-content">
        No items yet! <Link to="/">Why not try one of these?</Link>{" "}
        <button onClick={() => addItem(demoProduct)}>
          Add demo item. Status ({status})
        </button>
      </div>
    )
  }

  return (
    <div className="cart-content">
      <div>
        Subtotal:{" "}
        <span className="peach-highlight">
          {formatCurrencyString({ value: totalPrice, currency: "USD" })}
        </span>
      </div>
      <div className="peach-highlight">
        {totalPrice < minPriceForFreehipping
          ? `Add ${formatCurrencyString({
              value: minPriceForFreehipping - totalPrice,
              currency: "USD",
            })} for free shipping`
          : ""}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => addItem(demoProduct)}>
        Add demo item. Status ({status})
      </button>
      <CartItems />
    </div>
  )
}

const Cart = () => {
  return (
    <div className="cart">
      <Nav />
      <CartContent />
    </div>
  )
}

export default Cart
