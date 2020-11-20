import { isSignedIn, myOrders } from '../store'

import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import { DateTime } from 'luxon'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import React from 'react'
import SEO from '../components/SEO'
import { Spinner } from '../components/StyledComponentLib'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
`

const BasketContainer = styled.div`
  padding: 16px;
  font-weight: 500;
  max-width: 500px;
  margin: 32px auto;
`

const H1 = styled.h1`
  color: var(--blackish);
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
`

const BasketPage = () => {
  const orders = useRecoilValue(myOrders)

  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }

  let canEditBasket: boolean = true
  let basketConfirmationMessage = ''
  const dateNow = DateTime.local()
  // If editBasketEndDate is in the past, dont let them edit....
  if (upcomingOrderData && DateTime.fromISO(upcomingOrderData.editBasketEndDate) < DateTime.local()) {
    canEditBasket = false
    basketConfirmationMessage = "Your basket has been confirmed. We're plucking your produce now!"
  }

  let content = <Spinner />

  if (useRecoilValue(isSignedIn) || process.env.GATSBY_DEPLOY_ENVIRONMENT === 'DEVELOPMENT') {
    content = (
      <BasketContainer>
        <Basket canEdit={canEditBasket} />
      </BasketContainer>
    )
  }

  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      {basketConfirmationMessage}
      {content}
    </Page>
  )
}
export default BasketPage
