import React from "react"
import "./product.css"

export default function Home() {
  return (
    <div className="react-body">
      <div className="product-page">
        <div className="product-pagination-wrap">
          <div className="product-pagination-text">Market</div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">
            This is some text inside of a div block.
          </div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">
            This is some text inside of a div block.
          </div>
          <div className="pagination-icon"></div>
          <div className="product-pagination-text">
            This is some text inside of a div block.
          </div>
        </div>
        <div className="product-columns g-row">
          <div className="column w-clearfix g-col g-col-6">
            <img
              height=""
              src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
              alt=""
              className="image"
            />
          </div>
          <div className="column2 g-col g-col-6">
            <div className="product-highlight-text">FRESHLY PLUCKED</div>
            <div className="farm-label">
              This is some text inside of a div block.
            </div>
            <h1 className="product-name">Heading</h1>
            <div className="product-variation">
              <div className="product-price-container">
                <h1 className="price">Heading</h1>
                <div className="product-amount-label">
                  This is some text inside of a div block.
                </div>
              </div>
              <div className="add-to-order-container">
                <a
                  href="#var1"
                  id="add-to-order-button"
                  className="add-to-order-button g-button"
                >
                  Add to Order
                </a>
                <div className="addsubtract-cart-button">
                  <a href="#var1" className="addsubtract-cart-btn g-button">
                    
                  </a>
                  <a href="#var1" className="addsubtract-cart-btn g-button">
                    
                  </a>
                </div>
              </div>
            </div>
            <div className="product-variation-market-deal">
              <div className="product-market-deal-text">MARKET DEAL</div>
              <div className="product-price-container">
                <h1 className="price">Heading</h1>
                <div className="product-amount-label">
                  This is some text inside of a div block.
                </div>
              </div>
              <div className="add-to-order-container">
                <a
                  href="#var1"
                  id="add-to-order-button"
                  className="add-to-order-button g-button"
                >
                  Add to Order
                </a>
                <div className="addsubtract-cart-button">
                  <a href="#var1" className="addsubtract-cart-btn g-button">
                    
                  </a>
                  <a href="#var1" className="addsubtract-cart-btn g-button">
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-columns g-row">
          <div className="column g-col g-col-6">
            <div className="delivered-on-container">
              <div className="delivered-on-label">
                Picked &amp; Delivered on:
              </div>
              <div className="available-delivery-date">
                <div className="delivered-on-led-container">
                  <span className="delivered-on-led"></span>
                </div>
                <div className="whats-good-item-label">Sat 7/25</div>
              </div>
            </div>
            <div className="product-description">
              This is some text inside of a div block.
            </div>
          </div>
          <div className="column2 g-col g-col-6">
            <h2 className="whats-good-heading">What&#x27;s Good?</h2>
            <div className="product-certification-container">
              <div className="certification">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  alt=""
                  className="whats-good-image"
                />
                <div>Grown in Detroit</div>
              </div>
              <div className="certification">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  alt=""
                  className="whats-good-image"
                />
                <div>Regenerative Farming</div>
              </div>
              <div className="certification">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  alt=""
                  className="whats-good-image"
                />
                <div>Local</div>
              </div>
              <div className="certification">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  alt=""
                  className="whats-good-image"
                />
                <div>Certified Organic</div>
              </div>
              <div className="certification">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                  alt=""
                  className="whats-good-image"
                />
                <div>Certified Natural</div>
              </div>
            </div>
            <div className="product-highlight-list-item">
              <div className="check"></div>
              <div>No synthetic chemicals, pesticides or herbicides</div>
            </div>
            <div className="product-highlight-list-item">
              <div className="check"></div>
              <div>No GMOs</div>
            </div>
            <div className="product-highlight-list-item">
              <div className="check"></div>
              <div>Animals are free to roam</div>
            </div>
            <div className="product-highlight-list-item">
              <div className="check"></div>
              <div>No routine use of antibiotics</div>
            </div>
            <div className="product-highlight-list-item">
              <div className="check"></div>
              <div>Made without artificial colors or preservatives</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
