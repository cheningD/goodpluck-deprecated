import * as React from "react"
import reduce from "lodash-es/reduce"
import forEach from "lodash-es/forEach"
import omit from "lodash-es/omit"
import memoizeOne from "memoize-one"

import "./Breadcrumbs.css"
import { removeNonLetters } from "../util"

export class Breadcrumbs extends React.PureComponent {
  state = {
    produceMenuOpen: false,
  }

  toggleProduceMenu = () => {
    this.setState(({ produceMenuOpen }) => ({
      produceMenuOpen: !produceMenuOpen,
    }))
  }

  render() {
    const productTree = ProductTree.create(this.props.sideBarLinks)
    const activeNode = productTree.get(this.props.activeItem)

    if (!(activeNode instanceof ActiveNode)) return null

    return (
      <div className="product--bread-crumbs">
        <div className="product--bread-crumb-wrapper">
          <BreadCrumb onClick={this.toggleProduceMenu} title="Produce" />
          {this.state.produceMenuOpen && (
            <div>
              {productTree.products.map(p => (
                <a href={p.link}>{p.title}</a>
              ))}
            </div>
          )}
          <span className="arrow-right" />
        </div>
        <BreadCrumb title={activeNode.product.title} />
      </div>
    )
  }
}

const BreadCrumb = props => (
  <button onClick={props.onClick} className="product--bread-crumb">
    {props.title}
    {props.children}
  </button>
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
