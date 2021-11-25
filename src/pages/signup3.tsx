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
  organicOrRegular: yup.string().required('Please make a choice, no judgement here:)'),
})

const Signup3 = () => {
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
    navigate('/signup4')
  }

  const options = ['Organic', 'Regular', 'Both']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'organicOrRegular',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <FormLayout
        progress={60}
        isLoading={isLoading}
        heading="What kind of produce do you normally buy?"
        goBackFunc={() => {
          navigate('/signup2')
        }}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <Controller
          name="organicOrRegular"
          control={control}
          render={({ field }) => (
            <FormControl id="organicOrRegular" isInvalid={!!errors.organicOrRegular}>
              <Stack spacing={6} {...group} {...field}>
                {options.map(value => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  )
                })}
                <FormErrorMessage>{errors.organicOrRegular?.message}</FormErrorMessage>
              </Stack>
            </FormControl>
          )}
        />
      </FormLayout>
    </>
  )
}
export default Signup3
