import React, { useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Image = ({ src, alt, ...rest }) => {
  // The regex: /image/[^s]/" Filterss out SVGs or any filetype begining with s
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { internal: { mediaType: { regex: "/image/[^s]/" } } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)
  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src])

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} alt={alt} {...rest} />
  }

  return <Img fluid={childImageSharp.fluid} alt={alt} {...rest} />
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Image
