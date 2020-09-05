import React from "react"
import Nav from "../components/Nav"
import ConnectedSidebar from "../components/ConnectedSidebar"
import { graphql } from "gatsby"
import { InView } from "react-intersection-observer"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import "./department.css"

//Returns a string with all non letters [a-z] removed
const removeNonLetters = string => string.replace(/[^a-z]/gi, "")

export const query = graphql`
  query DepartmentPageQuery {
    allAirtable(
      filter: {
        data: { department: { elemMatch: { data: { id: { eq: 1 } } } } }
        table: { eq: "productGroup" }
      }
    ) {
      nodes {
        data {
          id
          name
          family
          category
          multipleSupplierLabel
          imageUrl
          products {
            data {
              sku
              sizeDescription
              price
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
  }
`

// The ObservableElement updates window.location.hash when it scrolls into view
const ObservableElement = props => (
  <InView
    as={props.tag}
    id={props.link}
    onChange={(inView, entry) => {
      console.log("Inview:", inView)
      if (props.link && inView) {
        console.log("Changing hash to:", props.link)
        window.location.hash = props.link
      }
    }}
  >
    {props.title}
  </InView>
)

const ProductCard = ({ productGroup }) => {
  const data = productGroup.data
  const selectedProduct = productGroup.data.products[0].data
  console.log(selectedProduct)

  // To add itmes to the cart the following fields are required:
  const cartItem = {
    name: data.name,
    description: data.description,
    sku: selectedProduct.sku,
    price: selectedProduct.price,
    currency: "USD",
    image: data.imageUrl,
  }

  let { cartDetails, addItem, decrementItem } = useShoppingCart()

  return (
    <div>
      <div
        className="product-card--image"
        style={{ "background-image": `url("${data.imageUrl}")` }}
      >
        <button>Favorite</button>
        {cartDetails[cartItem.sku] ? (
          <h1>{cartDetails[cartItem.sku].quantity}</h1>
        ) : (
          ""
        )}
        <button onClick={() => decrementItem(cartItem.sku)}>-</button>
        <button onClick={() => addItem(cartItem)}>+</button>
      </div>
      <div className="product-card--supplier">{data.multipleSupplierLabel}</div>
      <div className="product-card--title">{data.name}</div>
      <div className="product-card--price-label">
        <span className="product-card--price">{selectedProduct.price}</span> for{" "}
        <span className="product-card--sizeDescription">
          {selectedProduct.sizeDescription}
        </span>
      </div>
    </div>
  )
}

export default function DepartmentPage({ data }) {
  /* Create a map {category: {family: [productGroup] }

  e.g.
  {vegetables: {
    "Cucumbers & Zucchinis": [ {}, ... ],
    "Tomatoes, Peppers & Eggplants": [ {}, ... ]
  },
  fruits: {
    "Cucumbers & Zucchinis": [ {}, ... ]
  }}
  
  */
  const productMap = {}
  data.allAirtable.nodes.forEach(productGroup => {
    const category = productGroup.data.category[0]
    const family = productGroup.data.family

    // Create a new category if necessary
    if (!productMap[category]) {
      productMap[category] = {}
    }

    // Create a new family if necessary
    if (!productMap[category][family]) {
      productMap[category][family] = []
    }

    // Add productGroup to list of [productGroup]
    productMap[category][family].push(productGroup)
  })

  //Create an entry   { title: "Link 1", link: "#link1", children: [] } for each category
  const sidebarEntries = Object.keys(productMap).map(category => {
    const childEntries = Object.keys(productMap[category]).map(family => {
      return { title: family, link: `#${removeNonLetters(family)}` }
    })

    return {
      title: category,
      link: `#${removeNonLetters(category)}`,
      children: childEntries,
    }
  })

  console.log(sidebarEntries)

  const categorySection = Object.keys(productMap).map(category => {
    const familySection = Object.keys(productMap[category]).map(family => {
      const productGroups = productMap[category][family].map(productGroup => {
        return <ProductCard productGroup={productGroup} />
      })
      return (
        <>
          <ObservableElement
            title={family}
            link={`#${removeNonLetters(family)}`}
            tag="h2"
          />
          {productGroups}
        </>
      )
    })
    return (
      <>
        <h1 link={`#${removeNonLetters(category)}`}>{category}</h1>
        {familySection}
      </>
    )
  })

  return (
    <>
      <Nav />
      <section>
        <div className="leftPanel">
          <ConnectedSidebar sideBarLinks={sidebarEntries} />
        </div>
        <div className="rightPanel">{categorySection}</div>
      </section>
    </>
  )
}
