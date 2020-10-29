// import "./Nav.css"

import {
  ButtonSmall,
  TabletAndMobileViewOnly,
} from "../components/StyledComponentLib"
import {
  hasCompletedOnboarding,
  isCurrentLink,
  showCartIcon,
  showGetStarted,
} from "../util"

import { Hamburger } from "./Hamburger"
import Image from "./Image"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useShoppingCart } from "use-shopping-cart"

const NavBar = styled.div`
  line-height: 1;
  padding: 24px 32px;
  background: #788474;
  box-shadow: #333;
`
const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`
const BrandWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1005%;
`

const BasketCount = styled.span`
  padding: 0 0 0 0.5rem;
`

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
}
`

const GetStartedLink = styled(PrimaryButton)`
  font-size: 1.125rem;
  padding: 0 16px;
  height: 45px;
  margin: 0 16px;
  text-transform: none;
  @media screen and (max-width: 786px) {
    visibility: hidden;
    display: none;
  }
`
const NavLink = styled(Link)`
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

  ${props =>
    props.current === true
      ? `
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-color: #333;
    border-bottom: 2px solid #f7c59f;
    color: #f7c59f;
    text-decoration: none;
    `
      : ``}

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

  ${props =>
    props.current === true
      ? `
    font-weight: 600;
    border-width: 2px;
    border-style: none;
    border-color: #333;
    border-bottom: 2px solid #f7c59f;
    color: #f7c59f;
    text-decoration: none;
    `
      : ``}
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
      <NavBar>
        <NavWrapper>
          <BrandWrapper>
            <TabletAndMobileViewOnly>
              <Hamburger
                isOpen={isMobileNavOpen}
                onClick={toggleMobileNavOpen}
              />
            </TabletAndMobileViewOnly>

            <BrandLink to="/">GOODPLUCK</BrandLink>
            {hasCompletedOnboarding() ? (
              <NavLink to="/myaccount" current={isCurrentLink("/myaccount")}>
                My Account
              </NavLink>
            ) : (
              <NavLink to="/signin" current={isCurrentLink("/signin")}>
                Sign In
              </NavLink>
            )}

            {showGetStarted() ? (
              <GetStartedLink to="/getstarted">Get Started</GetStartedLink>
            ) : (
              ""
            )}

            {showCartIcon() ? <CartLink /> : ""}
          </BrandWrapper>
        </NavWrapper>
      </NavBar>
      <NavMenu isMobileNavOpen={isMobileNavOpen}>
        {showGetStarted() ? (
          <PrimaryButton to="/getstarted">Get Started</PrimaryButton>
        ) : (
          ""
        )}
        {hasCompletedOnboarding() ? (
          <SecondaryButton
            to="/myaccount"
            current={isCurrentLink("/myaccount")}
          >
            My Account
          </SecondaryButton>
        ) : (
          <SecondaryButton to="/signin" current={isCurrentLink("/myaccount")}>
            Sign In
          </SecondaryButton>
        )}
      </NavMenu>
    </>
  )
}

const CartLink = () => {
  const { cartDetails } = useShoppingCart()

  const realCartCount = Object.keys(cartDetails).filter(
    priceID => priceID !== process.env.GATSBY_STRIPE_SHIPPING_LINE_ITEM_PRICE_ID
  ).length

  let link_to = "/basket"
  if (!hasCompletedOnboarding()) {
    link_to = "/getstarted"
  }

  return (
    <Cart to={link_to}>
      <Image
        src="cart_icon_green.png"
        alt="cart"
        style={{ height: "30px", width: "30px" }}
      />
      <BasketCount>{`${realCartCount}`}</BasketCount>
    </Cart>
  )
}

export default Nav
