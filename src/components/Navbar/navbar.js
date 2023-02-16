import Logo from '../logo/logo'
import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import IconesHeader from '../IconesNavbar/IconesNavbar'
import { NavbarContainer } from '../../Estilizações/Enavbar'

function Navbar() {
    return (
        <NavbarContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </NavbarContainer>
    )
}

export default Navbar