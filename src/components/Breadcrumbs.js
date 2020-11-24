import './Breadcrumbs.css'

import * as React from 'react'

import { listToClass, removeNonLetters } from '../util'

import Chevron from './Chevron'
import { Link } from 'gatsby'
import { Portal } from './Portal'
import forEach from 'lodash-es/forEach'
//import memoizeOne from "memoize-one"
import omit from 'lodash-es/omit'
import reduce from 'lodash-es/reduce'
import { withDepartments } from '../hooks/useDepartments'

export class Breadcrumbs extends React.PureComponent {
  produceMenuRef = React.createRef()
  productMenuRef = React.createRef()

  state = {
    produceMenuOpen: false,
    productMenuOpen: false,
  }

  toggleProduceMenu = () => {
    this.setState(({ produceMenuOpen }) => ({
      produceMenuOpen: !produceMenuOpen,
      productMenuOpen: false,
    }))
  }

  toggleProductMenu = () => {
    this.setState(({ productMenuOpen }) => ({
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
            <span>{activeNode.product.department}</span>
            {this.state.produceMenuOpen && (
              <BreadCrumbMenu
                onClick={this.toggleProduceMenu}
                products={this.props.departments}
                top={this.produceMenuRef.current?.getBoundingClientRect().bottom || 0}
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
            isOpen={false}
            hideChevron={true}
          >
            <span>{activeNode.product.title}</span>
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
    className={listToClass(['product--bread-crumb', props.classNames])}
  >
    {props.children}
    {props.hideChevron ? (
      ''
    ) : (
      <Chevron classNames={'product--bread-crumb--chevron'} direction={props.isOpen ? 'up' : 'down'} />
    )}
  </button>
)

const BreadCrumbMenu = props => (
  <Portal className="product--bread-crumb--menu__portal" style={`top: ${props.top}px;`}>
    <div className="product--bread-crumb--menu">
      {props.products.map(product => (
        <Link onClick={props.onClick} className="product--bread-crumb--menu__link" key={product.link} to={product.link}>
          {product.title}
        </Link>
      ))}
    </div>
  </Portal>
)

class ProductTree {
  products = []
  productMap = new Map()
  childMap = new Map()

  // this is not crazy heavy, but gets smashed as `<Breadcrumbs />` re-renders everytime `activeItem` changes
  static create = ProductTree._create

  static _create(sideBarLinks) {
    return reduce(
      sideBarLinks,
      (productTree, product) => {
        productTree.products.push(omit(product, 'children'))

        const productHash = removeNonLetters(product.link)
        productTree.productMap.set(productHash, product)

        forEach(product.children, child => {
          const childNode = ChildNode.create(child, productHash)
          productTree.childMap.set(childNode.hash, childNode)
        })

        return productTree
      },
      new ProductTree(),
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

      return new ActiveNode(maybeProduct)
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
    return new ChildNode(productHash, child.link, child.key, child.title, childHash)
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
  constructor(product) {
    this.product = product
  }
}

export default withDepartments(Breadcrumbs)
