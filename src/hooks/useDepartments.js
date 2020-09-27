import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import reduce from "lodash-es/reduce"
import isNil from "lodash-es/isNil"

const query = graphql`
  query DepartmentsQuery {
    allAirtable(filter: { table: { eq: "department_table" } }) {
      nodes {
        data {
          name
          slug
        }
      }
    }
  }
`

export function withDepartments(Component) {
  return props => {
    const departments = useDepartments()
    return <Component {...props} departments={departments} />
  }
}

// Creates a Map { departmentName: "slug"}
export function useDepartments() {
  const result = useStaticQuery(query)
  const departmentNames = reduce(
    result?.allAirtable?.nodes,
    (departments, graphQlResponse) => {
      const departmentName = graphQlResponse?.data?.name
      const slug = graphQlResponse?.data?.slug

      if (isNil(departmentName) || isNil(slug)) return departments

      departments.set(departmentName, slug)

      return departments
    },
    new Map()
  )

  return Array.from(departmentNames, ([departmentName, slug]) =>
    DepartmentLink.create(departmentName, slug)
  )
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
