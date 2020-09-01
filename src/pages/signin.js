import React, { useState } from "react"

export default function Zipcode() {
  const [isSignUp, setIsSignUp] = useState(true)

  const setSignIn = () => setIsSignUp(false)
  const setSignUp = () => setIsSignUp(true)

  return (
    <div className="react-body">
      <button className="navbutton g-button" onClick={setSignUp}>
        {isSignUp ? <span className="fa-solid"></span> : ""}
        Sign Up
      </button>
      <button className="navbutton g-button" onClick={setSignIn}>
        {!isSignUp ? <span className="fa-solid"></span> : ""}
        Sign In
      </button>
      {isSignUp ? <input placeholder="First Name"></input> : ""}
      {isSignUp ? <input placeholder="Last Name"></input> : ""}
      <input placeholder="Email"></input>
      <button className="cta-button g-button">Send Me a Sign In Link</button>
    </div>
  )
}
