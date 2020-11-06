import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Tabs = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: baseline;
  margin: 32px 16px;
`

interface TabProps {
  current: boolean
}

const Tab = styled(Link)<TabProps>`
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1.75rem;
  padding: 8px 16px;
  margin: 0 16px;
  color: var(--blackish);
  text-decoration: none;
  text-transform: capitalize;
  outline: none;

  ${props =>
    props.current
      ? `
      border-bottom: 2px solid;
      border-color:  var(-—peach-bg);
      `
      : ``}

  &:hover,
  &:focus {
    background-color: var(--white);
    position: relative;
    border: 2px solid;
    border-color: var(--blackish);
  }

  &:active {
    top: -2px;
  }
`

const BasketAccountShopLinks = () => {
  let path = ''
  if (typeof window !== `undefined`) {
    path = window.location.pathname
  }
  return (
    <Tabs>
      <Tab to="/market" current={path.startsWith('/market')}>
        Shop the market
      </Tab>
      <Tab to="/basket" current={path.startsWith('/basket')}>
        My Basket
      </Tab>
      <Tab to="/myaccount" current={path.startsWith('/myaccount')}>
        My Account
      </Tab>
    </Tabs>
  )
}

export default BasketAccountShopLinks
