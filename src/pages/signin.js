import "./signin.css"

import * as yup from "yup"

import {
  FieldWrapper,
  StyledErrorMessage,
  StyledField,
} from "../components/StyledComponentLib"

import FormWrapper from "../components/FormWrapper"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/SEO"

const EmailZipForm = ({
  onSubmit,
  header,
  percentComplete,
  goBackFunction,
  submitText,
}) => {
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
        <FieldWrapper>
          <StyledField type="text" name="zip" placeholder="Zip" />
          <StyledErrorMessage name="zip" component="div" />
        </FieldWrapper>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{ email: "" }}
      validationSchema={signInSchema}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}

export default function SignIn() {
  return (
    <>
      <SEO title="Sign In | Goodpluck" />
      <Nav />
      <EmailZipForm />
    </>
  )
}
