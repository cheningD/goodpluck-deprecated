import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { listToClass } from "../util"

const query = graphql`
  query DepartmentQuery {
    allAirtable(filter: { table: { eq: "department_table" } }) {
      nodes {
        data {
          name
          id
          slug
        }
      }
    }
  }
`

export const Menu = ({ className, linkClassName }) => {
  const data = useStaticQuery(query)
  let sortedNodes = [...data.allAirtable.nodes].sort(
    (a, b) => a.data.id - b.data.id
  )

  const links = sortedNodes.map(node => (
    <Link
      to={node.data.slug}
      key={node.data.id}
      className={listToClass([linkClassName])}
    >
      {node.data.name}
    </Link>
  ))
  return <div className={className}>{links}</div>
}
