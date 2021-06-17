import { Card, Spinner } from '../components/StyledComponentLib'
import React, { useState } from 'react'
import { isSignedIn, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import BasketSkippedCard from '../components/BasketSkippedCard'
import CountDown from '../components/Countdown'
import { DateTime } from 'luxon'
import MarketView from '../components/MarketView'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import SEO from '../components/SEO'
import { getSetSkippedFunc } from '../actions'
import styled from 'styled-components'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  padding-bottom: 32px;
`

const Container = styled.div`
  max-width: 800px;
  margin: 32px 32px 0 32px;
`

const Market = () => {
  return (
    <Page>
      <SEO title="Market | Local Produce" />
      <Nav />
      <BasketAccountShopLinks />
      <Container>
        <MarketContent />
      </Container>
    </Page>
  )
}

const MarketContent = () => {
  const [orders, setOrders] = useRecoilState(myOrders)
  const setSkipped = getSetSkippedFunc(orders, setOrders)
  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }
  if (!useRecoilValue(isSignedIn)) {
    return <Spinner data-testid="spinner" />
  } else if (upcomingOrderData && upcomingOrderData.skipped) {
    return (
      <>
        <Card>
          <BasketSkippedCard
            setSkipped={setSkipped}
            deliveryDate={upcomingOrderData.deliveryDate}
            mondayOfOrderDateString={upcomingOrderData.mondayOfOrderDateString}
          />
        </Card>
        <MarketView canEdit={false} />
      </>
    )
  } else if (
    upcomingOrderData &&
    DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
  ) {
    const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
    return (
      <Card>
        <CountDown startTime={startTime} />
      </Card>
    )
  } else {
    return <MarketView canEdit={true} />
  }
}

export default Market
