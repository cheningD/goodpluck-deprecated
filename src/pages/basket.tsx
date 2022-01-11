import { Card, Spinner } from '../components/StyledComponentLib'
import { Heading, Link, Text } from '@chakra-ui/react'
import { isSignedIn, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Basket from '../components/Basket'
import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import BasketSkippedCard from '../components/BasketSkippedCard'
import Countdown from '../components/Countdown'
import { DateTime } from 'luxon'
import GatsbyLink from 'gatsby-link'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import React from 'react'
import Seo from '../components/Seo'
import { getSetSkippedFunc } from '../actions'
import styled from 'styled-components'

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
      <Heading>
        Please{' '}
        <Text as="u" color="blue.500">
          <Link as={GatsbyLink} to="/signin">
            sign in
          </Link>
        </Text>{' '}
        to view your basket
      </Heading>
    )
  } else {
    const [orders, setOrders] = useRecoilState(myOrders)
    const setSkipped = getSetSkippedFunc(orders, setOrders)

    let upcomingOrderData: OrderDetail | null = null

    if (orders && Object.keys(orders).length > 0) {
      // DOUBT: What does this do here : Object.keys(orders).slice().sort()[0]
      upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
    }
    if (!upcomingOrderData) {
      content = <Spinner data-testid="spinner" />
    } else if (upcomingOrderData && upcomingOrderData.skipped) {
      content = (
        <BasketContainer>
          <Card>
            <BasketSkippedCard
              setSkipped={setSkipped}
              deliveryDate={upcomingOrderData.deliveryDate}
              mondayOfOrderDateString={upcomingOrderData.mondayOfOrderDateString}
            />
          </Card>
          <Basket canEdit={false} skipped={true} />
        </BasketContainer>
      )
    } else if (DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })) {
      const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate).set({ hour: 17 })
      content = (
        <BasketContainer>
          <Card>
            <Countdown startTime={startTime} data-testid="countdown" />
          </Card>
        </BasketContainer>
      )
    } else if (DateTime.fromISO(upcomingOrderData.editBasketEndDate) < DateTime.local()) {
      // You can no longer edit your basket
      content = (
        <BasketContainer>
          <Card>Your order is being finalized now.</Card>
          <Basket canEdit={false} />
        </BasketContainer>
      )
    } else {
      content = (
        <BasketContainer data-testid="editable-basket">
          <Basket canEdit={true} />
        </BasketContainer>
      )
    }
  }

  return (
    <Page>
      <Seo title="My Basket" />
      <Nav />
      <BasketAccountShopLinks />
      {content}
    </Page>
  )
}
export default BasketPage
