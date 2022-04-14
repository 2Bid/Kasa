import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

import logo from '../images/logo.jpg'

export default function Layout() {
  return (
    <main>
         <Header img={logo}/>
         <div className='main-container'>
         <Outlet/>
         </div>
         <Footer/>
    </main>
  )
}
