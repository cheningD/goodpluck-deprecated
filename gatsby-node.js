const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Airtable implements Node {
      data: AirtableData
    }
    type AirtableData implements Node {
      available: Boolean
      category: [String]
      department: [String]
      departmentSlug: [String]
      description: String
      growingMethod: String
      id: Int
      gpid: Int!
      multipleSupplierLabel: String
      name: String
      productBadges: [String]
      productHighlights: [String]
      priceInCents: String
      sku: String
      slug: String
      sortOrderCategories: [Int]
      subCategory: [String]
      suppliersForProductGroup: [String]
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const productTemplate = path.resolve(`src/templates/product.js`)
  await graphql(
    `
      query MyQuery {
        allAirtable(filter: { table: { eq: "productGroup" } }) {
          nodes {
            data {
              slug
              gpid
            }
          }
        }
      }
    `,
    { limit: 100000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allAirtable.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `${node.data.slug}`,
        component: productTemplate,
        context: {
          gpid: node.data.gpid,
        },
      })
    })
  })

  const departmentTemplate = path.resolve(`src/templates/department.js`)
  await graphql(
    `
      query MyQuery {
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
    `,
    { limit: 100000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    result.data.allAirtable.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `${node.data.slug}`,
        component: departmentTemplate,
        context: {
          name: node.data.name,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node }) => {
  console.log(node.internal.type)
}
