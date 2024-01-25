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
   justify-content: center;
`

export const BackgroundDiv = styled.div`
    width: 100%;
    color: #cacaca;
`
export const DivMain = styled.div`
    width: 85%;
    margin: 0 auto;
    cursor: default;
`
export const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15rem;
    justify-content: center;
`
export const DivIcons = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const DivWhatsApp = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const DisplayIconWhats = styled.div`
    width: 100%;
    display: flex;
`
export const DivBackgroundWhats = styled.div`
    background: white;
    border-radius: 50%;
    padding: 4px;
    margin: 4px; 
`
export const DivStyleIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const DivSobreMim = styled.div`
    display: flex;
    width: 1062px;
`
export const DivHome = styled.div`
    margin-left: 60px;
    margin: 0 0 0 20px
`