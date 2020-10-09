import "./index.css"

import React, { useState } from "react"

import Banner from "../components/Banner"
import Emoji from "../components/Emoji"
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
            <p className="how-it-works-subheading">
              Get your groceries from farmers in your community.
            </p>
            <span className="chat-header">
              <button
                className="gp-button-link"
                onClick={() => {
                  window.MissiveChat.open()
                }}
              >
                Ask us anything...
              </button>
            </span>
            <p></p>
            <div className="how-it-works-heading">
              <Emoji symbol="🛵" label="fast scooter"></Emoji> Farm to you
              within hours
            </div>
            <p className="how-it-works-paragraph">
              Goodpluck finds super-local, just-harvested, sustainably-grown
              produce and leaves it on your doorstep the same day.
            </p>
            <div className="how-it-works-heading">
              <Emoji symbol="🥬" label="kale"></Emoji> Order exactly what you
              want
            </div>
            <p className="how-it-works-paragraph">
              Unlike a subscription produce box, the choice is yours. We won't
              send you 20 pounds of kale unless you want it.
            </p>
            <div className="how-it-works-heading">
              <Emoji symbol="📍" label="super local"></Emoji> Support Local
              First
            </div>
            <p className="how-it-works-paragraph">
              There is delicious, sustainably-grown food all around us. Unlike
              food stores, Goodpluck is built to support small, super-local
              farms (including urban farms) so that's where we look first.
            </p>
            <p>
              {" "}
              As we enter winter, we will source some essentials that can't be
              grown here from sustainable farms in other regions. (We'll make
              these items easy to spot!)
            </p>
            <p className="how-it-works-paragraph"></p>

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
