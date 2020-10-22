import {
  Card,
  DetailCell2,
  Header,
  LineBreak,
} from "../components/StyledComponentLib"
import { graphql, useStaticQuery } from "gatsby"

import BasketItem from "../components/BasketItem"
import React from "react"
import styled from "styled-components"

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Message = styled.div`
  color: #000;
  font-family: hk_grotesksemibold, sans-serif;
  font-size: 0.875rem;
  padding: 8px 0px;
  margin: 0;
  display: block;
`

const Content = styled.div`
  min-width: 300px;
  max-width: 500px;
  min-height: 500px;
  height: 300px;
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
          // childImageSharp={
          //   product.data.productGroup.data.mainImage.localFiles
          //     .childImageSharp || null
          // }
          imageSrc="placeholder.png"
        />
        <ThinLineBreak />
      </>
    )
  })

  return (
    <Card>
      <MessageBox>
        <Message>All items in The Local Pluck are:</Message>
        <Message>- From local farmers under 2 hours away</Message>
        <Message>- Grown without pesticides or GMOs</Message>
        <Message>- In season</Message>
        <Message>- Picked the same week they arrive</Message>
      </MessageBox>
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
