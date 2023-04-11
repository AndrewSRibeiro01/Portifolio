import { Icone } from '../../Estilizações/EiconesNavbar'
import { Icones } from '../../Estilizações/EiconesNavbar'
import React from 'react'
import hckr from "../../Imagens/pngwing.com (8).png"


const IconesNavbar = () => {
  return (
    <Icones>
        <Icone><img src={hckr} alt="LogoIcone" height="40px"></img></Icone>
    </Icones>
  )
}

export default IconesNavbar