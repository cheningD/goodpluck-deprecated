import * as yup from "yup"

import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link, navigate } from "gatsby"
import React, { useState } from "react"

import Arrow from "../images/icons/arrow.svg"
import { ButtonSmall } from "../components/StyledComponentLib"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import { VALID_ZIP_PATTERN } from "../util"
import styled from "styled-components"
import useLocalStorageState from "use-local-storage-state"

const ProgressBar = ({ percentComplete, color, bkcolor }) => {
  return (
    <div
      style={{
        backgroundColor: `${bkcolor}`,
        margin: "16px 0",
      }}
    >
      <div
        style={{
          height: "4px",
          width: `${percentComplete}%`,
          backgroundColor: `${color}`,
        }}
      />
    </div>
  )
}

const Wrapper = styled.div`
  background-color: #6c7668;
  font-family: Bebas Neue, sans-serif;
  width: 100%;
`
const StyledForm = styled(Form)`
  font-family: Bebas Neue, sans-serif;
  width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 48px;
  @media screen and (max-width: 479px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`
const Header = styled.div`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 32px;

  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
const FieldWrapper = styled.div`
  margin: 36px 0;
  width: 100%;
`
const StyledField = styled(Field)`
  border-radius: 4px;
  border: none;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  color: #3f3a40;
  font-size: 1.125rem;
`
const StyledErrorMessage = styled(ErrorMessage)`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  width: 100%;
`

const Blurb = styled.div`
  font-family: Raleway, sans-serif;
  color: #fff;
`
const TermsLink = styled(Link)`
  font-family: Raleway, sans-serif;
  color: #fffd82;
  text-decoration: underline;
`

const Submit = styled(ButtonSmall)`
  font-family: Bebas Neue, sans-serif;
  background-color: #fffd82;
  background-color: #f7c59f;
  border-radius: 4;
  border: 2px solid #fff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #000;

  &:hover,
  :focus {
    color: #000;
  }

  :disabled {
    background-color: #ccc;
  }

  @media only screen and (max-width: 479px) {
    width: 100%;
  }
`

const ButtonArrow = styled(Arrow)`
  display: inline-block;
  margin-left: 20px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`

const GetStarted = () => {
  const [formData, setFormData] = useLocalStorageState(
    "goodpluck-new-user-form",
    {}
  )
  // const [formStep, setFormStep] = useState("email")
  const [formStep, setFormStep] = useState("shoppingForQuiz")

  const onSubmitHandler = (values, { setSubmitting }) => {
    setFormData(Object.assign({}, formData, values))
    formSteps[formStep].next()
    setSubmitting(false)
  }

  const formSteps = {
    email: {
      component: (
        <EmailZipForm onSubmit={onSubmitHandler} percentComplete="0" />
      ),
      next: () => {
        setFormStep("shoppingForQuiz")
      },
    },
    shoppingForQuiz: {
      component: (
        <QuizForm
          onSubmit={onSubmitHandler}
          question="Who do you normally shop for?"
          items={[
            "Myself",
            "Spouse or Partner",
            "Kids",
            "Babies",
            "Extended Family",
            "Pets",
            "All of these",
          ]}
          percentComplete="25"
        />
      ),
      next: () => setFormStep("valuesQuiz"),
    },
    valuesQuiz: {
      component: (
        <QuizForm
          onSubmit={onSubmitHandler}
          question="What values are most important to you?"
          items={[
            "Organic",
            "Sustainability",
            "Animal Welfare",
            "Food Access",
            "Fair Trade",
            "Regenerative Agriculture",
          ]}
          percentComplete="50"
        />
      ),
      next: () => setFormStep("shoppingListQuiz"),
    },
    shoppingListQuiz: {
      component: (
        <QuizForm
          onSubmit={onSubmitHandler}
          question="What's on your typical shopping list?"
          items={[
            "Fresh Fruit & Veg",
            "Fresh Herbs & Spices",
            "Fresh Baked Bread or Pastries",
            "Eggs & Dairy Products",
            "Meat & Seafood",
            "Snacks",
            "Cooking or Pantry Essentials",
          ]}
          percentComplete="75"
        />
      ),
      next: () => navigate(`/cart`),
    },
  }

  let currentForm = formSteps[formStep].component

  return (
    <>
      <SEO title="Get Started | Goodpluck" />
      <Nav />
      {currentForm}
    </>
  )
}
export default GetStarted

const Checkbox = styled(Field)`
  display: none;
`

const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font-family: Raleway, sans-serif;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #fff;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.6;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
  }

  ${({ isChecked }) => {
    if (isChecked) {
      return `

    &:before {
    width: 10px;
    top: -5px;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
      
    `
    }
  }}
`

const QuizForm = ({ onSubmit, question, items, percentComplete }) => {
  const initialValues = {}
  items.forEach(item => {
    initialValues[item] = false
  })
  const formContent = ({ values, isSubmitting }) => {
    const checkboxes = items.map(item => {
      return (
        <CheckboxLabel htmlFor={`${item}`} isChecked={values[item]}>
          <Checkbox type="checkbox" id={`${item}`} name={`${item}`}></Checkbox>
          {`${item}`}
        </CheckboxLabel>
      )
    })
    return (
      <StyledForm>
        <ProgressBar
          color="#f7c59f"
          bkcolor="#788474"
          percentComplete={percentComplete}
        />
        <Header>{question}</Header>
        {checkboxes}
        <FieldWrapper>
          <Submit as="button" type="submit" disabled={isSubmitting}>
            Continue
            <ButtonArrow />
          </Submit>
        </FieldWrapper>
      </StyledForm>
    )
  }

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {formContent}
      </Formik>
    </Wrapper>
  )
}

const EmailZipForm = ({ onSubmit }) => {
  const zipSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email(`That email doesn't look right`),
    zip: yup
      .string()
      .required("Please enter your 5 digit zip")
      .matches(VALID_ZIP_PATTERN, `That zip doesn't look right`),
  })

  const formContent = ({ isSubmitting, errors, touched }) => {
    return (
      <StyledForm>
        <ProgressBar color="blue" percentComplete="1" />
        <Header>First, let's check if we deliver to you...</Header>
        <FieldWrapper>
          <StyledField type="text" name="email" placeholder="Email" />
          <StyledErrorMessage name="email" component="div" />
        </FieldWrapper>
        <FieldWrapper>
          <StyledField type="text" name="zip" placeholder="Zip" />
          <StyledErrorMessage name="zip" component="div" />
        </FieldWrapper>
        <FieldWrapper>
          <Submit as="button" type="submit" disabled={isSubmitting}>
            Continue
            <ButtonArrow />
          </Submit>
        </FieldWrapper>
        <Blurb>
          By providing your email address, you agree to our{" "}
          <TermsLink to="/terms">Terms of Service</TermsLink> and{" "}
          <TermsLink to="/privacy">Privacy Policy</TermsLink>
        </Blurb>
      </StyledForm>
    )
  }

  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "", zip: "" }}
        validationSchema={zipSchema}
        onSubmit={onSubmit}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {formContent}
      </Formik>
    </Wrapper>
  )
}
