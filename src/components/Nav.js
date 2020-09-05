import React from "react"
import { Link } from "gatsby"
import "./Nav.css"
import { useShoppingCart } from "use-shopping-cart"
import { Hamburger } from "./Hamburger"

const Nav = () => {
  const { cartCount } = useShoppingCart()
  const [isMobileNavOpen, setMobileNavIsOpen] = React.useState()

  const toggleMobileNavOpen = React.useCallback(() => {
    setMobileNavIsOpen(!isMobileNavOpen)
  }, [isMobileNavOpen])

  const className = ""

  return (
    <div className="nav">
      <Hamburger onOpen={toggleMobileNavOpen} />
      <Link to="/" className="brand">
        GOODPLUCK
      </Link>

      <div className="nav-items">
        <button className="nav-search--btn">
          <span className="search-text"></span>Search
          <span className="search-icon"></span>
        </button>
        <div className="header-links">
          <Link
            to="/mylists"
            className={`header-link ${
              window.location.pathname === "/mylists" ? "current-link" : ""
            }`}
          >
            My Lists
          </Link>
          <Link
            to="/signin"
            className={`header-link ${
              window.location.pathname === "/signin" ? "current-link" : ""
            }`}
          >
            Sign in
          </Link>
          <Link
            to="/cart"
            className={`header-link ${
              window.location.pathname === "/cart" ? "current-link" : ""
            }`}
          >
            Cart: {`${cartCount}`}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
