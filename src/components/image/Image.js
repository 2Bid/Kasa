import React from 'react'
import './image.css'

export default function Image(props) {
  return (
    <div className='img-container'>
      <img src={props.src} alt='banniere du site'/>
      <p className='texte-image'>{props.txt}</p>
    </div>
  )
}
