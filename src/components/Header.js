import React from 'react'
import { useLocation } from 'react-router-dom'
import Pdf from './Pdf'

const Header = () => {
  const location =useLocation()
  return (
    <>
    {
      location.pathname!="/pdf"
      ?  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      {/* Right navbar links */}
     
    </nav>
    :null
    }
 
</>
  )
}

export default Header