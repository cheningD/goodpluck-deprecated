import React from "react"
import { Link } from "gatsby"
import "./index.css"

export default function Home() {
  return (
    <div className="body1">
      <div className="section-1">
        <div className="hero-left">
          <div className="nav">
            <div className="brand">GOODPLUCK</div>
            <div className="header-links">
              <button>Search</button>
              <Link to="" className="header-link">
                My Lists
              </Link>
              <Link to="" className="header-link">
                Sign in
              </Link>
              <Link to="" className="header-link">
                Cart: 0
              </Link>
            </div>
          </div>
          <div className="div1">
            <div className="menu">
              <button>
                Shopping for Today
                <br />
              </button>
              <button className="menu-category">
                Produce
                <br />
              </button>
              <button className="menu-category">
                Bakery
                <br />
              </button>
              <button className="menu-category">
                Eggs
                <br />
              </button>
              <button className="menu-category">
                Dairy
                <br />
              </button>
              <button className="menu-category">
                Meat &amp; Seafood
                <br />
              </button>
              <button className="menu-category">
                Beverages
                <br />
              </button>
              <button className="menu-category">
                Growing Now
                <br />
              </button>
              <div className="social-icons">Social Icons</div>
            </div>
            <div className="hero-text g-clearfix">
              <h1 className="h11">
                <div className="hero-line-1">
                  <span className="span1">SUPER FRESH </span>
                  FOOD FROM
                </div>
                <div className="hero-line-1">
                  <span className="span1">SMALL FARMERS</span>
                  &nbsp;in&nbsp; &nbsp;
                </div>
                <button className="hero-dropdown">DETROIT</button>
              </h1>
              <form className="cta-form CLEARFIX g-clearfix">
                <input
                  type="text"
                  placeholder="zip code"
                  className="cta-ionput"
                />
                <button className="cta-button">Get Started</button>
              </form>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Link to="#how-it-works" className="hero-link">
            How It Works
          </Link>
          <Link to="/is-it-expensive" className="hero-link">
            Is It Expensive?
          </Link>
        </div>
      </div>

      <div className="section2">
        <div className="section-header">What To Expect</div>
        <div className="feature-container">
          <div className="feature">
            <div className="feature-heading">
              Produce At Peak
              <span className="feature-highlight-pink">
                <div></div>
                Freshness
              </span>
            </div>
            <div className="div4">
              Our farmers pick your produce as close to your delivery day as
              possible.
            </div>
          </div>
          <div className="feature">
            <div className="feature-heading">
              NOT THE
              <span className="feature-highlight-green">
                <div></div>
                WHOLE paycheck
              </span>
            </div>
            <div className="div4">
              <span>We are creating</span>
              <Link to="#chat" className="new-ways-to-save-link">
                new ways to save
              </Link>

              <span>to help make super-fresh food more affordable.</span>
            </div>
          </div>
          <div className="feature">
            <div className="feature-heading">
              <span className="feature-highlight-pink" __selected-element__="">
                <div></div>
                SUSTAINABLE
              </span>
              BY
              <br />
              DEFAULT
            </div>
            <div className="div4">
              From sustainable packaging to fair pay - were making the right
              thing to do also the easiest thing to do.
            </div>
          </div>
        </div>
      </div>
      <div className="section-3" id="how-it-works">
        <div className="section-header">HoW IT Works</div>
        <div className="section-3-content">
          <div className="how-it-works-image"></div>
          <div className="how-it-works-text">
            <p className="how-it-works-paragraph">
              Goodpluck is part of a new food system that makes it easy to get
              super-fresh produce &amp; foods from smaller farms every day of
              the year.
            </p>
            <h3 className="chat-header">
              Have a question?&nbsp;
              <Link to="#chat" className="go-to-chat-link">
                Chat with us
              </Link>
            </h3>
            <p></p>
            <h3 className="how-it-works-heading">
              Order exactly what you want
            </h3>
            <p className="how-it-works-paragraph">
              We deliver twice a week so the goods are always freshly picked,
              baked or plucked.
            </p>
            <h3 className="how-it-works-heading">Support smaller farms</h3>
            <p className="how-it-works-paragraph">
              It puts more money in our communities and helps secure fair pay
              for food workers.
            </p>
            <h3 className="how-it-works-heading">Local first</h3>
            <p className="how-it-works-paragraph">
              We find the best of what's growing in and around Detroit, and only
              source what cant be grown here from our small, sustainable sister
              farms
            </p>
            <p className="how-it-works-paragraph">
              It's September! We are in the peak of the late summer and early
              fall crops, theres a bounty of produce comingh out of the ground.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-column">
          <h4 className="h41">Goodpluck</h4>
          <div>© WhatsEatLike, Inc.</div>
        </div>
        <div className="footer-column">
          <Link to="" className="a2">
            Facebook
          </Link>
          <Link to="" className="a2">
            Twitter
          </Link>
          <Link to="" className="a2">
            Instagram
          </Link>
        </div>
        <div className="footer-column">
          <div>Our newsletter is also super fresh:</div>
          <div className="newsletter">
            <form className="form1">
              <input
                type="text"
                className="newsletter-input"
                placeholder="Email Address"
              />
              <button className="newsletter-button">Ok</button>
            </form>
          </div>
        </div>
        <div className="footer-column">
          <Link to="" className="a2">
            Sell On Goodpluck
          </Link>
          <Link to="" className="a2">
            Privacy
          </Link>
          <Link to="" className="a2">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  )
}
