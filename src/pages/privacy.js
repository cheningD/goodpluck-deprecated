import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/footer"

export default function Privacy() {
  return (
    <>
      <Nav />

      <div
        name="termly-embed"
        data-id="d0d093cd-d150-4a3b-bfae-2163c896e7c0"
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
