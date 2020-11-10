import * as yup from 'yup'

import { CheckboxLabel } from '../components/StyledComponentLib'
import { Field } from 'formik'
import FormWrapper from '../components/FormWrapper'
import React from 'react'
import { VALID_ZIP_PATTERN } from '../util'
import { onboardingShoppingFor } from '../store'
import { removeNonLetters } from '../util'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

type QuizShoppingForProps = {
  nextFunction: Function
  goBackFunction: Function
  percentComplete: number
}

const zipSchema = yup.object().shape({
  email: yup.string().required('Please enter your email').email(`That email doesn't look right`),
  zip: yup.string().required('Please enter your 5 digit zip').matches(VALID_ZIP_PATTERN, `That zip doesn't look right`),
})

type CheckProps = {
  shoppingForValues: string[]
  label: string
}

const Check = ({ shoppingForValues, label }: CheckProps) => {
  return (
    <CheckboxLabel htmlFor={label} isChecked={shoppingForValues.includes(label)}>
      <Field className="checkbox" type="checkbox" id={label} name="shoppingFor" value={label} />
      {`${label}`}
    </CheckboxLabel>
  )
}

const QuizShoppingFor = ({ nextFunction, percentComplete, goBackFunction }: QuizShoppingForProps) => {
  const [shoppingFor, setShoppingFor] = useRecoilState(onboardingShoppingFor)
  const FormContent = ({ values }) => {
    // If
    let shoppingForValues: string[] = values.shoppingFor ? values.shoppingFor : shoppingFor
    return (
      <div role="group" aria-labelledby="checkbox-group">
        <Check label="Myself" shoppingForValues={shoppingForValues} />
        <Check label="Spouse or Partner" shoppingForValues={shoppingForValues} />
        <Check label="Kids" shoppingForValues={shoppingForValues} />
        <Check label="Babies" shoppingForValues={shoppingForValues} />
        <Check label="Extended Family" shoppingForValues={shoppingForValues} />
        <Check label="Friends or Roommates" shoppingForValues={shoppingForValues} />
        <Check label="Pets" shoppingForValues={shoppingForValues} />
      </div>
    )
  }

  return (
    <FormWrapper
      initialValues={shoppingFor}
      onSubmit={(values, { setSubmitting }) => {
        setShoppingFor(values.shoppingFor || [])
        setSubmitting(false)
        nextFunction()
      }}
      FormContent={FormContent}
      header="Who do you normally shop for?"
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      blurb="Why we ask? To make better basket recommendations!"
    />
  )
}

export default QuizShoppingFor
