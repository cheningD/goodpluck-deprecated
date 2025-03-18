import * as React from 'react'
import { Box, Text, Flex, Icon, useColorModeValue, CloseButton } from '@chakra-ui/react'
import { FiTruck } from 'react-icons/fi'

const DeliveryRestartBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true)

  if (!isVisible) return null

  return (
    <Box
      bg={useColorModeValue('blue.500', 'blue.300')}
      color={useColorModeValue('white', 'gray.800')}
      p={3}
      width="100%"
      position="relative"
    >
      <Flex maxW="7xl" mx="auto" px={{ base: '4', md: '8' }} alignItems="center" justifyContent="center">
        <Icon as={FiTruck} boxSize={{ base: 5, md: 6 }} mr={3} />
        <Text fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
          Springh is here, we missed you! Fresh deliveries return April 3rd.
        </Text>
        <CloseButton
          position="absolute"
          right={{ base: 1, md: 4 }}
          top="50%"
          transform="translateY(-50%)"
          onClick={() => setIsVisible(false)}
          size="sm"
        />
      </Flex>
    </Box>
  )
}

export default DeliveryRestartBanner
