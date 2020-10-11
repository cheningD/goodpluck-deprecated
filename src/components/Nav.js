import "./Nav.css"

import { ButtonSmall } from "../components/StyledComponentLib"
import { Hamburger } from "./Hamburger"
import Image from "./Image"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

const BrandLink = styled(Link)`
  margin-right: auto;
  justify-self: flex-start;
  font-family: Bebas Neue, sans-serif;
  color: #fff;
  font-size: 32px;
  text-decoration: none;
  @media screen and (max-width: 786px) {
    justify-self: center;
    margin-right: 0;
  }
`

const NavMenu = styled.div`
  visibility: ${props => (props.isMobileNavOpen ? "visible" : "hidden")};
  display: ${props => (props.isMobileNavOpen ? "block" : "none")};
  background: #788474;
  height: 100vh;
  width: 100vw;
  padding: 16px 0;
`
const PrimaryButton = styled(ButtonSmall)`
  background-color: #fffd82;
  border-radius: 4px;
  border: 2px solid #3f3a40;
  color: #3f3a40;
  margin: 16px auto;
  max-width: 300px;
`

const GetStartedLink = styled(PrimaryButton)`
  font-size: 1.125rem;
  padding: 8px 16px;
  margin: 0 16px;
  text-transform: none;
  @media screen and (max-width: 786px) {
    visibility: hidden;
    display: none;
  }
`
const SignInLink = styled(Link)`
  font-size: 1.125rem;
  color: #fff;
  text-decoration-line: none;
  margin: 0 16px;
  line-height: 43px;
  &:hover {
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-bottom: 2px solid #fff;
    text-decoration: none;
  }
  &:focus {
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-color: #333;
    border-bottom: 2px solid #f7c59f;
    color: #f7c59f;
    text-decoration: none;
  }
  @media screen and (max-width: 786px) {
    visibility: hidden;
    display: none;
  }
`
const SecondaryButton = styled(ButtonSmall)`
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #3f3a40;
  color: #3f3a40;
  margin: 16px auto;
  max-width: 300px;
`

const Cart = styled(Link)`
  align-items: center;
  border-bottom: 2px solid transparent;
  border-style: none;
  color: #fff;
  display: flex;
  font-size: 1.125rem;
  height: 43px;
  justify-content: center;
  margin-left: 24px;
  text-decoration-line: none;

  &:hover {
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-bottom: 2px solid #fff;
    text-decoration: none;
  }

  &:focus {
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-color: #333;
    border-bottom: 2px solid #f7c59f;
    color: #f7c59f;
    text-decoration: none;
  }
`

const Nav = () => {
  const [isMobileNavOpen, setMobileNavIsOpen] = React.useState()

  const toggleMobileNavOpen = React.useCallback(() => {
    setMobileNavIsOpen(!isMobileNavOpen)
  }, [isMobileNavOpen])

  return (
    <>
      <div className="nav">
        <div className="nav--wrapper">
          <div className="brand--wrapper">
            <Hamburger isOpen={isMobileNavOpen} onClick={toggleMobileNavOpen} />
            <BrandLink to="/">GOODPLUCK</BrandLink>
            <SignInLink to="/signin">Sign In</SignInLink>
            <GetStartedLink to="/getstarted">Get Started</GetStartedLink>
            <CartLink />
          </div>
        </div>
      </div>
      <NavMenu isMobileNavOpen={isMobileNavOpen}>
        <PrimaryButton to="/getstarted">Get Started</PrimaryButton>
        <SecondaryButton to="/signin">Sign In</SecondaryButton>
      </NavMenu>
    </>
  )
}

const CartLink = () => {
  const { cartDetails } = useShoppingCart()

  const realCartCount = Object.keys(cartDetails).filter(
    priceID => priceID !== process.env.GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID
  ).length

  return (
    <Cart to="/cart" className="cart-link">
      <Image
        src="cart_icon_green.png"
        alt="cart"
        style={{ height: "30px", width: "30px" }}
      />
      <span className="cart-count">{`${realCartCount}`}</span>
    </Cart>
  )
}

export default Nav
