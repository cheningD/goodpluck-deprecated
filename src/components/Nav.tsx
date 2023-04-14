import * as Sentry from '@sentry/gatsby'

import { Box, Button, HStack, Link, Spinner, Text } from '@chakra-ui/react'
import GatsbyLink, { navigate } from 'gatsby-link'
import { OrderSupabase, SignedInData } from '../types'
import React, { ReactNode, useEffect, useState } from 'react'
import { basketCount, basketItems, isSignedIn, myOrders, signedInUser } from '../store'
import { getBasket, getOrders, getSignedInData } from '../actions'
import { useRecoilState, useRecoilValue } from 'recoil'

import Image from './Image'
import { SettingsIcon } from '@chakra-ui/icons'
import { Toaster } from 'react-hot-toast'

const LogoText = () => (
  <Box>
    <Text
      onClick={() => {
        navigate('/')
      }}
      color="white"
      fontFamily="title"
      fontSize={['xl', '3xl', '3xl']}
      _hover={{ textDecoration: 'none' }}
    >
      Goodpluck
    </Text>
  </Box>
)

const GetStartedBtn = () => (
  <Button
    bg="#fffd82"
    color="#3f3a40"
    border="2px solid #3f3a40"
    _hover={{ bg: 'brand.pink' }}
    as={GatsbyLink}
    to={'/signup'}
  >
    Get Started
  </Button>
)

const NavLink = ({
  children,
  to,
  underlined,
  activelink,
}: {
  children: ReactNode
  to: string
  underlined?: boolean
  activelink?: string
}) => {
  const underline = underlined || `/${activelink}` === to
  return (
    <Link
      as={GatsbyLink}
      to={to}
      px={2}
      py={1}
      color="white"
      borderBottom={underline ? '2px solid #fff' : 'none'}
      _hover={{
        textDecoration: 'none',
        fontFamily: 'heading',
        borderStyle: 'none',
        borderBottom: '2px solid #fff',
      }}
    >
      {children}
    </Link>
  )
}

const NavContent = ({ children }) => (
  <HStack px="4" py="3" bg="brand.500" as={'nav'} justifyContent={'space-between'}>
    <LogoText />
    <HStack spacing="3">{children}</HStack>
  </HStack>
)

export default function Nav({ activelink }) {
  const signedIn = useRecoilValue(isSignedIn)
  const [user, setUser] = useRecoilState(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)
  const [basket, setBasket] = useRecoilState(basketItems)

  const fetchOrders = async () => {
    // GET ORDERS
    const orderData: OrderSupabase[] = await getOrders()
    if (orderData) {
      setOrders(orderData)
    }
  }

  useEffect(() => {
    if (orders === null) {
      fetchOrders()
    }
  }, [])

  const fetchUser = async () => {
    // GET SIGNED IN USER
    const signedInData: SignedInData = await getSignedInData()
    if (signedInData && signedInData.signedInUser) {
      setUser(signedInData.signedInUser)
      Sentry.setUser({ email: signedInData.signedInUser.email })
    }
  }

  useEffect(() => {
    if (!user) {
      fetchUser()
    }
  }, [])

  const fetchBasket = async () => {
    // GET BASKET
    const _basket = await getBasket()
    if (_basket) {
      setBasket(_basket)
    }
  }

  useEffect(() => {
    if (basket === null) {
      fetchBasket()
    }
  }, [])

  // const fetchSubscriptions = async () => {
  //   const _subscriptions = await getSubscriptions()
  //   console.log(`I'm getting subscriptions ${JSON.stringify(_subscriptions)}`)
  //   if (_subscriptions) {
  //     console.log(`I'm updating subscriptions:::`, _subscriptions)
  //     setSubscriptions(_subscriptions)
  //   }
  // }

  // useEffect(() => {
  //   if (subscriptions === null) {
  //     fetchSubscriptions()
  //   }
  // }, [])

  let nav = (
    <NavContent>
      <NavLink to="/signin" activelink={activelink}>
        Sign In
      </NavLink>
      <GetStartedBtn />
    </NavContent>
  )

  if (signedIn && basket === null) {
    nav = (
      <NavContent>
        <Spinner />
      </NavContent>
    )
  } else if (signedIn) {
    nav = (
      <NavContent>
        <NavLink to="/market" activelink={activelink}>
          Market
        </NavLink>
        <NavLink to="/basket">
          <Image
            style={{ width: '30px', height: '30px', objectFit: 'contain', pos: 'relative', zIndex: '1' }}
            src="icon.png"
            alt="My Basket"
          />{' '}
          {useRecoilValue(basketCount)}
        </NavLink>
        <NavLink to="/myaccount" activelink={activelink}>
          <SettingsIcon />
        </NavLink>
      </NavContent>
    )
  }

  return (
    <>
      <Toaster />
      {nav}
    </>
  )
}
