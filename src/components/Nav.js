import "./Nav.css"

import Emoji from "./Emoji"
import { FeatureFlags } from "../FeatureFlags"
import { Hamburger } from "./Hamburger"
import { Link } from "gatsby"
import { Menu } from "./Menu"
import React from "react"
import Select from "react-select"
import { listToClass } from "../util"
import { useShoppingCart } from "use-shopping-cart"

const Nav = () => {
  const [isMobileNavOpen, setMobileNavIsOpen] = React.useState()
  const [showSearchBar, setShowSearchBar] = React.useState()
  const { cartCount } = useShoppingCart()

  const toggleMobileNavOpen = React.useCallback(() => {
    setMobileNavIsOpen(!isMobileNavOpen)
  }, [isMobileNavOpen])

  const toggleSearchBar = React.useCallback(() => {
    setShowSearchBar(!showSearchBar)
  }, [showSearchBar])

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
          <Link to="/cart" className="cart-link">
            <Emoji symbol="🧺" label="cart" />{" "}
            <span className="cart-count">{`${cartCount - 1}`}</span>
          </Link>
          {FeatureFlags.SEARCH_FEATURE ? (
            <SearchBar toggleSearchBar={toggleSearchBar} />
          ) : (
            ""
          )}
        </div>
        <div className="nav-items">
          {(!showSearchBar || isMobileNavOpen) && (
            <Links isMobileNavOpen={isMobileNavOpen} />
          )}
        </div>
      </div>
    </div>
  )
}

const Links = ({ isMobileNavOpen }) => {
  return (
    <div
      className={listToClass([
        "header-links--list",
        isMobileNavOpen && "header-links--list__open",
      ])}
    >
      {FeatureFlags.MY_LISTS_FEATURE && (
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
      )}
      <div className="header-link--wrapper">
        {FeatureFlags.SIGN_IN_FEATURE ? (
          <Link
            to="/signin"
            className={listToClass(["header-link", linkIsActive("/signin")])}
          >
            Sign in
          </Link>
        ) : (
          ""
        )}
      </div>
      <Menu
        className="menu"
        linkClassName="menu-category header-link--wrapper header-link"
      />
    </div>
  )
}

function linkIsActive(path) {
  if (typeof window !== `undefined`) {
    return window.location.pathname === path
  }
  return false
}

export default Nav

const SearchBar = React.memo(({ toggleSearchBar }) => {
  const [isFocused, setFocused] = React.useState(false)

  const shouldCloseMenuOnScroll = e => {
    if (e.target instanceof HTMLElement) {
      return !e.target.className.includes("nav-search")
    }
    return false
  }

  const toggleFocused = () => {
    setFocused(!isFocused)
    toggleSearchBar()
  }

  return (
    <Select
      backspaceRemovesValue={true}
      menuShouldScrollIntoView={false}
      openMenuOnFocus={false}
      openMenuOnClick={false}
      noOptionsMessage={() => "No items match search"}
      className={listToClass([
        "nav-search--wrapper",
        isFocused && "nav-search--wrapper__focused",
      ])}
      classNamePrefix="nav-search"
      onFocus={toggleFocused}
      onBlur={toggleFocused}
      menuPortalTarget={document.body}
      closeMenuOnScroll={shouldCloseMenuOnScroll}
      options={[{ label: "1", value: 1 }]}
      placeholder={
        <>
          <span style={{ marginRight: "5px" }} className="fas fa-solid">
            
          </span>
          {!isFocused && (
            <span className="nav-search--placeholder-text">Search</span>
          )}
        </>
      }
      components={{
        IndicatorSeparator: null,
        DropdownIndicator: null,
      }}
      styles={{
        menuPortal: style => ({
          ...style,
          zIndex: 2,
        }),
      }}
    />
  )
})
