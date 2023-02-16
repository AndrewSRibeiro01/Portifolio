import { Opcoes } from "../../Estilizações/EopcoesNavbar"
import { Link } from "react-router-dom";
import styled from "styled-components"

const Sobre = styled.p`
  font-size: 15px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;

`


export const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0 1rem;
  :hover{
    color: #cb0000;
    transition: 1s;
    font-size: 16px;
  }
`
function OpcoesHeader() {
  return (
    <Opcoes>
      <Sobre><NavLink to="/">SOBRE</NavLink></Sobre>
      <Sobre><NavLink to="/curriculo">CURRICULO</NavLink></Sobre>
      <Sobre><NavLink to="/contato">CONTATO</NavLink></Sobre>
    </Opcoes>
  )
}

export default OpcoesHeader