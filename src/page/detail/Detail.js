import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useCheckId } from '../../hooks/checkId'
import Collapse from '../../components/collapse/Collapse'

import './detail.css'
import Rating from '../../components/Rating'
import Gallery from '../../components/gallery/Gallery'

export default function Detail() {
  let {id} = useParams()
  const idData = useCheckId(id)

  function checkError() {
    if(idData.errorLogement){
      return <Navigate to="/Error"/>
    }
    else{
      return (
        <div className='logement-container'>
          <Gallery img={idData.logement.pictures}/>

          <div className='logement-infos'>
            <div className='logement-infos-left'>
              <h1 className='logement-title'>{idData.logement.title}</h1>
              <p className='logement-location'>{idData.logement.location}</p>
              <div className='logement-span-container'>
                {idData.logement.tags.map((item, id)=>{
                  return <span className='logement-span' key={id}>{item}</span>
                })}
              </div>
            </div>

            <div className='logement-infos-right'>
              <div className='logement-host-container'>
                <h2 className='logement-host-name'>{idData.logement.host.name}</h2>
                <img src={idData.logement.host.picture} alt={`Profil de ${idData.logement.host.name}`}  className="logement-img"/>
              </div>
              <Rating rating={idData.logement.rating}/>
            </div>
          </div>

          <div className='collapse-container'>
            <Collapse title="Description" txt={idData.logement.description}/>
            <Collapse lineBreak={true} title="Equipements" txt={idData.logement.equipments}/>
          </div>
        </div>
      )
    }
  }

  return (
    <div className='detailPage-container'>
      {
      idData.loadingLogement === false
      ?
      checkError()
      :
      <></>
      }
    </div>
    
  )
}
