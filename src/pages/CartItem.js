import * as React from "react"
import { formatCurrencyString } from "use-shopping-cart"

export const CartItem = ({ product, sku }) => (
  <div className="cart-item--wrapper">
    {product.image ? (
      <img
        alt={product.name}
        src={product.image}
        className="cart-item--image"
      />
    ) : (
      ""
    )}
    <div className="cart-item--details">
      <div className="cart-item--product">
        <ProductName product={product} />
        <ProductSupplier product={product} />
        <ProductUnitPrice product={product} />
      </div>
      <ProductCumulativeTotal product={product} />
    </div>
  </div>
)

const ProductName = ({ product }) => (
  <div className="cart-item--product-name subheader--font">{product.name}</div>
)

const ProductSupplier = ({ product }) => (
  <div className="cart-item--supplier-name">{product.supplier}</div>
)

const ProductUnitPrice = ({ product }) => (
  <div className="cart-item--unit-price">
    {`${product.unitQuantity} ${product.unitLabel} for `}
    {formatCurrencyString({
      value: product.price,
      currency: product.currency,
    }).replace("US$", "")}
  </div>
)

const ProductCumulativeTotal = ({ product }) => (
  <div className="cart-item--product-cumulative-total">
    {product.formattedValue.replace("US$", "")}
  </div>
)
