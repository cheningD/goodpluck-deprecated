import React, { useEffect } from "react"
import Nav from "../components/Nav"
import ConnectedSidebar from "../components/ConnectedSidebar"
import { graphql } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"
import "./department.css"
import AddIcon from "../images/icons/add.svg"
import MinusIcon from "../images/icons/minus.svg"
import { debounce, removeNonLetters } from "../util"

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

const ProductCard = ({ productGroup }) => {
  const data = productGroup.data
  const selectedProduct = productGroup.data.products[0].data
  // console.log(selectedProduct)

  // To add itmes to the cart the following fields are required:
  const cartItem = {
    name: data.name,
    description: data.description,
    sku: selectedProduct.sku,
    price: selectedProduct.price,
    currency: "USD",
    image: data.imageUrl,
  }

  let { cartDetails, addItem, incrementItem, decrementItem } = useShoppingCart()

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
              alt={`Remove 1 ${data.name} from cart`}
            />
          </button>
          <button
            className="product-card--control-btn product-card--control-add"
            onClick={() => incrementItem(cartItem.sku)}
          >
            <AddIcon
              className="product-card--control-icon"
              alt={`Add 1 ${data.name} to cart`}
            />
          </button>
        </div>
      </>
    )
  } else {
    productImageOverlay = (
      <button
        className="product-card--control-btn product-card--control-add-to-cart"
        onClick={() => addItem(cartItem)}
      >
        <AddIcon
          className="product-card--control-icon"
          alt={`Add ${data.name} to cart`}
        />
      </button>
    )
  }

  return (
    <div className="product-card">
      <div className="product-card--image-container">
        <img
          className="product-card--image"
          src={data.imageUrl}
          alt={data.name}
        />
        <button className="product-card--fav-btn"></button>
        {productImageOverlay}
      </div>
      <div className="product-card--info-container">
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
          <span className="product-card--price">{selectedProduct.price}</span>
        </div>
      </div>
    </div>
  )
}

const DepartmentPage = React.memo(({ data }) => {
  const [scrollTop, setScrollTop] = React.useState(0)
  const [activeSection, setActiveSection] = React.useState("")
  const rightPanelRef = React.useRef()

  const productMap = React.useMemo(() => {
    return selectProductMap(data.allAirtable.nodes)
  }, [data.allAirtable.nodes])

  const sidebarEntries = React.useMemo(() => {
    return selectSideBarEntries(productMap)
  }, [productMap])

  const scrollHandler = React.useCallback(
    debounce(() => {
      const parentTop =
        (rightPanelRef?.current?.scrollTop || 0) +
        (rightPanelRef?.current?.offsetTop || 0)

      setScrollTop(parentTop)
    }, 500),
    []
  )

  useEffect(() => {
    scrollHandler()
  })

  return (
    <>
      <Nav />
      <section>
        <div className="leftPanel">
          <ConnectedSidebar
            activeSection={activeSection}
            sideBarLinks={sidebarEntries}
          />
        </div>
        <div
          onScroll={scrollHandler}
          ref={rightPanelRef}
          className="rightPanel"
        >
          {Object.keys(productMap).map(category => (
            <React.Fragment key={`heading-${category}`}>
              <h1
                className="department--heading-1"
                id={removeNonLetters(category)}
              >
                {category}
              </h1>
              {Object.keys(productMap[category]).map((family, idx) => (
                <ProductSection
                  setActiveSection={setActiveSection}
                  key={`${family}-${idx}`}
                  parentTop={scrollTop}
                  family={family}
                >
                  <div className="product-card--container">
                    {productMap[category][family].map(
                      (productGroup, childIdx) => (
                        <ProductCard
                          key={`product-${family}-${childIdx}`}
                          productGroup={productGroup}
                        />
                      )
                    )}
                  </div>
                </ProductSection>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  )
})

const ProductSection = React.memo(props => {
  const productRef = React.useRef()

  const newHash = React.useMemo(() => removeNonLetters(props.family), [
    props.family,
  ])

  const inView = productRef?.current?.offsetTop + 80 >= props.parentTop

  useEffect(() => {
    if (inView) {
      props.setActiveSection(newHash)
    }
  }, [newHash, inView])

  return (
    <div ref={productRef} id={newHash}>
      <h2 className="department--heading-2">{props.family}</h2>
      {props.children}
    </div>
  )
})

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
function selectProductMap(nodes) {
  const productMap = {}
  nodes.forEach(productGroup => {
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

  return productMap
}

// Create an entry   { title: "Link 1", link: "#link1", children: [] } for each category
function selectSideBarEntries(productMap) {
  return Object.keys(productMap).map(category => {
    const childEntries = Object.keys(productMap[category]).map(family => {
      return { title: family, link: `#${removeNonLetters(family)}` }
    })

    return {
      title: category,
      link: `#${removeNonLetters(category)}`,
      children: childEntries,
    }
  })
}

export default DepartmentPage
