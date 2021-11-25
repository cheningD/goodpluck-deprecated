import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, SimpleGrid, useRadioGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  goal: yup.string().required('Choose one!'),
})

const SignupGoals = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    navigate('/signup2')
  }

  const options = [
    'Support local farms',
    'Live more sustainably',
    'Eat healthier',
    'Get fresher produce',
    'Discover new foods',
    'Just checking it out',
  ]

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'goal',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <>
      <Seo title="Signup | Goodpluck" />
      <FormLayout
        progress={20}
        isLoading={isLoading}
        heading="What brings you to Goodpluck?"
        subheading="Choose your main reason"
        goBackFunc={() => {
          navigate('/signup')
        }}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isSubmitDisabled={false}
      >
        <Controller
          name="goal"
          control={control}
          render={({ field }) => (
            <FormControl id="goal" isInvalid={!!errors.goal}>
              <SimpleGrid columns={2} spacing={4} {...group} {...field}>
                {options.map(value => {
                  const radio = getRadioProps({ value })
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  )
                })}
                <FormErrorMessage>{errors.goal?.message}</FormErrorMessage>
              </SimpleGrid>
            </FormControl>
          )}
        />
      </FormLayout>
    </>
  )
}
export default SignupGoals
