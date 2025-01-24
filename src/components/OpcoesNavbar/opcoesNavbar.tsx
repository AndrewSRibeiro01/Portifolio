import { Opcoes } from "../../Estilizações/EopcoesNavbar"
import { Sobre } from "../../Estilizações/EopcoesNavbar";
import styled from "styled-components"
import { HashLink } from "react-router-hash-link";

const HashLink1 = styled(HashLink)`
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
  @media (max-width: 900px) {
      padding: 10px;

    }
`
const HashLink2 = styled(HashLink)`
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
  @media (max-width: 900px) {
      display: none;
    }
`
const OpcoesHeader = () => {
  return (
    <>
      <Opcoes>
        <Sobre>
          <HashLink1 to="/#Home">Home</HashLink1>
          <HashLink1 to="/#Habilidades">Habilidades</HashLink1>
          <HashLink1 to="/#Portfolio">Projetos</HashLink1>
          <HashLink1 to="/#Experiências">Experiências</HashLink1>
          <HashLink2 to="/#Contato">Contato</HashLink2>
        </Sobre>
      </Opcoes >
    </>
  )
}

export default OpcoesHeader