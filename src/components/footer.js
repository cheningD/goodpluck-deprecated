import React from "react"
import { Link } from "gatsby"
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-row-1">
        <div className="footer-column">
          <h4 className="h41">Goodpluck</h4>
          <div>© WhatsEatLike, Inc.</div>
        </div>
        <div className="footer-column">
          <a href="/" className="a2">
            Facebook
          </a>
          <a href="/" className="a2">
            Twitter
          </a>
          <a href="/" className="a2">
            Instagram
          </a>
        </div>
        <div className="footer-column">
          <Link to="/" className="a2">
            Sell On Goodpluck
          </Link>
          <Link to="/" className="a2">
            Privacy
          </Link>
          <Link to="/" className="a2">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
      <iframe
        className="footer-newsletter-signup"
        src="https://cdn.forms-content.sg-form.com/2628788e-f24d-11ea-8e09-06b692f79d11"
      />
    </div>
  )
}
