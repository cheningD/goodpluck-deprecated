import * as yup from "yup"

import { Field, Formik } from "formik"
import {
  Header,
  Header2,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  SubmitButton,
} from "../components/StyledComponentLib"
import React, { useState } from "react"

import Arrow from "../images/icons/arrow.svg"
import BasketPreview from "../components/BasketPreview"
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

const FieldWrapper = styled.div`
  margin: 36px 0;
  width: 100%;
`

const Blurb = styled.div`
  font-family: Raleway, sans-serif;
  color: #fff;
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
    top: 3px;
    opacity: 0.6;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
  }

  ${({ isChecked }) => {
    if (isChecked) {
      return `

    &:before {
    width: 10px;
    top: 0;
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
          blurb="Why we ask? To make better basket recommendations!"
          items={[
            "Myself",
            "Spouse or Partner",
            "Kids",
            "Babies",
            "Extended Family",
            "Friends or Roommates",
            "Pets",
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
          blurb="Why we ask? It helps us source great items!"
          items={[
            "Eating Organic",
            "Living Sustainably",
            "Supporting Local Farms",
            "Animal Welfare",
            "Food Access",
            "Regenerative Agriculture",
          ]}
          percentComplete="40"
          submitText="Build your basket"
        />
      ),
      next: () => setFormStep("chooseYourStarter"),
    },
    chooseYourStarter: {
      component: (
        <ChooseYourStarterForm
          goBackFunction={() => setFormStep("valuesQuiz")}
          onSubmit={onSubmitHandler}
          header="Your first basket"
          percentComplete="60"
          submitText="Set delivery preferences"
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
          submitText="Finish creating your account"
        />
      ),
      next: () => navigate(`/checkout`),
    },
  }

  // Restore your position in form on refresh
  let currentPage = "email"

  let pageinUrlFragment
  if (typeof window === `undefined`) {
    pageinUrlFragment = ""
  } else {
    pageinUrlFragment = window.location.hash?.replace("#", "")
  }
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
  submitText,
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
          <SubmitButton as="button" type="submit" disabled={isSubmitting}>
            {submitText ? `${submitText}` : `Continue`}
            <ButtonArrow />
          </SubmitButton>
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
  submitText,
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
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}

const QuizForm = ({
  onSubmit,
  header,
  items,
  percentComplete,
  goBackFunction,
  blurb,
  submitText,
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
      blurb={blurb}
      submitText={submitText}
    />
  )
}

const ChooseYourStarterForm = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
  submitText,
}) => {
  const FormContent = ({ values }) => {
    return <BasketPreview numberOfVisibleItems={4} />
  }

  return (
    <FormWrapper
      initialValues={{}}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}

const DeliveryPreferencesQuiz = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
  submitText,
}) => {
  const FormContent = ({ values }) => {
    return (
      <>
        <Header2>Your Delivery Day: Saturday</Header2>

        <CheckboxLabel
          htmlFor="notify_moreDeliveryDates"
          isChecked={values.notify_moreDeliveryDates}
        >
          <Checkbox
            type="checkbox"
            id="notify_moreDeliveryDates"
            name="notify_moreDeliveryDates"
          ></Checkbox>
          Let me know when more delivery dates are available
        </CheckboxLabel>
        <Header2>Delivery Frequency</Header2>
        <CheckboxLabel
          htmlFor="everyWeek"
          isChecked={values.deliveryFrequency === "everyWeek"}
        >
          <Checkbox
            type="radio"
            id="everyWeek"
            name="deliveryFrequency"
            value="everyWeek"
          ></Checkbox>
          Every Week
        </CheckboxLabel>
        <CheckboxLabel
          htmlFor="everyOtherWeek"
          isChecked={values.deliveryFrequency === "everyOtherWeek"}
        >
          <Checkbox
            type="radio"
            id="everyOtherWeek"
            name="deliveryFrequency"
            value="everyOtherWeek"
          ></Checkbox>
          Every Other Week
        </CheckboxLabel>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{
        notify_moreDeliveryDates: false,
        deliveryFrequency: "everyweek",
      }}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}
