import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import { NavbarContainer, H1 } from '../../Estilizações/Enavbar'

const Navbar = () => {
    return (
        <NavbarContainer>
            <H1> <p style={{ color: "#DF0000", fontWeight: 900, paddingRight: "5px" }}>&lt;</p> Andrew <p style={{ color: "#DF0000", fontWeight: 900, paddingLeft: "5px" }}>&gt;</p> </H1>
            <OpcoesHeader />
        </NavbarContainer >
    )
}

export default Navbar