import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, FormHelperText, HStack, Heading, VStack, useRadioGroup } from '@chakra-ui/react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import React from 'react'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  deliveryDate: yup.string().required('Please make a choice'),
  deliveryFrequency: yup.string().required('Please make a choice'),
})

const DeliveryDate = ({ control, errors, formData }) => {
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
            <HStack justifyContent="center" spacing={4} {...group} {...field}>
              {options.map(value => {
                const radio = getRadioProps({ value })
                radio.isChecked = value === formData['deliveryDate']
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

const DeliveryFrequency = ({ control, errors, formData }) => {
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
            <HStack justifyContent="center" spacing={4} {...group} {...field}>
              {options.map(value => {
                const radio = getRadioProps({ value })
                radio.isChecked = value === formData['deliveryFrequency']
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
  const [storage, setStorage] = useLocalStorage('formValues', null)

  const onSubmit = (data: any) => {
    console.log(data)
    setStorage(Object.assign({}, storage, data))
    navigate('/signup6')
  }

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: storage })

  const formData = watch()
  return (
    <VStack bgColor="var(--light-bg)">
      <Seo title="Signup | Goodpluck" />
      <FormLayout
        progress={75}
        isLoading={false}
        heading="Set Your Delivery Preferences"
        goBackFunc={() => {
          navigate('/signup4')
        }}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      >
        <DeliveryDate control={control} errors={errors} formData={formData} />
        <DeliveryFrequency control={control} errors={errors} formData={formData} />
      </FormLayout>
    </VStack>
  )
}
export default Signup5
