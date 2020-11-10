import * as yup from 'yup'

import { Field } from 'formik'
import FormWrapper from '../components/FormWrapper'
import React from 'react'
import { VALID_ZIP_PATTERN } from '../util'
import { onboardingMyCauses } from '../store'
import { removeNonLetters } from '../util'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

interface CheckboxLabelProps {
  isChecked: boolean
}

const CheckboxLabel = styled.label<CheckboxLabelProps>`
  .checkbox {
    display: none;
  }
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #fff;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    position: absolute;
    left: 0;
    top: 3px;
    opacity: 0.6;
    -webkit-transition: all 0.12s, border-color 0.08s;
    transition: all 0.12s, border-color 0.08s;
  }

  ${({ isChecked }) => {
    if (isChecked) {
      return `

    &:before {
    width: 10px;
    top: 0;
    left: 5px;
    border-radius: 0;
    opacity: 1;
    border-top-color: transparent;
    border-left-color: transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
      
    `
    }
  }}
`

type QuizMyCausesProps = {
  nextFunction: Function
  goBackFunction: Function
  percentComplete: number
}

const zipSchema = yup.object().shape({
  email: yup.string().required('Please enter your email').email(`That email doesn't look right`),
  zip: yup.string().required('Please enter your 5 digit zip').matches(VALID_ZIP_PATTERN, `That zip doesn't look right`),
})

type CheckProps = {
  myCausesValues: string[]
  label: string
}

const Check = ({ myCausesValues, label }: CheckProps) => {
  return (
    <CheckboxLabel htmlFor={label} isChecked={myCausesValues.includes(label)}>
      <Field className="checkbox" type="checkbox" id={label} name="myCauses" value={label} />
      {`${label}`}
    </CheckboxLabel>
  )
}

const QuizMyCauses = ({ nextFunction, percentComplete, goBackFunction }: QuizMyCausesProps) => {
  const [myCauses, setmyCauses] = useRecoilState(onboardingMyCauses)
  const FormContent = ({ values }) => {
    // If
    let myCausesValues: string[] = values.myCauses ? values.myCauses : myCauses
    return (
      <div role="group" aria-labelledby="checkbox-group">
        <Check label="Eating Organic" myCausesValues={myCausesValues} />
        <Check label="Living Sustainably" myCausesValues={myCausesValues} />
        <Check label="Supporting Local Farms" myCausesValues={myCausesValues} />
        <Check label="Animal Welfare" myCausesValues={myCausesValues} />
        <Check label="Food Access" myCausesValues={myCausesValues} />
        <Check label="Regenerative Agriculture" myCausesValues={myCausesValues} />
      </div>
    )
  }

  return (
    <FormWrapper
      initialValues={myCauses}
      onSubmit={(values, { setSubmitting }) => {
        setmyCauses(values.myCauses || [])
        setSubmitting(false)
        nextFunction()
      }}
      FormContent={FormContent}
      header="What values are most important to you?"
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      blurb="Why we ask? It helps us source great items!"
      submitText="Build your basket"
    />
  )
}

export default QuizMyCauses
