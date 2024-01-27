import styled from "styled-components"

export const TituloCurriculo = styled.section`
    color: var(--color);
    max-width:1920px;
    font-size: 18px;
    margin: 0 auto;
    cursor: default;
`
export const SubTituloCurriculo = styled.h3`
    cursor: default;
    @media (max-width: 768px){
    font-size: 10px;
    }
    text-align: center;
    font-size: 25px;
    color: var(--floral);
    margin: 20px;
`
export const Image = styled.img`
    width: 35px;
    margin: 6px;
@media (max-width: 768px) {
        width: 20px;
        margin: 6px;
    }
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
export const SubTitulo1 = styled.h2`
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
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
`
export const Titulo1 = styled.h2`
    @media (max-width: 450px) {
    font-size: 20px;
    }
    padding: 20px;
    margin: 0 0 5px 0;
    color: var(--color);
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
        padding-bottom: 20px;
    `
export const Imagem = styled.img`
     @media (min-width: 320px){
        height: 100px;
        margin: 10px;
        box-shadow: none;
    }
    @media (min-width: 768px){
        height: 200px;
    }
    @media (min-width: 1064px){
        height: 250px;
    }
    @media (min-width: 1448px){
        height: 300px;
    }
    /* border-radius: 60%; */
    border-radius: 160px;
`
export const CardBody = styled.div`
    border-bottom-right-radius:11px;
    border-bottom-left-radius:11px;
`
export const Div = styled.div`
    text-align: initial;
`
export const DivSobre = styled.div`
    display: flex;
    border-radius: 35px 35px 0px 0px;
    background: #292929;
    color: white;
    margin: 0 auto;
    height: 750px;
    margin-top: 150px;
    @media (max-width: 500px) {
        height: 650px;
    }
`
export const Background = styled.div`
@media (max-width: 768px) {
    height: 480px;
    padding: 10px;
}
@media (min-width: 769px) {
    height: 550px;
}
    display: flex;
    padding: 60px 60px 0 60px ;
    width: 1182px;
    height: 100%;
    margin: 0 auto;
`
export const DivBox = styled.div`
    margin: 0 auto;
    border: solid 1px rgba(255, 255, 255, 0.18);
    border-radius: 5px 5px;
    box-shadow: -20px -20px 30px #4a4a4a;
    @media (min-width: 320px){
        padding: 5px;
        width: 300px;
        height: 480px;
    }
    @media (min-width: 413px){
    padding: 10px;
    width: 385px;
    height: 480px;
    }
    @media (min-width: 769px){        
    width: 500px;
    height: 500px;
    padding: 25px;
    }
`
export const SubTitle = styled.h4`
    color: #dbdbdb;
    width: 1050px;
    margin: 0 auto;
    padding-top: 50px;
    line-height: 2;
    @media (min-width: 1000px ) {
        margin-bottom: 80px;
    }
    @media (min-width: 1500px ) {
        margin-bottom: 100px;
    }
    @media (min-width: 1800px ) {
        margin-bottom: 140px;
    }
    @media (min-width: 2000px ) {
        margin-bottom: 190px;
    }
    @media (max-width: 999px ) {
        margin-bottom: 40px;
        font-size: 15px;
        padding: 15px;
    }
    @media (max-width: 1024px ) {
        font-size: 17px;
        padding: 15px;
        text-align: center;
    }
`
export const Title = styled.h1`
    color: white;
    text-align: initial;
    padding: 15% 0 1%;
    width: 100%;
    @media (max-width: 900px) {
        margin-top: 50px;
    }
`
export const H2 = styled.h2`
    cursor: default;
    line-height: 7;
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.72px;
    font-size: 36px;
    @media (max-width: 900px) {
    line-height: 3;
    font-size: 20px;
    }  
`
export const H6 = styled.p`
    @media (max-width: 500px) {
        display: none;
    }
`
export const Espaço = styled.div`
    height: 50px;
`
export const DivContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-flow:  row;
    grid-gap: 1rem;
    margin: 0 auto;
    width: 100%;
    cursor: default;
    @media (max-width: 768px) {
        padding: 40px;
}
`
export const AppContainer = styled.div`
    width: 100vw;
`
export const Img = styled.img`
    width: 50px;
    margin: 20px;

    @media (max-width: 900px) {
        width: 30px;
    }
`
export const Hr = styled.hr`
    color: var(--color);
    width: 90%;
    margin: 0 auto;
    @media (min-width: 480px) {
    width: 1800px;
}
`
export const Paragrafo = styled.p`
    text-align: center;
    color: #E0E0E0;
    font-size: 20px;
    font-style: normal;
    font-Weight: 500;
    line-Height: normal;
    cursor: default;
    @media (max-width: 900px) {
        font-size: 15px;
    }
`

export const DivPortifolio = styled.div`
    display: flex;
    flex-Direction: column;
    background: #202020;
    width: 1920px;
    height: 1180px;
    @media (max-width: 900px) {
        height: 900px;
    }
`