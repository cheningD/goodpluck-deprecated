import React, { useState } from "react"
import { navigate } from "gatsby"

export default function Zipcode() {
  const [zipValue, setZipValue] = useState("")
  const [invalidZipAlert, setInvalidZip] = useState(false)
  const [unsupportedZip, setUnsupportedZip] = useState(false)

  const changeZipValue = event => setZipValue(event.target.value)

  const checkZip = () => {
    const goodZips = ["48104", "48206"]

    // Remove alerts
    setInvalidZip(false)
    setUnsupportedZip(false)

    const zipCodeRegex = /[0-9]{5}/g
    if (!zipValue.match(zipCodeRegex)) {
      setInvalidZip(true)
    } else if (goodZips.includes(zipValue)) {
      localStorage.setItem("GoodPluck_Your_Zip", zipValue)
      navigate(`/signin`)
    } else {
      setUnsupportedZip(true)
    }
  }

  return (
    <div className="react-body">
      <div>Enter your zip code to see if we deliver to your address</div>
      {invalidZipAlert ? <div>That zipcode doesn't look quite right</div> : ""}
      {unsupportedZip ? <div>We don't deliver to this zipcode yet</div> : ""}

      <input
        type="text"
        max="5"
        title="Five digit zip code"
        placeholder="Zip Code"
        value={zipValue}
        onChange={changeZipValue}
      />
      <button className="cta-button g-button" onClick={checkZip}>
        Continue
      </button>
    </div>
  )
}
