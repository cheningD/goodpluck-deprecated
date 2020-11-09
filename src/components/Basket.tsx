import { Card, DetailCell2, LineBreak, Spinner } from '../components/StyledComponentLib'
import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useEffect } from 'react'
import { basketItems, shippingInCents, subtotalInCents } from '../store'
import { getBasket, updateBasket } from '../actions'
import { useRecoilState, useRecoilValue } from 'recoil'

import BasketItem from '../components/BasketItem'
import { DateTime } from 'luxon'
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
            testStripePriceId
            unitLabel
            unitQuantity
            mainImage {
              id
              localFiles {
                url
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400) {
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

  useEffect(() => {
    const fetchData = async () => {
      const _basket = await getBasket()
      if (basket && basket.size > 0) {
        setBasket(_basket)
      } else {
        // Set the default basket
        const defaultBasket = new Map()
        data.allAirtable.nodes
          .filter(node => node.data.isLocalPluck)
          .forEach(node => {
            defaultBasket.set(node.data.stripePriceId, {
              stripePriceId: node.data.stripePriceId,
              unitPriceInCents: node.data.priceInCents,
              quantity: 1,
            })
          })
        setBasket(defaultBasket)
        await updateBasket(defaultBasket)
      }
    }

    if (basket === null) {
      fetchData()
    }
  })

  const subtotal = useRecoilValue(subtotalInCents)
  const shipping = useRecoilValue(shippingInCents)
  if (basket === null) {
    return <Spinner />
  } else if (basket.size === 0) {
    return <ZeroBasket />
  }

  const items = Array.from(basket).map(([stripePriceId, { quantity }], index) => {
    const productNodes = nodes.filter(node => node.data.stripePriceId === stripePriceId)
    console.log('productNodes', productNodes)
    if (productNodes.length < 1) {
      return null
    }

    if (!productNodes[0].data) {
      return null
    }
    const product = productNodes[0].data
    const quantityLabel = `${product.unitQuantity || 1} ${product.unitLabel || ''}`

    let stripePriceIdForEnv = product.stripePriceId
    if (process.env.GATSBY_DEPLOY_ENVIRONMENT === 'STAGING') {
      stripePriceIdForEnv = product.testStripePriceId
    }

    return (
      <>
        {index === 0 ? '' : <ThinLineBreak />}
        <BasketItem
          canEdit={true}
          childImageSharp={get(product, 'data.mainImage.localFiles[0].childImageSharp')}
          isInSeason={product.isInSeason}
          isLocal={product.isLocal}
          isOrganic={product.isOrganic}
          name={product.name || ''}
          oneLiner={product.oneLiner || ''}
          quantityLabel={quantityLabel}
          stripePriceId={stripePriceIdForEnv}
          unitPriceInCents={product.priceInCents}
          imageSrc={null}
          isCompact={false}
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
