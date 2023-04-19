import styled from "styled-components"

export const TituloCurriculo = styled.section`
    color: #fff;
    padding:30px;
    max-width:1225px;
    font-size: 18px;
    margin:  0 auto ;
`
export const SubTituloCurriculo = styled.h3`
    @media (max-width: 768px){
    font-size: 10px;
    }
    font-size: 25px;
    color: floralwhite;
`
export const SubtituloExperiencia = styled.h3`
    @media (max-width: 768px){
    font-size: 14px;
    }
    font-size: 25px;
    text-align: center;
`
export const H4 = styled.h4`
    @media (max-width: 768px){
    font-size: 10px;
    }
    text-align: center;
    font-size: 20px;
`
export const SubTitulo1 = styled.h3`
    @media (max-width: 450px) {
    padding: 0;
    font-size: 15px;
    margin: 0 auto;
    }
    @media (min-width: 451px) {
    padding: 0;
    font-size: 20px;
    margin: 0 auto;
    }
    @media (min-width: 1448px) {
    font-size: 23px;
    margin: 0 auto;
    }
    padding: 50px;
    text-align: center;
    font-size: 20px;
    color: #FFF;
    font-weight: 400;
    margin-bottom: 40px;
`
export const Titulo1 = styled.h2`
    @media (max-width: 450px) {
    font-size: 20px;
    }
    padding: 20px;
    margin: 0 0 5px 0;
    color: #FFF;
    font-size: 29px;
    text-align: center;
    width: 100%;
    border-top-right-radius:11px;
    border-top-left-radius:11px;
`
export const DisplayCard = styled.div`
    justify-content: center;
    display:flex;
    max-width: 100%;
`

export const CardStyle = styled.div`
   @media (max-width: 768px){
        width: 100%;
    }
    @media (min-width: 1448px){
    width:100%;
    }
    `
export const Card = styled.div`
        @media (max-width: 768px){
        flex-direction: column;
        }
        display:flex;
        flex-direction: row-reverse;
        padding: 0 20px 20px 20px ;
        align-items: center;
        text-align: initial;
        background: transparent;
        backdrop-filter: blur( 13.5px );
        -webkit-backdrop-filter: blur( 13.5px );
    `
export const Imagem = styled.img`
     @media (max-width: 450px){
        height: 100px;
    }
    @media (max-width: 768px){
        height: 220px;
    }
    @media (max-width: 1064px){
        height: 290px;
    }
        @media (max-width: 1448px){
        height: 390px;
    }
    height: 520px;  
    border-radius: 10px;
    margin: 20px;
    box-shadow: -30px -30px 30px #000000;
`
export const CardBody = styled.div`
    border-bottom-right-radius:11px;
    border-bottom-left-radius:11px;
`
export const Div = styled.div`
    text-align: center;
`
export const Background = styled.div`
    height: 550px;
    background: linear-gradient(180deg, #616161, #9a9a9a);
`
export const H5 = styled.h5`
    cursor: default;
    line-height: 7
`
export const Espaço = styled.div`
    height: 50px;
`
