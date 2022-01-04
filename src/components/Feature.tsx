import * as React from 'react'

import { Box, Stack, StackDirection, Text, useColorModeValue as mode } from '@chakra-ui/react'

interface FeatureProps {
  icon?: React.ReactElement
  title: string
  highlight?: string
  highlightColor?: string
  children: React.ReactNode
  direction?: StackDirection
}
export const Feature = (props: FeatureProps) => {
  const { icon, title, children } = props
  return (
    <Box>
      <Stack direction={props.direction || 'row'} spacing="3" color={mode('gray.800', 'gray.800')}>
        {icon}
        <Text as="span" fontWeight="normal" fontSize="2xl" letterSpacing="normal" fontFamily="title">
          {title}{' '}
          <Text as="span" color={props.highlightColor || 'pink.300'}>
            {props.highlight}
          </Text>
        </Text>
      </Stack>
      <Text mt="3">{children}</Text>
    </Box>
  )
}
