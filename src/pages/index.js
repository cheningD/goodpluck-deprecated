import "./index.css"

import React, { useState } from "react"

import Banner from "../components/Banner"
import Footer from "../components/footer"
import { Link } from "gatsby"
import { Menu } from "../components/Menu"
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import ZipCodeModal from "../components/ZipCodeModal"

const ZipForm = ({ updateZipCode, setShowModal }) => {
  const [zip, setZip] = useState("")
  return (
    <form
      className="cta-form"
      onSubmit={event => {
        event.preventDefault()
        updateZipCode(zip)
        setShowModal(true)
      }}
    >
      <input
        id="zip-input"
        aria-label="Enter your zip code"
        type="text"
        placeholder="zip code"
        className="cta-input"
        onChange={event => setZip(event.target.value)}
      />
      <button className="cta-button" type="submit">
        Get Started
      </button>
    </form>
  )
}

export default function Home() {
  return (
    <div className="body1">
      <Banner />
      <SEO />
      <div className="section-1">
        <div className="homepage-left-side">
          <Nav />
          <div className="hero-left">
            <div className="div1">
              <Menu
                linkClassName="homepage-menu-link"
                className="homepage-menu menu"
              />
              <div className="hero-text">
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
                <ZipCodeModal
                  WrappedComponentNeedsZip={ZipForm}
                  wrappedComponentNeedsZipProps={{}}
                  WrappedComponentZipIsAllowed={null}
                  wrappedComponentZipIsAllowedProps={{}}
                  showDeliveryMessageWhenZipAllowed={true}
                  showDeliveryMessageWhenZipNotAllowed={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Link to="#how-it-works" className="hero-link">
            How It Works
          </Link>
          <a
            href="https://cead433923.typeform.com/to/vfu8Ipdm"
            className="new-ways-to-save-link hero-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Is It Expensive?
          </a>
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
              <span>We are creating </span>
              <a
                href="https://cead433923.typeform.com/to/vfu8Ipdm"
                className="new-ways-to-save-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                new ways to save
              </a>

              <span> to help make super-fresh food more affordable.</span>
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
            <span className="chat-header">
              <button
                className="gp-button-link"
                onClick={() => {
                  window.MissiveChat.open()
                }}
              >
                Have a Question? Chat with us
              </button>
            </span>
            <p></p>
            <div className="how-it-works-heading">
              Order exactly what you want
            </div>
            <p className="how-it-works-paragraph">
              Unlike a subscription produce box, the choice is yours. We won't
              send you 20 pounds of kale unless you want it.
            </p>
            <div className="how-it-works-heading">Local First</div>
            <p className="how-it-works-paragraph">
              We source first from small local farms in Detroit. If we can't
              find an item we move to regional farms in Michigan. In winter, we
              source some essentials from farms further south.
            </p>
            <div className="how-it-works-heading">Support small farms</div>
            <p className="how-it-works-paragraph">
              Grocery stores don't work for small local farms, that's a pity -
              because small farms are creating some of the most delicious,
              sustainable and equitable food in Detroit. We are building a model
              for local food that supports growing food in your community.
            </p>
            <p className="how-it-works-paragraph">
              It's October! We are wrapping up the summer produce and welcoming
              a mountain of delicious apples, squashes, greens and more. &nbsp;
              <Link to="/market/produce">Check it out!</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
