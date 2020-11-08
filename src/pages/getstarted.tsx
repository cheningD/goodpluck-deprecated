import * as yup from 'yup'

import React, { useState } from 'react'

import BasketPreview from '../components/BasketPreview'
import FormWrapper from '../components/FormWrapper'
import Nav from '../components/Nav'
import QuizDeliveryPreferences from '../components/QuizDeliveryPreferences'
import QuizEmailZip from '../components/QuizEmailZip'
import QuizMyCauses from '../components/QuizMyCauses'
import QuizShoppingFor from '../components/QuizShoppingFor'
import SEO from '../components/SEO'
import { navigate } from 'gatsby'
import useLocalStorageState from 'use-local-storage-state'

const GetStarted = () => {
  const onSubmitHandler = (values, { setSubmitting }) => {
    formSteps[formStep].next()
    setSubmitting(false)
  }

  const formSteps = {
    email: {
      component: (
        <QuizEmailZip
          goBackFunction={() => navigate('/')}
          nextFunction={() => setFormStep('shoppingForQuiz')}
          percentComplete={0}
        />
      ),
    },
    shoppingForQuiz: {
      component: (
        <QuizShoppingFor
          goBackFunction={() => setFormStep('email')}
          nextFunction={() => setFormStep('valuesQuiz')}
          percentComplete={20}
        />
      ),
    },
    valuesQuiz: {
      component: (
        <QuizMyCauses
          goBackFunction={() => setFormStep('shoppingForQuiz')}
          nextFunction={() => setFormStep('chooseYourStarter')}
          percentComplete={40}
        />
      ),
    },
    chooseYourStarter: {
      component: (
        <ChooseYourStarterForm
          goBackFunction={() => setFormStep('valuesQuiz')}
          onSubmit={onSubmitHandler}
          header="Your first basket"
          percentComplete={60}
          submitText="Set delivery preferences"
        />
      ),
      next: () => setFormStep('deliveryPreferences'),
    },
    deliveryPreferences: {
      component: (
        <QuizDeliveryPreferences
          goBackFunction={() => setFormStep('chooseYourStarter')}
          onSubmit={onSubmitHandler}
          header="Choose your delivery preferences"
          percentComplete={80}
          submitText="Finish creating your account"
        />
      ),
      next: () => navigate(`/checkout`),
    },
  }

  // On refresh restart the quiz (don't save quiz in localstorage)
  let currentPage = 'email'
  const [formStep, _setFormStep] = useState(currentPage)
  const setFormStep = step => {
    _setFormStep(step)
  }

  let currentForm = formSteps[formStep].component

  return (
    <>
      <SEO title="Get Started | Goodpluck" />
      <Nav />
      {currentForm}
    </>
  )
}
export default GetStarted

const ChooseYourStarterForm = ({ onSubmit, header, percentComplete, goBackFunction, submitText }) => {
  const FormContent = ({ values }) => {
    return <BasketPreview numberOfVisibleItems={4} />
  }

  return (
    <FormWrapper
      initialValues={{}}
      onSubmit={onSubmit}
      FormContent={FormContent}
      header={header}
      percentComplete={percentComplete}
      goBackFunction={goBackFunction}
      submitText={submitText}
    />
  )
}
