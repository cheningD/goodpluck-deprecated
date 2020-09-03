import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import "./signin.css"
import { listToClass } from "../util"

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(true)
  const toggleView = () => setIsSignUp(!isSignUp)

  return (
    <div className="sign-in-page">
      <div className="sign-in__left-panel">
        <div className="brand">GOODPLUCK</div>
        <div className="sign-in--form__wrapper">
          <div className="sign-in--form">
            <RenderHeader isSignUp={isSignUp} toggleView={toggleView} />
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </div>
      <div className="sign-in__right-panel" />
    </div>
  )
}

function RenderHeader({ isSignUp, toggleView }) {
  if (isSignUp) {
    return (
      <FieldWrapper className="sign-in__account-header-wrapper">
        <h2 className="sign-in__account-header">Create a new account</h2>
        <button className="sign-in--button" onClick={toggleView}>
          or Sign In
        </button>
      </FieldWrapper>
    )
  }
  return (
    <FieldWrapper className="sign-in__account-header-wrapper">
      <h2 className="sign-in__account-header">Sign in</h2>
      <button className="sign-in--button" onClick={toggleView}>
        or create new account
      </button>
    </FieldWrapper>
  )
}

const signUpSchema = yup.object().shape({
  first: yup
    .string()
    .required("What should we call you?")
    .min(1, "That name is a little too short...")
    .max(50, `Too Long! (Perhaps us a nickname?)`),
  last: yup
    .string()
    .min(1, "That name is a little too short...")
    .required("We need your last name")
    .max(50, `Too Long! (Perhaps us a nickname?)`),
  phone: yup
    .string()
    .required(`We need your phone (for delivery updates)`)
    .max(50, `Too Long!`),
  email: yup
    .string()
    .required(`We need your email`)
    .email(`That email doesn't look quite right...`),
})

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("We are going to need your email for this...")
    .email(`That email doesn't look quite right...`),
})

const onSubmitHandler = (values, { setSubmitting }) => {
  console.log(`pow pow`)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 400)
}

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{ first: "", last: "", phone: "", email: "" }}
      validationSchema={signUpSchema}
      onSubmit={onSubmitHandler}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="sign-in--form__field-row">
            <FieldWrapper className="sign-in--form__wrapper-input">
              <Field
                className="sign-in-input"
                type="text"
                name="first"
                placeholder="first name"
              />
              <ErrorMessage name="first" component="div" />
            </FieldWrapper>

            <FieldWrapper className="sign-in--form__wrapper-input">
              <Field
                className="sign-in-input"
                type="text"
                name="last"
                placeholder="last name"
              />
              <ErrorMessage name="last" component="div" />
            </FieldWrapper>
          </div>

          <FieldWrapper className="sign-in--form__wrapper-input">
            <Field
              type="text"
              name="phone"
              className="sign-in-input"
              placeholder="Phone (For Delivery Updates)"
            />
            <ErrorMessage name="phone" component="div" />
          </FieldWrapper>

          <FieldWrapper className="sign-in--form__wrapper-input">
            <Field
              className="sign-in-input"
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" />
          </FieldWrapper>
          <FieldWrapper>
            <span className="sign-in--blurb">
              By entering your phone number, you agree to receive text messages
              from Goodpluck regarding your order. Standard message rates apply.
              Only U.S based numbers are allowed
            </span>
          </FieldWrapper>
          <FieldWrapper>
            <button
              className="sign-in--form__button"
              type="submit"
              disabled={isSubmitting}
            >
              <span>Sign Up</span>
            </button>
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  )
}

const SignInForm = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={signInSchema}
      onSubmit={onSubmitHandler}
    >
      {({ isSubmitting }) => (
        <Form>
          <FieldWrapper className="sign-in--form__wrapper-input">
            <Field
              className="sign-in-input"
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" />
          </FieldWrapper>

          <FieldWrapper>
            <span className="sign-in--blurb">
              We'll email you a link to make sure you are who you say you are.
              <br />
              <br />
              Click it and you're in! (No passwords here)
              <br />
              <br />
              <a>Having trouble logging in?</a>
            </span>
          </FieldWrapper>

          <FieldWrapper>
            <button
              className="sign-in--form__button"
              type="submit"
              disabled={isSubmitting}
            >
              <span>Sign In</span>
            </button>
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  )
}

function FieldWrapper({ children, className }) {
  return (
    <div className={listToClass(["sign-in--field-wrapper", className])}>
      {children}
    </div>
  )
}
