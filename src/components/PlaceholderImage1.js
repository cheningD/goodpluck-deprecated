import React from "react"

import Img from "gatsby-image"
import get from "lodash-es/get"

import { useStaticQuery, graphql } from "gatsby"

const PlaceholderImage = () => {
  const data = useStaticQuery(graphql`
    {
      airtable(
        data: { theme: { eq: "default1" } }
        table: { eq: "site_defaults" }
      ) {
        data {
          placeholderImage {
            id
            localFiles {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={get(
        data.airtable.data,
        "placeholderImage.localFiles[0].childImageSharp.fluid",
        null
      )}
    />
  )
}

export default PlaceholderImage
