import styled from "styled-components"

export const AppContainer1 = styled.div`
    display: flex;
    max-width: 1920px;
    padding: 60px;
    margin: 0 auto;
    height: 453px;
    background-color: var(--bgcolor);
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
`
export const FooterDiv = styled.div`
    min-width: 55px;
    max-width: 100%;
    background-color: var(--bgcolor);
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
    background-color: var(--bgcolor);
    color: var(--menu);
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
    color: var(--menu);
    display:flex;
    align-items: center;
    font-size: 20px;
    margin: 0;
`
export const MarginFooter = styled.div`
    margin: 0px 6rem;
    @media (max-width: 900px) {
        margin: 0 auto;
        text-align: center;
    }
`