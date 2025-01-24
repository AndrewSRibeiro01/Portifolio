import { Icone } from '../../Estilizações/EiconesNavbar'
import { Icones } from '../../Estilizações/EiconesNavbar'
import { hckr } from '../assets'

const IconesNavbar = () => {
  return (
    <Icones>
      <Icone><img src={hckr} alt="LogoIcone" height="40px"></img></Icone>
    </Icones>
  )
}

export default IconesNavbar