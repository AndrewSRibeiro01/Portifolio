import styled from "styled-components";

export const CardJD = styled.img`
    @media (max-width: 768px){
    width: 60px;
    margin: 0 2px 0 0;
    }
    border-radius: 130px;
    width: 140px;
`
export const CardText = styled.p`
    @media (max-width: 768px){
    font-size: 7px;
    margin: 0;
    }
    @media (max-width: 500px){
    font-size: 10px;
    margin: 0;
    }
    text-align: initial;
`
export const Display = styled.div`
    justify-content: center;
    display:flex;
    width:100%;
    max-width: 100%;
    margin: 0 auto;
    gap:5px;
    @media (max-width: 768px){
        margin: 0 auto;
        gap:5px;
        width:80%;
        flex-direction: row;
    }
`
export const Display1 = styled.div`
    justify-content: center;
    display:flex;
    width:100%;
    max-width: 100%;
    @media (max-width: 768px){
        margin: 0 auto;
        gap:5px;
        width:80%;
        flex-direction: row;
    }
`
export const Imagem = styled.img`
    @media (max-width: 768px){
    width: 80px;
    }
    width: 140px;
`
export const Paragrafo = styled.p`
    @media (max-width: 768px){
    font-size: 10px;
    }
`
export const H1 = styled.h1`
    @media (max-width: 768px){
    font-size: 15px;
    }
    color: var(--floral);
`
export const DisplayFLex = styled.div`
    @media (min-width: 500px ) {
        display: flex;
        flex-direction: row;
       width: 100%;
    }
    margin: 0% 0% 0% 25%;
    gap:2px;
    margin: auto;
    width: 70%;
`
export const DisplayFLex1 = styled.div`
    @media (min-width: 500px ) {
        display: flex;
        flex-direction: row;
       width: 50%;
    }
    margin: 0% 0% 0% 25%;
    gap:2px;
    margin: auto;
    width: 70%;
`