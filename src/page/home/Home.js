import React from 'react'
import Image from '../../components/image/Image'
import Bloc from '../../components/bloc/Bloc'
import { useLoad } from '../../hooks/load'

import './home.css'

/* import image */
import banner from '../../images/banner.jpg'

export default function Home() {
  const obj = useLoad()
     return (
          <main>
            <Image src={banner} txt='Chez vous, partout et ailleurs'/>
            {
            obj.loading === false 
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
          </main>
        )
}
