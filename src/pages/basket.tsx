import React, { useState } from 'react'
import { isSignedIn, myOrders } from '../store'

import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import CountDown from '../components/CountDown'
import { DateTime } from 'luxon'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
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
  let content
  if (!useRecoilValue(isSignedIn)) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to see your orders
      </H1>
    )
  } else {
    const orders = useRecoilValue(myOrders)
    const [countdown, setCountdown] = useState('')
    const [intervalID, setIntervalID] = useState(0)

    let upcomingOrderData: OrderDetail | null = null
    if (orders && Object.keys(orders).length > 0) {
      upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
    }

    if (!upcomingOrderData) {
      content = <Spinner />
    } else if (DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })) {
      const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
      content = <CountDown startTime={startTime} />
    } else if (DateTime.fromISO(upcomingOrderData.editBasketEndDate) < DateTime.local()) {
      // You can no longer edit your basket
      content = (
        <>
          <div>Your order is being finalized now.</div>
          <BasketContainer>
            <Basket canEdit={false} />
          </BasketContainer>
        </>
      )
    } else {
      content = (
        <BasketContainer>
          <Basket canEdit={true} />
        </BasketContainer>
      )
    }
  }

  return (
    <Page>
      <SEO title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      {content}
    </Page>
  )
}
export default BasketPage
