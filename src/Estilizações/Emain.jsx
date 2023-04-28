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
    text-align: center;
    font-size: 25px;
    color: floralwhite;
    margin: 0;
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
     @media (min-width: 320px){
        height: 300px;
    }
    @media (min-width: 768px){
        height: 320px;
    }
    @media (min-width: 1064px){
        height: 350px;
    }
    @media (min-width: 1448px){
        height: 390px;
    }
    height: 390px;
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
export const DivSobre = styled.div`
    display: flex;
    justify-content: space-between
`
export const Background = styled.div`
@media (max-width: 768px) {
    height: 480px;
}
@media (min-width: 769px) {
    height: 550px;

}
    background: linear-gradient(180deg, #616161, #9a9a9a);
`
export const DivBox = styled.div`
    background: transparent;
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
    }
`
export const Title = styled.h2`
    text-align: center;
     padding-top: 15px 
`
export const H5 = styled.h5`
@media (min-width: 414px) {
    line-height: 7;
    font-size: 16px;
}
@media (max-width: 413px) {
    line-height: 7;
    font-size: 13px;
}
    cursor: default;
    line-height: 7;
`
export const H6 = styled.h6`
    @media (min-width: 320px) {
    font-size: 13px;
}
    @media (min-width: 413px) {
    font-size: 16px;
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
    @media (max-width: 768px) {
        padding: 40px;
    }
`
