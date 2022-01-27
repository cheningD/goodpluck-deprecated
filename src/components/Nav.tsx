import * as Sentry from '@sentry/gatsby'

import { Box, Button, Flex, HStack, IconButton, Link, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import GatsbyLink, { navigate } from 'gatsby-link'
import { OrderDetail, SignedInData } from '../types'
import React, { ReactNode, useEffect } from 'react'
import { basketItems, isSignedIn, myOrders, mySubscriptions, signedInUser } from '../store'
import { getBasket, getOrders, getSignedInData, getSubscriptions } from '../actions'
import { useRecoilState, useRecoilValue } from 'recoil'

import { CartLink } from './CartLink'
import { Toaster } from 'react-hot-toast'
import { removeNonLetters } from '../util'

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <Link
    as={GatsbyLink}
    to={to}
    px={2}
    py={1}
    color="white"
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

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const signedIn = useRecoilValue(isSignedIn)
  const [user, setUser] = useRecoilState(signedInUser)
  const [orders, setOrders] = useRecoilState(myOrders)
  const [basket, setBasket] = useRecoilState(basketItems)
  const [subscriptions, setSubscriptions] = useRecoilState(mySubscriptions)

  const fetchOrders = async () => {
    // GET ORDERS
    const orderData: Record<string, OrderDetail> = await getOrders()
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

  const fetchSubscriptions = async () => {
    const _subscriptions = await getSubscriptions()
    if (_subscriptions) {
      setSubscriptions(_subscriptions)
    }
  }

  useEffect(() => {
    if (subscriptions === null) {
      fetchSubscriptions()
    }
  }, [])

  let links = ['Sign In']

  if (signedIn) {
    links = ['Market', 'My Account']
  }

  return (
    <>
      <Toaster />
      <Box bg="brand.500" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            colorScheme="brand"
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Text
                onClick={() => {
                  navigate('/')
                }}
                color="white"
                fontFamily="title"
                fontSize="3xl"
                _hover={{ textDecoration: 'none' }}
              >
                Goodpluck
              </Text>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map(link => (
                <NavLink key={link} to={`/${removeNonLetters(link.toLowerCase())}`}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {signedIn ? (
            <NavLink to="/basket">
              <CartLink />
            </NavLink>
          ) : (
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
          )}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map(link => (
                <NavLink key={link} to={removeNonLetters(link.toLowerCase())}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
