import * as React from "react"

import { formatCurrencyString } from "use-shopping-cart"

const getQuanityPurchasedLabel = quanityPurchased => {
  if (quanityPurchased && quanityPurchased > 1) {
    return `(x${quanityPurchased})`
  }
  return ""
}
const CartItem = ({
  name,
  image,
  supplier,
  quanityPurchased,
  unitQuantity,
  unitLabel,
  unitPrice,
  currency,
  formattedTotal,
}) => (
  <div className="cart-item--wrapper">
    {image ? <img alt={name} src={image} className="cart-item--image" /> : ""}
    <div className="cart-item--details">
      <div className="cart-item--product">
        <div className="cart-item--product-name subheader--font">{name}</div>
        <div className="cart-item--supplier-name">{supplier}</div>
        <ProductUnitPrice
          quanityPurchasedLabel={getQuanityPurchasedLabel(quanityPurchased)}
          unitQuantity={unitQuantity}
          unitLabel={unitLabel}
          unitPrice={unitPrice}
          currency={currency}
        />
      </div>
      <ProductCumulativeTotal formattedTotal={formattedTotal} />
    </div>
  </div>
)

const ProductUnitPrice = ({
  quanityPurchasedLabel,
  unitQuantity,
  unitLabel,
  unitPrice,
  currency,
}) => (
  <div className="cart-item--unit-price">
    {`${unitQuantity} ${unitLabel ? unitLabel : ""} for 
    ${formatCurrencyString({
      value: unitPrice,
      currency: currency,
    }).replace("US$", "")} ${quanityPurchasedLabel}`}
  </div>
)

const ProductCumulativeTotal = ({ formattedTotal }) => (
  <div className="cart-item--product-cumulative-total">
    {formattedTotal.replace("US$", "")}
  </div>
)

export default CartItem
