import { HStack, Text } from '@chakra-ui/react'
import { basketCount, isSignedIn } from '../store'

import Emoji from './Emoji'
import Image from './Image'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const CartLink = () => {
  const signedIn = useRecoilValue(isSignedIn)
  let link_to
  if (signedIn) {
    link_to = '/basket'
  } else {
    link_to = '/signup'
  }

  return (
    <HStack>
      <Emoji symbol="🧺" label="basket" fontSize="3xl" />
      <Text color="white">{useRecoilValue(basketCount)}</Text>
    </HStack>
  )
}
