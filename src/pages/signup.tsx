import * as yup from 'yup'

import { CheckEmailAndZipJSONResponse, SignupData } from '../types'
import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

import { FormLayout } from '../components/FormLayout'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import { VALID_ZIP_PATTERN } from '../util'
import { checkEmailZip } from '../actions'
import { navigate } from 'gatsby-link'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  email: yup.string().required('Please enter your email').email(`That email doesn't look right`),
  zip: yup.string().required('Please enter your 5 digit zip').matches(VALID_ZIP_PATTERN, `That zip doesn't look right`),
})

const Signup = () => {
  const [storage, setStorage] = useLocalStorage('formValues', null)
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: storage })

  const onSubmit = async (data: SignupData) => {
    setLoading(true)
    console.log(`data: ${JSON.stringify({ data })}`)
    const result: CheckEmailAndZipJSONResponse = await checkEmailZip(data.email, data.zip)

    if (result.error) {
      // Generic Failure
      setError('email', {
        type: 'manual',
        message: 'Something went wrong, if this problem persists, please contact us.',
      })
      setLoading(false)
    } else if (result.userExists) {
      // User exists Failure
      setError('email', {
        type: 'manual',
        message: 'An account already exists for this email, please sign in.',
      })
      setLoading(false)
    } else if (!result.zipInDeliveryZone) {
      // Zip is not in delivery zone
      const waitlistParams = {}
      if (result.email) {
        waitlistParams['email'] = result.email
      }
      if (result.zip) {
        waitlistParams['zip'] = result.zip
      }
      if (result.zipInWaitlistZone) {
        waitlistParams['waitlistZone'] = 'true'
      }
      if (result.zipCity) {
        waitlistParams['city'] = result.zipCity
      }

      const search = new URLSearchParams(waitlistParams).toString()
      setLoading(false)
      navigate(`/waitlist?${search}`)
    } else {
      // Success, go to next step
      setStorage(Object.assign({}, storage, data))
      setLoading(false)
      navigate('/signup1')
    }
  }

  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <Nav />
      <FormLayout
        isLoading={false}
        heading="First, let's confirm that we deliver to you"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <FormControl id="zip" isInvalid={!!errors.zip}>
          <FormLabel>Zip</FormLabel>
          <Input placeholder="e.g. 48201" {...register('zip')} />
          <FormErrorMessage>{errors.zip?.message}</FormErrorMessage>
        </FormControl>
        <FormControl id="email" isInvalid={!!errors.email}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
      </FormLayout>
    </>
  )
}
export default Signup
