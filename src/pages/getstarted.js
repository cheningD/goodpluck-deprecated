import * as yup from "yup"

import { ErrorMessage, Field, Form, Formik } from "formik"
import React, { useState } from "react"

import Arrow from "../images/icons/arrow.svg"
import { ButtonSmall } from "../components/StyledComponentLib"
import DeliveryDateSelector from "../components/DeliveryDateSelector"
import Image from "../components/Image"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import { VALID_ZIP_PATTERN } from "../util"
import { navigate } from "gatsby"
import styled from "styled-components"
import useLocalStorageState from "use-local-storage-state"

const Wrapper = styled.div`
  background-color: #6c7668;
  font-family: Bebas Neue, sans-serif;
  width: 100%;
  min-height: calc(100vh + 32px);
  padding-bottom: 32px;
`
const StyledForm = styled(Form)`
  font-family: Bebas Neue, sans-serif;
  width: 500px;
  padding-top: 16px;
  margin: 0 auto;

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
const Header2 = styled.div`
  color: #fff;
  font-family: Raleway, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 32px 16px 0 16px;

  @media screen and (max-width: 479px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
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
const TermsLink = styled.a`
  font-family: Raleway, sans-serif;
  color: #fffd82;
  text-decoration: underline;
`
const Submit = styled(ButtonSmall)`
  font-family: Bebas Neue, sans-serif;
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
const Checkbox = styled(Field)`
  display: none;
`
const Radio = styled(Field)`
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

const GetStarted = () => {
  const [formData, setFormData] = useLocalStorageState(
    "goodpluck-new-user-form",
    {}
  )

  const onSubmitHandler = (values, { setSubmitting }) => {
    setFormData(Object.assign({}, formData, values))
    formSteps[formStep].next()
    setSubmitting(false)
  }

  const formSteps = {
    email: {
      component: (
        <EmailZipForm
          goBackFunction={() => navigate("/")}
          onSubmit={onSubmitHandler}
          header="First, let's confirm that we deliver to you..."
          percentComplete="0"
        />
      ),
      next: () => {
        setFormStep("shoppingForQuiz")
      },
    },
    shoppingForQuiz: {
      component: (
        <QuizForm
          goBackFunction={() => setFormStep("email")}
          onSubmit={onSubmitHandler}
          header="Who do you normally shop for?"
          items={[
            "Myself",
            "Spouse or Partner",
            "Kids",
            "Babies",
            "Extended Family",
            "Pets",
            "All of these",
          ]}
          percentComplete="20"
        />
      ),
      next: () => setFormStep("valuesQuiz"),
    },
    valuesQuiz: {
      component: (
        <QuizForm
          goBackFunction={() => setFormStep("shoppingForQuiz")}
          onSubmit={onSubmitHandler}
          header="What values are most important to you?"
          items={[
            "Eating Organic",
            "Living Sustainably",
            "Supporting Local Farms",
            "Animal Welfare",
            "Food Access",
            "Regenerative Agriculture",
          ]}
          percentComplete="40"
        />
      ),
      next: () => setFormStep("chooseYourStarter"),
    },
    chooseYourStarter: {
      component: (
        <ChooseYourStarterForm
          goBackFunction={() => setFormStep("valuesQuiz")}
          onSubmit={onSubmitHandler}
          header="Choose a starter basket"
          percentComplete="60"
        />
      ),
      next: () => setFormStep("deliveryPreferences"),
    },
    deliveryPreferences: {
      component: (
        <DeliveryPreferencesQuiz
          goBackFunction={() => setFormStep("chooseYourStarter")}
          onSubmit={onSubmitHandler}
          header="Choose your delivery preferences"
          percentComplete="80"
        />
      ),
      next: () => navigate(`/cart`),
    },
  }

  // Restore your position in form on refresh
  let currentPage = "email"
  const pageinUrlFragment = window.location.hash?.replace("#", "")
  if (Object.keys(formSteps).includes(pageinUrlFragment)) {
    currentPage = pageinUrlFragment
  }

  const [formStep, _setFormStep] = useState(currentPage)
  const setFormStep = step => {
    navigate(`#${step}`)
    _setFormStep(step)
  }

  let currentForm = formSteps[formStep].component

  return (
    <>
      <SEO title="Get Started | Goodpluck" />
      {currentForm}
    </>
  )
}
export default GetStarted

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

const BackButton = styled(Arrow)`
  transform: rotate(180deg);

  // Make the arrow white
  filter: invert(100%) sepia(1%) saturate(7500%) hue-rotate(157deg)
    brightness(110%) contrast(114%);
`

const FormWrapper = ({
  initialValues,
  validationSchema,
  onSubmit,
  header,
  FormContent,
  percentComplete,
  blurb,
  goBackFunction,
}) => {
  const form = ({ isSubmitting, ...rest }) => {
    return (
      <StyledForm>
        {goBackFunction ? <BackButton onClick={goBackFunction} /> : ""}
        {percentComplete ? (
          <ProgressBar
            color="#f7c59f"
            bkcolor="#788474"
            percentComplete={percentComplete}
          />
        ) : (
          ""
        )}
        <Header>{header}</Header>
        <FormContent isSubmitting={isSubmitting} {...rest} />
        <FieldWrapper>
          <Submit as="button" type="submit" disabled={isSubmitting}>
            Continue
            <ButtonArrow />
          </Submit>
        </FieldWrapper>
        {blurb ? <Blurb>{blurb}</Blurb> : ""}
      </StyledForm>
    )
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={true}
        validateOnChange={false}
      >
        {form}
      </Formik>
    </Wrapper>
  )
}

const EmailZipForm = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
}) => {
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

  const FormContent = ({ isSubmitting, errors, touched }) => {
    return (
      <>
        <FieldWrapper>
          <StyledField type="text" name="email" placeholder="Email" />
          <StyledErrorMessage name="email" component="div" />
        </FieldWrapper>
        <FieldWrapper>
          <StyledField type="text" name="zip" placeholder="Zip" />
          <StyledErrorMessage name="zip" component="div" />
        </FieldWrapper>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{ email: "", zip: "" }}
      validationSchema={zipSchema}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      blurb={
        <>
          By providing your email address, you agree to our{" "}
          <TermsLink href="/terms" target="_blank">
            Terms of Service
          </TermsLink>{" "}
          and{" "}
          <TermsLink href="/privacy" target="_blank">
            Privacy Policy
          </TermsLink>
        </>
      }
      goBackFunction={goBackFunction}
    />
  )
}

const QuizForm = ({
  onSubmit,
  header,
  items,
  percentComplete,
  goBackFunction,
}) => {
  const initialValues = {}
  items.forEach(item => {
    initialValues[item] = false
  })
  const FormContent = ({ values }) => {
    const checkboxes = items.map(item => {
      return (
        <CheckboxLabel htmlFor={`${item}`} isChecked={values[item]}>
          <Checkbox type="checkbox" id={`${item}`} name={`${item}`}></Checkbox>
          {`${item}`}
        </CheckboxLabel>
      )
    })
    return <>{checkboxes}</>
  }

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={null}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
    />
  )
}

const ImageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`
const ImageLabel = styled.label`
  width: calc(50% - 8px);
  max-width: 400px;
  min-height: 310px;
  background-color: #fff;
  
  border-radius: 4px;
  border: none

  -webkit-box-shadow: 4px 6px 19px 1px rgba(0, 0, 0, 0.34);
  -moz-box-shadow: 4px 6px 19px 1px rgba(0, 0, 0, 0.34);
  box-shadow: 4px 6px 19px 1px rgba(0, 0, 0, 0.34);
  ${props =>
    props.isChecked
      ? `
    position: relative;
    top: 2px;
    background-color: #fdf0e6;
    border: 2px solid #f7c59f;
    -webkit-box-shadow: 4px 6px 19px 1px rgba(0, 0, 0,0.64);
    -moz-box-shadow: 4px 6px 19px 1px rgba(0, 0, 0,0.64);
    box-shadow: 4px 6px 19px 1px rgba(0, 0, 0, 0.64);


  `
      : ""}
`
const ImageCardText = styled.div`
  color: #333;
  padding: 16px 16px 8px 16px;
  font-family: Raleway, sans-serif;
  font-weight: 600;
  line-height: 1.25rem;
  margin-bottom: 8px;
`
const ImageCardDetails = styled(ImageCardText)`
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 500;
  ${props => (props.highlight ? "font-weight: 600;" : "")}
  padding: 0 16px;
`

const RadioImage = styled(Image)`
  height: 120px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

const ChooseYourStarterForm = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
}) => {
  const starterSchema = yup.object().shape({
    boxChoice: yup.string().required("Please select an option"),
  })

  const FormContent = ({ values }) => {
    return (
      <ImageContainer role="group" aria-label="Let's build your basket">
        <ImageLabel
          htmlFor="localStarter"
          isChecked={values.boxChoice === "localStarter"}
        >
          <RadioImage src="producebox.jpg" alt="Use our local produce box" />
          <Radio
            type="radio"
            id="localStarter"
            name="boxChoice"
            value="localStarter"
          />
          <ImageCardText>The Local Pluck ($35)</ImageCardText>

          <ImageCardDetails highlight={true}>
            Our best produce this week
          </ImageCardDetails>
          <ImageCardDetails>12 types of produce</ImageCardDetails>
          <ImageCardDetails>2-4 portions each</ImageCardDetails>
          <ImageCardDetails>Free Shipping</ImageCardDetails>
        </ImageLabel>
        <ImageLabel
          htmlFor="customBox"
          isChecked={values.boxChoice === "customBox"}
        >
          <RadioImage src="producebox.jpg" alt="Build my Box From Scratch" />
          <Radio
            type="radio"
            id="customBox"
            name="boxChoice"
            value="customBox"
          />
          <ImageCardText>Start from Scratch</ImageCardText>

          <ImageCardDetails highlight={true}>
            Choose from all our local produce and farm goods.
          </ImageCardDetails>
          <ImageCardDetails>Free Shipping over $35</ImageCardDetails>
        </ImageLabel>
        <Header2>
          You can add, remove or swap any item with either choice before
          checkout.
        </Header2>
      </ImageContainer>
    )
  }

  return (
    <FormWrapper
      initialValues={{ customBox: false, localStarter: false }}
      validationSchema={starterSchema}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
    />
  )
}

const DeliveryPreferencesQuiz = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
}) => {
  const FormContent = ({ values }) => {
    return (
      <>
        <Header2>Prefered delivery for 48206: Saturday</Header2>
        <Header2>Delivery Frequency: Every Week</Header2>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{
        preferredDeliveryDate: "Saturday",
        deliveryFrequency: "",
      }}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
    />
  )
}
