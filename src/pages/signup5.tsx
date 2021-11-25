import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormHelperText, HStack, Heading, Text, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  deliveryDate: yup.string().required('Please make a choice'),
  deliveryFrequency: yup.string().required('Please make a choice'),
})

const DeliveryDate = ({ control, errors }) => {
  const options = ['Saturday Afternoon (by 8 pm)', 'Sunday Morning (by noon)']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'deliveryDate',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Heading textAlign="center" fontSize="xl">
        What day should we deliver?
      </Heading>

      <Controller
        name="deliveryDate"
        control={control}
        render={({ field }) => (
          <FormControl id="deliveryDate" isInvalid={!!errors.deliveryDate}>
            <HStack spacing={4} {...group} {...field}>
              {options.map(value => {
                const radio = getRadioProps({ value })
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                )
              })}
            </HStack>

            <FormErrorMessage>{errors.deliveryDate?.message}</FormErrorMessage>
            <FormHelperText as="em" mt={2}>
              Contactless Delivery: We'll leave your basket by your doorstep, and text you to let you know
            </FormHelperText>
          </FormControl>
        )}
      />
    </>
  )
}

const DeliveryFrequency = ({ control, errors }) => {
  const options = ['Every Week', 'Every Other Week']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'deliveryFrequency',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Heading textAlign="center" fontSize="xl">
        How often would you like a basket?
      </Heading>
      <Controller
        name="deliveryFrequency"
        control={control}
        render={({ field }) => (
          <FormControl id="deliveryFrequency" isInvalid={!!errors.deliveryFrequency}>
            <HStack spacing={4} {...group} {...field}>
              {options.map(value => {
                const radio = getRadioProps({ value })
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                )
              })}
            </HStack>
            <FormErrorMessage>{errors.deliveryFrequency?.message}</FormErrorMessage>
          </FormControl>
        )}
      />
    </>
  )
}

const Signup5 = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    navigate('/checkout')
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <FormLayout
        progress={80}
        isLoading={isLoading}
        heading="Set Your Delivery Preferences"
        goBackFunc={() => {
          navigate('/signup4')
        }}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <DeliveryDate control={control} errors={errors} />
        <DeliveryFrequency control={control} errors={errors} />
      </FormLayout>
    </>
  )
}
export default Signup5
