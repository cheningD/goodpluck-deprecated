import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import Footer from '../components/Footer'
import Nav from '../components/Nav'
import React from 'react'
import Seo from '../components/Seo'

export default function Returns() {
  return (
    <>
      <Seo title="Returns | Goodpluck" />
      <Nav />
      <Box as="section" py={{ md: '6' }} bg="brand.pink">
        <VStack
          bg={'white'}
          maxW={{ base: 'xl', md: '5xl' }}
          my="4"
          mx="auto"
          p={{ base: '6', md: '12' }}
          borderRadius={{ base: '0', md: 'lg' }}
          spacing={6}
        >
          <Heading as="h1">Returns, Refunds and Credits Policy</Heading>
          <Text>
            If there is a problem with your order, or you simply wish to give feedback, email us at help@goodpluck.com.
            We love hearing from you, the good and the bad. And if it's bad news we will do everything we can to make it
            right!
          </Text>
          <Heading as="h2">Returns</Heading>
          <Text>
            Goodpluck does not accept returns or exchanges of any products once they have shipped. This helps us get you
            the freshest foods possible
          </Text>
          <Heading as="h2">Refunds and Credits</Heading>
          <Text>
            If you have any issue with your order, please let us know by emailing help@goodpluck.com. Do this within 7
            days of your delivery date, as we cannot offer refunds or credits after this time.
          </Text>
          <Text>
            If you have missing products or an issue with your order we may, at our sole discretion, give you credit for
            the product and, in some situations, offer a full or partial refund.
          </Text>
          <Text>
            We reserve the right to require a photograph for product quality complaints before any credit or refund is
            issued.
          </Text>
          <Text>
            If you receive a credit, you will receive a confirmation email from Goodpluck. The account credit will be
            applied to your account within 7 days of receipt of the confirmation email.
          </Text>
          <Text>
            If you receive a refund, it will take up to 10 days for the refund to be processed depending on your bank or
            credit card company. If you don't see the refund in that time frame please contact your bank or credit card
            company directly regarding their refund policy.
          </Text>
          <Text>
            If you need an updated receipt or any other help with returns, refunds or credits, please email
            help@goodpluck.com. Thanks!
          </Text>
        </VStack>
      </Box>
      <Footer />
    </>
  )
}
