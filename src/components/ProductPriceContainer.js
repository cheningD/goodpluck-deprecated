import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import Select from "react-select"
import PriceFormatter from "./PriceFormatter"
import "./ProductPriceContainer.css"

const AddToCartButton = ({
  addItemAndSetQuantity,
  cartItem,
  quantityToAddToCart,
  quantityInCart,
}) => {
  let buttonText
  if (quantityToAddToCart === quantityInCart) {
    buttonText = `${quantityInCart} in cart`
  } else if (quantityToAddToCart === 0) {
    buttonText = "Remove from cart"
  } else if (quantityInCart === 0) {
    buttonText = `Add ${quantityToAddToCart} to cart`
  } else {
    buttonText = "Update cart"
  }

  return (
    <button
      className="product-price-container-add-to-cart-button"
      onClick={() => {
        addItemAndSetQuantity(cartItem, quantityToAddToCart, quantityInCart)
      }}
    >
      {buttonText}
    </button>
  )
}

export default function ProductPriceContainer({
  price,
  sizeDescription,
  is_market_deal,
  cartItem,
}) {
  const [quantityToAddToCart, setQuantityToAddToCart] = useState(1)
  let { cartDetails, setItemQuantity, addItem } = useShoppingCart()
  let quantityInCart = 0

  if (cartDetails[cartItem.sku] && cartDetails[cartItem.sku].quantity) {
    quantityInCart = cartDetails[cartItem.sku].quantity
  }

  const addItemAndSetQuantity = (
    cartItem,
    quantityToAddToCart,
    quantityInCart
  ) => {
    if (quantityInCart === 0) {
      addItem(cartItem)
    }
    setItemQuantity(cartItem.sku, quantityToAddToCart)
  }

  const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => ({
    label: `${val}`,
    value: val,
  }))

  if (quantityInCart > 0) {
    quantityOptions.unshift({ label: "0 (Delete)", value: 0 })
  }

  return (
    <div
      className={
        is_market_deal ? "product-variation market-deal" : "product-variation"
      }
    >
      {is_market_deal ? (
        <div className="product-market-deal-text">MARKET DEAL</div>
      ) : (
        ""
      )}
      <div className="product-price-container">
        <PriceFormatter priceInCents={price} />
        <div className="product-amount-label">for {sizeDescription}</div>
      </div>
      <div className="product-price-container-select-label">
        SELECT A QUANTITY:
      </div>
      <div className="product-price-container-controls">
        <Select
          className="product-price-container-select"
          classNamePrefix="product-price-container-select"
          options={quantityOptions}
          onChange={option => {
            setQuantityToAddToCart(option.value)
          }}
          isSearchable={false}
          components={{
            IndicatorSeparator: null,
            DropdownIndicator: () => (
              <span className="fas fa-solid quantity-drop-down--arrow"></span>
            ),
          }}
          value={{
            label: quantityToAddToCart,
            value: quantityToAddToCart,
          }}
          styles={{
            control: base => ({
              ...base,
              height: "2.9rem",
            }),
          }}
        />
        <AddToCartButton
          addItemAndSetQuantity={addItemAndSetQuantity}
          cartItem={cartItem}
          quantityToAddToCart={quantityToAddToCart}
          quantityInCart={quantityInCart}
        />
      </div>
    </div>
  )
}
