import { Bold, Spinner } from '../components/StyledComponentLib'
import { OrderDetail, SignedInData } from '../types'
import React, { useEffect, useState } from 'react'
import { getOrders, getSignedInData } from '../actions'
import { myOrders, signedInUser } from '../store'

import BasketDates from '../components/BasketDates'
import { DateTime } from 'luxon'
import { Header } from '../components/StyledComponentLib'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

const Page = styled.div`
  background-color: #fbe1cf;
  padding: 32px 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    message = <span>Your card will be charged on {chargedDate}</span>
  } else if (editStatus === 'active') {
    message = (
      <span>
        You can <Bold>edit</Bold> your basket until{' '}
        <Bold>{DateTime.fromISO(editBasketEndDate).toFormat('ha ccc, LLL dd')}</Bold>
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
    <>
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
    </>
  )
}
