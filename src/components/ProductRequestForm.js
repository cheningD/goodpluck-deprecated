import { Helmet } from "react-helmet"
import React from "react"

const ProductRequestForm = () => {
  return (
    <>
      <Helmet>
        <script
          defer
          src="https://static.airtable.com/js/embed/embed_snippet_v1.js"
        ></script>
      </Helmet>

      <iframe
        title="Product Request Form"
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrbZGUlmqB0RZrO4?backgroundColor=green"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="1046"
        style={{ background: "transparent", border: "0px solid #ccc" }}
      ></iframe>
    </>
  )
}

export default ProductRequestForm
