import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { CardElementStyle, PrimaryButton } from '../components/StyledComponentLib'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'

import { loadStripe } from '@stripe/stripe-js/pure'
import { navigate } from 'gatsby'
import styled from 'styled-components'
import { updateStripeCard } from '../actions'

let stripe_api_key = process.env.GATSBY_STRIPE_API_PUBLIC_KEY
if (process.env.GATSBY_DEPLOY_ENVIRONMENT !== 'PRODUCTION') {
  stripe_api_key = process.env.GATSBY_STAGING_STRIPE_API_PUBLIC_KEY
}
const stripePromise = loadStripe(stripe_api_key)

const StripeError = styled.div`
  width: 100%;
  background-color: #fff;
  color: #ce5852;
  padding: 8px 16px;
`

const CardContainer = styled.div`
  box-shadow: 0 1px 3px 0 #e6ebf1;
  padding: 10px 12px;
  border: 1px solid transparent;
  box-sizing: border-box;
  height: 40px;
  border-radius: 4px;
  margin: 16px 0px 24px;
`

export const StripeUpdateCard = ({ onSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <StripeUpdateCardForm onSuccess={onSuccess} />
    </Elements>
  )
}

const StripeUpdateCardForm = ({ onSuccess }) => {
  const [stripeError, setStripeError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()
  const onSubmit = async () => {
    const card = elements.getElement(CardElement)
    const createTokenResult = await stripe.createToken(card)

    console.log('createTokenResult', createTokenResult)

    if (createTokenResult.error) {
      // Inform the user if there was an error.
      setStripeError(createTokenResult.error.message)
      console.info('GP Stripe Error', setStripeError(createTokenResult.error.message))
    } else {
      setStripeError(null)
      const result = await updateStripeCard(createTokenResult.token.id)

      if (!result || result.error) {
        console.log('Update card failed, please try again.', result)
      } else {
        onSuccess()
      }
    }
  }

  // Handle real-time validation errors from the card Element.
  const handleChangeStripe = event => {
    if (event.error) {
      setStripeError(event.error.message)
    } else {
      setStripeError(null)
    }
  }
  return (
    <div>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {({ isSubmitting, errors, touched }) => {
          return (
            <Form>
              <CardContainer>
                <CardElement id="card-element" options={{ style: CardElementStyle }} onChange={handleChangeStripe} />
              </CardContainer>
              {stripeError ? <StripeError data-testid="stripe-error">{stripeError}</StripeError> : ''}
              <PrimaryButton as="button" type="submit" disabled={isSubmitting}>
                Update
              </PrimaryButton>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
