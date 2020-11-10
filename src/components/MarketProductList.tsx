import BasketItem from '../components/BasketItem'
import { LineBreak } from '../components/StyledComponentLib'
import React from 'react'
import { basketItems } from '../store'
import get from 'lodash-es/get'
import { sortByPathFunc } from '../util'
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
  color: #6c7668;
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

const MarketProductList = ({ subcategoryNodes, productGroupNodes, department, filters }) => {
  subcategoryNodes
    .sort(sortByPathFunc('data.name'))
    .sort(sortByPathFunc('data.sortOrderCategories'))
    .sort(sortByPathFunc('data.sortOrderDepartments'))

  //Apply filters
  let filteredProductGroupNodes = productGroupNodes
  if (filters['Organic']) {
    filteredProductGroupNodes = filteredProductGroupNodes.filter(node => {
      return get(node, 'data.productv2[0].data.isOrganic', false)
    })
  }
  if (filters['Local']) {
    filteredProductGroupNodes = filteredProductGroupNodes.filter(node => {
      return get(node, 'data.productv2[0].data.isLocal', false)
    })
  }
  if (filters['In Season']) {
    filteredProductGroupNodes = filteredProductGroupNodes.filter(node => {
      return get(node, 'data.productv2[0].data.isInSeason', false)
    })
  }

  const getProductsBySubcategory = subcategory => {
    return filteredProductGroupNodes
      .filter(node => get(node, 'data.subcategory[0]', '') === subcategory)

      .map(productGroup => {
        const productData = get(productGroup, 'data.productv2[0].data', {})

        const quantityLabel = `${productData.unitQuantity || 1} ${productData.unitLabel || ''}`

        let stripePriceIdForEnv = productData.stripePriceId
        return (
          <>
            <BasketItem
              canEdit={true}
              childImageSharp={get(productData, 'data.mainImage.localFiles[0].childImageSharp')}
              isCompact={false}
              isInSeason={productData.isInSeason}
              isLocal={productData.isLocal}
              isOrganic={productData.isOrganic}
              imageSrc={null}
              name={get(productGroup, 'data.name', '')}
              oneLiner={productData.oneLiner}
              quantityLabel={quantityLabel}
              stripePriceId={stripePriceIdForEnv}
              unitPriceInCents={productData.priceInCents} //Just a value
              quantityInBasket={useRecoilValue(basketItems)?.get(stripePriceIdForEnv)?.quantity || 0}
            />
            <ThinLineBreak />
          </>
        )
      })
  }

  const categories = subcategoryNodes
    .filter(node => get(node, 'data.department[0]', '') === department)
    .map(n => get(n, 'data.category[0]'))
    .filter((value, index, array) => array.indexOf(value) === index)

  const categorySections = categories.map(category => {
    const subcategorySections = subcategoryNodes
      .filter(node => get(node, 'data.category[0]') === category)
      .map(node => {
        const subcategory = get(node, 'data.name')
        if (!subcategory) {
          return null
        }
        if (getProductsBySubcategory(subcategory).length === 0) {
          return ''
        }

        return (
          <>
            <MarketH2 id={subcategory}>{subcategory}</MarketH2>
            {getProductsBySubcategory(subcategory)}
          </>
        )
      })

    return (
      <>
        <MarketH1 id={category}>{category}</MarketH1>
        {subcategorySections}
      </>
    )
  })
  return categorySections
}

export default MarketProductList
