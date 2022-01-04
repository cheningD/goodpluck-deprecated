import * as React from 'react'

import { Box, Circle, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { QuoteIcon } from './QuoteIcon'
import { Quotee } from './Quotee'

const Testimonial = () => (
  <Box as="section" bg={useColorModeValue('peach.100', 'peach.200')}>
    <Box maxW="3xl" mx="auto" px={{ base: '6', md: '8' }} pt="12" pb="16">
      <Flex direction="column" align="center" textAlign="center">
        <QuoteIcon color={useColorModeValue('pink.300', 'pink.600')} fontSize={{ base: '3xl', md: '6xl' }} />
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="medium" mt="6">
          &ldquo;Everything I have tried so far has been{' '}
          <Text as="span" color="pink.300">
            {' '}
            delicious and delightfully fresh.{' '}
          </Text>
          It is also amazing how much longer this local produce stays fresh [...] both bunches were{' '}
          <Text as="span" color="pink.300">
            {' '}
            vastly prettier and tastier{' '}
          </Text>
          than anything in a grocery store &rdquo;
        </Text>
        <Quotee
          name="Sarah"
          jobTitle="(Your Neighbor In Detroit)"
          imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTN8fGxhZHklMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          mt="8"
        />
      </Flex>
      {/* <HStack justify="center" spacing="4" mt="8" color={useColorModeValue('gray.300', 'gray.600')}>
        <Circle w="3" h="3" bg="blue.500" />
        <Circle w="2" h="2" bg="currentColor" />
        <Circle w="2" h="2" bg="currentColor" />
      </HStack> */}
    </Box>
  </Box>
)

export default Testimonial
