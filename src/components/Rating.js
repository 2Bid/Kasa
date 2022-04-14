import React from 'react'

export default function Rating(props) {

     const svgGris = <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#E3E3E3"/>
     </svg>

     const svgFull = <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" fill="#FF6060"/>
     </svg>

      const allSvg = []
      const allStars = 5

     const ratingNumber = parseInt(props.rating)
     
     for (let index = 0; index < allStars; index++) {
          allSvg.push(svgGris)

     }

     allSvg.fill(svgFull,0,ratingNumber)

  return (
    <div className="rating-container">
          {
               allSvg.map((item, index)=>{
                    return (
                    <span key={index}>{item}</span>
                    )
                    
               })
               
          }
    </div>
  )
}