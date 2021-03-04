import React, { useState } from 'react'
import { isSignedIn, myOrders } from '../store'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import CountDown from '../components/Countdown'
import { DateTime } from 'luxon'
import MarketView from '../components/MarketView'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import SEO from '../components/SEO'
import { Spinner } from '../components/StyledComponentLib'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding-bottom: 32px;
`

const Market = () => {
  let content
  const orders = useRecoilValue(myOrders)
  const [countdown, setCountdown] = useState('')
  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }
  if (!useRecoilValue(isSignedIn)) {
    content = <Spinner data-testid="spinner" />
  } else if (
    upcomingOrderData &&
    DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
  ) {
    const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
    content = <CountDown startTime={startTime} />
  } else {
    content = <MarketView />
  }
  return (
    <Page>
      <SEO title="Market | Local Produce" />
      <Nav />
      <BasketAccountShopLinks />
      {content}
    </Page>
  )
}
export default Market
