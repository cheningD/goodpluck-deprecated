import { Card, Header, LineBreak } from '../components/StyledComponentLib'
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BasketItem from '../components/BasketItem'
import ChevronDown from '../images/icons/chevron-down.svg'
import ChevronUp from '../images/icons/chevron-up.svg'
import Image from '../components/Image'
import get from 'lodash-es/get'
import styled from 'styled-components'

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`
interface DetailProps {
  bold?: boolean
}
const Detail = styled.div<DetailProps>`
  font-family: hk_grotesklight, sans-serif;
  width: 100%;
  text-align: left;
  margin-left: 16px;

  ${props => (props.bold ? 'font-family: hk_grotesksemibold, sans-serif;' : '')}
`

const Title = styled(Detail)`
  font-family: hk_grotesksemibold, sans-serif;
  font-size3 1.25 rem;
`

const Content = styled.div`
  // height: 300px;
  // overflow: scroll;
`
const Checkmark = styled(Image)`
  width: 16px;
  height 16px;
  display: inline-block;
  margin-right: 8px;
  filter: invert(26%) sepia(71%) saturate(6327%) hue-rotate(115deg) brightness(104%) contrast(104%);
`

const BasketImage = styled(Image)`
  width: 40px;
  height 40px;
  display: inline-block;
  margin: 0 16px -8px 0;
`

const Button = styled.button`
  color: #788474;
  margin: 16px auto;
  padding: 16px;
  border: 2px solid #788474;
  border-radius: 4px;
`

const BasketPreview = ({ numberOfVisibleItems }) => {
  const [showAllItems, setShowAllItems] = useState(false)

  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productv2" }, data: { isLocalPluck: { eq: true } } }) {
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

  const products = data.allAirtable.nodes
  const items = products.map(product => {
    return (
      <>
        <BasketItem
          quantityLabel={`${product.data.unitQuantity || 1} ${product.data.unitLabel || ''}`}
          name={product.data.name}
          oneLiner={product.data.oneLiner}
          canEdit={false}
          isLocal={true}
          isOrganic={false}
          isInSeason={false}
          isCompact={true}
          childImageSharp={get(product, 'data.mainImage.localFiles[0].childImageSharp', null)}
          quantityInBasket={0}
          unitPriceInCents={0}
          imageSrc={null}
          stripePriceId={null}
        />
        <ThinLineBreak />
      </>
    )
  })

  const showFewerBtn = (
    <Button type="button" onClick={() => setShowAllItems(false)}>
      See fewer items
      <ChevronUp />
    </Button>
  )

  const showMoreBtn = (
    <Button type="button" onClick={() => setShowAllItems(true)}>
      {`See all ${items.length} items`}
      <ChevronDown />
    </Button>
  )

  const BasketShowHideBtn = showAllItems ? showFewerBtn : showMoreBtn

  return (
    <>
      <Card>
        <Title bold>The Local Pluck</Title>
        <Detail>
          Our $35 starter basket is filled with 10-12 different types of the best local produce growing right now
        </Detail>
        <ThinLineBreak />
        <Detail bold>
          <Checkmark alt="check" src="checkmark.png" />
          Free shipping
        </Detail>
        <Detail bold>
          <Checkmark alt="check" src="checkmark.png" />
          From local farmers under 2 hours away
        </Detail>
        <Detail bold>
          <Checkmark alt="check" src="checkmark.png" />
          Grown without pesticides or GMOs
        </Detail>
        <Detail bold>
          <Checkmark alt="check" src="checkmark.png" />
          In season
        </Detail>
        <Detail bold>
          <Checkmark alt="check" src="checkmark.png" />
          Picked, plucked or baked this week
        </Detail>
      </Card>

      <Header>
        <BasketImage src="basket.png" alt="Your basket" />
        What's Inside?
      </Header>

      <Card>
        <Content>
          {showAllItems ? items : items.slice(0, numberOfVisibleItems)}
          {numberOfVisibleItems < items.length ? BasketShowHideBtn : ''}
        </Content>
        <LineBreak />
        <Detail bold>Not big on squash? Need more kale?</Detail>
        <Detail>
          {`Our starter basket is 100% customizable. Swap, remove or add any item from our wide selection of fresh local produce, bakery, and 
        eggs & dairy items.`}
        </Detail>
        <Detail bold>You can edit your basket after checkout</Detail>
      </Card>
    </>
  )
}
export default BasketPreview
