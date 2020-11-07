import { CheckboxLabel, Header2 } from '../components/StyledComponentLib'

import { Field } from 'formik'
import FormWrapper from '../components/FormWrapper'
import React from 'react'

const QuizDeliveryPreferences = ({ onSubmit, header, percentComplete, goBackFunction, submitText }) => {
  const FormContent = ({ values }) => {
    return (
      <>
        <Header2>Your Delivery Day: Saturday</Header2>

        <CheckboxLabel htmlFor="notify_moreDeliveryDates" isChecked={values.notify_moreDeliveryDates}>
          <Field className="checkbox" type="checkbox" id="notify_moreDeliveryDates" name="notify_moreDeliveryDates" />
          Let me know when more delivery dates are available
        </CheckboxLabel>
        <Header2>Delivery Frequency</Header2>
        <CheckboxLabel htmlFor="everyWeek" isChecked={values.orderFrequency === 'everyWeek'}>
          <Field className="checkbox" type="radio" id="everyWeek" name="orderFrequency" value="everyWeek" />
          Every Week
        </CheckboxLabel>
        <CheckboxLabel htmlFor="everyOtherWeek" isChecked={values.orderFrequency === 'everyOtherWeek'}>
          <Field className="checkbox" type="radio" id="everyOtherWeek" name="orderFrequency" value="everyOtherWeek" />
          Every Other Week
        </CheckboxLabel>
      </>
    )
  }

  return (
    <FormWrapper
      initialValues={{
        notify_moreDeliveryDates: false,
        orderFrequency: 'everyweek',
      }}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}

export default QuizDeliveryPreferences
