import React, { useState } from "react"
import { Link } from "gatsby"
import "./index.css"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import ZipCodeModal from "../components/ZipCodeModal"
import { Menu } from "../components/Menu"

const ZipForm = ({ updateZipCode, setShowModal }) => {
  const [zip, setZip] = useState("")
  return (
    <form
      className="cta-form"
      onSubmit={event => {
        console.log(" updateZipCode(zipObject)", zip)
        event.preventDefault()
        updateZipCode(zip)
        setShowModal(true)
      }}
    >
      <input
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
      <Footer />
    </div>
  )
}
