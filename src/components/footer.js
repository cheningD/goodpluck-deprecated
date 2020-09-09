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
        <a href="/" className="footer-link">
          Facebook
        </a>
        <a href="/" className="footer-link">
          Twitter
        </a>
        <a href="/" className="footer-link">
          Instagram
        </a>
        <Link to="/" className="footer-link">
          Sell On Goodpluck
        </Link>
        <Link to="/" className="footer-link">
          Privacy
        </Link>
        <Link to="/" className="footer-link">
          Terms &amp; Conditions
        </Link>
      </div>
      <iframe
        className="footer-newsletter-signup"
        src="https://cdn.forms-content.sg-form.com/2628788e-f24d-11ea-8e09-06b692f79d11"
      />
    </div>
  )
}
