import { Opcoes } from "../../Estilizações/EopcoesNavbar"
import { Link } from "react-router-dom";
import { Sobre } from "../../Estilizações/EopcoesNavbar";
import styled from "styled-components"

const NavLink = styled(Link)`
  color: black !important;
  text-decoration: none;
  padding: 0 1rem;
  
  :hover{
    transition: 1s;
    font-size: 16px;
  }
    @media (min-width: 1448px) {
      :hover{
    transition: 1s;
    font-size: 18px;
    }
  }

    @media (min-width: 2000px) {
      :hover{
    transition: 1s;
    font-size: 25px;
    }
  }
`

const OpcoesHeader = () => {
  return (
    <Opcoes>
      <Sobre><NavLink to="/">SOBRE</NavLink></Sobre>
      <Sobre><NavLink to="/curriculo">CURRICULO</NavLink></Sobre>
      <Sobre><NavLink to="/contato">PROJETO</NavLink></Sobre>
    </Opcoes>
  )
}

export default OpcoesHeader