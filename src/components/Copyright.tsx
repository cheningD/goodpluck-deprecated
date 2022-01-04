import * as React from 'react'

import { Text, TextProps } from '@chakra-ui/layout'

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} WhatsEatLike, Inc. All rights reserved.
  </Text>
)
