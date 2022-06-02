import * as yup from 'yup'

import {
  Error,
  FieldWrapper,
  FinePrint,
  StyledErrorMessage,
  StyledField,
  TermsLink,
} from '../components/StyledComponentLib'
import React, { useState } from 'react'

import FormWrapper from '../components/FormWrapper'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import { navigate } from 'gatsby'
import { signIn } from '../actions'

const SignInForm = ({ onSubmit, errorText }) => {
  const signInSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email(`That email doesn't look right`),
  })

  let errorBar
  if (errorText) {
    errorBar = <Error>{errorText}</Error>
  }

  const FormContent = ({ isSubmitting, errors, touched }) => {
    return (
      <>
        <FieldWrapper>
          {errorBar}
          <StyledField type="text" name="email" placeholder="Email" />
          <StyledErrorMessage name="email" component="div" />
        </FieldWrapper>
      </>
    )
  }

  let blurb = (
    <FinePrint>
      By clicking the button above you agree to our{' '}
      <TermsLink href="/terms" target="_blank">
        Terms of Service
      </TermsLink>{' '}
      and{' '}
      <TermsLink href="/privacy" target="_blank">
        Privacy Policy
      </TermsLink>
      .
    </FinePrint>
  )

  let header = 'Sign In With Your Email'
  let submitText = 'Sign In'

  if (typeof window !== `undefined`) {
    const params = new URLSearchParams(window.location.search)
    if (params.has('verify')) {
      header = 'Verify your email to continue to your account'
      submitText = 'Verify my email'
      blurb = ''
    }
  }

  return (
    <FormWrapper
      initialValues={{ email: '' }}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      submitText={submitText}
      blurb={blurb}
    />
  )
}

export default function SignIn() {
  const [errorText, setErrorText] = useState('')

  const sendSignInRequest = async (values, { setSubmitting }) => {
    // Send request
    const response = await signIn(values)
    const responseJson = await response.json()

    // Handle response
    if (response.status === 200 && responseJson.data.authCodeId) {
      navigate(`/verifyemail`)
    } else {
      setErrorText(responseJson.error)
    }
    setSubmitting(false)
  }

  return (
    <>
      <Seo title="Sign In | Goodpluck" />
      <Nav activelink={'signin'} />
      <SignInForm onSubmit={sendSignInRequest} errorText={errorText} />
    </>
  )
}
