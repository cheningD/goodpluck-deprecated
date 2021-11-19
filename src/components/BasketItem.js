import { Container, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import AddToCartButton from '../components/AddToCartButton'
import React from 'react'
import styled from 'styled-components'

const AddToCart = styled(AddToCartButton)`
  display: inline-block;
`
const BasketItem = ({
  canEdit,
  childImageSharp,
  imageSrc,
  isCompact,
  isInSeason,
  isLocal,
  isOrganic,
  name,
  oneLiner,
  quantityLabel,
  stripePriceId,
  unitPriceInCents,
  quantityInBasket,
  showControls,
}) => {
  let controls = (
    <HStack justify="space-between" align="end" w="100%">
      {canEdit ? (
        <AddToCart
          stripePriceId={stripePriceId}
          unitPriceInCents={unitPriceInCents}
          quantityInBasket={quantityInBasket}
        />
      ) : (
        `Qty: ${quantityInBasket || 0}`
      )}
      <Container maxW="20%" p="0">
        <Text as="sam" fontSize="2xl" color="#6c7668">
          {`${Math.floor(unitPriceInCents / 100.0)}`}
        </Text>
        <Text as="sup" fontSize="sm" color="#6c7668">
          {String(unitPriceInCents % 100.0).padStart(2, '0')}
        </Text>
      </Container>
    </HStack>
  )

  let image = ''
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

  return (
    <Flex minH="120px">
      {image}
      <VStack justify="space-between" align="start" minW="66%" flexGrow="1" m={0} p="2">
        <VStack align="start" spacing="1">
          <Heading fontSize={['sm', 'lg']}>
            <Text as="em" color="#6c7668">
              {quantityLabel}
            </Text>
            &nbsp;{name}
          </Heading>
          <Text fontSize={['sm', 'lg']} as="em">
            {oneLiner}
          </Text>
        </VStack>
        {showControls ? controls : ''}
      </VStack>
    </Flex>
  )
}
export default BasketItem
