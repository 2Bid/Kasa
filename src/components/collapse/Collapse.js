import {React, useState} from 'react'
import './collapse.css'

export default function Collapse(props) {
  let [toggle, setToggle] = useState(false)

  const toggling = (e) =>{
    if(toggle){
      e.target.nextElementSibling.style.height = 0
      e.target.lastChild.classList.remove('active')
      setToggle(false)
      return
    }
    if(!toggle){
      e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight}px`
      e.target.lastChild.classList.add('active')
      setToggle(true)
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
        {
          Array.isArray(props.txt) ? 
          <div className='collapse-txt-container'>
          {props.txt.map((item, index)=>{
            return <p className='collapse-txt' key={index}>{item}</p>
          })}
          </div>
          :
          <p className='collapse-txt'>{props.txt}</p>
        }
      </div>
    </div>
  )
}
