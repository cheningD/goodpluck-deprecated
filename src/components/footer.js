import React from "react"
import { Link } from "gatsby"
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-brand">
        <h1 className="footer-brand-logo">Goodpluck</h1>
        <div>© WhatsEatLike, Inc.</div>
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
      <iframe
        title="newsletter-signup"
        className="footer-newsletter-signup"
        src="https://cdn.forms-content.sg-form.com/2628788e-f24d-11ea-8e09-06b692f79d11"
      />
    </div>
  )
}
