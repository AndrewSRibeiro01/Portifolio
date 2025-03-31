import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const CardExperiencias = styled.div`
    border: 1px solid #34A853;
    border-radius: 20px;
    width: 1000px;
    height: 390px;
    background: #252826;
    margin-top: 50px;
    padding: 30px 40px 40px 40px;
    @media (max-width: 900px) {
        margin-top: 0;
        width: 100%;
        height: 100%;
    }
`

export const Logoempresa = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 900px) {
        width: 70%;
        text-align: center;
        align-items: center;
    }
`

export const H1Experiencia = styled.h1`
    font-size: 24px; 
    margin-bottom: 15px;
    @media (max-width: 900px) {
        font-size: 15px;
    }
`

export const Img = styled.img`
    width: 20%;
    height: 15%;
    mix-blend-mode: color;
`

export const Pexperiencia = styled.p`
    background: #2A5034;
    font-size: 16px;
    width: 17%;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
    margin-bottom: 50px;
    @media (max-width: 900px) {
        width: 70% ;
        font-size: 12px;
    }
`

export const PtextoExperiencia = styled.p`
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1.5px;
    @media (max-width: 900px) {
        font-size: 12px;
    }

`