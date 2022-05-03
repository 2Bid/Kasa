import {React, useState} from 'react'
import './gallery.css'

import arrowPrev from '../../images/arrow-left-solid.svg'
import arrowNext from '../../images/arrow-right-solid.svg'

export default function Gallery(props) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== props.img.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === props.img.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(props.img.length)
        }
    }

  return (
    <div className='carousel'>
         <div className='carousel-slider'>
               {
                    props.img.map((img, index)=>{
                              return <div key={index} className={slideIndex === index + 1 ? "carousel-item active" : "carousel-item"} ><img className="carousel-img" src={img} alt=""/></div>
                    })
               }
         </div>
         <span onClick={prevSlide} className="carousel-arrow-container prev"><img src={arrowPrev} className="carousel-arrow" alt='arrow to go previous'/></span>
          <span onClick={nextSlide} className="carousel-arrow-container next"><img src={arrowNext} className="carousel-arrow" alt='arrow to go next'/></span>
          <p className='carousel-thumbs-container'>
               {slideIndex}/{props.img.length}
          </p>
    </div>
  )
}                       
