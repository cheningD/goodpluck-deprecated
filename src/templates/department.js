import "./department.css"

import { Link, graphql } from "gatsby"
import { getFirstFromObject, removeNonLetters } from "../util"

import AddIcon from "../images/icons/add.svg"
import Breadcrumbs from "../components/Breadcrumbs"
import ConnectedSidebar from "../components/ConnectedSidebar"
import DeliveryDateSelector from "../components/DeliveryDateSelector"
import DepartmentZeroState from "../components/DepartmentZeroState"
import { FeatureFlags } from "../FeatureFlags"
import Footer from "../components/footer"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"
import { Menu } from "../components/Menu"
import MinusIcon from "../images/icons/minus.svg"
import Nav from "../components/Nav"
import PlaceholderImage1 from "../components/PlaceholderImage1"
import PriceFormatter from "../components/PriceFormatter"
import ProductRequestForm from "../components/ProductRequestForm"
import React from "react"
import ZipCodeModal from "../components/ZipCodeModal"
import flow from "lodash-es/flow"
import get from "lodash-es/get"
import head from "lodash-es/head"
import isNil from "lodash-es/isNil"
import memoizeOne from "memoize-one"
import noop from "lodash-es/noop"
import throttle from "lodash-es/throttle"
import { useShoppingCart } from "use-shopping-cart"

export const query = graphql`
  query DepartmentPageQuery($name: String) {
    allAirtable(
      filter: {
        data: {
          department: { eq: $name }
          availabilityOfLinkedProducts: { in: true }
        }
        table: { eq: "productGroup" }
      }
    ) {
      nodes {
        data {
          gpid
          name
          department
          category
          subCategory
          multipleSupplierLabel
          slug
          sortOrderCategories
          mainImage {
            id
            localFiles {
              url
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
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
  //Todo: Show product variations instead of choosing the first one
  const selectedProduct = productGroup?.data?.productv2?.[0]?.data
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
    sku: selectedProduct.stripePriceId,
    price: selectedProduct.priceInCents,
    currency: "USD",
    image: get(data, "mainImage.localFiles[0].url", null),
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

  const productImageFluidParams = get(
    data,
    "mainImage.localFiles[0].childImageSharp.fluid",
    null
  )
  let productCardImage
  if (productImageFluidParams) {
    productCardImage = <Img fluid={productImageFluidParams} />
  } else {
    productCardImage = <PlaceholderImage1 />
  }

  return (
    <div className="product-card">
      <div className="product-card--image-container">
        <Link to={data.slug}>{productCardImage}</Link>
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
            {`${selectedProduct.unitQuantity} ${
              selectedProduct.unitLabel || "each"
            }`}
          </span>
          <span className="product-card--price price-formatter--smaller">
            <PriceFormatter priceInCents={selectedProduct.priceInCents} />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function DepartmentPage({ data, pageContext }) {
  const [activeItem, setActiveItem] = React.useState("")
  const [isNavigating, setNavigating] = React.useState(false)
  const sortedAirtableNodes = [...data.allAirtable.nodes].sort((a, b) => {
    if (a.data.sortOrderCategories[0] < b.data.sortOrderCategories[0]) {
      return -1
    } else if (
      a.data.sortOrderCategories[0] === b.data.sortOrderCategories[0]
    ) {
      return 0
    }
    return 1
  })
  const productMap = getProductMapMemoized(sortedAirtableNodes)
  const sidebarEntries = getSidebarEntriesMemoized(productMap)

  const categorySection = Object.keys(productMap).map(category => {
    const familySection = Object.keys(productMap[category]).map(family => {
      const productGroups = productMap[category][family].map(productGroup => {
        // Filter products to only those marked available
        if (productGroup.data?.productv2.length) {
          productGroup.data.productv2 = productGroup.data.productv2.filter(
            product => product.data.available
          )
        }

        // If no product are available return empty fragment
        if (!productGroup.data?.productv2.length) {
          return <></>
        }

        return (
          <ProductCard
            productGroup={productGroup}
            key={productGroup.data.gpid}
          />
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
    <div className="department--page">
      <nav className="product-navigation--wrapper">
        <Nav />
        <Menu
          linkClassName="department-menu-link"
          className="department-menu menu"
        />
        <Breadcrumbs activeItem={activeItem} sideBarLinks={sidebarEntries} />
      </nav>
      <section className="department--page-wrapper">
        <ActiveSidebarContext.Provider
          value={{ setActiveItem, activeItem, isNavigating, setNavigating }}
        >
          <div className="leftPanel">
            <ConnectedSidebar sideBarLinks={sidebarEntries} />
          </div>
          <div className="rightPanel">
            <DeliveryDateSelector />
            {categorySection}
            {pageContext.name !== "Produce" ? (
              <DepartmentZeroState departmentName={pageContext.name} />
            ) : (
              ""
            )}
          </div>
        </ActiveSidebarContext.Provider>
      </section>
      <ProductRequestForm />
      <Footer />
    </div>
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
    const family = productGroup.data.subCategory || `All ${category}`

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
    firstProduct => firstProduct?.data?.department || null
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
