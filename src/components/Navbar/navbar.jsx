import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import { NavbarContainer, H1 } from '../../Estilizações/Enavbar'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import styled from 'styled-components';

const StyledIconLeft = styled(ChevronLeftOutlinedIcon)`
    color: #DF0000;
`
const StyledIconRigth = styled(ChevronRightOutlinedIcon)`
    color: #DF0000;
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <H1> <p style={{ color: "#DF0000", fontWeight: 900, paddingRight: "5px" }}>&lt;</p> Andrew <p style={{ color: "#DF0000", fontWeight: 900, paddingLeft: "5px" }}>&gt;</p> </H1>
            <OpcoesHeader />
        </NavbarContainer >
    )
}

export default Navbar