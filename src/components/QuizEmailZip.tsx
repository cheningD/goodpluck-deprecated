import * as yup from 'yup'

import { Error, FieldWrapper, StyledErrorMessage, StyledField } from '../components/StyledComponentLib'
import React, { useState } from 'react'
import { onboardingEmail, onboardingZip } from '../store'

import { CheckEmailAndZipJSONResponse } from '../types'
import FormWrapper from '../components/FormWrapper'
import { VALID_ZIP_PATTERN } from '../util'
import { checkEmailZip } from '../actions'
import { navigate } from 'gatsby'
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
        const result: CheckEmailAndZipJSONResponse = await checkEmailZip(values.email, values.zip)

        if (result.error) {
          // Generic Failure
          setErrorText(result.error)
          setSubmitting(false)
        } else if (result.userExists) {
          // User exists Failure
          setErrorText('An account already exists for this email, please sign in.')
          setSubmitting(false)
        } else if (result.zipInDeliveryZone) {
          // Zip is not in delivery zone
          const search = new URLSearchParams({
            email,
            zip,
            waitlistZone: result.zipInWaitlistZone ? 'true' : 'false',
            city: result.zipCity,
          }).toString()
          navigate(`/waitlist?${search}`)
        } else {
          // Success, go to next step
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
