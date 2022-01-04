import * as React from 'react'

import { Box, Flex, HStack, Heading, Icon, Link, SimpleGrid, Stack, useColorModeValue } from '@chakra-ui/react'

import CategoryCard from './CategoryCard'
import { FaArrowRight } from 'react-icons/fa'
import GatsbyLink from 'gatsby-link'

const categories = [
  {
    name: 'Pastured Eggs',
    filename: 'pastured_chickens.jpg',
    url: '/signup',
  },
  {
    name: 'Winter Greens',
    filename: 'category_winter_greens.jpg',
    url: '/signup',
  },
  {
    name: 'Herbs & Aromatics',
    filename: 'category_herbs.jpg',
    url: '/signup',
  },
  {
    name: 'Roots & Brassicas',
    filename: 'category_brassicas.jpg',
    url: '/signup',
  },
  {
    name: 'Greenhouse grown Peppers & Tomatoes',
    filename: 'category_peppers.jpg',
    url: '/signup',
  },
  {
    name: 'Mushrooms',
    filename: 'category_mushrooms.jpg',
    url: '/signup',
  },
  {
    name: 'Pantry Essentials (Coming Soon)',
    filename: 'basket2.jpg',
    url: '/signup',
  },
  {
    name: 'Breads, Milk and Dairy (Coming Soon)',
    filename: 'basket2.jpg',
    url: '/signup',
  },
]

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never
type Category = ElementType<typeof categories>

const MarketTeaser = () => (
  <Box maxW="7xl" mx="auto" px={{ base: '4', md: '8', lg: '12' }} py={{ base: '6', md: '8', lg: '12' }}>
    <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
      <Flex justify="space-between" align={{ base: 'start', md: 'center' }} direction={{ base: 'column', md: 'row' }}>
        <Heading size="lg" mb={{ base: '3', md: '0' }}>
          What are we plucking this week?
        </Heading>
        <HStack spacing={{ base: '2', md: '3' }}>
          <Link as={GatsbyLink} to="/signup" fontWeight="semibold" color={useColorModeValue('blue.500', 'blue.300')}>
            Sign up to explore the whole market
          </Link>
          <Icon
            as={FaArrowRight}
            color={useColorModeValue('blue.500', 'blue.300')}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={{ base: '4', md: '6', lg: '8' }}>
        {categories.map(category => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
)

export default MarketTeaser
