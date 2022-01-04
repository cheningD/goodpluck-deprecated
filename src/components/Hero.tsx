import * as React from 'react'

import { Box, Button, Heading, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'

import GatsbyLink from 'gatsby-link'
import Image from './Image'
import { navigate } from 'gatsby'

const Hero = () => (
  <Box as="section" bg="brand.pink" pt="16" pb="8">
    <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '3rem', lg: '2rem' }}
        mt="8"
        align={{ lg: 'center' }}
        justify="space-between"
      >
        <Box flex="1" maxW={{ lg: '520px' }}>
          <Heading
            as="h1"
            size="3xl"
            color={mode('brand.500', 'brand.500')}
            mt="8"
            fontFamily="title"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="wide"
            textShadow="0px 4px 6px white"
          >
            <div>Just-Plucked</div>
            <div>Local Produce</div>
            <div>On Your Doorstep</div>
          </Heading>
          <Text color={mode('brand.700', 'brand.700')} mt="4" fontSize="xl" fontWeight="medium">
            Get the freshest produce possible from local and sustainable farms, delivered to your door each week.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
            <Button
              size="lg"
              minW="210px"
              bg="peach.200"
              border="2px"
              borderColor="gray.800"
              color="gray.800"
              fontWeight="800"
              _hover={{ bg: 'brand.200', color: 'gray.800' }}
              height="14"
              px="8"
              onClick={() => {
                navigate('/signup')
              }}
            >
              Get Started
            </Button>
          </Stack>
          <Text mt="8" color={mode('brand.700', 'brand.700')}>
            Already have an account?{' '}
            <Link as={GatsbyLink} to="/signin">
              Sign in
            </Link>
          </Text>
        </Box>
        <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
          <Image
            style={{ width: '100%', height: '100%', objectFit: 'cover', pos: 'relative', zIndex: '1' }}
            src="HeroImageAppleBasket.jpg"
            alt="Local apples"
          />
          <Box pos="absolute" w="100%" h="100%" top="-4" left="-4" bg={mode('peach.200', 'peach.200')} />
        </Box>
      </Stack>
    </Box>
  </Box>
)

export default Hero
