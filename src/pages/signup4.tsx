import * as yup from 'yup'

import { Flex, Heading, List, ListIcon, ListItem, Stack, Text, VStack } from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import { FormLayout } from '../components/FormLayout'
import React from 'react'
import Seo from '../components/Seo'
import { StaticImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby-link'
import { useForm } from 'react-hook-form'
import { useLocalStorage } from '../util'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({})

const BuildBasket = () => {
  const [storage, setStorage] = useLocalStorage('formValues', null)

  const { handleSubmit } = useForm({ resolver: yupResolver(schema), defaultValues: storage })

  const onSubmit = (data: any) => {
    setStorage(Object.assign({}, storage, data))
    navigate('/signup5')
  }

  return (
    <FormLayout
      progress={60}
      isLoading={false}
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
            Inside: 10-12 varieties of the best seasonal produce growing near you right now
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
          Swap, add or remove any item in your basket. Choose from{' '}
          <strong>100 more items from small sustainable farms</strong> in our seasonal market.
        </Text>
      </VStack>
    </FormLayout>
  )
}
export default BuildBasket
