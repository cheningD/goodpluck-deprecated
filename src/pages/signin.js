import * as yup from "yup"

import {
  Error,
  FieldWrapper,
  FinePrint,
  StyledErrorMessage,
  StyledField,
  TermsLink,
} from "../components/StyledComponentLib"
import React, { useState } from "react"
import { checkEmailVerificationAndSignIn, signIn } from "../actions"

import FormWrapper from "../components/FormWrapper"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import { navigate } from "gatsby"
import { updateSignedInUserInLocalStorage } from "../util"

const VerifyEmailForm = ({ onSubmit, emailInput }) => {
  const defaultBlurb = (
    <div>
      <div>Need help signing in?</div>
      <Link to="/contact">Contact Us</Link>
      <Link>Back to signin</Link>
    </div>
  )
  return (
    <FormWrapper
      initialValues={{}}
      onSubmit={onSubmit}
      FormContent={() => <>{`A login link has been sent to ${emailInput}`} </>}
      header={"Login using the link in your email."}
      submitText={"Done. Continue to my account."}
      blurb={defaultBlurb}
    />
  )
}

const SignInForm = ({ onSubmit }) => {
  const signInSchema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email(`That email doesn't look right`),
  })

  const FormContent = ({ isSubmitting, errors, touched }) => {
    return (
      <>
        <FieldWrapper>
          <StyledField type="text" name="email" placeholder="Email" />
          <StyledErrorMessage name="email" component="div" />
        </FieldWrapper>
      </>
    )
  }

  const blurb = (
    <FinePrint>
      By clicking the button above you agree to our{" "}
      <TermsLink href="/terms" target="_blank">
        Terms of Service
      </TermsLink>{" "}
      and{" "}
      <TermsLink href="/privacy" target="_blank">
        Privacy Policy
      </TermsLink>
      .
    </FinePrint>
  )

  return (
    <FormWrapper
      initialValues={{ email: "" }}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={"Sign In With Your Email"}
      submitText={"Sign In"}
      blurb={blurb}
    />
  )
}

export default function SignIn() {
  const [authCodeId, setAuthCodeId] = useState("")
  const [emailInput, setEmailInput] = useState()
  const [errorText, setErrorText] = useState("")
  const [formStep, setFormStep] = useState("signin")

  const submitVerifyEmailForm = async () => {
    const response = await checkEmailVerificationAndSignIn(
      authCodeId,
      emailInput
    )

    if (response.status !== 200) {
      console.log("Something went wrong checking email")
      return false
    } else {
      const responseJson = await response.json()
      if (responseJson.signedInUser) {
        updateSignedInUserInLocalStorage(responseJson.signedInUser)
        navigate("/myaccount")
      } else {
        console.log("You havent verified your email yet.", responseJson)
        setErrorText(
          "You havent verified your email yet. Please click on the link in your email using this browser."
        )
        return false
      }
    }
  }

  const sendSignInRequest = async (values, { setSubmitting }) => {
    // Update email
    setEmailInput(values.email)

    // Send request
    const response = await signIn(values)
    const responseJson = await response.json()

    // Handle response
    if (response.status !== 200 && responseJson.data.authCodeId) {
      setAuthCodeId(responseJson.data.authCodeId)
      setFormStep("verify")
    } else {
      setErrorText(responseJson.error)
    }
    setSubmitting(false)
  }

  const signInForm = <SignInForm onSubmit={sendSignInRequest} />

  const verifyEmailForm = (
    <VerifyEmailForm
      onSubmit={submitVerifyEmailForm}
      emailInput={emailInput}
      goBackFunction={() => setFormStep("signin")}
    />
  )

  return (
    <>
      <SEO title="Sign In | Goodpluck" />
      <Nav />
      {errorText ? <Error>{errorText}</Error> : ""}
      {formStep === "signin" ? signInForm : verifyEmailForm}
    </>
  )
}
