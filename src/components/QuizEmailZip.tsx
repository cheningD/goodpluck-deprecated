import * as yup from 'yup'

import { FieldWrapper, StyledErrorMessage, StyledField } from '../components/StyledComponentLib'
import { onboardingEmail, onboardingZip } from '../store'

import FormWrapper from '../components/FormWrapper'
import React from 'react'
import { VALID_ZIP_PATTERN } from '../util'
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
  const FormContent = () => {
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
      initialValues={{ email, zip }}
      validationSchema={zipSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(`setEmail(${values.email}), setZip(${values.zip})`)
        setEmail(values.email)
        setZip(values.zip)
        setSubmitting(false)
        nextFunction()
      }}
      FormContent={FormContent}
      header={"First, let's confirm that we deliver to you..."}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
    />
  )
}

export default QuizEmailZip
