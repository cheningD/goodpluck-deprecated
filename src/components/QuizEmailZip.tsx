import * as yup from 'yup'

import { Error, FieldWrapper, StyledErrorMessage, StyledField } from '../components/StyledComponentLib'
import React, { useState } from 'react'
import { onboardingEmail, onboardingZip } from '../store'

import FormWrapper from '../components/FormWrapper'
import { VALID_ZIP_PATTERN } from '../util'
import { checkEmailExists } from '../actions'
import { useRecoilState } from 'recoil'

type QuizEmailZipProps = {
  nextFunction: Function
  goBackFunction: Function
  percentComplete: number
}

const zipSchema = yup.object().shape({
  email: yup.string().required('Please enter your email').email(`That email doesn't look right`),
  zip: yup.string().required('Please enter your 5 digit zip').matches(VALID_ZIP_PATTERN, `That zip doesn't look right`),
})

const QuizEmailZip = ({ nextFunction, percentComplete, goBackFunction }: QuizEmailZipProps) => {
  const [email, setEmail] = useRecoilState(onboardingEmail)
  const [zip, setZip] = useRecoilState(onboardingZip)
  const [errorText, setErrorText] = useState('')
  const FormContent = () => {
    return (
      <>
        {errorText ? <Error>{errorText}</Error> : ''}
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
      initialValues={{ email, zip }}
      validationSchema={zipSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const accountAlreadyExists = await checkEmailExists(values.email)

        if (accountAlreadyExists) {
          setErrorText('An account already exists for this email, please sign in.')
          setSubmitting(false)
        } else {
          setEmail(values.email)
          setZip(values.zip)
          nextFunction()
          setSubmitting(false)
        }
      }}
      FormContent={FormContent}
      header={"First, let's confirm that we deliver to you..."}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
    />
  )
}

export default QuizEmailZip
