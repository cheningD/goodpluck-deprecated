import { Container, Heading, Link, Spinner, Text, VStack } from '@chakra-ui/react'
import { OrderDetail, OrderSupabase } from '../types'
import { isSignedIn, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Basket from '../components/Basket'
import BasketSkippedCard from '../components/BasketSkippedCard'
import Countdown from '../components/Countdown'
import { DateTime } from 'luxon'
import GatsbyLink from 'gatsby-link'
import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'
import { getSetSkippedFunc } from '../actions'

const compareOrders = (a: OrderSupabase, b: OrderSupabase) => {
  console.log('a', a)
  console.log('b', b)
  if (a.order_index < b.order_index) {
    return -1
  } else if (a.order_index > b.order_index) {
    return 1
  } else {
    return 0
  }
}

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

    let upcomingOrderData: OrderSupabase | null = null

    if (orders && orders.length > 0) {
      //Get the earliest order
      upcomingOrderData = orders
        .slice()
        .sort((a, b) => (a.order_index < b.order_index ? -1 : 1))
        .slice()[0]
    }

    if (!upcomingOrderData) {
      content = <Spinner color="var(--peach-bg)" />
    } else if (upcomingOrderData && upcomingOrderData.skipped) {
      content = (
        <>
          <Container bg="white" mx={0} w="100%" borderRadius="md" p={4}>
            <BasketSkippedCard
              setSkipped={setSkipped}
              deliveryDate={upcomingOrderData.delivery_date}
              mondayOfOrderDateString={upcomingOrderData.order_index}
            />
          </Container>
          <Basket canEdit={false} skipped={true} />
        </>
      )
    } else if (DateTime.local() < DateTime.fromISO(upcomingOrderData.edit_start_date)) {
      const startTime = DateTime.fromISO(upcomingOrderData.edit_end_date)
      content = (
        <>
          <Container bg="white" mx={0} w="100%" borderRadius="md" p={4}>
            <Countdown startTime={startTime} data-testid="countdown" />
          </Container>
        </>
      )
    } else if (DateTime.fromISO(upcomingOrderData.edit_end_date) < DateTime.local()) {
      // You can no longer edit your basket
      content = (
        <>
          <Container bg="white" mx={0} w="100%" borderRadius="md" p={4}>
            Your order is being finalized now.
          </Container>
          <Basket canEdit={false} />
        </>
      )
    } else {
      content = <Basket canEdit={true} />
    }
  }

  return (
    <Container bg="var(--light-bg)" minH="100vh" minW="100%" p={0}>
      <Nav activelink="basket" />
      <VStack w={['100%', '100%', '550px']} spacing={4} borderRadius="md" mx="auto" p={0} mt={4}>
        {content}
      </VStack>
    </Container>
  )
}
export default BasketPage

export const Head = () => {
  return <Seo title="My Basket" />
}
