import { Opcoes } from "../../Estilizações/EopcoesNavbar"
import { Link } from "react-router-dom";
import { Sobre } from "../../Estilizações/EopcoesNavbar";
import React from "react";
import styled from "styled-components"

const NavLink = styled(Link)`
  color: var(--menu);
  text-decoration: none;
  padding: 0 1rem;

  :hover{
    transition: 1.2s;
    color: var(--floral);
    
  }
  :focus{
    color: var(--floral);
  }

    @media (min-width: 1448px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
    @media (min-width: 2000px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
  @media (max-width: 400px) {
      padding: 9px;
    }
`

const OpcoesHeader = () => {
  return (
    <>
      <Opcoes>
        <Sobre>
          <NavLink to="/">SOBRE</NavLink></Sobre>
        <Sobre><NavLink to="main">COMPETÊNCIAS</NavLink></Sobre>
        <Sobre><NavLink to="/contato">CONTATO</NavLink></Sobre>
      </Opcoes>
    </>
  )
}

export default OpcoesHeader