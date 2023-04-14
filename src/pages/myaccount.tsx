import * as yup from 'yup'

import {
  Bold,
  Card,
  Column,
  DangerButton,
  Error,
  H1,
  H2,
  Header,
  PrimaryButton,
  Row,
  SecondaryButton,
  StyledErrorMessage,
  StyledField,
} from '../components/StyledComponentLib'
import { Container, Heading, Link, Spinner, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { OrderSupabase, SignedInUser } from '../types'
import React, { useEffect, useState } from 'react'
import { centsToString, sleep } from '../util'
import {
  changeDeliveryDay,
  getSetSkippedFunc,
  pauseSubscription,
  restartSubscription,
  retrieveCustomer,
} from '../actions'
import { isSignedIn, myOrders, signedInUser, stripeCustomer } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import Balance from '../components/Balance'
import BasketDates from '../components/BasketDates'
import BasketSkippedCard from '../components/BasketSkippedCard'
import { DateTime } from 'luxon'
import GatsbyLink from 'gatsby-link'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import { StripeUpdateCard } from '../components/StripeUpdateCard'
import UpcomingOrders from '../components/UpcomingOrders'
import startCase from 'lodash-es/startCase'
import styled from 'styled-components'

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  // Phone screens
  @media screen and (max-width: 479px) {
    padding: 0 8px;
  }
`
const ErrorMessage = styled(StyledErrorMessage)`
  color: var(--blackish);
`

const MyAccount = () => {
  const user: SignedInUser = useRecoilValue(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)
  const setSkipped = getSetSkippedFunc(orders, setOrders)

  const loadingMsg = (
    <>
      <Header>Loading your account</Header>
      <Spinner color="var(--peach-bg)" />
    </>
  )

  let upcomingOrderData: OrderSupabase | null = null
  if (orders && orders.length > 0) {
    //Get the earliest order
    upcomingOrderData = orders.sort((a, b) => (a.order_index < b.order_index ? -1 : 1)).slice()[0]
  }

  let content = loadingMsg
  if (user && user.subscriptionIsActive === false) {
    content = (
      <>
        <H1>{`Hi ${user.first},`}</H1>
        <H2>Your subscription is not active</H2>
        <RestartMySubscription />
      </>
    )
  } else if (user && upcomingOrderData) {
    let deliveryDay = 'Sunday'
    if (user.deliveryDate && user.deliveryDate.toLowerCase().includes('monday')) {
      deliveryDay = 'Monday'
    }
    content = (
      <>
        <H1>{`Hi ${user.first},`}</H1>
        <UpcomingBasket setSkipped={setSkipped} {...upcomingOrderData} />
        <MyPlan orderFrequency={user.orderFrequency} deliveryDay={deliveryDay} />
        <UpcomingOrders orders={orders} setSkipped={setSkipped} />
        <Balance />
        <BillingInfo />
      </>
    )
  }
  let logoutBtn = <div></div>

  if (!useRecoilValue(isSignedIn)) {
    content = (
      <Heading>
        Please{' '}
        <Text as="u" color="blue.500">
          <Link as={GatsbyLink} to="/signin">
            sign in
          </Link>
        </Text>{' '}
        to see your account
      </Heading>
    )
  } else {
    logoutBtn = <a href="/logout">Logout</a>
  }

  return (
    <Container bg="var(--light-bg)" minH="100vh" minW="100%" p={0}>
      <Seo title="My Account | Goodpluck" />
      <Nav activelink={'my account'} />
      <Content>
        {content}
        {logoutBtn}
      </Content>
    </Container>
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

const RestartMySubscription = ({}) => {
  const [errorText, setErrorText] = useState('')
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={async (values, actions) => {
          const result = await restartSubscription()
          if (result.success) {
            if (typeof window !== `undefined`) {
              window.location.reload()
            }
          } else {
            setErrorText(result.error || 'Could not restart subscription. Please contact us if this issue persists')
          }
          actions.setSubmitting(false)
        }}
      >
        <Form>
          {errorText ? <Error>{errorText}</Error> : ''}
          <PrimaryButton as="button" type="submit">
            Restart my subscription
          </PrimaryButton>
        </Form>
      </Formik>
    </div>
  )
}

const PauseMySubscription = ({}) => {
  const [errorText, setErrorText] = useState('')
  return (
    <>
      <Formik
        initialValues={{ reason: '' }}
        validationSchema={handleEditSubscriptionSchema}
        onSubmit={async (values, actions) => {
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
    </>
  )
}

const MyPlan = ({ orderFrequency, deliveryDay }) => {
  const [showManage, setShowManage] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [user, setUser] = useRecoilState(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)

  if (showManage) {
    return (
      <>
        <H2>My plan</H2>
        <Card>
          <PauseMySubscription />
          <SecondaryButton as="button" onClick={() => setShowManage(!showManage)}>
            Hide
          </SecondaryButton>
        </Card>
      </>
    )
  } else {
    const alternateDeliveryDay = deliveryDay === 'Monday' ? 'Sunday' : 'Monday'
    return (
      <>
        <H2>My plan</H2>
        <Card>
          <Row>
            <Column flex="2">
              <div>
                Delivery Day: <Bold>{deliveryDay || 'Sunday'}</Bold>
              </div>
              <div>
                Frequency: <Bold>{startCase(orderFrequency)}</Bold>
              </div>
            </Column>
            <Column>
              {showSpinner ? (
                <Spinner />
              ) : (
                <SecondaryButton
                  as="button"
                  onClick={() => changeDeliveryDay(alternateDeliveryDay, setUser, setOrders, setShowSpinner)}
                >
                  {`switch to ${alternateDeliveryDay} delivery`}
                </SecondaryButton>
              )}
            </Column>
          </Row>
          <SecondaryButton as="button" onClick={() => setShowManage(!showManage)}>
            Pause subscription
          </SecondaryButton>
        </Card>
      </>
    )
  }
}

const BillingInfo = ({}) => {
  const [showEdit, setShowEdit] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)
  const [customer, setCustomer] = useRecoilState(stripeCustomer)
  const signedIn = useRecoilValue(isSignedIn)

  const fetchCustomer = async () => {
    while (!signedIn) {
      console.log('Waiting for signin')
      await sleep(1000)
    }

    // GET SIGNED IN USER
    const stripeCustomer = await retrieveCustomer()
    if (stripeCustomer && stripeCustomer.defaultSourceObject) {
      setCustomer(stripeCustomer)
    }
  }

  useEffect(() => {
    fetchCustomer()
  }, [signedIn])

  let cardInfo
  if (customer && customer.default_source) {
    cardInfo = (
      <Row>
        <Column flex={'3'}>
          <div>Expires on {`${customer.default_source.exp_month || ''}/${customer.default_source.exp_year || ''}`}</div>
          <div>Billing Zip: {`${customer.default_source.address_zip || ''}`}</div>
          <div>Card: **** **** **** {`${customer.default_source.last4 || ''}`}</div>
        </Column>
        <Column alignItems="flex-end">
          <SecondaryButton as="button" onClick={() => setShowEdit(true)}>
            Edit
          </SecondaryButton>
        </Column>
      </Row>
    )
  }
  const defaultView = (
    <Card>
      <div>
        {cardInfo ? (
          cardInfo
        ) : (
          <>
            <Spinner color="var(--peach-bg)" />
          </>
        )}
      </div>
    </Card>
  )
  const editView = (
    <Card>
      <div>Credit or debit card</div>
      <StripeUpdateCard
        onSuccess={async () => {
          setSubmitting(true)
          await fetchCustomer()
          setShowEdit(false)
          setSubmitting(false)
        }}
      />
      <SecondaryButton as="button" onClick={() => setShowEdit(false)}>
        Cancel
      </SecondaryButton>
    </Card>
  )

  return (
    <>
      <H2>Billing Info</H2>
      {isSubmitting ? <Spinner color="var(--peach-bg)" /> : ''}
      {showEdit && !isSubmitting ? editView : defaultView}
    </>
  )
}

const UpcomingBasket = ({
  order_index,
  delivered,
  edit_start_date,
  edit_end_date,
  charged_date,
  delivery_date,
  skipped,
  paid,
  cancelled_reason,
  setSkipped,
}) => {
  let message
  if (cancelled_reason) {
    message = <span>{`${cancelled_reason}`}</span>
  } else if (skipped) {
    message = (
      <BasketSkippedCard setSkipped={setSkipped} deliveryDate={delivery_date} mondayOfOrderDateString={order_index} />
    )
  } else if (edit_end_date < DateTime.local().toISO() && !paid) {
    message = (
      <span>
        Your card will be charged on <Bold>{DateTime.fromISO(charged_date).toFormat('ccc, LLL dd')}</Bold>
      </span>
    )
  } else if (edit_end_date > DateTime.local().toISO()) {
    message = (
      <span>
        You can <Bold>edit</Bold> your basket until midnight on{' '}
        <Bold>{DateTime.fromISO(edit_end_date).toFormat('ccc, LLL dd')}</Bold>
      </span>
    )
  } else {
    message = (
      <span>
        Your next basket is <Bold>scheduled</Bold> for delivery on{' '}
        <Bold>{DateTime.fromISO(delivery_date).toFormat('ccc, LLL dd')}</Bold>
      </span>
    )
  }

  return (
    <>
      <H2>My Next Basket</H2>
      <Card>
        {message}
        {cancelled_reason || skipped ? (
          ''
        ) : (
          <BasketDates
            scheduledStatus={'done'}
            editStatus={edit_end_date > DateTime.local().toISO() ? 'active' : 'done'}
            chargedStatus={paid ? 'done' : null}
            deliveredStatus={delivered ? 'done' : null}
            editBasketStartDate={edit_start_date}
            editBasketEndDate={edit_end_date}
            chargedDate={charged_date}
            deliveryDate={delivery_date}
          />
        )}
      </Card>
    </>
  )
}
