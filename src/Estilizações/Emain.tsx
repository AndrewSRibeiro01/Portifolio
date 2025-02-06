import styled from "styled-components"
import { MdLanguage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export const TituloCurriculo = styled.section`
    color: var(--color);
    max-width:1920px;
    font-size: 18px;
    margin: 0 auto;
    cursor: default;
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
export const Espaço = styled.div`
    height: 50px;
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
    height: 1418px;
    @media (max-width: 900px) {
        height: 1450px;
    }
`
export const FaCodeStyle = styled(FaCode)`
    color: black;
    font-weight: 700;
    font-size: 20px;
`
export const MdLanguageStyle = styled(MdLanguage)`
    color: black;
    font-weight: 700;
    font-size: 30px;
`
export const HashLinkStyle = styled(HashLink)`
      text-decoration: none;
      color: white;
      :hover{
        color: white;
      }
`
export const DivImg = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
        height: 100%;
        background-size: cover;
        >p{
            display: none;
        }
        >div{
                display: none;
                height: 100%;
                background-color: #02020280;
            }
        :hover{
            background-color: #020202;
            >div{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 15px;
                background-color: #02020280;
            }
    }
`
export const P = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
`
export const DivFlex = styled.div`
    display: flex;
`
export const DivFlexColumn = styled.div`
    display: flex;
    margin: 20px;
    flex-direction: column;
    align-items: center;
`
export const BotaoCurriculo = styled.div`
    background: white;
    width: 36px;
    height: 36px;
    border-radius: 25px;
    align-items: center;
    display: flex;
    justify-content: center;
`
export const CardsPortfolio = styled.div`
    display: flex;
    margin: 20px;
    flex-direction: column;
    align-items: center;
`
export const CorIconeCode = styled.div`
    background: white;
    width: 36px;
    height: 36px;
    border-radius: 25px;
    align-items: center;
    display: flex;
    justify-content: center;
`
export const DivMarginTop = styled.div`
    margin-top: 20px;
    font-weight: 700;
    font-size: 24px;
`