import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header(props) {
  return (
    <header className='header-container'>
      <div>
        <Link to="/"><img className='header-logo' src={props.img} alt='logo kasa' /></Link>
      </div>
      <div>
        <nav className='link-container'>
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </div>
    </header>
  )
}
