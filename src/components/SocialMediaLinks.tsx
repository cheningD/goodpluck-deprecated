import * as React from 'react'

import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'

import { FaInstagram } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="https://www.instagram.com/goodpluckgrows/"
      aria-label="LinkedIn"
      icon={<FaInstagram fontSize="20px" />}
    />
  </ButtonGroup>
)
