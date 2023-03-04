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
    font-size: 15px;
    margin: 0 auto;
    }
    text-align: inherit;
    font-size: 16px;
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
export const Margin = styled.div`
    margin-top: 100px;
`
export const CardStyle = styled.div`
    @media (max-width: 768px){
    margin: 0 7px 0 7px;
    width:420px;
    }
    text-align: inherit;
    margin: 0 15px 0 0;
    border-radius: 15px;
    width: 680px;
    margin: 30px;
    background: linear-gradient(to right,#fe5d26,#370d44)
`
export const Imagem = styled.img`
    @media (max-width: 768px){
        height: 220px;
    }
    height: 320px;  
    border-radius: 10px;
    margin: 20px;
`
export const Card = styled.div`
    @media (max-width: 768px){
    flex-direction: column;
    }
    display:flex;
    padding: 0 20px 20px 20px ;
    align-items: center;
    background: linear-gradient(to right,#fe5d26,#370d44);
    text-align: initial;
`
export const CardBody = styled.div`
    border-bottom-right-radius:11px;
    border-bottom-left-radius:11px;
`
export const Div = styled.div`
    text-align: center;
`