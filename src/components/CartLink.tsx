import { HStack, Text } from '@chakra-ui/react'
import { basketCount, isSignedIn } from '../store'

import Image from './Image'
import React from 'react'
import { useRecoilValue } from 'recoil'

export const CartLink = () => {
  const signedIn = useRecoilValue(isSignedIn)
  let link_to
  if (signedIn) {
    link_to = '/basket'
  } else {
    link_to = '/getstarted'
  }

  return (
    <HStack>
      <Image src="cart_icon_green.png" alt="my basket" style={{ height: '30px', width: '30px' }} />
      <Text color="white">{useRecoilValue(basketCount)}</Text>
    </HStack>
  )
}
