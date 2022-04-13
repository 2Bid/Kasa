import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default function E404() {
  return (
    <div className='container-404'>
         <h6>404</h6>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}
