import { Card, DetailCell2, Spinner } from '../components/StyledComponentLib'
import { Container, Heading } from '@chakra-ui/react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { basketItems, shippingInCents, subtotalInCents } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketItem from '../components/BasketItem'
import { DateTime } from 'luxon'
import React from 'react'
import { centsToString } from '../util'
import get from 'lodash-es/get'
import styled from 'styled-components'

const Right = styled.span`
  float: right;
`

const Basket = ({ deliveryDate = null, orderFrequency = null, canEdit = false, skipped = false }) => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "product" } }) {
        nodes {
          data {
            available
            description
            isInSeason
            isLocal
            isLocalPluck
            isOrganic
            name
            oneLiner
            priceInCents
            stripePriceId
            unitLabel
            unitQuantity
            mainImage {
              id
              localFiles {
                url
                childImageSharp {
                  gatsbyImageData(width: 100, height: 100, layout: CONSTRAINED)
                }
              }
            }
          }
        }
      }
    }
  `)
  const nodes = get(data, 'allAirtable.nodes', null)
  const [basket, setBasket] = useRecoilState(basketItems)

  const subtotal = useRecoilValue(subtotalInCents)
  const shipping = useRecoilValue(shippingInCents)
  if (basket === null) {
    return <Spinner />
  } else if (basket.size === 0) {
    return <ZeroBasket />
  }

  const items = Array.from(basket).map(([stripePriceId, { quantity }], index) => {
    const productNodes = nodes.filter(node => node.data.stripePriceId === stripePriceId)
    if (productNodes.length < 1) {
      return null
    }

    if (!productNodes[0].data) {
      return null
    }
    const product = productNodes[0].data
    return (
      <BasketItem
        canEdit={canEdit}
        showControls={true}
        childImageSharp={get(product, 'mainImage.localFiles[0].childImageSharp')}
        name={product.name || ''}
        oneLiner={product.oneLiner || ''}
        unitQuantity={product.unitQuantity}
        unitLabel={product.unitLabel}
        stripePriceId={product.stripePriceId}
        unitPriceInCents={product.priceInCents}
        quantityInBasket={quantity}
      />
    )
  })

  return (
    <Container
      bg="white"
      borderRadius={[0, 0, 'md']}
      pt={0}
      pl={0}
      pb={4}
      pr={[0, 0, 4]}
      w={['100%', '100%', '48em']}
      overflow="hidden"
    >
      {deliveryDate ? (
        <>
          <DetailCell2>Arrives on:</DetailCell2>
          <DetailCell2 right>{DateTime.fromISO(deliveryDate).toFormat('ccc, LLL dd')}</DetailCell2>
        </>
      ) : (
        ''
      )}
      {orderFrequency ? (
        <>
          <DetailCell2>Order frequency:</DetailCell2>
          <DetailCell2 right>{orderFrequency}</DetailCell2>
        </>
      ) : (
        ''
      )}
      {items}
      <div>
        <span>Shipping{shipping ? ' (Free above $30)' : ''}</span>
        <Right>{shipping ? centsToString(shipping) : 'Free'}</Right>
      </div>
      <div>
        <span>Subtotal</span>
        <Right>{centsToString(subtotal)}</Right>
      </div>
      <div>
        <strong>To be charged</strong>
        <Right>{skipped ? 'Skipping this order!' : centsToString(shipping + subtotal)}</Right>
      </div>
    </Container>
  )
}
export default Basket

export const ZeroBasket = () => {
  return (
    <Card>
      <div>There's nothing in your basket!</div>
      <div>
        Add something from the <Link to="/market">market</Link>
      </div>
    </Card>
  )
}
