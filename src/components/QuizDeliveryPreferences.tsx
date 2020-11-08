import { CheckboxLabel, Header2 } from '../components/StyledComponentLib'
import { onboardingNotifyDeliveryDates, onboardingOrderFrequency } from '../store'

import { Field } from 'formik'
import FormWrapper from '../components/FormWrapper'
import React from 'react'
import { useRecoilState } from 'recoil'

const QuizDeliveryPreferences = ({ nextFunction, header, percentComplete, goBackFunction, submitText }) => {
  const [orderFrequency, setOrderFrequency] = useRecoilState(onboardingOrderFrequency)
  const [notifyDeliverydates, setNotifyDeliverydates] = useRecoilState(onboardingNotifyDeliveryDates)
  const FormContent = ({ values }) => {
    let notifyDeliverydatesChecked: boolean = values.notifyDeliverydates
      ? values.notifyDeliverydates
      : notifyDeliverydates
    let orderFrequencyString: string = values.orderFrequency ? values.orderFrequency : orderFrequency

    return (
      <>
        <Header2>Your Delivery Day: Saturday</Header2>

        <CheckboxLabel htmlFor="notifyDeliverydates" isChecked={notifyDeliverydatesChecked}>
          <Field className="checkbox" type="checkbox" id="notifyDeliverydates" name="notifyDeliverydates" />
          Let me know when more delivery dates are available
        </CheckboxLabel>
        <Header2>Delivery Frequency</Header2>
        <CheckboxLabel htmlFor="every week" isChecked={orderFrequencyString === 'every week'}>
          <Field className="checkbox" type="radio" id="every week" name="orderFrequency" value="every week" />
          Every Week
        </CheckboxLabel>
        <CheckboxLabel htmlFor="every other week" isChecked={orderFrequencyString === 'every other week'}>
          <Field
            className="checkbox"
            type="radio"
            id="every other week"
            name="orderFrequency"
            value="every other week"
          />
          Every Other Week
        </CheckboxLabel>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{
        notifyDeliverydates: false,
        orderFrequency: orderFrequency,
      }}
      onSubmit={(values, { setSubmitting }) => {
        setOrderFrequency(values.orderFrequency)
        setNotifyDeliverydates(values.notifyDeliverydates)
        setSubmitting(false)
        nextFunction()
      }}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}

export default QuizDeliveryPreferences
