import "./footer.css"

import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-brand">
        <h1 className="footer-brand-logo">Goodpluck</h1>
        <div>© WhatsEatLike, Inc. 2020</div>
      </div>
      <div className="footer-links">
        {/* <a href="https://www.facebook.com/goodpluck" className="footer-link">
          Facebook
        </a> */}
        {/* <a href="https://twitter.com/goodpluckgrows" className="footer-link">
          Twitter
        </a> */}
        <a
          href="https://www.instagram.com/goodpluckgrows/"
          className="footer-link"
        >
          Instagram
        </a>
        {/* <Link to="/" className="footer-link">
          Sell On Goodpluck
        </Link> */}
        <Link to="/privacy" className="footer-link">
          Privacy
        </Link>

        <Link to="/terms" className="footer-link">
          Terms &amp; Conditions
        </Link>
        <Link to="/returns" className="footer-link">
          Returns, Refunds & Credits
        </Link>
      </div>
    </div>
  )
}
