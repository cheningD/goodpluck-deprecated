import * as React from 'react'

import { Box, BoxProps, Img, Text } from '@chakra-ui/react'

import Image from './Image'

interface Props extends BoxProps {
  name: string
  jobTitle?: string
  imageSrc: string
}

export const Quotee = (props: Props) => {
  const { name, jobTitle, imageSrc, ...boxProps } = props
  return (
    <Box {...boxProps}>
      <Image
        style={{ width: '96px', height: '96px', objectFit: 'cover', pos: 'relative', zIndex: '1' }}
        src="abstract_female1.png"
        alt="Sarah, your average a happy customer"
      />
      <Box mt="3">
        <Text as="cite" fontStyle="normal" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {jobTitle}
        </Text>
      </Box>
    </Box>
  )
}
