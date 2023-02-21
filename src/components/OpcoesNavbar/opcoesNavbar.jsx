import { Opcoes } from "../../Estilizações/EopcoesNavbar"
import { Link } from "react-router-dom";
import { Sobre } from "../../Estilizações/EopcoesNavbar";
import styled from "styled-components"

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0 1rem;
  :hover{
    color: #00009f;
    transition: 1s;
    font-size: 16px;
  }
`
const OpcoesHeader = () => {
  return (
    <Opcoes>
      <Sobre><NavLink to="/">SOBRE</NavLink></Sobre>
      <Sobre><NavLink to="/curriculo">CURRICULO</NavLink></Sobre>
      <Sobre><NavLink to="/contato">CONTATO</NavLink></Sobre>
    </Opcoes>
  )
}

export default OpcoesHeader