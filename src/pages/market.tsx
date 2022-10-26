import { Container, Heading, Link, Text } from '@chakra-ui/react'
import { OrderDetail, OrderSupabase } from '../types'
import { isSignedIn, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketSkippedCard from '../components/BasketSkippedCard'
import { Card } from '../components/StyledComponentLib'
import CountDown from '../components/Countdown'
import { DateTime } from 'luxon'
import GatsbyLink from 'gatsby-link'
import MarketView from '../components/MarketView'
import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'
import { getSetSkippedFunc } from '../actions'

const Market = () => {
  return (
    <Container bg="var(--light-bg)" minH="100vh" h="100%" p="0" m="0" minW="100vw">
      <Nav activelink="market" />
      <MarketContent />
    </Container>
  )
}

const MarketContent = () => {
  const [orders, setOrders] = useRecoilState(myOrders)
  const setSkipped = getSetSkippedFunc(orders, setOrders)
  let upcomingOrderData: OrderSupabase | null = null

  if (orders && orders.length > 0) {
    //Get the earliest order
    upcomingOrderData = orders.slice().sort((a, b) => (a.order_index < b.order_index ? -1 : 1))[0]
  }
  if (!useRecoilValue(isSignedIn)) {
    return (
      <Heading>
        Please{' '}
        <Text as="u" color="blue.500">
          <Link as={GatsbyLink} to="/signin">
            sign in
          </Link>
        </Text>{' '}
        to shop the market
      </Heading>
    )
  } else if (upcomingOrderData && upcomingOrderData.skipped) {
    return (
      <Container bg="tomato" p={[0, 0, 4]} w="100%" h="100%" mx={[0, 0, 'auto']}>
        <Card>
          <BasketSkippedCard
            setSkipped={setSkipped}
            deliveryDate={upcomingOrderData.delivery_date}
            mondayOfOrderDateString={upcomingOrderData.order_index}
          />
        </Card>
        <MarketView canEdit={false} />
      </Container>
    )
  } else if (
    upcomingOrderData &&
    DateTime.local() < DateTime.fromISO(upcomingOrderData.edit_start_date).set({ hour: 17 })
  ) {
    const startTime = DateTime.fromISO(upcomingOrderData.edit_end_date).set({ hour: 17 })
    return (
      <>
        <Card>
          <CountDown startTime={startTime} />
        </Card>
        <MarketView canEdit={false} />
      </>
    )
  } else {
    return <MarketView canEdit={true} />
  }
}

export default Market

export const Head = () => {
  return <Seo title="Market | Local Produce" />
}
