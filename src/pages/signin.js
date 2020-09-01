import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import "./signin.css"

let signUpSchema = yup.object().shape({
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

let signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("We are going to need your email for this...")
    .email(`That email doesn't look quite right...`),
})

const onSubmitHandler = (values, { setSubmitting }) => {
  console.log(`submitting`)
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
          <Field type="text" name="first" placeholder="first name" />
          <ErrorMessage name="first" component="div" />

          <Field type="text" name="last" placeholder="last name" />
          <ErrorMessage name="last" component="div" />

          <Field
            type="text"
            name="phone"
            placeholder="Phone (For Delivery Updates)"
          />
          <ErrorMessage name="phone" component="div" />

          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
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
          <Field type="email" name="email" placeholder="email" />
          <ErrorMessage name="email" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Sign In
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
      <button className="navbutton g-button" onClick={setSignUp}>
        {isSignUp ? <span className="fa-solid"></span> : ""}
        Sign Up
      </button>
      <button className="navbutton g-button" onClick={setSignIn}>
        {!isSignUp ? <span className="fa-solid"></span> : ""}
        Sign In
      </button>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
    </div>
  )
}
