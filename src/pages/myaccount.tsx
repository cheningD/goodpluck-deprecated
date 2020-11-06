import * as yup from 'yup'

import {
  Bold,
  Card,
  DetailCell2,
  Error,
  Header,
  Spinner,
  StyledErrorMessage,
  StyledField,
  SubmitButton,
} from '../components/StyledComponentLib'
import { Form, Formik } from 'formik'
import { OrderDetail, SignedInData } from '../types'
import React, { useEffect, useState } from 'react'
import { getOrders, getSignedInData, pauseSubscription } from '../actions'
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
  padding: 32px; 16px;
`
const Content = styled.div`
  min-width: 375px;
  max-width: 500px;
  margin: 0, auto;
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

const Button = styled(SubmitButton)`
  background-color: #fff;
  border-color: #000;
  margin: 16px 0;
  width: 300px;
  height: 50px;
  text-transform: capitalize;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 1rem;
`

const DangerButton = styled(Button)`
  border-color: #e34843;
`

const ErrorMessage = styled(StyledErrorMessage)`
  color: #000;
`

const H1 = styled.h1`
  color: #000;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 2rem;
  margin: 0;
  padding: 32px 0;
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
      <Page>
        <Content>{content}</Content>
      </Page>
    </>
  )
}

export default MyAccount

const handleEditSubscriptionSchema = yup.object().shape({
  reason: yup
    .string()
    .required(`Please tell us why you'd like to stop your subscription`)
    .min(5, 'Please give a little more detail!')
    .max(300, 'This text box is limited to 300 characters. Want to say more? Email us at help@goodpluck.com'),
})

const PauseMySubscription = ({}) => {
  const [errorText, setErrorText] = useState('')
  return (
    <div>
      <Formik
        initialValues={{ reason: '' }}
        validationSchema={handleEditSubscriptionSchema}
        onSubmit={async (values, actions) => {
          console.log({ values, actions })
          const result = await pauseSubscription(values.reason)
          if (result.success) {
            if (typeof window !== `undefined`) {
              window.location.reload()
            }
          } else {
            setErrorText(result.error || 'Could not stop subscription. Please contact us if this issue persists')
          }
          actions.setSubmitting(false)
        }}
      >
        <Form>
          <H2>Stop or pause your subscription</H2>
          <StyledField
            component="textarea"
            id="reason"
            name="reason"
            placeholder="Please tell us why you'd like to stop your subscription"
          />
          <ErrorMessage name="reason" component="div" />
          {errorText ? <Error>{errorText}</Error> : ''}
          <DangerButton as="button" type="submit">
            Stop my subscription
          </DangerButton>
        </Form>
      </Formik>
    </div>
  )
}

const YourPlan = ({ orderFrequency }) => {
  const [showManage, setShowManage] = useState(false)
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

      <Button as="button" onClick={() => setShowManage(!showManage)}>
        {showManage ? `Hide` : `Manage`}
      </Button>

      {showManage ? <PauseMySubscription /> : ''}
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
