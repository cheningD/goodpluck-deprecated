import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, Stack, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  numHousehold: yup.string().required('Please choose one of those boxes'),
})

const SignupGoals = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    navigate('/signup3')
  }

  const options = ['1-2', '3-4', '5+']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'numHousehold',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <FormLayout
        progress={40}
        isLoading={isLoading}
        heading="How many eaters are there in your household?"
        goBackFunc={() => {
          navigate('/signup1')
        }}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <Controller
          name="numHousehold"
          control={control}
          render={({ field }) => (
            <FormControl id="numHousehold" isInvalid={!!errors.numHousehold}>
              <Stack spacing={6} {...group} {...field}>
                {options.map(value => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  )
                })}
                <FormErrorMessage>{errors.numHousehold?.message}</FormErrorMessage>
              </Stack>
            </FormControl>
          )}
        />
      </FormLayout>
    </>
  )
}
export default SignupGoals
