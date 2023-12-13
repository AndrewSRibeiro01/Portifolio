import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import IconesHeader from '../IconesNavbar/IconesNavbar'
import { NavbarContainer, H1, H1Red } from '../../Estilizações/Enavbar'

const Navbar = () => {
    return (
        <NavbarContainer>
            <H1>Portifó</H1><H1Red style={{ color: "red" }}>lio</H1Red>
            <OpcoesHeader />
            <IconesHeader />
        </NavbarContainer >
    )
}

export default Navbar