import * as yup from 'yup'

import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

import { FormLayout } from '../components/FormLayout'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import { VALID_ZIP_PATTERN } from '../util'
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: storage })

  const onSubmit = (data: any) => {
    setStorage(Object.assign({}, storage, data))
    navigate('/signup1')
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
