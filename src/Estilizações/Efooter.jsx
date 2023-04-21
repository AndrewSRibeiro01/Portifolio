import styled from "styled-components"

export const AppContainer = styled.div`
    padding: 15px;
    width: 100%;
    color: #898989; 
    display:flex;
    justify-content: center;
    background-color: #4b4b4b;
    @media (min-width: 1448px) {
        margin-block: 50px 0px;
    }
    @media (min-width: 2000px) {
        margin-top: 0px;
        bottom: 0;
    }
    @media (min-width: 3000px) {
        bottom: 0;
    }
`
export const AppContainer2 = styled.div`
    padding: 15px;
    width: 100%;
    color: #898989; 
    display:flex;
    justify-content: center;
    background-color: #4b4b4b;
    @media (min-width: 1448px) {
        margin-block: 350px 0px;
    }
    @media (min-width: 2000px) {
        margin-top: 2000;
        bottom: 0;
    }
    @media (min-width: 3000px) {
        bottom: 0;
    }
`
export const AppContainer1 = styled.div`
    padding: 15px;
    width: 100%;
    display:flex;
    justify-content: center;
    background-color: #4b4b4b;
    margin-block: 10px 0px;
`
export const FooterDiv = styled.div`
    min-width: 55px;
    max-width: 100%;
    background-color: #4b4b4b;
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    width: 50%;
    text-align: center;
`
export const FooterDivColumn = styled.div`
    @media (max-width: 550px) {
        font-size: 10px
    }
    background-color: #4b4b4b;
    color:#898989;
;
`
export const LogoImage = styled.img`
    @media (max-width: 450px) {
        width: 30px;
    }
    cursor: pointer;
    width: 40px;
`
export const LogoImage1 = styled.img`
    @media (max-width: 450px) {
    width: 25px;
    }
    cursor: pointer;
    width: 35px;
`
export const Siga = styled.h1`
    @media (max-width: 450px) {
        font-size: 14px
    }
    color: #898989;
    display:flex;
    align-items: center;
    font-size: 20px;
    margin: 0;
`