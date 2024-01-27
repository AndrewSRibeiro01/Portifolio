import React from "react"
import { AppContainer1, MarginFooter } from "../../Estilizações/Efooter"
import { H1 } from "../../Estilizações/Enavbar";
import wpp from "../assets/img/whatsapp (1).png";
import linkedin from "../assets/img/LinkedIn.svg";
import gtHub from "../assets/img/Github.svg";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const P = styled.p`
    color: #E0E0E0;
    cursor: default;
`
const PCurriculo = styled.p`
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const BackgroundButton = styled.p`
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 200px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    padding: 5px;
    height: 40px;
`
const Hr = styled.hr`
color:#E0E0E0;
`
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
  @media (max-width: 400px) {
      padding: 9px;
    }
`
const DivFooterHome = styled.div`
    display: flex;
    flex-Direction: column;
    align-Items: center;
    margin: 0 auto;
    @media (max-width: 900px) {
        display: none;
    }
`

const Footer1 = () => {
    return (
        <>
            <AppContainer1 id="Contato">
                <H1 style={{ textAlign: "start" }}> <p style={{ color: "#3CAA5C", fontWeight: 900, paddingRight: "5px", marginLeft: "5rem" }}>&lt;</p> Andrew <p style={{ color: "#3CAA5C", fontWeight: 900, paddingLeft: "5px" }}>&gt;</p> </H1>
                <MarginFooter>
                    <H1>
                        CONTATO
                    </H1>
                    <P style={{ marginTop: "40px" }}>+55 (11) 99857-1371</P>
                    <P>Andrewsouza57@gmail.com</P>
                    <P>Guarulhos, São paulo - Brasil</P>
                    <Hr />
                    <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "26px", alignItems: "center" }}>
                        <div style={{ background: "white", borderRadius: "100%" }}>
                            <a href="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                <img style={{ width: "40px", padding: "10px" }} src={wpp} alt="whatsApp" />
                            </a>
                        </div>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                            <img style={{ width: "40px" }} src={linkedin} alt="Linkedin" draggable="false" />
                        </a>
                        <a href="https://github.com/AndrewSRibeiro01">
                            <img style={{ width: "40px" }} src={gtHub} alt="GitHub" draggable="false" />
                        </a>
                    </div>
                    <NavLink style={{ textDecoration: "none" }} to="https://www.canva.com/design/DAFgYqME4bM/da4m6shbiomnInZSBHciCQ/view?utm_content=DAFgYqME4bM&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                        <BackgroundButton>
                            <PCurriculo>Currículo</PCurriculo>
                        </BackgroundButton>
                    </NavLink>
                </MarginFooter>
                <DivFooterHome>
                    <H1>
                        HOME
                    </H1>
                    <P style={{ marginTop: "40px" }}><HashLink1 to="/#Home">Início</HashLink1></P>
                    <P><HashLink1 to="/#Habilidades">habilidades</HashLink1></P>
                    <P><HashLink1 to="/#Portifolio">Projetos</HashLink1></P>
                    <P><HashLink1 to="/#Contatos">Contatos</HashLink1></P>
                </DivFooterHome>
            </AppContainer1>
        </>
    )
}

export default Footer1;