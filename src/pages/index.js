import "./index.css"

import Emoji from "../components/Emoji"
import Footer from "../components/footer"
import HeroSection from "../components/HeroSection"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import Notification from "../components/Notification"
import React from "react"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <div className="body1">
      <Notification />
      <SEO />
      <Nav />
      <HeroSection />
      <div className="section2">
        <div className="section-header">
          Building a better way to get your food
        </div>
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
              We order in advance from local farms which means produce is
              harvested to order, and less is wasted.
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
              <span>
                We are making super-fresh sustainable food more affordable.
              </span>
              Help us by taking our quick{" "}
              <a
                href="https://cead433923.typeform.com/to/vfu8Ipdm"
                className="new-ways-to-save-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                survey
              </a>
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
              Sustainable packaging and sustainable farming methods are the norm
              round here.
            </div>
          </div>
        </div>
      </div>
      <div className="section-3" id="how-it-works">
        <div className="section-header">How it works</div>
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
