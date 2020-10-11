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
  const [formStep, setFormStep] = useState("email")

  const onSubmitHandler = (values, { setSubmitting }) => {
    setFormData(Object.assign({}, formData, values))
    if (formStep === "email") {
      setFormStep("quiz")
    } else if (formStep === "quiz") {
      navigate(`/cart`)
    }
  }

  const formSteps = {
    email: <EmailZipForm onSubmit={onSubmitHandler} />,
    quiz: <QuizForm onSubmit={onSubmitHandler} />,
  }

  let currentForm = formSteps[formStep]

  return (
    <>
      <SEO title="Get Started | Goodpluck" />
      <Nav />
      {currentForm}
    </>
  )
}
export default GetStarted

const QuizForm = ({ onSubmit }) => {
  const formContent = ({ isSubmitting, errors, touched }) => (
    <>
      <StyledForm>
        <Blurb>Step 2 of 2</Blurb>
        <Header>Great, what will you be shopping for?</Header>
        <FieldWrapper>
          <Submit as="button" type="submit" disabled={isSubmitting}>
            Continue
            <ButtonArrow />
          </Submit>
        </FieldWrapper>
      </StyledForm>
    </>
  )

  return (
    <Wrapper>
      <Formik>{formContent}</Formik>
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
        <Blurb>Step 1 of 2</Blurb>
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
