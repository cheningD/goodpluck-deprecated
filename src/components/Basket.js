import { Card, DetailCell2, LineBreak } from "../components/StyledComponentLib"
import { graphql, useStaticQuery } from "gatsby"

import BasketItem from "../components/BasketItem"
import React from "react"
import { basketItems } from "../store"
import { formatCurrencyString } from "use-shopping-cart"
import get from "lodash-es/get"
import styled from "styled-components"
import { useRecoilValue } from "recoil"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const shippingText = "Free"
const subtotalText = "$35.00"
const totalText = "$35.00"

const Basket = ({ deliveryDate, orderFrequency, canEdit }) => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productv2" } }) {
        nodes {
          data {
            available
            description
            isInSeason
            isLocal
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
  const nodes = get(data, "allAirtable.nodes", null)
  const basket = useRecoilValue(basketItems)
  const items = Array.from(basket).map(([stripePriceId, quantity], index) => {
    const product = nodes.filter(node => node.stripePriceId === stripePriceId)
    if (!product) {
      return ""
    }

    const quantityLabel = `${product.unitQuantity || 1} ${
      product.unitLabel || ""
    }`
    const priceLabel = formatCurrencyString({
      value: product.priceInCents,
      currency: "usd",
    })

    let stripePriceIdForEnv = product.stripePriceId
    if (process.env.GATSBY_DEPLOY_ENVIRONMENT === "STAGING") {
      stripePriceIdForEnv = product.testStripePriceId
    }

    return (
      <>
        {index === 0 ? "" : <ThinLineBreak />}
        <BasketItem
          canEdit={true}
          childImageSharp={get(
            product,
            "data.mainImage.localFiles[0].childImageSharp"
          )}
          description={product.description || ""}
          isInSeason={product.isInSeason}
          isLocal={product.isLocal}
          isOrganic={product.isOrganic}
          name={product.name || ""}
          oneLiner={product.oneLiner || ""}
          priceLabel={priceLabel}
          quantityLabel={quantityLabel}
          stripePriceId={stripePriceIdForEnv}
        />
      </>
    )
  })

  return (
    <Card>
      <DetailCell2>Arrives on:</DetailCell2>
      <DetailCell2 right>{deliveryDate}</DetailCell2>
      <DetailCell2>Order frequency:</DetailCell2>
      <DetailCell2 right>{orderFrequency}</DetailCell2>
      <LineBreak />
      {items}
      <LineBreak />
      <DetailCell2>Shipping</DetailCell2>
      <DetailCell2 right>{shippingText}</DetailCell2>
      <DetailCell2>Subtotal</DetailCell2>
      <DetailCell2 right>{subtotalText}</DetailCell2>
      <DetailCell2 bold>Total</DetailCell2>
      <DetailCell2 bold right>
        {totalText}
      </DetailCell2>
    </Card>
  )
}
export default Basket
