import React from "react"
import { Link } from "gatsby"

const DepartmentZeroState = ({ departmentName }) => {
  return (
    <div className="departmentZeroState">
      <h1>More {departmentName}? Soon!</h1>
      <p>
        Right now, we are focusing on getting super-fresh{" "}
        <Link to="/market/produce">produce</Link> and we will be adding more
        categories over the next few weeks.
      </p>
      <p>
        Want to know when we add more {departmentName.toLowerCase()}? Check out
        our form below...
      </p>
    </div>
  )
}

export default DepartmentZeroState
