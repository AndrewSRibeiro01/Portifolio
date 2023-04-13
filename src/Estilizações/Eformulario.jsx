import styled from "styled-components"

export const DivForm = styled.div`
    text-align: center;
`
export const A = styled.a`
    text-decoration: none;
    display: grid;
    justify-content: center;
`
export const Img = styled.img`
    width: 40px;
    display: grid;
`
export const P = styled.p`
    font-size: 17px;
`
export const Margin = styled.div`
    @media (min-width: 1440px) {
        margin-top: 100px;
    }
    @media (max-width: 1439px) {
        margin-top: 30px;
    }
    @media (max-width: 440px) {
        margin-top: 0;
    }
    @media (min-width: 2000px) {
        margin-top: 400px;
    }
`
export const Imagem = styled.img`
    width: 500px; 
    height: 240px;
    border-radius: 15px;
    @media (min-width: 1440px) {
        width: 700px;
        height: 300px;
    }
    @media (min-width: 2000px) {
        width: 1150px;
        height: 550px;
    }
    @media (max-width: 440px) {
        width: 310px;
        height: 160px;
    }
`
export const Div = styled.div`
    width: 100%;
    height: 250px;
    color: white;
`
export const FundoEspelho = styled.div`
    background: transparent;
    backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 15px;
    padding: 40px;
    box-shadow: 15px 15px 15px #000;
    @media (max-width: 1024px) {
        width: 95%;
    }
`
export const Hr = styled.hr`
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`