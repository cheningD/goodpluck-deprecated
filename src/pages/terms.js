import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/footer"

export default function Terms() {
  //Check document is defined for SSR
  if (typeof document === `undefined`) {
    return ""
  }
  return (
    <>
      <Nav />

      <div
        name="termly-embed"
        data-id="b2d69771-b7ea-40c3-a44a-9618b080cb45"
        data-type="iframe"
      ></div>
      <script type="text/javascript">
        {(function (d, s, id) {
          var js,
            tjs = d.getElementsByTagName(s)[0]
          if (d.getElementById(id)) return
          js = d.createElement(s)
          js.id = id
          js.src = "https://app.termly.io/embed-policy.min.js"
          tjs.parentNode.insertBefore(js, tjs)
        })(document, "script", "termly-jssdk")}
      </script>
      <Footer />
    </>
  )
}
