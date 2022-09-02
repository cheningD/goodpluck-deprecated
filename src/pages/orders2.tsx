import { Box, Center, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { getPastOrders } from '../actions'
import { pastOrders2 } from '../store'
import { useRecoilState } from 'recoil'

const OrdersPage = () => {
  const [pastOrders, setPastOrders] = useRecoilState(pastOrders2)

  const fetchPastOrders = async () => {
    // GET ORDERS
    const orderData = await getPastOrders()
    if (orderData) {
      setPastOrders(orderData)
    }
  }

  useEffect(() => {
    if (pastOrders === null) {
      fetchPastOrders()
    }
  }, [])

  return (
    <Center maxW="sm" mx="auto" py={{ base: '4', md: '8' }}>
      <Box bg="bg-surface" py="4">
        <Stack divider={<StackDivider />} spacing="4">
          {pastOrders.map(order => (
            <Stack key={order.order_index} fontSize="sm" px="4" spacing="0.5">
              <Box>
                <Text fontWeight="medium" color="emphasized">
                  {order.order_index}
                </Text>
                <Text color="subtle">Published {order.order_index}</Text>
              </Box>
              <Text
                color="muted"
                sx={{
                  '-webkit-box-orient': 'vertical',
                  '-webkit-line-clamp': '2',
                  overflow: 'hidden',
                  display: '-webkit-box',
                }}
              >
                Order Text
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Center>
  )
}

export default OrdersPage
