import { Box, useRadio } from '@chakra-ui/react'

import React from 'react'

const RadioCard = props => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        h="100%"
        boxShadow="md"
        _checked={{
          color: 'peach.50',
          bg: 'brand.500',
          borderColor: 'brand.500',
          fontFamily: 'heading',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioCard
