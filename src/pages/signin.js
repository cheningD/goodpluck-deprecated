import * as yup from "yup"

import {
  Bold,
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
import useLocalStorageState from "use-local-storage-state"

const VerifyEmailForm = ({ onSubmit, blurb, emailInput }) => {
  return (
    <FormWrapper
      initialValues={{}}
      onSubmit={onSubmit}
      FormContent={() => <>{`A login link has been sent to ${emailInput}`} </>}
      header={"Login using the link in your email."}
      submitText={"Done. Continue to my account."}
      blurb={blurb}
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
  const defaultBlurb = (
    <div>
      <div>Need help signing in?</div>
      <Link to="/contact">Contact Us</Link>
      <Link>Back to signin</Link>
    </div>
  )
  const [signInNonce, setSignInNonce] = useLocalStorageState(
    "goodpluck-sign-in-nonce",
    ""
  )
  const [emailInput, setEmailInput] = useState()
  const [verifyEmailBlurb, setVerifyEmailBlurb] = useState()

  const submitVerifyEmailForm = async () => {
    const success = await checkEmailVerificationAndSignIn(
      signInNonce,
      emailInput
    )
    if (success) {
      navigate("/myaccount")
    } else {
    }
  }

  const submitEmail = async (values, { setSubmitting }) => {
    //1. set email
    setEmailInput(values.email)
    //2. Generate a randfom sign in nonce
    const nonce = "random"
    setSignInNonce(nonce)

    //3. Build and send request
    const params = Object.assign({}, { nonce: nonce }, values)
    const response = await signIn(params)
    const responsejson = await response.json
    if ((response.status = 200)) {
      console.log("Signin requested", responsejson)
    } else {
      console.log("Error with signin", responsejson)
    }
  }

  const signInForm = <SignInForm onSubmit={submitEmail} />
  const [formStep, setFormStep] = useState("signin")
  const verifyEmailForm = (
    <VerifyEmailForm
      onSubmit={() => checkEmailVerificationAndSignIn(signInNonce, emailInput)}
      emailInput={emailInput}
      blurb={defaultBlurb}
      goBackFunction={() => setFormStep("signin")}
    />
  )

  return (
    <>
      <SEO title="Sign In | Goodpluck" />
      <Nav />
      {formStep === "signin" ? signInForm : verifyEmailForm}
    </>
  )
}
