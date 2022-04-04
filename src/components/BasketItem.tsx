import { Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import AddToCartButton from '../components/AddToCartButton'
import { FavoriteButton } from './FavoriteButton'
import React from 'react'
import SubscribeButton from './SubscribeButton'

interface BasketItemProps {
  canEdit: boolean
  childImageSharp: any
  name: string
  oneLiner: string
  unitQuantity: number
  unitLabel: string
  stripePriceId: string
  unitPriceInCents: number
  quantityInBasket: number
  showControls: boolean
}

const BasketItem = ({
  canEdit,
  childImageSharp,
  name,
  oneLiner,
  unitQuantity,
  unitLabel,
  stripePriceId,
  unitPriceInCents,
  quantityInBasket,
  showControls,
}: BasketItemProps) => {
  const sku = stripePriceId
  let image
  if (childImageSharp) {
    image = <GatsbyImage image={childImageSharp.gatsbyImageData} alt={name} />
  } else {
    image = (
      <StaticImage
        height={120}
        width={200}
        transformOptions={{ fit: 'cover' }}
        src="../images/placeholder.jpg"
        alt="placeholder-image"
      />
    )
  }

  const quantityLabel = `${unitQuantity || 1} ${unitLabel || ''}`

  return (
    <Flex minH="120px">
      {image}
      <VStack
        justify="space-between"
        align="start"
        minW="66%"
        flexGrow="1"
        m={0}
        p="2"
        borderBottom="1px solid"
        borderBottomColor="gray.100"
      >
        <VStack align="start" spacing="1">
          <HStack>
            <Heading fontSize={['sm', 'lg']}>
              <Text as="em" color="#6c7668">
                {quantityLabel}
              </Text>
              &nbsp;{name}
            </Heading>
            <FavoriteButton sku={sku} />
          </HStack>
          <Text fontSize={['xs', 'md']} as="em">
            {oneLiner}
          </Text>
          <Price unitPriceInCents={unitPriceInCents} />
        </VStack>
        <HStack spacing={4}>
          {showControls ? (
            <AddToCartButton
              stripePriceId={stripePriceId}
              unitPriceInCents={unitPriceInCents}
              quantityInBasket={quantityInBasket}
              canEdit={canEdit}
            />
          ) : (
            ''
          )}
          {/* <SubscribeButton name={name} unitQuantity={unitQuantity} unitLabel={unitLabel} /> */}
        </HStack>
      </VStack>
    </Flex>
  )
}
export default BasketItem

const Price = ({ unitPriceInCents }) => {
  return (
    <HStack justify="flex-start" spacing={0}>
      <Text fontSize="xl" color="#6c7668">
        {`${Math.floor(unitPriceInCents / 100.0)}`}
      </Text>
      <Text as="sup" fontSize="xs" color="#6c7668">
        {String(unitPriceInCents % 100.0).padStart(2, '0')}
      </Text>
    </HStack>
  )
}
