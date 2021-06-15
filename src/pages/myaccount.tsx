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
  Spinner,
  StyledErrorMessage,
  StyledField,
} from '../components/StyledComponentLib'
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { editOrder, pauseSubscription, restartSubscription, retrieveCustomer } from '../actions'
import { isSignedIn, myOrders, signedInUser, stripeCustomer } from '../store'
import { isoToNiceDate, sleep } from '../util'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketAccountShopLinks from '../components/BasketAccountShopLinks'
import BasketDates from '../components/BasketDates'
import { DateTime } from 'luxon'
import { Link } from 'gatsby'
import Nav from '../components/Nav'
import { OrderDetail } from '../types'
import SEO from '../components/SEO'
import { StripeUpdateCard } from '../components/StripeUpdateCard'
import startCase from 'lodash-es/startCase'
import styled from 'styled-components'

const Page = styled.div`
  background-color: var(--light-bg);
  min-height: 100vh;
  width: 100%;
  min-width: 320px;
`
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
  const user = useRecoilValue(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)
  const setSkipped = async (orderMondayIndex: string, skip: boolean) => {
    const response = await editOrder(orderMondayIndex, skip)
    console.log('response is:', JSON.stringify(response))
    console.log('updatedOrder is:', response.data.updatedOrder)
    if (response.data.updatedOrder) {
      setOrders(Object.assign({}, orders, { [orderMondayIndex]: response.data.updatedOrder }))
    }
  }

  const loadingMsg = (
    <>
      <Header>Loading your account</Header>
      <Spinner />
    </>
  )

  let upcomingOrderData: OrderDetail | null = null
  if (orders && Object.keys(orders).length > 0) {
    upcomingOrderData = orders[Object.keys(orders).slice().sort()[0]]
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
    content = (
      <>
        <H1>{`Hi ${user.first},`}</H1>
        <UpcomingBasket {...upcomingOrderData} />
        <MyPlan orderFrequency={user.orderFrequency} />
        <UpcomingOrders orders={orders} setSkipped={setSkipped} />
        <BillingInfo />
      </>
    )
  }

  if (!useRecoilValue(isSignedIn)) {
    content = (
      <H1>
        Please <Link to="/signin">sign in</Link> to see your orders
      </H1>
    )
  }

  return (
    <Page>
      <SEO title="My Account | Goodpluck" />
      <Nav />
      <BasketAccountShopLinks />
      <Content>
        {content}
        <a href="/logout">Logout</a>
      </Content>
    </Page>
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

const MyPlan = ({ orderFrequency }) => {
  const [showManage, setShowManage] = useState(false)
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
    return (
      <>
        <H2>My plan</H2>
        <Card>
          <Row>
            <Column flex="2">
              <div>
                Delivery Day: <strong>Saturday</strong>
              </div>
              <div>
                Frequency: <strong>{startCase(orderFrequency)}</strong>
              </div>
            </Column>
            <Column>
              <SecondaryButton as="button" onClick={() => setShowManage(!showManage)}>
                Pause subscription
              </SecondaryButton>
            </Column>
          </Row>
        </Card>
      </>
    )
  }
}

interface UpcomingOrderProps {
  skipped: boolean
}

const UpcomingOrder = styled.div<UpcomingOrderProps>`
  margin-bottom: 8px;
  ${props =>
    props.skipped
      ? `
    color: var(--secondary-text);
  `
      : ''}
`

const UpcomingOrders = ({ orders, setSkipped }) => {
  if (!orders) {
    return <Spinner color="var(--peach-bg)" />
  }
  const sortedOrders = Object.keys(orders)
    .slice()
    .sort()
    .map(orderIndexMonday => {
      const order = orders[orderIndexMonday]
      let orderIsSkipped = order.skipped || false
      let orderCanBeSkipped = !order.paid && DateTime.fromISO(order.editBasketEndDate) >= DateTime.local()

      let editButton: JSX.Element

      if (orderCanBeSkipped) {
        editButton = (
          <SecondaryButton
            inline={true}
            as="button"
            onClick={async () => await setSkipped(orderIndexMonday, !orderIsSkipped)}
          >
            {orderIsSkipped ? 'resume order' : 'skip'}
          </SecondaryButton>
        )
      }

      return (
        <UpcomingOrder skipped={orderIsSkipped} key={orderIndexMonday}>
          <strong>{isoToNiceDate(order.deliveryDate)}</strong> {orderIsSkipped ? '(skipped) ' : ''}
          {editButton}
        </UpcomingOrder>
      )
    })
  return (
    <>
      <H2>Upcoming Orders</H2>
      <Card>{sortedOrders}</Card>
    </>
  )
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
  if (customer && customer.defaultSourceObject.card) {
    cardInfo = (
      <Row>
        <Column flex={'3'}>
          <div>
            Expires on{' '}
            {`${customer.defaultSourceObject.card.exp_month || ''}/${customer.defaultSourceObject.card.exp_year || ''}`}
          </div>
          <div>Billing Zip: {`${customer.defaultSourceObject.billing_details.address.postal_code || ''}`}</div>
          <div>Card: **** **** **** {`${customer.defaultSourceObject.card.last4 || ''}`}</div>
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
      {isSubmitting ? <Spinner color="var(--peacvh-bg)" /> : ''}
      {showEdit && !isSubmitting ? editView : defaultView}
    </>
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
  isCancelled,
  cancelledReason,
}) => {
  let message
  if (isCancelled) {
    message = <span>{`${cancelledReason}`}</span>
  } else if (isPaused) {
    message = (
      <span>
        Your next basket has been <Bold>paused.</Bold>
      </span>
    )
  } else if (editStatus === 'done') {
    message = (
      <span>
        Your card will be charged on <Bold>{DateTime.fromISO(chargedDate).toFormat('ccc, LLL dd')}</Bold>
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
    <>
      <H2>My Next Basket</H2>
      <Card>
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
      </Card>
    </>
  )
}
