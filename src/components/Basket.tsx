import { Card, DetailCell2, LineBreak, Spinner } from '../components/StyledComponentLib'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { basketItems, shippingInCents, subtotalInCents } from '../store'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketItem from '../components/BasketItem'
import { DateTime } from 'luxon'
import React from 'react'
import { centsToString } from '../util'
import get from 'lodash-es/get'
import styled from 'styled-components'

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const Basket = ({ deliveryDate = null, orderFrequency = null, canEdit = false, addLocalPluckItems = false }) => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productv2" } }) {
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
                  fluid(maxWidth: 100, maxHeight: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
    const quantityLabel = `${product.unitQuantity || 1} ${product.unitLabel || ''}`

    return (
      <>
        {index === 0 ? '' : <ThinLineBreak />}
        <BasketItem
          canEdit={true}
          childImageSharp={get(product, 'mainImage.localFiles[0].childImageSharp')}
          isInSeason={product.isInSeason}
          isLocal={product.isLocal}
          isOrganic={product.isOrganic}
          name={product.name || ''}
          oneLiner={product.oneLiner || ''}
          quantityLabel={quantityLabel}
          stripePriceId={product.stripePriceId}
          unitPriceInCents={product.priceInCents}
          imageSrc={null}
          isCompact={false}
          quantityInBasket={quantity}
        />
      </>
    )
  })

  return (
    <Card>
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
      <LineBreak />
      <DetailCell2>Shipping{shipping ? ' (Free above $30)' : ''}</DetailCell2>
      <DetailCell2 right>{shipping ? centsToString(shipping) : 'Free'}</DetailCell2>
      <DetailCell2>Subtotal</DetailCell2>
      <DetailCell2 right>{centsToString(subtotal)}</DetailCell2>
      <DetailCell2 bold>To be charged</DetailCell2>
      <DetailCell2 bold right>
        {centsToString(shipping + subtotal)}
      </DetailCell2>
    </Card>
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
