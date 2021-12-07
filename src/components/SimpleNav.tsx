import { HStack, Text } from '@chakra-ui/react'

import React from 'react'

type SimpleNavProps = {
  leftItem?: any
  rightItem?: any
}

export const SimpleNav = ({ leftItem, rightItem }: SimpleNavProps) => {
  return (
    <HStack justify="space-between" bg="brand.500" m={0} p={4} boxShadow="md">
      {leftItem || <div></div>}
      <Text color="white" fontFamily="title" fontSize="3xl" _hover={{ textDecoration: 'none' }}>
        Goodpluck
      </Text>
      {rightItem || <div></div>}
    </HStack>
  )
}
