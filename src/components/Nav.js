import React from "react"
import { Link } from "gatsby"
import "./Nav.css"
import { useShoppingCart } from "use-shopping-cart"

import { listToClass } from "../util"

import { Hamburger } from "./Hamburger"
import { Menu } from "./Menu"

const Nav = () => {
  const { cartCount } = useShoppingCart()
  const [isMobileNavOpen, setMobileNavIsOpen] = React.useState()

  const toggleMobileNavOpen = React.useCallback(() => {
    setMobileNavIsOpen(!isMobileNavOpen)
  }, [isMobileNavOpen])

  return (
    <div
      className={listToClass(["nav", isMobileNavOpen && "nav__mobile-open"])}
    >
      <div className="nav--wrapper">
        <div className="brand--wrapper">
          <Hamburger isOpen={isMobileNavOpen} onOpen={toggleMobileNavOpen} />
          <Link to="/" className="brand">
            GOODPLUCK
          </Link>
          <button className="nav-search--btn">
            <span className="search-icon"></span>
          </button>
        </div>

        <div className="nav-items">
          <button className="nav-search--btn">
            <span className="search-text">Search</span>
          </button>

          <div className="header-links--list--wrapper">
            <div
              className={listToClass([
                "header-links--list",
                isMobileNavOpen && "header-links--list__open",
              ])}
            >
              <div className="header-link--wrapper">
                <Link
                  to="/mylists"
                  className={listToClass([
                    "header-link",
                    linkIsActive("/mylists") && "current-link",
                  ])}
                >
                  My Lists
                </Link>
              </div>
              <div className="header-link--wrapper">
                <Link
                  to="/signin"
                  className={listToClass([
                    "header-link",
                    linkIsActive("/signin"),
                  ])}
                >
                  Sign in
                </Link>
              </div>
              <div className="header-link--wrapper">
                <Link
                  to="/cart"
                  className={listToClass([
                    "header-link",
                    linkIsActive("/cart"),
                  ])}
                >
                  Cart: {`${cartCount}`}
                </Link>
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  )
}

function linkIsActive(path) {
  return window.location.pathname === path
}

export default Nav
