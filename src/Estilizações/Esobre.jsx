import styled from "styled-components"

export const FotoContainer = styled.section` 
    position:relative;
    padding: 85px 0;
    height: 170px;
    width: 100%;
`
export const Titulo = styled.h2`
    @media (max-width: 450px) {
    font-size: 25px;
    }
    color: var(--color);
    font-size: 36px;
    text-align: center;
    width: 100%;
`
export const SubTitulo = styled.h3`
    @media (max-width: 450px) {
    font-size: 14px;
    }
    font-size: 16px;
     text-align: center;
     color: var(--color);
    font-weight: 500;
    margin-bottom: 40px;
`
export const LogoImg = styled.img`
    width: 260px;
    border-radius: 125px;
`
export const AppContainer = styled.div`
    @media (max-width: 550px) {
        margin: 0 0 90px 0px;
    }
   display:flex;
   justify-content: center
`

