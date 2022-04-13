import React from 'react'
import { Link } from 'react-router-dom'
import './bloc.css'

export default function Bloc(props) {
  return (
    <article className='data-item-container'>
         <div className='data-item'>
              <Link to={'/detail/' + props.id}>
                    <img className="data-img" src={props.cover} alt={props.title}/>
                    <h3 className='data-title'>{props.title}</h3>
              </Link>
         </div>
    </article>
  )
}
