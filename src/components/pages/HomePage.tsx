import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>HomePage <br />
      <NavLink to="/success">
        SuccessPage
      </NavLink>

      
    </div>
  )
}
