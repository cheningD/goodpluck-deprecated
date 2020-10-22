import * as yup from "yup"

import {
  Card,
  DetailCell2,
  Header,
  StyledErrorMessage,
  StyledField,
  SubmitButton,
} from "../components/StyledComponentLib"
import { CardElement, Elements } from "@stripe/react-stripe-js"
import { Form, Formik } from "formik"
import { VALID_ZIP_PATTERN, getMaxlengthFunc } from "../util"

import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"
import { loadStripe } from "@stripe/stripe-js"
import styled from "styled-components"

const Columns = styled.div`
  height: 100%;
  width: 100%;
  background-color: #6c7668;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
  margin: 32px 0;
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

const FieldWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  padding: 0 16px;
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
  color: #a5342f;
`

const CardElementStyle = {
  base: {
    iconColor: "#788474",
    color: "#333",
    fontWeight: 500,
    fontFamily: "Raleway, Arial, sans-serif",
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

const OrderSummary = ({ nextChargeDate }) => {
  return (
    <>
      <Header>Your Upcoming Basket</Header>

      <Card>
        <DetailCell2 bold>The Local Pluck ($35)</DetailCell2>
        <DetailCell2>
          A box of our best seasonal produce from local farms.
        </DetailCell2>
        <DetailCell2>12 types of produce</DetailCell2>
        <DetailCell2>2-3 portions per type </DetailCell2>
        <DetailCell2>Free Shipping</DetailCell2>
        <DetailCell2 bold>You can edit your basket after checkout</DetailCell2>
      </Card>
    </>
  )
}

const CheckoutForm = ({ onSubmit }) => {
  const nextChargeDate = "Friday, Oct 23" // Todo: make this dynamic
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
        email: "",
        addressLine1: "",
        addressLine2: "",
        phone: "",
        zip: "",
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
              <CardElement options={{ style: CardElementStyle }} />
            </CardFieldset>
            <Note>{`Please note: You can edit your basket until ${nextChargeDate}. Your card will be charged on that day.`}</Note>

            <SubmitButton as="button" type="submit" disabled={isSubmitting}>
              Confirm Order
            </SubmitButton>

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

const Checkout = () => {
  return (
    <>
      <SEO title="Checkout" />
      <Nav />

      <Columns>
        <Column>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
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
export default Checkout
