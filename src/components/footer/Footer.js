import React from 'react'
import './footer.css'

import logo from '../../images/LOGO.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <Link to="/" className='footer-logo-container'>
          <img src={logo} alt="Logo Kasa"/>
        </Link>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
