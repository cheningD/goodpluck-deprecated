import React from "react"
import Nav from "../components/Nav"
import ConnectedSidebar from "../components/ConnectedSidebar"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"
import { useShoppingCart } from "use-shopping-cart"
import memoizeOne from "memoize-one"
import get from "lodash-es/get"
import noop from "lodash-es/noop"
import throttle from "lodash-es/throttle"
import head from "lodash-es/head"
import isNil from "lodash-es/isNil"
import flow from "lodash-es/flow"

import "./department.css"
import AddIcon from "../images/icons/add.svg"
import MinusIcon from "../images/icons/minus.svg"
import { getFirstFromObject, removeNonLetters } from "../util"
import PriceFormatter from "../components/PriceFormatter"
import Footer from "../components/footer"
import { FeatureFlags } from "../FeatureFlags"
import ZipCodeModal from "../components/ZipCodeModal"
import Breadcrumbs from "../components/Breadcrumbs"

export const query = graphql`
  query DepartmentPageQuery($id: Int!) {
    allAirtable(
      filter: {
        data: { department: { elemMatch: { data: { id: { eq: $id } } } } }
        table: { eq: "productGroup" }
      }
    ) {
      nodes {
        data {
          id
          name
          subCategory
          category
          multipleSupplierLabel
          slug
          mainImage {
            id
            localFiles {
              url
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          department {
            data {
              name
              slug
            }
          }
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

export class ActiveSidebarContext {
  static context = React.createContext({
    activeItem: "",
    setActiveItem: noop,
    // to prevent clicking from fighting with scrolling
    isNavigating: false,
    setNavigating: noop,
  })
  static Provider = ActiveSidebarContext.context.Provider
  static Consumer = ActiveSidebarContext.context.Consumer
}

const ObservableElement = props => {
  const id = removeNonLetters(props.title)
  const context = React.useContext(ActiveSidebarContext.context)

  function handleOnChange(inView) {
    if (context.isNavigating) return
    else if (id && inView) context.setActiveItem(id)
  }
  const handleChangeThrottled = throttle(handleOnChange, 150)

  return (
    <InView
      as={props.tag}
      id={id}
      className={props.className}
      onChange={handleChangeThrottled}
    >
      {props.title}
    </InView>
  )
}

const AddItemButton = ({ addItem, cartItem }) => {
  return (
    <button
      className="product-card--control-btn product-card--control-add-to-cart"
      onClick={() => addItem(cartItem)}
    >
      <AddIcon
        className="product-card--control-icon"
        alt={`Add ${cartItem.name} to cart`}
      />
    </button>
  )
}

const FakeAddItemButtonRequiresZip = ({ cartItem, setShowModal }) => {
  return (
    <button
      className="product-card--control-btn product-card--control-add-to-cart"
      onClick={() => setShowModal(true)}
    >
      <AddIcon
        className="product-card--control-icon"
        alt={`Add ${cartItem.name} to cart`}
      />
    </button>
  )
}

const ProductCard = ({ productGroup }) => {
  const data = productGroup.data
  const selectedProduct = productGroup?.data?.products?.[0]?.data
  const {
    cartDetails,
    addItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart()

  if (!selectedProduct) return null

  // To add itmes to the cart the following fields are required:
  const cartItem = {
    name: data.name,
    description: data.description,
    sku: selectedProduct.sku,
    price: selectedProduct.price,
    currency: "USD",
    image: get(data, "mainImage.localFiles.url", null),
  }

  let productImageOverlay
  if (cartDetails[cartItem.sku] && cartDetails[cartItem.sku].quantity) {
    productImageOverlay = (
      <>
        <div className="product-card--image-overlay"></div>
        <div className="product-card--quantity-label">
          <div className="product-card--quantity-number">
            {cartDetails[cartItem.sku].quantity}
          </div>
          <div className="product-card--quantity-text hideOnHover">
            In your order
          </div>
          <div className="product-card--quantity-text showOnHover">Added</div>
        </div>
        <div className="product-card--control">
          <button
            className="product-card--control-btn product-card--control-subtract"
            onClick={() => decrementItem(cartItem.sku)}
          >
            <MinusIcon
              className="product-card--control-icon"
              alt={`Remove 1 ${cartItem.name} from cart`}
            />
          </button>
          <button
            className="product-card--control-btn product-card--control-add"
            onClick={() => incrementItem(cartItem.sku)}
          >
            <AddIcon
              className="product-card--control-icon"
              alt={`Add 1 ${cartItem.name} to cart`}
            />
          </button>
        </div>
      </>
    )
  } else {
    productImageOverlay = (
      <ZipCodeModal
        WrappedComponentNeedsZip={FakeAddItemButtonRequiresZip}
        wrappedComponentNeedsZipProps={{ cartItem }}
        WrappedComponentZipIsAllowed={AddItemButton}
        wrappedComponentZipIsAllowedProps={{ addItem, cartItem }}
        showDeliveryMessageWhenZipAllowed={false}
        showDeliveryMessageWhenZipNotAllowed={false}
      />
    )
  }

  return (
    <div className="product-card">
      <div className="product-card--image-container">
        <Link to={data.slug}>
          <Img
            fluid={get(
              data,
              "mainImage.localFiles[0].childImageSharp.fluid",
              null
            )}
          />
        </Link>
        {FeatureFlags.FAVOURITES_FEATURE && (
          <button className="product-card--fav-btn"></button>
        )}
        {productImageOverlay}
      </div>
      <Link to={data.slug} className="product-card--info-container">
        <div className="product-card--product-label">
          <div className="product-card--supplier">
            {data.multipleSupplierLabel}
          </div>
          <div className="product-card--title">{data.name}</div>
        </div>

        <div className="product-card--price-label">
          <span className="product-card--sizeDescription">
            {selectedProduct.sizeDescription}
          </span>
          <span className="product-card--price price-formatter--smaller">
            <PriceFormatter priceInCents={selectedProduct.price} />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function DepartmentPage({ data }) {
  const [activeItem, setActiveItem] = React.useState("")
  const [isNavigating, setNavigating] = React.useState(false)
  const productMap = getProductMapMemoized(data.allAirtable.nodes)
  const sidebarEntries = getSidebarEntriesMemoized(productMap)

  const categorySection = Object.keys(productMap).map(category => {
    const familySection = Object.keys(productMap[category]).map(family => {
      const productGroups = productMap[category][family].map(productGroup => {
        return (
          <ProductCard productGroup={productGroup} key={productGroup.data.id} />
        )
      })
      return (
        <React.Fragment key={family}>
          <ObservableElement
            title={family}
            tag="h2"
            className="department--heading-2"
          />
          <div className="product-card--container">{productGroups}</div>
        </React.Fragment>
      )
    })

    return (
      <div className="product-card--wrapper" key={category}>
        <div id={removeNonLetters(category)} className="product-anchor--tag" />
        <h1 className="department--heading-1">{category}</h1>
        {familySection}
      </div>
    )
  })

  return (
    <>
      <nav className="product-navigation--wrapper">
        <Nav />
        <Breadcrumbs activeItem={activeItem} sideBarLinks={sidebarEntries} />
      </nav>
      <section className="department--page-wrapper">
        <ActiveSidebarContext.Provider
          value={{ setActiveItem, activeItem, isNavigating, setNavigating }}
        >
          <div className="leftPanel">
            <ConnectedSidebar sideBarLinks={sidebarEntries} />
          </div>
          <div className="rightPanel">{categorySection}</div>
        </ActiveSidebarContext.Provider>
      </section>
      <Footer />
    </>
  )
}

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
const getProductMapMemoized = memoizeOne(getProductMap)
function getProductMap(airTableNodes) {
  return airTableNodes.reduce((productMap, productGroup) => {
    const category = productGroup.data.category[0]
    const family = productGroup.data.subCategory

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
    return productMap
  }, {})
}

// Create an entry   { title: "Link 1", link: "#link1", children: [] } for each category
const getSidebarEntriesMemoized = memoizeOne(getSidebarEntries)
function getSidebarEntries(productMap) {
  const departmentNameOrNull = getDepartmentNameOrNull(productMap)

  return Object.keys(productMap).map(category => {
    const childEntries = Object.keys(productMap[category]).map(
      SideBarEntryChild.create
    )

    return SideBarEntry.create(category, childEntries, departmentNameOrNull)
  })
}

function getDepartmentNameOrNull(productMap) {
  return flow(
    productFamilies => getFirstFromObject(productFamilies),
    productCategoryDictionary => getFirstFromObject(productCategoryDictionary),
    productCategories => head(productCategories),
    firstProduct => firstProduct?.data?.department?.[0]?.data?.name || null
  )(productMap)
}

class SideBarEntry {
  static create(category, childEntries, departmentNameOrNull) {
    return new SideBarEntry(
      category,
      `#${removeNonLetters(category)}`,
      childEntries,
      category,
      isNil(departmentNameOrNull) ? "Market" : departmentNameOrNull
    )
  }

  constructor(title, link, children, key, department) {
    this.title = title
    this.link = link
    this.children = children
    this.key = key
    this.department = department
  }
}

class SideBarEntryChild {
  static create(family) {
    return new SideBarEntryChild(family, family, `#${removeNonLetters(family)}`)
  }

  constructor(title, key, link) {
    this.title = title
    this.key = key
    this.link = link
  }
}
