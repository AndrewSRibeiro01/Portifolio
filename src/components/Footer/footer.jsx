import linkedin from "../../Imagens/linkedin.png"
import instagram from "../../Imagens/insta.png"
import gitHub from "../../Imagens/gitHub.png"
import React from "react"
import { AppContainer, LogoImage1 } from "../../Estilizações/Efooter"
import { Siga } from "../../Estilizações/Efooter"
import { FooterDiv } from "../../Estilizações/Efooter"
import { LogoImage } from "../../Estilizações/Efooter"
import { FooterDivColumn } from "../../Estilizações/Efooter"

export const Footer = () => {
    return (
        <AppContainer>
            <Siga>Siga-me nas redes sociais!</Siga>
            <FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p><strong > Instagram </strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage1 src={instagram} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDivColumn>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export const Footer1 = () => {
    return (
        <AppContainer>
            <Siga>Siga-me nas redes sociais!</Siga>
            <FooterDiv style={{ marginBlock: "0px" }}>

                <FooterDiv>
                    <FooterDivColumn>
                        <p><strong >Instagram</strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage1 src={instagram} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p ><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDivColumn>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export const Footer2 = () => {
    return (
        <AppContainer style={{ bottom: "0px", position: "fixed" }}>
            <Siga>Siga-me nas redes sociais!</Siga>
            <FooterDiv>

                <FooterDiv>
                    <FooterDivColumn>
                        <p><strong >Instagram</strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage1 src={instagram} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p ><strong>Linkedin</strong></p>
                        <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/"><LogoImage src={linkedin} /></a>
                    </FooterDivColumn>
                </FooterDiv>
                <FooterDiv>
                    <FooterDivColumn>
                        <p ><strong>GitHub</strong></p>
                        <a href="https://github.com/AndrewSRibeiro01"><LogoImage src={gitHub} /></a>
                    </FooterDivColumn>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
alert("Não repare na foto, irei colocar uma minha")
export default Footer