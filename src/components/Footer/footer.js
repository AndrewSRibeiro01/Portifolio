import styled from "styled-components"
import linkedin from "../../Imagens/linkedin.png"
import instagram from "../../Imagens/insta.png"
import gitHub from "../../Imagens/gitHub.png"
import React from "react"

const AppContainer = styled.div`
    width: 100%;
    color #00009f; 
    display:flex;
    justify-content: center;
    background-color: #e1e1e1;
    
`
const FooterDiv = styled.div`
    background-color: #e1e1e1;
    display:flex;
    flex-direction: row;
    justify-content: center;
    color #00009f; 
    bottom:0px; 
    padding:20px;    
    width: 50%;
    text-align: center;
    
  
`
const FooterDiv_column = styled.div`
    background-color: #e1e1e1;  
    color #00009f;   
`
const LogoImage = styled.img`
    cursor: pointer;
    width: 40px;

`
const Siga = styled.h1`
    display:flex;
    align-items: center;
`


export function Footer() {
    return (
        <AppContainer style={{marginBlock: "400px 0px"}}>
            <Siga style={{ fontSize: "25px" }}>Me siga nas redes sociais!</Siga>
            <FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p><strong >Instagram</strong></p>
                        <LogoImage src={instagram} style={{ width: "35px" }} />
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>Linkedin</strong></p>
                        <LogoImage src={linkedin} />
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>GitHub</strong></p>
                        <LogoImage src={gitHub} />
                    </FooterDiv_column>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}

 export function Footer1() {
    return (
        <AppContainer>
            <Siga style={{ fontSize: "25px" }}>Me siga nas redes sociais!</Siga>
            <FooterDiv style={{marginBlock: "0px"}}>
                
                <FooterDiv>
                    <FooterDiv_column>
                        <p shref="www.instagram.com/andrew_srb"> <strong >Instagram</strong></p>
                        <LogoImage src={instagram} style={{ width: "35px" }} />
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>Linkedin</strong></p>
                        <LogoImage src={linkedin} />
                    </FooterDiv_column>
                </FooterDiv>
                <FooterDiv>
                    <FooterDiv_column>
                        <p ><strong>GitHub</strong></p>
                        <LogoImage src={gitHub} />
                    </FooterDiv_column>
                </FooterDiv>
            </FooterDiv>
        </AppContainer>
    )
}
export default Footer