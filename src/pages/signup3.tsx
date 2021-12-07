import * as yup from 'yup'

import { Controller, useForm } from 'react-hook-form'
import { FormControl, FormErrorMessage, Stack, VStack, useRadioGroup } from '@chakra-ui/react'

import { FormLayout } from '../components/FormLayout'
import RadioCard from '../components/RadioCard'
import React from 'react'
import Seo from '../components/Seo'
import { navigate } from 'gatsby-link'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  organicOrRegular: yup.string().required('Please make a choice, no judgement here:)'),
})

const Signup3 = () => {
  const [storage, setStorage] = useLocalStorage('formValues', null)
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), defaultValues: storage })
  const formData = watch()

  const onSubmit = (data: any) => {
    setStorage(Object.assign({}, storage, data))
    navigate('/signup4')
  }

  const options = ['Organic', 'Regular', 'Both']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'organicOrRegular',
    onChange: console.log,
  })

  const group = getRootProps()

  return (
    <FormLayout
      progress={45}
      isLoading={false}
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
                radio.isChecked = value === formData['organicOrRegular']

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
  )
}
export default Signup3
