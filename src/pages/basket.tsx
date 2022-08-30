import { Container, Heading, Link, Spinner, Text, VStack } from '@chakra-ui/react'
import { isSignedIn, myOrders } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Basket from '../components/Basket'
import BasketSkippedCard from '../components/BasketSkippedCard'
import Countdown from '../components/Countdown'
import { DateTime } from 'luxon'
import GatsbyLink from 'gatsby-link'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import React from 'react'
import Seo from '../components/Seo'
import { getSetSkippedFunc } from '../actions'

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
      content = <Spinner color="var(--peach-bg)" />
    } else if (upcomingOrderData && upcomingOrderData.skipped) {
      content = (
        <>
          <Container bg="white" mx={0} w="100%" borderRadius="md" p={4}>
            <BasketSkippedCard
              setSkipped={setSkipped}
              deliveryDate={upcomingOrderData.deliveryDate}
              mondayOfOrderDateString={upcomingOrderData.mondayOfOrderDateString}
            />
          </Container>
          <Basket canEdit={false} skipped={true} />
        </>
      )
    } else if (DateTime.local() < DateTime.fromISO(upcomingOrderData.editBasketStartDate) {
      const startTime = DateTime.fromISO(upcomingOrderData.editBasketStartDate)
      content = (
        <>
          <Container bg="white" mx={0} w="100%" borderRadius="md" p={4}>
            <Countdown startTime={startTime} data-testid="countdown" />
          </Container>
        </>
      )
    } else if (DateTime.fromISO(upcomingOrderData.editBasketEndDate) < DateTime.local()) {
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
      <Seo title="My Basket" />
      <Nav activelink="basket" />
      <VStack w={['100%', '100%', '550px']} spacing={4} borderRadius="md" mx="auto" p={0} mt={4}>
        {content}
      </VStack>
    </Container>
  )
}
export default BasketPage
