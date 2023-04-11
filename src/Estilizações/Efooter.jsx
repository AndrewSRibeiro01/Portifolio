import styled from "styled-components"

export const AppContainer = styled.div`
    padding: 15px;
    width: 100%;
    color: #000; 
    display:flex;
    justify-content: center;
    background-color: #e1e1e1;
    margin-block: 160px 0px;
    @media (min-width: 1448px) {
        margin-block: 350px 0px;
    }
    @media (min-width: 2000px) {
        bottom: 0;
        position: fixed;
    }
    @media (min-width: 3000px) {
        bottom: 0;
        position: fixed;
    }


`
export const AppContainer1 = styled.div`
    padding: 15px;
    width: 100%;
    color: #000; 
    display:flex;
    justify-content: center;
    background-color: #e1e1e1;
    margin-block: 10px 0px;
`
export const FooterDiv = styled.div`
    min-width: 55px;
    max-width: 100%;
    background-color: #e1e1e1;
    display:flex;
    flex-direction: row;
    justify-content: center;
    color: #000;
    padding: 0px;
    width: 50%;
    text-align: center;
`
export const FooterDivColumn = styled.div`
    @media (max-width: 550px) {
        font-size: 10px
    }
    background-color: #e1e1e1;
    color: #000;
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
    display:flex;
    align-items: center;
    font-size: 20px;
    margin: 0;
`