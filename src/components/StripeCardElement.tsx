import { Alert, AlertIcon } from '@chakra-ui/react'

import { CardElement } from '@stripe/react-stripe-js'
import React from 'react'
import styled from 'styled-components'

const CardElementStyle = {
  base: {
    iconColor: '#788474',
    color: '#333',
    fontWeight: '500',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontSmoothing: 'antialiased',

    ':-webkit-autofill': {
      color: '#fce883',
    },
    '::placeholder': {
      color: '#333',
    },
  },
  invalid: {
    iconColor: '#CE5852',
    color: '#CE5852',
  },
}

const StripeCardElement = ({ stripeError, setStripeError }) => {
  // Handle real-time validation errors from the card Element.
  const handleChangeStripe = event => {
    if (event.error) {
      setStripeError(event.error.message)
    } else {
      setStripeError(null)
    }
  }
  return (
    <>
      <CardElement id="card-element" options={{ style: CardElementStyle }} onChange={handleChangeStripe} />
      {stripeError ? (
        <Alert status="error" data-testid="stripe-error">
          <AlertIcon />
          {stripeError}
        </Alert>
      ) : (
        ''
      )}
    </>
  )
}

export default StripeCardElement
