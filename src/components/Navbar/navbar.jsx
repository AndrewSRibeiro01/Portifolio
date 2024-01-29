/* eslint-disable jsx-a11y/alt-text */
import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import { NavbarContainer, H1 } from '../../Estilizações/Enavbar'
import Andrew from '../assets/img/_ Andrew _ (1).svg'

const Navbar = () => {
    return (
        <NavbarContainer>
            <H1>
                <img src={Andrew} draggable="false" />
            </H1>
            <OpcoesHeader />
        </NavbarContainer >
    )
}

export default Navbar