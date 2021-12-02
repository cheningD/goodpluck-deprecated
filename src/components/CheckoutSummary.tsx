import { Divider, HStack, Heading, Text, VStack } from '@chakra-ui/react'

import BasketDates from './BasketDates'
import { CheckCircleIcon } from '@chakra-ui/icons'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const CheckoutSummary = ({ deliveryDay, deliveryFrequency }) => {
  return (
    <div>
      <VStack
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={4}
        bg="white"
        spacing={8}
        align="stretch"
        mx={[0, 'auto']}
        maxW={['450px', '450px', '400px']}
        my={[4, 8, 16]}
      >
        <Heading> Plan Summary </Heading>
        <VStack spacing={2} align="stretch">
          <Heading as="h2" fontSize="xl" textAlign="left">
            Your first basket
          </Heading>
          <HStack>
            <StaticImage
              height={100}
              imgStyle={{ borderRadius: '8px' }}
              src="../images/producebox.jpg"
              alt="Delicious Produce"
            />
            <Heading fontSize="md">10-12 varieties of the best seasonal produce growing near you right now</Heading>
          </HStack>

          <BasketDates
            scheduledStatus="active" //Force active state because user hasn't paid yet
            editStatus={null}
            chargedStatus={null}
            deliveredStatus={null}
            editBasketStartDate={'2021-11-29T09:12:19Z'}
            editBasketEndDate={'2021-12-02T09:12:19Z'}
            chargedDate={'2021-12-03T09:12:19Z'}
            deliveryDate={'2021-12-04T09:12:19Z'}
          />
        </VStack>
        <VStack spacing={2} align="stretch">
          <Heading as="h2" fontSize="xl" textAlign="left">
            Customize your basket
          </Heading>
          <Text textAlign="left">
            *Your basket is fully customizable each week. Add or remove items from your basket during the shopping
            window. Don't worry, we'll send you a reminder before it closes!
          </Text>
        </VStack>

        <Text textAlign="center" color="teal.500">
          <CheckCircleIcon color="teal.500" /> You can skip, pause or cancel at antime
        </Text>
        <Text textAlign="center" color="teal.500">
          <CheckCircleIcon color="teal.500" /> FREE to signup, no charge until after shopping window closes
        </Text>
        <Divider />
        <VStack spacing={2} align="stretch">
          <HStack justifyContent="space-between" alignContent="space-between">
            <Text color="gray.500">Regular Basket Cost</Text>
            <Text>$35-$40</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color="gray.500">Delivery</Text>
            <Text> Free (on orders over $35)</Text>
          </HStack>
        </VStack>

        <Divider />
        <VStack spacing={1} align="stretch">
          <Text color="gray.500" textAlign="left">
            {' '}
            Delivery Day & Frequency
          </Text>
          <Text textAlign="left">
            {deliveryDay}, {deliveryFrequency}
          </Text>
        </VStack>
      </VStack>
    </div>
  )
}

export default CheckoutSummary
