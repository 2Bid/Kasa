import {React, useState} from 'react'
import './collapse.css'

export default function Collapse(props) {
  let [toggle, setToggle] = useState(false)

  const toggling = (e) =>{
    if(!toggle){
      e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight}px`
      e.target.nextElementSibling.classList.add('active')
      e.target.lastChild.classList.add('active')
      setToggle(true)
      return
    }
    if(toggle){
      e.target.nextElementSibling.style.height = 0
      e.target.nextElementSibling.classList.remove('active')
      e.target.lastChild.classList.remove('active')
      setToggle(false)
    }
  }

  return (
    <div className='collapse-item'>
      <div className='toggle-container'
        onClick={toggling}
      >
        <h5>{props.title}</h5>
        <span className='span-toggle'></span>
      </div>
      <div className='texte-container'>
        <p>{props.txt}</p>
      </div>
    </div>
  )
}
