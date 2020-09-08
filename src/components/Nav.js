import React from "react"
import { Link } from "gatsby"
import "./Nav.css"
import { useShoppingCart } from "use-shopping-cart"
import Select from "react-select"

import { listToClass } from "../util"

import { Hamburger } from "./Hamburger"
import { Menu } from "./Menu"

const Nav = () => {
  const [isMobileNavOpen, setMobileNavIsOpen] = React.useState()
  const [showSearchBar, setShowSearchBar] = React.useState()

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
          <SearchBar toggleSearchBar={toggleSearchBar} />
        </div>
        <div className="nav-items">
          {(!showSearchBar || isMobileNavOpen) && (
            <Links isMobileNavOpen={isMobileNavOpen} />
          )}
          <Menu />
        </div>
      </div>
    </div>
  )
}

const Links = ({ isMobileNavOpen }) => {
  const { cartCount } = useShoppingCart()
  return (
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
          className={listToClass(["header-link", linkIsActive("/signin")])}
        >
          Sign in
        </Link>
      </div>
      <div className="header-link--wrapper">
        <Link
          to="/cart"
          className={listToClass(["header-link", linkIsActive("/cart")])}
        >
          Cart: {`${cartCount}`}
        </Link>
      </div>
    </div>
  )
}

function linkIsActive(path) {
  return window.location.pathname === path
}

export default Nav

const SearchBar = React.memo(props => {
  const [isFocused, setFocused] = React.useState(false)

  const shouldCloseMenuOnScroll = e => {
    if (e.target instanceof HTMLElement) {
      return !e.target.className.includes("nav-search")
    }
    return false
  }

  const toggleFocused = React.useCallback(() => {
    setFocused(!isFocused)
    props.toggleSearchBar()
  }, [isFocused])

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
