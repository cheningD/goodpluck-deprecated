import * as React from 'react'

import { Box, Button, Center, Heading, Link, SimpleGrid, Stack, useColorModeValue as mode } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Feature } from './Feature'
import GatsbyLink from 'gatsby-link'
import Image from './Image'

const HowItWorks = () => {
  return (
    <Box as="section" bg={mode('pink.50', 'pink.800')} pt="16" pb="32">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading textAlign="left" letterSpacing="tight" fontWeight="extrabold">
          How it works, in a (locally grown) nutshell...
        </Heading>
        <Box mt="24">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '16', md: '8' }}>
            <Stack spacing="12" maxW="lg">
              <Feature direction="column" title="1 Build your basket">
                Sign up and get started with a curated basket of the best seasonal produce growing this week
              </Feature>
              <Feature direction="column" title="2 Make it yours">
                Customize your basket with <strong>seasonal veggies, local pastured eggs, fresh farm goods</strong> and
                other delicious items from our market.
              </Feature>
              <Feature direction="column" title="3 Perfect Your Delivery & Enjoy">
                Choose how often your basket should arrive & recieve your goods in thoughtfully packaged, reusable or
                compostable containers
              </Feature>
              <Link as={GatsbyLink} to="/signup">
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
                  rightIcon={<Box as={ArrowForwardIcon} fontSize="2xl" />}
                >
                  Build your basket
                </Button>
              </Link>
            </Stack>
            <Center minH="26rem" h="420px">
              <Box pos="relative" maxH="500px" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
                <Image
                  style={{ maxHeight: '500px', maxWidth: '100%', objectFit: 'contain', zIndex: 1 }}
                  src="basket1.jpg"
                  alt="A goodpluck basket filled with beautifully fresh veggies"
                />
                <Box pos="absolute" w="100%" h="100%" top="-4" left="-4" bg={mode('peach.200', 'peach.200')} />
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default HowItWorks
