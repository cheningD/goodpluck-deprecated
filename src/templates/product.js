import React from "react"
import "./product.css"
import ProductPriceContainer from "../components/productPriceContainer"

import { graphql } from "gatsby"

export const query = graphql`
  query ProductGroupPage($id: Int) {
    airtable(table: { eq: "productGroup" }, data: { id: { eq: $id } }) {
      data {
        name
        description
        department {
          data {
            name
          }
        }
        family
        multipleSupplierLabel
        suppliersForProductGroup
        productHighlights
        productBadges
        products {
          data {
            price
            sizeDescription
            quantity
            deliveryDate1
            deliveryDate2
            supplier {
              data {
                name
              }
            }
          }
        }
      }
    }
  }
`

function DeliveryDateComponent({ date }) {
  const dateJs = new Date(date)
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]
  const dayOfMonth = dateJs.getDate()
  const month = dateJs.getMonth()
  const dayOfWeek = daysOfWeek[dateJs.getDay()]

  return (
    <div className="available-delivery-date">
      <div className="delivered-on-led-container">
        <span className="delivered-on-led"></span>
      </div>
      <div className="whats-good-item-label">
        {dayOfWeek} {month}/{dayOfMonth}
      </div>
    </div>
  )
}

export default function Home({ data }) {
  const page = data.airtable.data
  const productLabels = page.products.map(product => {
    return (
      <ProductPriceContainer
        price={product.data.price}
        sizeDescription={product.data.sizeDescription}
      />
    )
  })

  const allDates = page.products
    .map(product => {
      if (product.data.deliveryDate1) {
        return product.data.deliveryDate1
      }
      return null
    })
    .concat(
      page.products.map(product => {
        if (product.data.deliveryDate2) {
          return product.data.deliveryDate2
        }
        return null
      })
    )
    .filter(x => x !== null)

  const uniqueDates = Array.from(new Set(allDates))
  const deliveryDates = uniqueDates.map(date => {
    return <DeliveryDateComponent date={date} />
  })

  const productHighlights = page.productHighlights.map(highlight => {
    return (
      <div className="product-highlight-list-item">
        <div className="check"></div>
        <div>{highlight}</div>
      </div>
    )
  })

  const productBadges = page.productBadges.map(badge => {
    return (
      <div className="certification">
        <img
          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          alt={badge}
          className="whats-good-image"
        />
        <div>{badge}</div>
      </div>
    )
  })

  return (
    <div className="react-body">
      <div className="product-page">
        <div className="product-pagination-wrap">
          <div className="product-pagination-text">Market</div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">{page.department.data.name}</div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">{page.family}</div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">{page.name}</div>
        </div>
        <div className="product-columns g-row">
          <div className="column w-clearfix g-col g-col-6">
            <img
              height=""
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              alt=""
              className="image"
            />
          </div>
          <div className="column2 g-col g-col-6">
            <div className="product-highlight-text">FRESHLY PLUCKED</div>
            <div className="farm-label">
              {page.suppliersForProductGroup.length === 1
                ? page.products[0].data.supplier[0].data.name
                : page.multipleSupplierLabel}
            </div>
            <h1 className="product-name">{page.name}</h1>
            {productLabels}
          </div>
        </div>
        <div className="product-columns g-row">
          <div className="column g-col g-col-6">
            <div className="delivered-on-container">
              <div className="delivered-on-label">
                Plucked &amp; Delivered on:
              </div>
              <div className="delivery-dates-container">{deliveryDates}</div>
            </div>
            <div className="product-description">{page.description}</div>
          </div>
          <div className="column2 g-col g-col-6">
            <h2 className="whats-good-heading">What&#x27;s Good?</h2>
            <div className="product-certification-container">
              {productBadges}
            </div>
            {productHighlights}
          </div>
        </div>
      </div>
    </div>
  )
}
