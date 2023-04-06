import bug from '../../Imagens/detector-de-bug.png'
import { Icone } from '../../Estilizações/EiconesNavbar'
import { Icones } from '../../Estilizações/EiconesNavbar'
import React from 'react'
import hckr from "../../Imagens/pngwing.com (8).png"

const icones = [bug]

const IconesNavbar = () => {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone><img src={hckr} alt="LogoIcone" height="40px"></img></Icone>
      ))}
    </Icones>
  )
}

export default IconesNavbar