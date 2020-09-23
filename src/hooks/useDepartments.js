import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import reduce from "lodash-es/reduce"
import isNil from "lodash-es/isNil"

const query = graphql`
  query DepartmentsQuery {
    allAirtable {
      nodes {
        data {
          department {
            data {
              name
              slug
            }
          }
        }
      }
    }
  }
`

export function useDepartments() {
  const result = useStaticQuery(query)
  const departmentNames = reduce(
    result?.allAirtable?.nodes,
    (departments, graphQlResponse) => {
      const departmentName = graphQlResponse?.data?.department?.[0]?.data?.name
      const slug = graphQlResponse?.data?.department?.[0]?.data?.slug

      if (isNil(departmentName) || isNil(slug)) return departments

      departments.set(departmentName, {
        departmentName,
        slug,
      })

      return departments
    },
    new Map()
  )

  return Array.from(departmentNames.values(), d =>
    DepartmentLink.create(d.departmentName, d.slug)
  )
}

export function withDepartments(Component) {
  return props => {
    const departments = useDepartments()
    return <Component {...props} departments={departments} />
  }
}

class DepartmentLink {
  static create(departmentName, link) {
    return new DepartmentLink(departmentName, link, departmentName)
  }

  constructor(key, link, title) {
    this.key = key
    this.link = link
    this.title = title
  }
}
