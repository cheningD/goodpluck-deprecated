import { Card, LineBreak } from './StyledComponentLib'
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BasketItem from '../components/BasketItem'
import Fuse from 'fuse.js'
import SearchBar from '../components/SearchBar'
import { basketItems } from '../store'
import get from 'lodash-es/get'
import memoize from 'lodash-es/memoize'
import sortBy from 'lodash-es/sortBy'
import styled from 'styled-components'
import { useRecoilValue } from 'recoil'

const ThinLineBreak = styled(LineBreak)`
  height: 1px;
`

const MarketH1 = styled.h1`
  font-size: 2rem;
  font-family: Bebas Neue, sans-serif;
  line-height: 1;
  margin: 3rem 0 0 0;
  color: var(--green-bg-dark);
  letter-spacing: 0.1rem;
`

const MarketH2 = styled.h2`
  font-size: 1.5rem;
  font-family: Bebas Neue, sans-serif;
  font-family: hk_groteskbold, sans-serif;
  line-height: 1;
  margin: 2rem 0 1.5rem 0;
  letter-spacing: 0.1rem;
`

const searchOptions = {
  includeScore: false,
  threshold: 0.2,
  shouldSort: false,
  keys: ['name', 'oneLiner', 'subCategories', 'categories'],
}

const sortProducts = memoize(
  _products => {
    let products = sortBy(_products, i => (i.subCategories ? i.subCategories[0] : null))
    products = sortBy(products, i => (i.categories ? i.categories[0] : null))
    products = sortBy(products, i => (i.departments ? i.departments[0] : null))
    return products
  },
  () => '1',
)

const MarketView = ({ canEdit }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const _basketItems = useRecoilValue(basketItems)
  const data = useStaticQuery(graphql`
    {
      products: allAirtable(
        filter: { table: {}, data: { available: { eq: true } } }
        sort: { fields: data___name, order: ASC }
      ) {
        edges {
          node {
            id
            data {
              available
              name
              oneLiner
              priceInCents
              sku
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
              suppliers
              departments
              categories
              subCategories
            }
          }
        }
      }
    }
  `)

  // Use a stable sort to get products in order
  let products = sortProducts(data.products.edges.map(edge => edge.node.data))
  const fuse = new Fuse(products, searchOptions)

  if (searchTerm) {
    products = fuse.search(searchTerm).map(result => result.item)
    console.log('fuzzy searched!')
  }

  const marketItems = []
  let prevProduct = null
  for (const product of products) {
    if (get(product, 'categories[0]') && get(product, 'categories[0]') !== get(prevProduct, 'categories[0]')) {
      marketItems.push(<MarketH1>{product.categories[0]}</MarketH1>)
    }
    if (get(product, 'subCategories[0]') && get(product, 'subCategories[0]') !== get(prevProduct, 'subCategories[0]')) {
      marketItems.push(<MarketH2>{product.subCategories[0]}</MarketH2>)
    }
    if (get(product, 'sku') && get(product, 'sku') !== get(prevProduct, 'sku')) {
      marketItems.push(productToElement(product, _basketItems, canEdit))
      prevProduct = product
    }
  }

  return (
    <Card>
      <SearchBar updateSearchTerm={value => setSearchTerm(value)} />
      {products.length > 0 ? marketItems : searchTerm ? <div>Couldn't find anything like "{searchTerm}"</div> : ''}
    </Card>
  )
}

export default MarketView

const productToElement = (p, _basketItems, canEdit) => {
  return (
    <div>
      <div key={p.sku}>
        <BasketItem
          canEdit={canEdit}
          showControls={true}
          childImageSharp={get(p, 'mainImage.localFiles[0].childImageSharp')}
          isCompact={false}
          isInSeason={true}
          isLocal={true}
          isOrganic={false}
          imageSrc={null}
          name={p.name}
          oneLiner={p.oneLiner}
          quantityLabel={`${p.unitQuantity || 1} ${p.unitLabel || ''}`}
          stripePriceId={p.sku}
          unitPriceInCents={p.priceInCents} //Just a value
          quantityInBasket={_basketItems?.get(p.sku)?.quantity || 0}
        />
      </div>
      <ThinLineBreak />
    </div>
  )
}
