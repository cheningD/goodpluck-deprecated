import React from "react"
import "./PriceFormatter.css"

const PriceFormatter = ({ priceInCents }) => {
  const dollars = Math.floor(priceInCents / 100)
  // Given a number in cents (e.g. "900" or nine dollars)
  // take the cents remainder and pad with zeros
  const cents_str = `${priceInCents % 100}`.padEnd(2, "0")
  return (
    <>
      <span className="price-formatter-dollars">
        {dollars}
        <span className="price-formatter-cents">{cents_str}</span>
      </span>
    </>
  )
}

export default PriceFormatter
