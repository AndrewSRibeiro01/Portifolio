import linkedin from "../../Imagens/linkedin.png"
import instagram from "../../Imagens/insta.png"
import gitHub from "../../Imagens/gitHub.png"
import React from "react"
import { AppContainer } from "../../Estilizações/Efooter"
import { Siga } from "../../Estilizações/Efooter"
import { FooterDiv } from "../../Estilizações/Efooter"
import { LogoImage } from "../../Estilizações/Efooter"
import { FooterDiv_column } from "../../Estilizações/Efooter"

export const Footer = () => {
    return (
        <AppContainer>
            <Siga>Me siga nas redes sociais!</Siga>
            <FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p><strong > Instagram </strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage src={instagram} style={{ width: "35px" }} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDiv_column>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export const Footer1 = () => {
    return (
        <AppContainer>
            <Siga>Me siga nas redes sociais!</Siga>
            <FooterDiv style={{ marginBlock: "0px" }}>

                <FooterDiv>
                    <FooterDiv_column>
                        <p><strong >Instagram</strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage src={instagram} style={{ width: "35px" }} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDiv_column>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export const Footer2 = () => {
    return (
        <AppContainer style={{ bottom: "0px", position: "fixed" }}>
            <Siga>Me siga nas redes sociais!</Siga>
            <FooterDiv>

                <FooterDiv>
                    <FooterDiv_column>
                        <p><strong >Instagram</strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage src={instagram} style={{ width: "35px" }} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDiv_column>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export default Footer