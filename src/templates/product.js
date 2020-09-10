import React from "react"
import "./product.css"
import ProductPriceContainer from "../components/ProductPriceContainer"
import Nav from "../components/Nav"
import { Link } from "gatsby"
import { removeNonLetters } from "../util"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Footer from "../components/footer"
import get from "lodash-es/get"

export const query = graphql`
  query ProductGroupPage($id: Int) {
    airtable(table: { eq: "productGroup" }, data: { id: { eq: $id } }) {
      data {
        name
        slug
        description
        department {
          data {
            name
            slug
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
            deliveryDate1
            deliveryDate2
            sku
            supplier {
              data {
                name
              }
            }
          }
        }
        mainImage {
          id
          localFiles {
            url
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_tracedSVG
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

const ProductDetailBreadcrumbs = ({
  name,
  slug,
  department,
  departmentSlug,
  family,
  familySlug,
}) => {
  return (
    <div className="product-detail">
      <div className="product-detail--breadcrumb-container">
        <Link className="product-detail--breadcrumb-text" to="/">
          Market
        </Link>
        <div className="product-detail--breadcrumb-icon"></div>
        <Link className="product-detail--breadcrumb-text" to={departmentSlug}>
          {department}
        </Link>
        <div className="product-detail--breadcrumb-icon"></div>
        <Link className="product-detail--breadcrumb-text" to={familySlug}>
          {family}
        </Link>
        <div className="product-detail--breadcrumb-icon"></div>
        <Link className="product-detail--breadcrumb-text" to={slug}>
          {name}
        </Link>
      </div>
    </div>
  )
}

export default function ProductDetailPage({ data }) {
  const page = data.airtable.data
  const productLabels = page.products.map(product => {
    const cartItem = {
      name: page.name,
      description: page.description,
      sku: product.data.sku,
      price: product.data.price,
      currency: "USD",
      image: get(page, "mainImage.localFiles[0].url", null),
    }
    return (
      <ProductPriceContainer
        price={product.data.price}
        sizeDescription={product.data.sizeDescription}
        is_market_deal={false}
        cartItem={cartItem}
        key={product.data.sku}
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
    return <DeliveryDateComponent date={date} key={date} />
  })

  const productHighlights = page.productHighlights.map(highlight => {
    return (
      <div className="product-highlight-list-item" key={highlight}>
        <div className="product-detail--check"></div>
        <div>{highlight}</div>
      </div>
    )
  })

  const productBadges = page.productBadges.map(badge => {
    return (
      <div className="product-detail--badge" key={badge}>
        <img
          src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
          alt={badge}
          className="product-detail--badge-img"
        />
        <div>{badge}</div>
      </div>
    )
  })

  return (
    <>
      <Nav />
      <ProductDetailBreadcrumbs
        name={page.name}
        slug={page.slug}
        department={page.department[0].data.name}
        departmentSlug={page.department[0].data.slug}
        family={page.family}
        familySlug={`${page.department[0].data.slug}#${removeNonLetters(
          page.family
        )}`}
      />

      <div className="product-detail--column-container">
        <div className="product-detail--left-panel">
          <Img
            fluid={get(
              page,
              "mainImage.localFiles[0].childImageSharp.fluid",
              null
            )}
          />
          {/* <img
            height=""
            src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
            alt=""
            className="image"
          /> */}
        </div>
        <div className="product-detail--right-panel">
          <div className="product-highlight-text">FRESHLY PLUCKED</div>
          <div className="product-detail--supplier">
            {page.suppliersForProductGroup.length === 1
              ? page.products[0].data.supplier[0].data.name
              : page.multipleSupplierLabel}
          </div>
          <h1 className="product-detail--name">{page.name}</h1>
          {productLabels}
        </div>
      </div>
      <div className="product-detail--column-container">
        <div className="product-detail--left-panel">
          <div className="product-detail--delivered-on-container">
            <div className="product-detail--delivered-on-label">
              Plucked &amp; Delivered on:
            </div>
            <div className="delivery-dates-container">{deliveryDates}</div>
          </div>
          <div className="product-detail--description ">{page.description}</div>
        </div>
        <div className="product-detail--right-panel">
          <div className="product-detail--badge-container">{productBadges}</div>
          {productHighlights}
        </div>
      </div>
      <Footer />
    </>
  )
}
