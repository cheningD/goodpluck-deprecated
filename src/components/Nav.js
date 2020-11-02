import {
  ButtonSmall,
  TabletAndMobileViewOnly,
} from "../components/StyledComponentLib"
import {
  hasCompletedOnboarding,
  isCurrentLink,
  isSignedIn,
  showCartIcon,
  showGetStarted,
} from "../util"

import { Hamburger } from "./Hamburger"
import Image from "./Image"
import { Link } from "gatsby"
import React from "react"
import { basketCount } from "../store"
import styled from "styled-components"
import { useRecoilValue } from "recoil"

const NavBar = styled.div`
  line-height: 1;
  padding: 16px 32px;
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

  let accountLink = (
    <NavLink to="/signin" current={isCurrentLink("/signin")}>
      Sign In
    </NavLink>
  )
  let accountLink2 = (
    <SecondaryButton to="/signin" current={isCurrentLink("/signin")}>
      Sign In
    </SecondaryButton>
  )

  if (isSignedIn()) {
    accountLink = (
      <NavLink to="/myaccount" current={isCurrentLink("/myaccount")}>
        My Account
      </NavLink>
    )
    accountLink2 = (
      <SecondaryButton to="/myaccount" current={isCurrentLink("/myaccount")}>
        My Account
      </SecondaryButton>
    )
  } else if (hasCompletedOnboarding()) {
    accountLink = (
      <NavLink to="/signin?verify" current={isCurrentLink("/signin")}>
        My Account
      </NavLink>
    )
    accountLink2 = (
      <SecondaryButton to="/signin?verify" current={isCurrentLink("/signin")}>
        My Account
      </SecondaryButton>
    )
  }
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
            {accountLink}
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
        {accountLink2}
      </NavMenu>
    </>
  )
}

const CartLink = () => {
  let link_to
  if (isSignedIn()) {
    link_to = "/basket"
  } else if (hasCompletedOnboarding()) {
    link_to = "/basket"
  } else {
    link_to = "/getstarted"
  }

  return (
    <Cart to={link_to}>
      <Image
        src="cart_icon_green.png"
        alt="my basket"
        style={{ height: "30px", width: "30px" }}
      />
      <BasketCount>{useRecoilValue(basketCount)}</BasketCount>
    </Cart>
  )
}

export default Nav
