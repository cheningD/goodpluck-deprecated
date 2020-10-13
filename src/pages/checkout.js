import { CardElement, Elements } from "@stripe/react-stripe-js"

import { Header } from "../components/StyledComponentLib"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"
import { loadStripe } from "@stripe/stripe-js"
import styled from "styled-components"

const Columns = styled.div`
  height: 100%;
  width: 100%;
  background-colour: #788474;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 32px;
  @media screen and (max-width: 479px) {
    padding: 16px;
  }
`

const Column = styled.div`
width: calc(50% - 16px);
height: 100%
&:last-child {
  margin-left: 32px;
}

@media screen and (max-width: 767px) {
  width: 100%;
  &:last-child {
    margin-top: 16px;
  }
}
`

const H1 = styled(Header)`
  color: #333;
`

const Fieldset = styled.fieldset`
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;
  background-color: #7795f8;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
`

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px solid #819efc;

  &:first-child {
    border-top: none;
  }
`

const CardElementStyle = {
  base: {
    iconColor: "#c4f0ff",
    color: "#fff",
    fontWeight: 500,
    fontFamily: "Raleway, Arial, sans-serif",
    fontSize: "16px",
    fontSmoothing: "antialiased",

    ":-webkit-autofill": {
      color: "#fce883",
    },
    "::placeholder": {
      color: "#87BBFD",
    },
  },
  invalid: {
    iconColor: "#FFC7EE",
    color: "#FFC7EE",
  },
}

const Label = styled.label`
  width: 15%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;

  &:-webkit-autofill {
    -webkit-text-fill-color: #fce883;
    transition: background-color 100000000s;
    -webkit-animation: 1ms void-animation-out;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
    padding: 11px 15px 11px 0;
  }

  width: 100%;
  padding: 11px 15px 11px 0;
  color: #fff;
  background-color: transparent;
  -webkit-animation: 1ms void-animation-out;

  &::-webkit-input-placeholder {
    color: #87bbfd;
  }

  &::-moz-placeholder {
    color: #87bbfd;
  }

  &:-ms-input-placeholder {
    color: #87bbfd;
  }
`

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;

  display: block;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #f6a4eb;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #ffb9f6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:active {
    background-color: #d782d9;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #e298d8;
  }
`

const CardRow = styled(Row)`
  padding: 11px 15px 11px 0;

  .StripeElement--webkit-autofill2 {
    background: transparent !important;
  }

  .StripeElement {
    width: 100%;
  }
`

const CheckoutForm = () => {
  return (
    <>
      <H1>Create An Account</H1>
      <div className="cell example example1" id="example-1">
        <form>
          <Fieldset>
            <Row>
              <Label
                htmlFor="example1-name"
                data-tid="elements_examples.form.name_label"
              >
                Name
              </Label>
              <Input
                id="example1-name"
                data-tid="elements_examples.form.name_placeholder"
                type="text"
                placeholder="Jane Doe"
                required
                autoComplete="name"
              />
            </Row>
            <Row>
              <Label
                htmlFor="example1-email"
                data-tid="elements_examples.form.email_label"
              >
                Email
              </Label>
              <Input
                id="example1-email"
                data-tid="elements_examples.form.email_placeholder"
                type="email"
                placeholder="janedoe@gmail.com"
                required
                autoComplete="email"
              />
            </Row>
            <Row>
              <Label
                htmlFor="example1-phone"
                data-tid="elements_examples.form.phone_label"
              >
                Phone
              </Label>
              <Input
                id="example1-phone"
                data-tid="elements_examples.form.phone_placeholder"
                type="tel"
                placeholder="(941) 555-0123"
                required
                autoComplete="tel"
              />
            </Row>
          </Fieldset>
          <Fieldset>
            <CardRow>
              <CardElement options={{ style: CardElementStyle }} />
            </CardRow>
          </Fieldset>
          <Button type="submit" data-tid="elements_examples.form.pay_button">
            Confirm Order
          </Button>
        </form>
      </div>
    </>
  )
}

const OrderSummary = () => {
  return <div>Order Summary</div>
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
          <OrderSummary />
        </Column>
      </Columns>
    </>
  )
}
export default Checkout
