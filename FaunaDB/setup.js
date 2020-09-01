var faunadb = require("faunadb"),
  q = faunadb.query

var client = new faunadb.Client({
  secret: /* insert secret here */,
})

// Fauna is schemaless, but here are a schemas for sanity

/* Supplier Schema
- name: String!
- description: String
- productRefs: [Product!]!
*/

/* ProductGroup Schema
- name: String! @unique
- description: String
- department: String
- family: String
- productRefs: [Product!]!
*/

/* Product Schema
- price_cents: Int!
- size_description: String!
- quantity: String
- productGroup: ProductGroup!
- supplier: Supplier!
*/

// Create Collections
const createCollections = () => {
  client
    .query(
      q.Do(
        q.CreateCollection({ name: "Supplier" }),
        q.CreateCollection({ name: "ProductGroup" }),
        q.CreateCollection({ name: "Product" })
      )
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

// Dummy Data
const uploadDummySuppliers = () => {
  const dummy_supplier_inputs = [
    { name: "Reo Farms [Test]", description: "A test Farm", products: [] },
    { name: "Chewy [Test]", description: "Another test", products: [] },
    { name: "God's Fields [Test]", description: "Why not test", products: [] },
  ]

  dummy_supplier_inputs.forEach((supplier, index) => {
    client
      .query(
        q.Create(q.Collection("Supplier"), {
          data: supplier,
        })
      )
      .then(ret => console.log(ret))
      .catch(err => console.log(err))
  })
}

const uploadDummyProductGroups = () => {
  const dummy_product_group_inputs = [
    {
      name: "English Cucumber",
      description: ", excellent pijuicyckler",
      department: "produce",
      family: "vegetables",
      products: [],
    },
    {
      name: "Organic Lemons",
      description: "juicy, excellent curdler",
      department: "produce",
      family: "fruit",
      products: [],
    },
  ]

  dummy_product_group_inputs.forEach((productGroup, index) => {
    client
      .query(
        q.Create(q.Collection("ProductGroup"), {
          data: productGroup,
        })
      )
      .then(ret => console.log(ret))
      .catch(err => console.log(err))
  })
}

const uploadDummyProducts = () => {
  const dummy_product_inputs = [
    {
      price_cents: 299,
      size_description: "a bunch of 3 cukes",
      quantity: 10,
      product_group_id: "273142396335686162",
      supplier_id: "273142396257042944",
    },
    {
      price_cents: 549,
      size_description: "a basket of 6 cukes",
      quantity: 10,
      product_group_id: "273142396335686162",
      supplier_id: "273142396287451667",
    },
    {
      price_cents: 699,
      size_description: "a basket of 6 lemons",
      quantity: 10,
      product_group_id: "273142396319957504",
      supplier_id: "273142396323103250",
    },
  ]

  // Upload the dummy products
  dummy_product_inputs.forEach((productData, index) => {
    client
      .query(
        q.Call(
          q.Function("addProduct"),
          productData.supplier_id,
          productData.product_group_id,
          productData.price_cents,
          productData.size_description,
          productData.quantity
        )
      )
      .then(ret => console.log(ret))
      .catch(err => console.log(err))
  })
}

// Functions
const createAddProductsFunction = () => {
  client
    .query(
      q.CreateFunction({
        name: "addProduct",
        body: q.Query(
          // Add Product to Product & Update refs in Supplier and Product Group
          q.Lambda(
            [
              "supplier_id",
              "product_group_id",
              "price_cents",
              "size_description",
              "quantity",
            ],
            q.Let(
              {
                supplierRef: q.Ref(
                  q.Collection("Supplier"),
                  q.Var("supplier_id")
                ),
                productGroupRef: q.Ref(
                  q.Collection("ProductGroup"),
                  q.Var("product_group_id")
                ),
                // Create the product and store it variable
                product: q.Create(q.Collection("Product"), {
                  data: {
                    price_cents: q.Var("price_cents"),
                    size_description: q.Var("size_description"),
                    quantity: q.Var("quantity"),
                    productGroup: q.Var("productGroupRef"),
                    supplier: q.Var("supplierRef"),
                  },
                }),
                productRef: q.Select(["ref"], q.Var("product")),
                // The product array in Supplier
                supplier_products: q.Select(
                  ["data", "products"],
                  q.Get(q.Var("supplierRef"))
                ),
                // The product array in ProductGroup
                productGroup_products: q.Select(
                  ["data", "products"],
                  q.Get(q.Var("productGroupRef"))
                ),
              },
              q.Do(
                // Update productGroup products array
                q.Update(q.Var("productGroupRef"), {
                  data: {
                    products: q.Append(
                      q.Var("productRef"),
                      q.Var("productGroup_products")
                    ),
                  },
                }),
                // Update supplier products array
                q.Update(q.Var("supplierRef"), {
                  data: {
                    products: q.Append(
                      q.Var("productRef"),
                      q.Var("supplier_products")
                    ),
                  },
                })
              )
            )
          )
        ),
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

const createGetProductGroupDataFunction = () => {
  client
    .query(
      q.CreateFunction({
        name: "getProductGroupDataAndProductsByID",
        body: q.Query(
          q.Lambda(
            ["productGroupID"],
            q.Let(
              {
                productGroupDataX: q.Select(
                  ["data"],
                  q.Get(
                    q.Ref(q.Collection("ProductGroup"), q.Var("productGroupID"))
                  )
                ),
                productsDataX: q.Map(
                  q.Select(["products"], q.Var("productGroupDataX")),
                  q.Lambda(
                    ["productRef"],
                    q.Select(["data"], q.Get(q.Var("productRef")))
                  )
                ),
              },
              {
                productGroupData: q.Var("productGroupDataX"),
                productsData: q.Var("productsDataX"),
              }
            )
          )
        ),
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

const createFunctionGetProductGroupSlugs = () => {
  client
    .query(
      q.CreateFunction({
        name: "getProductGroupSlugs",
        body: q.Query(
          q.Lambda(
            ["_"],
            q.Paginate(q.Match(q.Index("all_product_groups_with_slug_and_ref")))
          )
        ),
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

// Indeces
const createIndexAllProductGroupsWithSlug2 = () => {
  // Create index to get product data by product conatiner id
  client
    .query(
      q.CreateIndex({
        name: "all_product_groups_with_slug_and_ref4",
        source: [
          {
            collection: q.Collection("ProductGroup"),
            fields: {
              slug: q.Query(
                q.Lambda(
                  "doc",
                  q.LowerCase(
                    q.Format("/market/%s/%s/%s", [
                      q.Select(["data", "department"], q.Var("doc")),
                      q.Select(["data", "family"], q.Var("doc")),
                      //Remove non url-safe characters
                      q.ReplaceStrRegex(
                        //Replace spaces with dashes
                        q.ReplaceStr(
                          //Trim Whitespace
                          q.Trim(q.Select(["data", "name"], q.Var("doc"))),
                          " ",
                          "-"
                        ),
                        "[^a-z^A-Z^0-9^_-]+",
                        ""
                      ),
                    ])
                  )
                )
              ),
            },
          },
        ],
        values: [
          { binding: "slug", field: ["ref", "id"] },
          { field: ["ref", "id"] },
          { field: ["data", "name"] },
          { field: ["data", "description"] },
          { field: ["data", "department"] },
          { field: ["data", "family"] },
        ],
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

const createIndexAllProductGroupsWithSlug = () => {
  // Create index to get product data by product conatiner id
  client
    .query(
      q.CreateIndex({
        name: "all_product_groups_with_slug",
        source: [
          {
            collection: q.Collection("ProductGroup"),
            fields: {
              slug: q.Query(
                q.Lambda(
                  "doc",
                  q.LowerCase(
                    q.Format("/market/%s/%s/%s", [
                      q.Select(["data", "department"], q.Var("doc")),
                      q.Select(["data", "family"], q.Var("doc")),
                      //Remove non url-safe characters
                      q.ReplaceStrRegex(
                        //Replace spaces with dashes
                        q.ReplaceStr(
                          //Trim Whitespace
                          q.Trim(q.Select(["data", "name"], q.Var("doc"))),
                          " ",
                          "-"
                        ),
                        "[^a-z^A-Z^0-9^_-]+",
                        ""
                      ),
                    ])
                  )
                )
              ),
            },
          },
        ],
        values: [{ binding: "slug" }, { field: ["ref", "id"] }],
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.log(err))
}

// createCollections()
// createAddProductsFunction()
// createIndexAllProductGroupsWithSlug()
// createGetProductGroupDataFunction()
// createFunctionGetProductGroupSlugs()
//uploadDummySuppliers()
//uploadDummyProductGroups()
//uploadDummyProducts() // Don't forget to update supplier and productGrour refs
