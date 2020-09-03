import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import "./signin.css"

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
            <div className="sign-in--field-wrapper">
              <Field
                className="sign-in-input"
                type="text"
                name="first"
                placeholder="first name"
              />
              <ErrorMessage name="first" component="div" />
            </div>

            <div className="sign-in--field-wrapper">
              <Field
                className="sign-in-input"
                type="text"
                name="last"
                placeholder="last name"
              />
              <ErrorMessage name="last" component="div" />
            </div>
          </div>

          <div className="sign-in--field-wrapper">
            <Field
              type="text"
              name="phone"
              className="sign-in-input"
              placeholder="Phone (For Delivery Updates)"
            />
            <ErrorMessage name="phone" component="div" />
          </div>
          <div className="sign-in--field-wrapper">
            <Field
              className="sign-in-input"
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="sign-in--field-wrapper">
            <span className="sign-in--blurb">
              By entering your phone number, you agree to receive text messages
              from Goodpluck regarding your order. Standard message rates apply.
              Only U.S based numbers are allowed
            </span>
          </div>
          <div className="sign-in--field-wrapper">
            <button
              className="sign-in--form__button"
              type="submit"
              disabled={isSubmitting}
            >
              <span>Sign Up</span>
            </button>
          </div>
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
          <div className="sign-in--field-wrapper">
            <Field
              className="sign-in-input"
              type="email"
              name="email"
              placeholder="email"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <button
            className="sign-in--form__button"
            type="submit"
            disabled={isSubmitting}
          >
            <span>Sign In</span>
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(true)

  const setSignIn = () => setIsSignUp(false)
  const setSignUp = () => setIsSignUp(true)

  return (
    <div className="sign-in-page">
      <div className="sign-in__left-panel">
        <div className="brand">GOODPLUCK</div>
        <button className="navbutton g-button" onClick={setSignUp}>
          {isSignUp ? <span className="fa-solid"></span> : ""}
          Sign Up
        </button>
        <button className="navbutton g-button" onClick={setSignIn}>
          {!isSignUp ? <span className="fa-solid"></span> : ""}
          Sign In
        </button>
        <div className="sign-in--form__wrapper">
          <div className="sign-in--form">
            {isSignUp ? <SignUpForm /> : <SignInForm />}
          </div>
        </div>
      </div>
      <div className="sign-in__right-panel" />
    </div>
  )
}
