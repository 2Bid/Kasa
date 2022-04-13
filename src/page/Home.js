import React from 'react'
import Header from '../components/header/Header'
import Image from '../components/image/Image'
import Bloc from '../components/bloc/Bloc'
import { useLoad } from '../hooks/load'
import Footer from '../components/footer/Footer'

import '../Home.css'

/* import image */
import logo from '../logo.jpg'
import banner from '../images/banner.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  const obj = useLoad()
     return (
          <main>
            <Header img={logo} />
            <Image url={banner} txt='Chez vous, partout et ailleurs'/>
            {
            obj.loading == false 
            ?
            <div className='bloc-container'>
              {obj.data.map((dataLogement)=>{
                return  <Bloc
                  key = {dataLogement.id}
                  id = {dataLogement.id}
                  title = {dataLogement.title}
                  cover = {dataLogement.cover}
                />
              })}
            </div>
              : 
              <></>
            }
            <Footer/>
            
          </main>
        )
}
