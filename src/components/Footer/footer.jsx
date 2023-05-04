import { linkedin, insta, gitHub } from "../assets"
import React from "react"
import { FooterDivColumn, LogoImage, FooterDiv, AppContainer1, LogoImage1, Siga } from "../../Estilizações/Efooter"

const Footer1 = () => {
    return (
        <AppContainer1>
            <Siga>Siga-me nas redes sociais!</Siga>
            <FooterDiv style={{ marginBlock: "0px" }}>

                <FooterDiv>
                    <FooterDivColumn>
                        <p><strong >Instagram</strong></p>
                        <a href="https://www.instagram.com/andrew_srb/"><LogoImage1 src={insta} /></a>
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
        </AppContainer1>
    )
}


export default Footer1;