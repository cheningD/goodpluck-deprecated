import {
  Card,
  DetailCell2,
  LineBreak,
} from "../components/StyledComponentLib"
import { graphql, useStaticQuery } from "gatsby"

import BasketItem from "../components/BasketItem"
import React from "react"
import styled from "styled-components"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

// const Message = styled(Header)`
//   color: #000;
//   font-size: 1rem;
//   padding: 8px 100px;
//   margin: 0;
// `

const Content = styled.div`
  min-width: 300px;
  max-width: 500px;
  min-height: 500px;
  height: calc(100vh - 300px);
  overflow: scroll;
`

const BasketPreview = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: {
          table: { eq: "productv2" }
          data: { isLocalPluck: { eq: true } }
        }
      ) {
        nodes {
          data {
            available
            name
            priceInCents
            stripePriceId
            unitQuantity
            unitLabel
            oneLiner
            isOrganic
            isLocalPluck
            isLocal
            isInSeason
            productGroup {
              data {
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
      }
    }
  `)

  const products = data.allAirtable.nodes
  const items = products.map(product => {
    return (
      <>
        <BasketItem
          quantityLabel={`${product.data.unitQuantity || 1} ${
            product.data.unitLabel || ""
          }`}
          name={product.data.name}
          oneLiner={product.data.oneLiner}
          priceLabel="$5.00"
          canEdit={false}
          childImageSharp={
            data.allAirtable.nodes.productGroup.data.mainImage.localFiles
              .childImageSharp || null
          }
          imageSrc="placeholder.png"
        />
        <ThinLineBreak />
      </>
    )
  })
  return (
    <Card>
      <DetailCell2>All items in The Local Pluck are:</DetailCell2>
      <DetailCell2>√</DetailCell2>
      <DetailCell2 right>from local farmers under 2 hours away</DetailCell2>
      <DetailCell2>√</DetailCell2>
      <DetailCell2 right>grown without pesticides or GMOs</DetailCell2>
      <DetailCell2>√</DetailCell2>
      <DetailCell2 right>are in season</DetailCell2>
      <DetailCell2>√</DetailCell2>
      <DetailCell2 right>picked the same week they arrive</DetailCell2>
      <LineBreak />

      <Content>{items}</Content>

      <LineBreak />
      <DetailCell2 bold>Not big on squash?</DetailCell2>
      <DetailCell2 bold>
        This basket is 100% customizable, swap out any item or add to your order
        from our selection of 100+ options of fresh local produce, bakery,
        dairy, eggs and more{" "}
      </DetailCell2>
      <DetailCell2 bold>You can edit your cart after checkout</DetailCell2>
    </Card>
  )
}
export default BasketPreview
