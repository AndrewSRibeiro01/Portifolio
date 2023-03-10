import bug from '../../Imagens/detector-de-bug.png'
import { Icone } from '../../Estilizações/EiconesNavbar'
import { Icones } from '../../Estilizações/EiconesNavbar'
import React from 'react'

const icones = [bug]

const IconesNavbar = () => {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone><img src={icone} alt="LogoIcone" height="40px"></img></Icone>
      ))}
    </Icones>
  )
}

export default IconesNavbar