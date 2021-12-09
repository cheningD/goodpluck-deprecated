import * as Sentry from '@sentry/gatsby'
import * as yup from 'yup'

import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { VALID_ZIP_PATTERN, getMaxlengthFunc, removeNonNumbers } from '../util'

import CheckoutFields from '../components/CheckoutFields'
import CheckoutSummary from '../components/CheckoutSummary'
import { FormLayout } from '../components/FormLayout'
import GatsbyLink from 'gatsby-link'
import { SignupData } from '../types'
import { createUser } from '../actions'
import { loadStripe } from '@stripe/stripe-js/pure'
import { navigate } from 'gatsby-link'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

let stripe_api_key = process.env.GATSBY_STRIPE_API_PUBLIC_KEY
if (process.env.GATSBY_DEPLOY_ENVIRONMENT !== 'PRODUCTION') {
  stripe_api_key = process.env.GATSBY_STAGING_STRIPE_API_PUBLIC_KEY
}
const stripePromise = loadStripe(stripe_api_key)

const schema = {
  first: yup.string().required('Please enter your first name').test('len', 'Too Long!', getMaxlengthFunc(100)),
  last: yup.string().required('Please enter your last name').test('len', 'Too Long!', getMaxlengthFunc(100)),
  email: yup
    .string()
    .required('Please enter your email')
    .email("That email doesn't look right")
    .test('len', 'Too Long!', getMaxlengthFunc(300)),
}

const schema1 = {
  addressLine1: yup.string().required('Where should we send your box?').test('len', 'Too Long!', getMaxlengthFunc(100)),
  addressLine2: yup.string().test('len', 'Too Long!', getMaxlengthFunc(100)),
  phone: yup
    .string()
    .required('We need your phone number for delivery updates only')
    .test('len', 'Too Long!', getMaxlengthFunc(100)),
  zip: yup
    .string()
    .required('We need your 5 digit zip')
    .matches(VALID_ZIP_PATTERN, "That doesn't look quite right. Please enter your 5-digit zip code"),
  instructions: yup.string().test('len', 'Too Long!', getMaxlengthFunc(100)),
}

// Handle form submission.
const handleFinalSubmit = async (data: SignupData, elements, stripe, setStripeError, setIsLoading) => {
  setIsLoading(true)
  Sentry.setUser({ email: `Unverified: ${data.email}` })
  const card = elements.getElement(CardElement)
  const createTokenResult = await stripe.createToken(card)
  if (createTokenResult.error) {
    // Inform the user if there was an error.
    setStripeError(createTokenResult.error.message)
    console.info('GP Stripe Error', setStripeError(createTokenResult.error.message))
  } else {
    console.info('createTokenResult success!', setStripeError(''))
    setStripeError(null)
    // Send the token to your server.
    const createUserParams = {
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2 || '',
      deliveryDate: data.deliveryDate,
      email: data.email,
      first: data.first,
      goal: (data.goal || '').toLowerCase(),
      last: data.last,
      numHousehold: data.numHousehold,
      orderFrequency: (data.deliveryFrequency || '').toLowerCase(),
      organicPreference: (data.organicPreference || '').toLowerCase(),
      phone: removeNonNumbers(data.phone || ''),
      stripeToken: createTokenResult.token.id,
      zip: data.zip,
    }

    const createUserResponseJson = await createUser(createUserParams)
    if (createUserResponseJson.error) {
      setIsLoading(false)
      toast.error(createUserResponseJson.error)
      return null
    } else if (
      createUserResponseJson.data &&
      createUserResponseJson.data.createCustomerResponseJSON &&
      createUserResponseJson.data.createCustomerResponseJSON.error
    ) {
      setIsLoading(false)
      if (createUserResponseJson.data.createCustomerResponseJSON.error.type === 'card_error') {
        toast.error(createUserResponseJson.data.createCustomerResponseJSON.error.message)
        setStripeError()
        return null
      } else {
        //It's our fault, alert sentry
        toast.error('Something went wrong, if this problem persists please contact us')
        throw new Error(
          `Customer ${data.email} encounterd unexpected stripe error ${JSON.stringify(
            createUserResponseJson.data.createCustomerResponseJSON.error,
          )}`,
        )
      }
    }
    console.log(`createUserResponseJson: ${JSON.stringify(createUserResponseJson)}`)

    // Handle if card not setup properly
    if (
      createUserResponseJson.data.createSetupIntentResponseJSON.error ||
      !createUserResponseJson.data.createSetupIntentResponseJSON.client_secret
    ) {
      setIsLoading(false)
      //It's our fault, alert sentry
      toast.error('Something went wrong, if this problem persists please contact us')
      throw new Error(
        `Customer ${data.email} encounterd unexpected stripe error ${JSON.stringify(
          createUserResponseJson.data.createSetupIntentResponseJSON.error,
        )}`,
      )
    }
    const clientSecret = createUserResponseJson.data.createSetupIntentResponseJSON.client_secret
    const cardSetupResponse = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: `${data.first} ${data.last}`,
        },
      },
    })
    if (cardSetupResponse.error) {
      // Inform the user if there was an error.
      setStripeError(cardSetupResponse.error.message)
      console.info('GP Card Error', setStripeError(cardSetupResponse.error.message))
    } else {
      // Verify cardSetupResponse.setupIntent.status === succeeded and then navigate to confirmation page
      navigate('/myaccount')
    }
    // }
  }
}

const stageTosubmitStr = {
  0: 'Continue',
  1: 'Continue',
  2: 'Confirm order & Customize Basket',
}

const stageToSchema = {
  0: yup.object().shape(schema),
  1: yup.object().shape(schema1),
  2: yup.object().shape(Object.assign({}, schema, schema1)),
}

const blurb = (
  <Text>
    By clicking "Confirm Order" you agree to our{' '}
    <Link as={GatsbyLink} to="/terms" color="brand.800" target="_blank">
      Terms of Service
    </Link>{' '}
    and{' '}
    <Link as={GatsbyLink} to="/privacy" color="brand.800" target="_blank">
      Privacy Policy
    </Link>
  </Text>
)

const CheckoutForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [stage, setStage] = useState(0)
  const [stripeError, setStripeError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()
  const [storage, setStorage] = useLocalStorage('formValues', {})

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({ resolver: yupResolver(stageToSchema[stage]), mode: 'onBlur', defaultValues: storage })

  const onSubmit = (data: SignupData) => {
    console.log("I'm submitting")
    console.log(`data: ${JSON.stringify(data)}`)
    console.log(`storage ${JSON.stringify(storage)}`)
    if (stage == 0) {
      console.log("I'm changing stage 0 --> 1")
      setStage(1)
    } else if (stage == 1) {
      console.log("I'm changing stage 1 --> 2")
      setStage(2)
    } else if (stage === 2) {
      console.log("I'm changing stage 2 --> Checkout")
      handleFinalSubmit(data, elements, stripe, setStripeError, setIsLoading)
    }
  }

  const stage0IsError = errors.first || errors.last || errors.email
  const stage0IsValid = !!watch('first') && !!watch('last') && !!watch('email') && !stage0IsError

  const stage1IsError = errors.addressLine1 || errors.addressLine2 || errors.zip || errors.phone
  const stage1IsValid = !!watch('addressLine1') && !!watch('zip') && !!watch('phone') && !stage1IsError

  //Stage 2 is stripe
  const stage2IsValid = false

  const isSubmitDisabled: boolean = (stage === 0 && !stage0IsValid) || (stage === 1 && !stage1IsValid)

  const sidebar = (
    <CheckoutSummary
      deliveryDay={storage['deliveryDate'] || ''}
      deliveryFrequency={storage['deliveryFrequency'] || ''}
    />
  )

  return (
    <FormLayout
      isLoading={isLoading}
      isSubmitDisabled={isSubmitDisabled}
      heading="Finish Creating Your Account"
      onSubmit={onSubmit}
      progress={90}
      goBackFunc={() => navigate('/signup5')}
      handleSubmit={handleSubmit}
      submitStr={stageTosubmitStr[stage]}
      blurb={stage === 2 ? blurb : ''}
      sidebar={sidebar}
    >
      <CheckoutFields
        first={watch('first')}
        last={watch('last')}
        email={watch('email')}
        addressLine1={watch('addressLine1')}
        addressLine2={watch('addressLine2')}
        zip={watch('zip')}
        phone={watch('phone')}
        stage={stage}
        setStage={setStage}
        stage0IsValid={stage0IsValid}
        stage1IsValid={stage1IsValid}
        stage2IsValid={stage2IsValid}
        register={register}
        errors={errors}
        stripeError={stripeError}
        setStripeError={setStripeError}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        trigger={trigger}
      />
    </FormLayout>
  )
}

const Signup6 = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  )
}
export default Signup6
