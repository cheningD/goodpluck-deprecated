import { Bold, Card, DetailCell2, Header, Spinner } from '../components/StyledComponentLib'
import { OrderDetail, SignedInData } from '../types'
import React, { useEffect, useState } from 'react'
import { getOrders, getSignedInData } from '../actions'
import { myOrders, signedInUser } from '../store'

import BasketDates from '../components/BasketDates'
import { DateTime } from 'luxon'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import startCase from 'lodash-es/startCase'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

const Page = styled.div`
  background-color: #fbe1cf;
  min-height: 100vh;
`
const Content = styled.div`
  width: 450px;
  margin: 32px, auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const Section = styled.section`
  margin: 0;
`
const StyledCard = styled(Card)`
  width: 100%;
  margin: 32px 0;
`

const H1 = styled.h1`
  color: #000;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
`

const H2 = styled.h2`
  color: #000;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1.75rem;
`

const MyAccount = () => {
  const [user, setUser] = useRecoilState(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)
  const [needsSignIn, setNeedsSignIn] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const signedInData: SignedInData = await getSignedInData()
      if (!signedInData || !signedInData.signedInUser) {
        setNeedsSignIn(true)
      } else {
        setUser(signedInData.signedInUser)
      }

      const orderData: Record<string, OrderDetail> = await getOrders()
      if (orderData) {
        setOrders(orderData)
      }
    }

    if (!user) {
      fetchData()
    }
  }, [])

  const loadingMsg = (
    <>
      <Header>Loading your account</Header>
      <Spinner />
    </>
  )

  const linkToSignIn = (
    <H1>
      Please <Link to="/signin">sign in</Link> to see your orders
    </H1>
  )

  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
  }

  let content = loadingMsg
  if (user && upcomingOrderData) {
    content = (
      <>
        <H1>{`Hi ${user.first},`}</H1>
        <UpcomingBasket {...upcomingOrderData} />
        <YourPlan orderFrequency={user.orderFrequency} />
      </>
    )
  } else if (needsSignIn) {
    content = linkToSignIn
  }

  return (
    <>
      <SEO title="My Account | Goodpluck" />
      <Nav />
      <Page>{content}</Page>
    </>
  )
}

export default MyAccount

const YourPlan = ({ orderFrequency }) => {
  return (
    <Section>
      <H2>Your Plan</H2>
      <StyledCard>
        <DetailCell2>Delivery Day</DetailCell2>
        <DetailCell2 bold right>
          Saturday
        </DetailCell2>
        <DetailCell2>Frequency</DetailCell2>
        <DetailCell2 bold right>
          {startCase(orderFrequency)}
        </DetailCell2>
      </StyledCard>
    </Section>
  )
}

const UpcomingBasket = ({
  scheduledStatus,
  editStatus,
  chargedStatus,
  deliveredStatus,
  editBasketStartDate,
  editBasketEndDate,
  chargedDate,
  deliveryDate,
  isPaused,
}) => {
  let message
  if (isPaused) {
    message = (
      <span>
        Your next basket has been <Bold>paused.</Bold>
      </span>
    )
  } else if (editStatus === 'done') {
    message = <span>Your card will be charged on </span>
    message = (
      <span>
        Your card will be charged on <Bold></Bold>
      </span>
    )
  } else if (editStatus === 'active') {
    message = (
      <span>
        You can <Bold>edit</Bold> your basket until midnight on{' '}
        <Bold>{DateTime.fromISO(editBasketEndDate).toFormat('ccc, LLL dd')}</Bold>
      </span>
    )
  } else if (scheduledStatus === 'done') {
    message = (
      <span>
        Your next basket is <Bold>scheduled</Bold> for delivery on{' '}
        <Bold>{DateTime.fromISO(deliveryDate).toFormat('ccc, LLL dd')}</Bold>
      </span>
    )
  } else if (scheduledStatus === 'active') {
    message = (
      <span>
        <span>Confirm your order to schedule your next basket</span>
      </span>
    )
  }

  return (
    <Section>
      <H2>Your upcoming basket</H2>
      {message}
      <BasketDates
        scheduledStatus={scheduledStatus}
        editStatus={editStatus}
        chargedStatus={chargedStatus}
        deliveredStatus={deliveredStatus}
        editBasketStartDate={editBasketStartDate}
        editBasketEndDate={editBasketEndDate}
        chargedDate={chargedDate}
        deliveryDate={deliveryDate}
        isPaused={isPaused}
      />
    </Section>
  )
}
