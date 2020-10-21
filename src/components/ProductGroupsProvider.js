import { graphql, useStaticQuery } from "gatsby"

import React from "react"

const ProductGroupsProvider = ({ ChildComponent, ...rest }) => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "productGroup" } }) {
        nodes {
          data {
            mainImage {
              id
            }
            name
            department
            category
            subCategory
            productv2 {
              data {
                available
                name
                priceInCents
                stripePriceId
                unitQuantity
                unitLabel
              }
            }
            description
          }
        }
      }
    }
  `)

  console.log("data", data.allAirtable.nodes[0])
  return <ChildComponent productGroups={data.allAirtable.nodes} {...rest} />
}

export default ProductGroupsProvider
