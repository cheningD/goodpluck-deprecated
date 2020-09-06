import * as React from "react"
import { Link } from "gatsby"
import { formatCurrencyString } from "use-shopping-cart"

export const CartItem = ({ product, sku }) => (
  <div className="cart-item--wrapper">
    <div className="cart-item--image" />
    <div className="cart-item--details">
      <div className="cart-item--product">
        <ProductName product={product} />
        <ProductSupplier product={product} />
        <ProductUnitPrice product={product} />
        <StockLabel sku={sku} />
      </div>
      <ProductCumulativeTotal product={product} />
    </div>
  </div>
)

const ProductName = ({ product }) => (
  <div className="cart-item--product-name">
    {product.name}
  </div>
)

const ProductSupplier = ({ product }) => (
  <div className="cart-item--supplier-name">{product.supplier}</div>
)

const ProductUnitPrice = ({ product }) => (
  <div className="cart-item--unit-price">
    {formatCurrencyString({
      value: product.price,
      currency: product.currency,
    }).replace("US$", "")}{" "}
    each
  </div>
)

const ProductCumulativeTotal = ({ product }) => (
  <div className="cart-item--product-cumulative-total">
    {product.formattedValue.replace("US$", "")}
  </div>
)

// TODO: sort out logic, this can't be right surely
const StockLabel = sku => {
  if (sku) {
    return <div className="in-stock-label">In Stock</div>
  } else if (sku === "something else") {
    return (
      <div className="low-stock-label">
        Only a few left!
        <span>
          <label htmlFor="allow-substitutions">
            <input type="checkbox" id="allow-substitutions" />
            (Allow Substitutions)
          </label>
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
