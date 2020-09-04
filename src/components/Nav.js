import React from "react"
import { Link } from "gatsby"
import "./Nav.css"
import { useShoppingCart } from "use-shopping-cart"

const Nav = () => {
  let { cartCount } = useShoppingCart()

  return (
    <div className="nav">
      <Link to="/" className="brand">
        GOODPLUCK
      </Link>
      <div className="header-links">
        <button>Search</button>
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
  )
}

export default Nav
