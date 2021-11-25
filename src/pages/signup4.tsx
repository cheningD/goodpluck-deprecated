import * as yup from 'yup'

import { Flex, Heading, Image, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import { FormLayout } from '../components/FormLayout'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({})

const BuildBasket = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (data: any) => {
    console.log(data)
    setIsLoading(true)
    navigate('/signup5')
  }

  return (
    <>
      <Seo title="Your Basket | Goodpluck" />
      <FormLayout
        progress={60}
        isLoading={isLoading}
        heading="Your First Basket"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        goBackFunc={() => navigate('/signup3')}
        submitStr="Set Your Delivery Preferences"
      >
        <Flex
          direction={['column', 'row']}
          minH="120px"
          borderRadius="lg"
          overflow="hidden"
          borderWidth="1px"
          boxShadow="md"
        >
          <StaticImage width={400} src="../images/producebox.jpg" alt="Delicious Produce" />
          <VStack justify="space-between" align="start" p="2">
            <Heading fontSize={['md', 'lg']}>
              The Pluck: 10-12 varieties of the best local produce growing near you right now
            </Heading>
            <Text fontSize="sm" as="em">
              Most produce is grown within 2 hours of your doorstep using sustainable or organic practices
            </Text>
            <List>
              <ListItem color="green.500" fontSize="sm">
                <ListIcon pb={0.5} as={CheckCircleIcon} color="green.500" />
                $35 - $40 per basket
              </ListItem>
              <ListItem color="green.500" fontSize="sm">
                <ListIcon pb={0.5} as={CheckCircleIcon} color="green.500" />
                Free delivery
              </ListItem>
              <ListItem color="green.500" fontSize="sm">
                <ListIcon pb={0.5} as={CheckCircleIcon} color="green.500" />
                From local farms in your community
              </ListItem>
              <ListItem color="green.500" fontSize="sm">
                <ListIcon pb={0.5} as={CheckCircleIcon} color="green.500" />
                Something new each week
              </ListItem>
            </List>
          </VStack>
        </Flex>

        <VStack spacing={1} mt={4}>
          <Heading as="h2" fontSize="xl" textAlign="center" textColor="green.500">
            Yours to customize
          </Heading>
          <Text textAlign="center" px={4}>
            Swap, add or remove any item to your basket. Choose from <strong>100s of items from small farms</strong> in
            our market.
          </Text>
        </VStack>
      </FormLayout>
    </>
  )
}
export default BuildBasket
