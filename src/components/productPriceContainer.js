import React from "react"

export default function ProductPriceContainer({
  price,
  sizeDescription,
  is_market_deal,
}) {
  return (
    <div
      className={
        is_market_deal ? "product-variation-market-deal" : "product-variation"
      }
    >
      {is_market_deal ? (
        <div className="product-market-deal-text">MARKET DEAL</div>
      ) : (
        ""
      )}
      <div className="product-price-container">
        <h1 className="price">{price}</h1>
        <div className="product-amount-label">{sizeDescription}</div>
      </div>
      <div className="add-to-order-container">
        <a
          href="#var1"
          id="add-to-order-button"
          className="add-to-order-button g-button"
        >
          Add to Order
        </a>
        <div className="addsubtract-cart-button">
          <a href="#var1" className="addsubtract-cart-btn g-button">
            
          </a>
          <a href="#var1" className="addsubtract-cart-btn g-button">
            
          </a>
        </div>
      </div>
    </div>
  )
}
