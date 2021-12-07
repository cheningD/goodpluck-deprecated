import { Divider, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import BasketDates from './BasketDates'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { OrderDetail } from '../types'
import { StaticImage } from 'gatsby-plugin-image'
import { getOrdersDemo } from '../actions'

const CheckoutSummary = ({ deliveryDay, deliveryFrequency }) => {
  const [orderDemo, setOrderDemo] = useState<OrderDetail | undefined>()

  useEffect(() => {
    async function fetchData() {
      let deliveryDayPreference = 'saturday'
      if (deliveryDay && deliveryDay.toLowerCase().includes('sunday')) {
        deliveryDayPreference = 'sunday'
      }
      const orderData: OrderDetail | null = await getOrdersDemo(deliveryDayPreference)
      if (orderData) {
        setOrderDemo(orderData)
      }
    }
    fetchData()
  }, [deliveryDay])

  return (
    <VStack
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      maxW={[500, 500, 500, 450]}
      mx={[0, 'auto']}
      my={[4, 12]}
      overflow="hidden"
      p={4}
      spacing={8}
    >
      <Heading> Plan Summary </Heading>
      <VStack spacing={4} align="stretch">
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

        {orderDemo && orderDemo.editBasketStartDate ? (
          <BasketDates
            scheduledStatus="active" //Force active state because user hasn't paid yet
            editStatus={null}
            chargedStatus={null}
            deliveredStatus={null}
            editBasketStartDate={orderDemo.editBasketStartDate}
            editBasketEndDate={orderDemo.editBasketEndDate}
            chargedDate={orderDemo.chargedDate}
            deliveryDate={orderDemo.deliveryDate}
          />
        ) : (
          ''
        )}
      </VStack>
      <VStack spacing={2} align="stretch">
        <Heading as="h2" fontSize="xl" textAlign="left">
          Customize your basket
        </Heading>
        <Text textAlign="left">
          *Your basket is fully customizable each week. Add or remove items from your basket during the shopping window.
          Don't worry, we'll send you a reminder before it closes!
        </Text>
      </VStack>

      <VStack spacing={2} align="stretch">
        <Text textAlign="left" color="green.600">
          <CheckCircleIcon pb={0.5} mr={2} color="green.600" /> You can skip, pause or cancel at antime
        </Text>
        <Text textAlign="left" color="green.600">
          <CheckCircleIcon pb={0.5} mr={2} color="green.600" /> FREE to signup, no charge until after shopping window
          closes
        </Text>
      </VStack>

      <VStack spacing={1} align="start" w="100%">
        <Divider />
        <HStack>
          <Text textAlign="left" color="gray.500">
            Regular Basket Cost
          </Text>
          <Text textAlign="left">$35-$40</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color="gray.500">Delivery</Text>
          <Text> Free (on orders over $35)</Text>
        </HStack>
      </VStack>

      <VStack spacing={1} align="start" w="100%">
        <Divider />
        <Text color="gray.500" textAlign="left">
          Delivery Day & Frequency
        </Text>
        <Text textAlign="left">
          {deliveryDay}, {deliveryFrequency}
        </Text>
      </VStack>
    </VStack>
  )
}

export default CheckoutSummary
