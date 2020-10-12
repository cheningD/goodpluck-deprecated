import "./product.css"

import ZipCodeModal, { ZipInputPage } from "../components/ZipCodeModal"

import Footer from "../components/footer"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import ProductPriceContainer from "../components/ProductPriceContainer"
import React from "react"
import get from "lodash-es/get"
import { graphql } from "gatsby"
import { removeNonLetters } from "../util"

export const query = graphql`
  query ProductGroupPage($gpid: Int) {
    airtable(table: { eq: "productGroup" }, data: { gpid: { eq: $gpid } }) {
      data {
        name
        slug
        description
        department
        departmentSlug
        subCategory
        multipleSupplierLabel
        productHighlights
        productBadges
        productv2 {
          data {
            available
            name
            priceInCents
            stripePriceId
            unitQuantity
            unitLabel
            growingMethod
            supplier {
              data {
                name
              }
              id
            }
          }
        }
        mainImage {
          id
          localFiles {
            url
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

// function DeliveryDateComponent({ date }) {
//   const dateJs = new Date(date)
//   const daysOfWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"]
//   const dayOfMonth = dateJs.getDate()
//   const month = dateJs.getMonth()
//   const dayOfWeek = daysOfWeek[dateJs.getDay()]

//   return (
//     <div className="available-delivery-date">
//       <div className="delivered-on-led-container">
//         <span className="delivered-on-led"></span>
//       </div>
//       <div className="whats-good-item-label">
//         {dayOfWeek} {month}/{dayOfMonth}
//       </div>
//     </div>
//   )
// }

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

const ProductPriceContainers = ({ page }) => {
  const productPriceContainers = get(page, "productv2", []).map(product => {
    const cartItem = {
      name: page.name,
      description: page.description,
      sku: product.data.stripePriceId,
      price: product.data.priceInCents,
      currency: "USD",
      image: get(page, "mainImage.localFiles[0].url", ""),
    }
    if (!product.data.available) {
      return ""
    }
    return (
      <ProductPriceContainer
        price={product.data.priceInCents}
        sizeDescription={`${product.data.unitQuantity} ${
          product.data.unitLabel || "each"
        }`}
        is_market_deal={false}
        cartItem={cartItem}
        key={product.data.stripePriceId}
      />
    )
  })
  return <div>{productPriceContainers}</div>
}

export default function ProductDetailPage({ data }) {
  const getSupplierLabelForProduct = (products, defaultSupplierLabel) => {
    const suppliers = []
    products.forEach(product => {
      const supplier = get(product, "data.supplier[0].name", "")
      if (!suppliers.includes(supplier)) {
        suppliers.push(supplier)
      }
    })
    if (suppliers.length === 0) {
      return defaultSupplierLabel
    }
    return suppliers.join(", ")
  }
  const page = data.airtable.data

  // const allDates = get(page, "products", [])
  //   .map(product => {
  //     if (get(product, "data.deliveryDate1")) {
  //       return get(product, "data.deliveryDate1")
  //     }
  //     return null
  //   })
  //   .concat(
  //     get(page, "products", []).map(product => {
  //       if (get(product, "data.deliveryDate2")) {
  //         return get(product, "data.deliveryDate2")
  //       }
  //       return null
  //     })
  //   )
  //   .filter(x => x !== null)

  // const uniqueDates = Array.from(new Set(allDates))
  // const deliveryDates = uniqueDates.map(date => {
  //   return <DeliveryDateComponent date={date} key={date} />
  // })

  //Save the empty arry if productHighlights === null
  const productHighlights = get(page, "productHighlights", []) || []
  productHighlights.map(highlight => {
    return (
      <div className="product-highlight-list-item" key={highlight}>
        <div className="product-detail--check"></div>
        <div>{highlight}</div>
      </div>
    )
  })

  const productBadges = get(page, "productBadges", []) || []
  productBadges.map(badge => {
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
        department={page.department}
        departmentSlug={page.departmentSlug[0]}
        family={page.subCategory}
        familySlug={`${page.departmentSlug[0]}#${removeNonLetters(
          page.subCategory
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
        </div>
        <div className="product-detail--right-panel">
          <div className="product-highlight-text">FRESHLY PLUCKED</div>
          <div className="product-detail--supplier">
            {getSupplierLabelForProduct(
              page.productv2,
              page.multipleSupplierLabel
            )}
          </div>
          <h1 className="product-detail--name">{page.name}</h1>
          <ZipCodeModal
            WrappedComponentNeedsZip={ZipInputPage}
            wrappedComponentNeedsZipProps={{}}
            WrappedComponentZipIsAllowed={ProductPriceContainers}
            wrappedComponentZipIsAllowedProps={{ page }}
            showDeliveryMessageWhenZipAllowed={true}
            showDeliveryMessageWhenZipNotAllowed={true}
          />
        </div>
      </div>
      <div className="product-detail--column-container">
        <div className="product-detail--left-panel">
          {/* <div className="product-detail--delivered-on-container">
            <div className="product-detail--delivered-on-label">
              Plucked &amp; Delivered on:
            </div>
            <div className="delivery-dates-container">{deliveryDates}</div>
          </div> */}
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
