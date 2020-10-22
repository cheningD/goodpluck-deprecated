const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Airtable implements Node {
      data: AirtableData
    }
    type AirtableData implements Node {
      available: Boolean
      isOrganic: Boolean
      isLocal: Boolean
      isInSeason: Boolean
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
      subcategory: [String]
      suppliersForProductGroup: [String]
    }
  `
  createTypes(typeDefs)
}
