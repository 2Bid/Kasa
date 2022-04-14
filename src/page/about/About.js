import React from 'react'
import Collapse from '../../components/collapse/Collapse'
import Image from '../../components/image/Image'

import banner from '../../images/banner.jpg'

export default function About() {
  return (
    <div className='about-collapse-container'>
      <Image src={banner}/>
      <Collapse title='Fiabilité' txt='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'/>
      <Collapse title='Respect' txt='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'/>
      <Collapse title='Fiabilité' txt="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
      <Collapse title='Sécurité' txt="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
  )
}
