import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, SimpleGrid, VStack, useRadioGroup } from '@chakra-ui/react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import React from 'react'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  goal: yup.string().required('Choose one!'),
})

const SignupGoals = () => {
  const [storage, setStorage] = useLocalStorage('formValues', null)

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: storage,
  })

  const formData = watch()

  const onSubmit = (data: any) => {
    setStorage(Object.assign({}, storage, data))
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
    <FormLayout
      progress={15}
      isLoading={false}
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
                radio.isChecked = value === formData['goal']
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
  )
}
export default SignupGoals
