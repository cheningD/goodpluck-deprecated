import { Container, HStack, Heading, Link, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BasketItem from '../components/BasketItem'
import Fuse from 'fuse.js'
import GatsbyLink from 'gatsby-link'
import SearchBar from '../components/SearchBar'
import Sidebar from './Sidebar'
import { basketItems } from '../store'
import get from 'lodash-es/get'
import memoize from 'lodash-es/memoize'
import sortBy from 'lodash-es/sortBy'
import { useRecoilValue } from 'recoil'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
                    gatsbyImageData(height: 120, width: 180, transformOptions: { fit: COVER })
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
  const links = []
  let prevProduct = null
  for (const product of products) {
    if (get(product, 'categories[0]') && get(product, 'categories[0]') !== get(prevProduct, 'categories[0]')) {
      marketItems.push(
        <Heading
          as="h1"
          size="2xl"
          px={[2, 2, 0]}
          mt="6"
          fontFamily="Bebas Neue, sans-serif"
          letterSpacing="wide"
          color="var(--green-bg-dark)"
          id={product.categories[0]}
        >
          {product.categories[0]}
        </Heading>,
      )
      links.push(
        <Text fontWeight="800" fontSize="lg" mt={2}>
          <Link
            as={GatsbyLink}
            to={`#${product.categories[0]}`}
            onClick={() => {
              onClose()
            }}
          >
            {product.categories[0]}
          </Link>
        </Text>,
      )
    }
    if (get(product, 'subCategories[0]') && get(product, 'subCategories[0]') !== get(prevProduct, 'subCategories[0]')) {
      marketItems.push(
        <Heading as="h2" size="lg" px={[2, 2, 0]} mt="8" mb="4" id={product.subCategories[0]}>
          {product.subCategories[0]}
        </Heading>,
      )
      links.push(
        <Text pl={2} mt={1}>
          <Link
            as={GatsbyLink}
            to={`#${product.subCategories[0]}`}
            onClick={() => {
              onClose()
            }}
          >
            {product.subCategories[0]}
          </Link>
        </Text>,
      )
    }
    if (get(product, 'sku') && get(product, 'sku') !== get(prevProduct, 'sku')) {
      marketItems.push(productToElement(product, _basketItems, canEdit))
      prevProduct = product
    }
  }

  return (
    <>
      <SearchBar onOpen={onOpen} updateSearchTerm={value => setSearchTerm(value)} fullscreen={false} />
      <HStack align="flex-start" justify="flex-start" spacing={[0, 0, 4]} h="100%" m={[0, 0, 4]}>
        <Sidebar setSearchTerm={setSearchTerm} isOpen={isOpen} onOpen={onOpen} onClose={onClose} links={links} />
        <Container
          bg="white"
          pb={[2, 2, 4]}
          px={[0, 0, 4]}
          mt={[0, 0, 8]}
          mb={8}
          minW={['100%', '100%', '500px']}
          borderRadius={[0, 0, 'md']}
        >
          {products.length > 0 ? marketItems : searchTerm ? <div>Couldn't find anything like "{searchTerm}"</div> : ''}
        </Container>
      </HStack>
    </>
  )
}

export default MarketView

const productToElement = (p, _basketItems, canEdit) => {
  return (
    <BasketItem
      key={p.sku}
      canEdit={canEdit}
      showControls={true}
      childImageSharp={get(p, 'mainImage.localFiles[0].childImageSharp')}
      name={p.name}
      oneLiner={p.oneLiner}
      unitQuantity={+p.unitQuantity || 1}
      unitLabel={p.unitLabel || ''}
      stripePriceId={p.sku}
      unitPriceInCents={p.priceInCents} //Just a value
      quantityInBasket={_basketItems?.get(p.sku)?.quantity || 0}
    />
  )
}
