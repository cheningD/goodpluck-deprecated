import * as React from "react"
import reduce from "lodash-es/reduce"
import forEach from "lodash-es/forEach"
import omit from "lodash-es/omit"
import memoizeOne from "memoize-one"

import "./Breadcrumbs.css"
import { listToClass, removeNonLetters } from "../util"
import { Portal } from "./Portal"
import { ToggleableChevron } from "./ToggleableChevron"

export class Breadcrumbs extends React.PureComponent {
  produceMenuRef = React.createRef()
  productMenuRef = React.createRef()

  state = {
    produceMenuOpen: false,
    productMenuOpen: false,
  }

  toggleProduceMenu = () => {
    this.setState(({ produceMenuOpen, productMenuOpen }) => ({
      produceMenuOpen: !produceMenuOpen,
      productMenuOpen: false,
    }))
  }

  toggleProductMenu = () => {
    this.setState(({ productMenuOpen, produceMenuOpen }) => ({
      productMenuOpen: !productMenuOpen,
      produceMenuOpen: false,
    }))
  }

  render() {
    const productTree = ProductTree.create(this.props.sideBarLinks)
    const activeNode = productTree.get(this.props.activeItem)

    if (!(activeNode instanceof ActiveNode)) return null

    return (
      <div className="product--bread-crumbs">
        <div className="product--bread-crumb-wrapper">
          <BreadCrumb
            classNames="product--bread-crumb__dark-background"
            parentRef={this.produceMenuRef}
            onClick={this.toggleProduceMenu}
            isOpen={this.state.produceMenuOpen}
          >
            <span>Produce</span>
            {this.state.produceMenuOpen && (
              <BreadCrumbMenu
                onClick={this.toggleProduceMenu}
                products={productTree.products}
                top={
                  this.produceMenuRef.current?.getBoundingClientRect().bottom ||
                  0
                }
              />
            )}
          </BreadCrumb>
          <span className="arrow-right" />
        </div>
        <div className="product--bread-crumb-wrapper">
          <BreadCrumb
            classNames="product--bread-crumb__light-background"
            parentRef={this.productMenuRef}
            onClick={this.toggleProductMenu}
            isOpen={this.state.productMenuOpen}
          >
            <span>{activeNode.product.title}</span>
            {this.state.productMenuOpen && activeNode.product.children && (
              <BreadCrumbMenu
                onClick={this.toggleProductMenu}
                products={activeNode.product.children}
                top={
                  this.productMenuRef.current?.getBoundingClientRect().bottom ||
                  0
                }
              />
            )}
          </BreadCrumb>
        </div>
      </div>
    )
  }
}

const BreadCrumb = props => (
  <button
    ref={props.parentRef}
    onClick={props.onClick}
    className={listToClass(["product--bread-crumb", props.classNames])}
  >
    {props.children}
    <ToggleableChevron
      classNames={"product--bread-crumb--chevron"}
      isUpArrow={props.isOpen}
    />
  </button>
)

const BreadCrumbMenu = props => (
  <Portal
    className="product--bread-crumb--menu__portal"
    style={`top: ${props.top}px;`}
  >
    <div className="product--bread-crumb--menu">
      {props.products.map(product => (
        <a
          onClick={props.onClick}
          className="product--bread-crumb--menu__link"
          key={product.link}
          href={product.link}
        >
          {product.title}
        </a>
      ))}
    </div>
  </Portal>
)

class ProductTree {
  products = []
  productMap = new Map()
  childMap = new Map()

  // this is not crazy heavy, but gets smashed as `<Breadcrumbs />` re-renders everytime `activeItem` changes
  static create = memoizeOne(ProductTree._create)

  static _create(sideBarLinks) {
    return reduce(
      sideBarLinks,
      (productTree, product) => {
        productTree.products.push(omit(product, "children"))

        const productHash = removeNonLetters(product.link)
        productTree.productMap.set(productHash, product)

        forEach(product.children, child => {
          const childNode = ChildNode.create(child, productHash)
          productTree.childMap.set(childNode.hash, childNode)
        })

        return productTree
      },
      new ProductTree()
    )
  }

  getProducts() {
    return Array.from(this.productMap.values())
  }

  // if the item that comes through is a child of the parent, find the parent.
  get(activeItem) {
    if (!activeItem) return null

    const product = this._getActiveProduct(activeItem)

    if (!product) {
      const child = this._getActiveChild(activeItem)
      const maybeProduct = this._getActiveProduct(child.productHash)

      return new ActiveNode(maybeProduct, child)
    }
    return new ActiveNode(product)
  }

  _getActiveProduct(activeItem) {
    return this.productMap.get(activeItem)
  }

  _getActiveChild(activeItem) {
    return this.childMap.get(activeItem)
  }
}

class ChildNode {
  static create(child, productHash) {
    const childHash = removeNonLetters(child.link)
    return new ChildNode(
      productHash,
      child.link,
      child.key,
      child.title,
      childHash
    )
  }

  constructor(productHash, link, key, title, hash) {
    this.productHash = productHash
    this.link = link
    this.key = key
    this.title = title
    this.hash = hash
  }
}

class ActiveNode {
  constructor(product, activeChild) {
    this.product = product
    this.activeChild = activeChild || null
  }
}
