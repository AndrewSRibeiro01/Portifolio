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
    border-radius: 15px;
`
export const Div = styled.div`
    width: 100%;
    height: 250px;
    color: white;
`
export const DivProjeto = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    text-align: center;
    @media (max-width: 768px) {
    width: 95%;        
    }
`
export const Hr = styled.hr`
    backdrop-filter: blur( 13.5px );
    opacity: 0.1;
    color: white;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    width: 50%;
    margin: 0 auto;
    margin-top: 25px;
    @media (max-width: 768px) {
        width: 95%;
    }
`
export const ButtonContato = styled.button`
    color: Floralwhite;
    background: transparent;
    border-color: rgba( 255, 255, 255, 0.18);
    width: 200px;
    height: 48px;
    border-radius: 15px;
    font-weight: bold;
    font-size: 1.25rem;
    margin-top: 20px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
    width: 150px;
    height: 35px;
    font-size: 15px;
    }
`