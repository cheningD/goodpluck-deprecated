import React, { useEffect } from 'react'
import { basketItems, setItemQuantity } from '../store'
import { graphql, useStaticQuery } from 'gatsby'

import { useRecoilState } from 'recoil'

const SetLocalPluckBasket = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productv2" } }) {
        nodes {
          data {
            priceInCents
            stripePriceId
          }
        }
      }
    }
  `)

  const [basket, setBasket] = useRecoilState(basketItems)
  useEffect(() => {
    if (!basket.size) {
      data.allAirtable.nodes.forEach(node =>
        setItemQuantity(node.data.stripePriceId, 1, node.data.priceInCents, setBasket),
      )
    }
  }, [])

  return null
}

export default SetLocalPluckBasket
