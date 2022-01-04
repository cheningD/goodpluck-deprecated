import * as React from 'react'

import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'

import Emoji from './Emoji'
import { Feature } from './Feature'

const lettuceEmoji = <Emoji symbol="🥗" label="salad" fontSize="2xl" />
const okEmoji = <Emoji symbol="👌🏾" label="ok" fontSize="2xl" />
const easyEmoji = <Emoji symbol="✨" label="sparkles" fontSize="2xl" />

const Features = () => {
  return (
    <Box as="section" py={{ md: '6' }} bg="brand.pink">
      <Box
        bg={mode('white', 'white')}
        maxW={{ base: 'xl', md: '5xl' }}
        my="4"
        mx="auto"
        p={{ base: '6', md: '12' }}
        borderRadius={{ base: '0', md: 'lg' }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          <Feature icon={lettuceEmoji} title="Peak" highlight="Freshness">
            Recieve nutritionally dense produce that's grown nearby and harvested to order
          </Feature>
          <Feature icon={okEmoji} title="Food For" highlight="Good" highlightColor="brand.500">
            Support small, local, and minority-owned farms that use practices that care for the earth
          </Feature>
          <Feature icon={easyEmoji} title="Shop With" highlight="Ease">
            Save time and get seasonal and delicious foods each week, on your doorstep
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Features
