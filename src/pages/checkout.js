import * as yup from "yup"

import {
  Bold,
  Card,
  DetailCell2,
  FinePrint,
  Header,
  StyledErrorMessage,
  StyledField,
  SubmitButton,
  TermsLink,
} from "../components/StyledComponentLib"
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { Form, Formik } from "formik"
import React, { useState } from "react"
import {
  VALID_ZIP_PATTERN,
  getMaxlengthFunc,
  setOnboardingComplete,
} from "../util"

import BasketDates from "../components/BasketDates"
import Image from "../components/Image"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import { createUser } from "../actions"
import { loadStripe } from "@stripe/stripe-js"
import { navigate } from "gatsby"
import styled from "styled-components"
import useLocalStorageState from "use-local-storage-state"

const Columns = styled.div`
  height: 100%;
  width: 100%;
  background-color: #6c7668;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 32px;
  @media screen and (max-width: 479px) {
    padding: 16px;
  }
`

const Column = styled.div`
max-width: 500px;
width: calc(50% - 16px);
height: 100%
&:last-child {
  margin-left: 32px;
}

@media screen and (max-width: 767px) {
  margin: 0 auto;
  width: 100%;
  &:last-child {
    margin-top: 16px;
  }
}
`

const Fieldset = styled.fieldset`
  margin: 16px 0 32px 0;
  border-radius: 4px;
  border: none;
  padding: 0;
  width: 100%;
  background-color: #fff;
  color: #3f3a40;
  font-size: 1.125rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const CardFieldset = styled(Fieldset)`
  padding: 11px 16px 11px 16px;
  margin-bottom: 0px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  .StripeElement--webkit-autofill2 {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
  }
`

const TextInput = styled(StyledField)`
  border-radius: 0;
`

const ErrorMessage = styled(StyledErrorMessage)`
  color: #ce5852;
`

const StripeError = styled.div`
  width: 100%;
  background-color: #fff;
  color: #ce5852;
  padding: 8px 16px;
`

const CardElementStyle = {
  base: {
    iconColor: "#788474",
    color: "#333",
    fontWeight: 500,
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    fontSmoothing: "antialiased",

    ":-webkit-autofill": {
      color: "#fce883",
    },
    "::placeholder": {
      color: "#333",
    },
  },
  invalid: {
    iconColor: "#CE5852",
    color: "#CE5852",
  },
}

const DisplayNoneIfScreenAbove767 = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }
`

const DisplayNoneIfScreenUnder767 = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
const FieldWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  padding: 0 16px;
`

const FormField = ({ name, placeholder }) => (
  <FieldWrapper>
    <TextInput type="text" name={name} placeholder={placeholder} />
    <ErrorMessage name={name} component="div" />
  </FieldWrapper>
)

const Note = styled.div`
  width: 100%;
  background-color: #fbf2f2;
  color: #333;
  padding: 8px 16px;
  margin-bottom: 32px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`

const Detail = styled.div`
  font-family: hk_grotesklight, sans-serif;
  width: 100%;
  text-align: left;
`

const DetailHeader = styled(Detail)`
  font-family: hk_grotesksemibold, sans-serif;
  width: 100%;
  text-align: left;
  margin-bottom: 16px;
`

const BasketImage = styled(Image)`
  width: 40px;
  height 40px;
  display: inline-block;
  margin: 0 16px -8px 0;
`

export const OrderSummary = () => {
  return (
    <>
      <Header>
        <BasketImage src="basket.png" alt="Your basket" />
        Your Upcoming Basket
      </Header>

      <Card>
        <DetailHeader>
          The Local Pluck: our best seasonal produce from local farms
        </DetailHeader>

        <DetailCell2>Order frequency:</DetailCell2>
        <DetailCell2 right>Every Week</DetailCell2>
        <DetailCell2>Base cost:</DetailCell2>
        <DetailCell2 right>$35</DetailCell2>
        <DetailCell2>Shipping:</DetailCell2>
        <DetailCell2 right>Free</DetailCell2>
      </Card>

      <BasketDates />
    </>
  )
}

const CheckoutForm = ({
  onSubmit,
  handleChangeStripe,
  onboardingFormData,
  stripeError,
}) => {
  const checkoutSchema = yup.object().shape({
    first: yup
      .string()
      .required("Please enter your first name")
      .test("len", "Too Long!", getMaxlengthFunc(100)),
    last: yup
      .string()
      .required("Please enter your last name")
      .test("len", "Too Long!", getMaxlengthFunc(100)),
    email: yup
      .string()
      .required("Please enter your email")
      .email(`That email doesn't look right`)
      .test("len", "Too Long!", getMaxlengthFunc(300)),
    addressLine1: yup
      .string()
      .required("Where should we send your box?")
      .test("len", "Too Long!", getMaxlengthFunc(100)),
    addressLine2: yup.string().test("len", "Too Long!", getMaxlengthFunc(100)),
    phone: yup
      .string()
      .required("Only required for delivery updates")
      .test("len", "Too Long!", getMaxlengthFunc(100)),
    zip: yup
      .string()
      .required("We need your 5 digit zip!")
      .matches(
        VALID_ZIP_PATTERN,
        `That doesn't look quite right. Please enter your 5-digit zip code.`
      ),
  })

  return (
    <Formik
      initialValues={{
        first: "",
        last: "",
        email: onboardingFormData.email || "",
        addressLine1: "",
        addressLine2: "",
        phone: "",
        zip: onboardingFormData.zip || "",
      }}
      validationSchema={checkoutSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <Form>
            <Header>Finish Creating Your Account</Header>
            <Fieldset>
              <FormField name="first" placeholder="First name*" />
              <FormField name="last" placeholder="Last name*" />
              <FormField name="email" placeholder="Email*" />
            </Fieldset>
            <Header>Shipping Information</Header>
            <Fieldset>
              <FormField name="addressLine1" placeholder="Address*" />
              <FormField name="addressLine2" placeholder="Apt, suite, etc" />
              <FormField name="zip" placeholder="Zipcode*" />
              <FormField name="phone" placeholder="Phone number*" />
            </Fieldset>
            <Header>Billing Information</Header>
            <CardFieldset>
              <CardElement
                id="card-element"
                options={{ style: CardElementStyle }}
                onChange={handleChangeStripe}
              />
            </CardFieldset>
            {stripeError ? <StripeError>{stripeError}</StripeError> : ""}
            <Note>{`Please note, your first basket will be charged on Oct 29`}</Note>

            <SubmitButton as="button" type="submit" disabled={isSubmitting}>
              Confirm Order
            </SubmitButton>

            <FinePrint>
              <Bold>
                By clicking "Confirm Order" you agree to our{" "}
                <TermsLink href="/terms" target="_blank">
                  Terms of Service
                </TermsLink>{" "}
                and{" "}
                <TermsLink href="/privacy" target="_blank">
                  Privacy Policy
                </TermsLink>
                .
              </Bold>
              <Bold>
                You agree that your subscription will automatically renew and
                your credit card will be charged until you pause or cancel your
                order.
              </Bold>

              <div>
                Canelling is easy and has no penalties. To cancel, sign in and
                click "My Account" at the top of the page. The pause and cancel
                buttons will be under "Manage my order".
              </div>
              <div>
                The amount charged will depend on the contents of your basket,
                which by default is equal to or less than the subscription's
                base price.
              </div>
              <div>
                Cancelling your subscription will not cancel a delivery that you
                have already been charged for.
              </div>
            </FinePrint>

            <DisplayNoneIfScreenAbove767>
              <OrderSummary />
            </DisplayNoneIfScreenAbove767>
          </Form>
        )
      }}
    </Formik>
  )
}

const stripePromise = loadStripe(
  "pk_test_51H648LDnJ2NuGUX1oBIAwnMqH295Mt7bMXXw7J6xcWJaVmj3kGrpfrTvIaI78BE79CbIfgaMEZpCqLXCsYKxbJJQ00BwKIIHcH"
)

// POST the token ID to your backend.

const Checkout = () => {
  const [onboardingFormData] = useLocalStorageState(
    "goodpluck-new-user-form",
    {}
  )

  const [stripeErrorMessage, setStripeError] = useState(null)
  const stripe = useStripe()
  const elements = useElements()

  // Handle real-time validation errors from the card Element.
  const handleChangeStripe = event => {
    if (event.error) {
      setStripeError(event.error.message)
    } else {
      setStripeError(null)
    }
  }

  // Handle form submission.
  const handleSubmit = async value => {
    console.log("Result from create account", value)
    console.log("Result from onboarding form", onboardingFormData)

    const card = elements.getElement(CardElement)
    const result = await stripe.createToken(card)
    console.log("Result from stripe", result)
    if (result.error) {
      // Inform the user if there was an error.
      setStripeError(result.error.message)
      console.log("Errar with stripe!", setStripeError(result.error.message))
    } else {
      setStripeError(null)
      // Send the token to your server.
      console.log("Sending token to server/....!")

      const createUserParams = {
        addressLine1: value.addressLine1,
        email: value.email,
        first: value.first,
        last: value.last,
        phone: value.phone,
        zip: value.zip,
        quizData: onboardingFormData,
        stripeToken: result.token.id,
      }

      if (value.addressLine2) {
        createUserParams.addressLine2 = value.addressLine2
      }
      const createUserResponseJson = await createUser(createUserParams)
      console.log("createUserResponseJson", createUserResponseJson)
      if (true) {
        const clientSecret =
          createUserResponseJson.createSetupIntentResponseJSON.client_secret
        const result = await stripe.confirmCardSetup(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: `${value.first} ${value.last}`,
            },
          },
        })

        if (result.error) {
          // Inform the user if there was an error.
          setStripeError(result.error.message)
          console.log(
            "Error confirming card!",
            setStripeError(result.error.message)
          )
        } else {
          console.log(
            `result from confirming intent... ${JSON.stringify(result)}   <--`,
            result
          )
          // Verify result.setupIntent.status === succeeded and then navigate to confirmation page
          setOnboardingComplete()
          navigate("/basket")
        }
      }
    }
  }

  return (
    <>
      <SEO title="Checkout" />
      <Columns>
        <Column>
          <CheckoutForm
            onSubmit={handleSubmit}
            handleChangeStripe={handleChangeStripe}
            onboardingFormData={onboardingFormData}
            stripeError={stripeErrorMessage}
          />
        </Column>
        <Column>
          <DisplayNoneIfScreenUnder767>
            <OrderSummary />
          </DisplayNoneIfScreenUnder767>
        </Column>
      </Columns>
    </>
  )
}

const CheckoutPage = () => (
  <Elements stripe={stripePromise}>
    <SEO title="Confirm Order | Goodpluck" />
    <Nav />
    <Checkout />
  </Elements>
)

export default CheckoutPage
