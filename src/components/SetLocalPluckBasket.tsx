import React, { useEffect } from 'react'
import { basketItems, replacer } from '../store'
import { graphql, useStaticQuery } from 'gatsby'

import { useRecoilState } from 'recoil'

const SetLocalPluckBasket = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productv2" }, data: { isLocalPluck: { eq: true } } }) {
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
      const defaultBasket = new Map()

      data.allAirtable.nodes.forEach(node => {
        const stripePriceId = node.data.stripePriceId
        const unitPriceInCents = node.data.priceInCents
        const quantity = 1
        defaultBasket.set(stripePriceId, {
          stripePriceId,
          unitPriceInCents,
          quantity,
        })
        setBasket(defaultBasket)
      })
    }
  }, [])

  return null
}

export default SetLocalPluckBasket
