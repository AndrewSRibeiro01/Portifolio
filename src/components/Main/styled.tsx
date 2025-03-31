import styled from "styled-components"
import { MdLanguage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";


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

export const ButtonCurriculo = styled.div`
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

export const Div = styled.div`
    background: #202020;
    position: relative;
    width: 521px;
    height: 294px;
    box-shadow: 11px 10px 0px 0px #D9D9D9;
    @media (max-width: 900px) {
        height: 200px;
        width: 90%;
    }
`

export const DivName = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width:768px) {
        font-size: 10px;
    }
`

export const DivMap = styled.div`
    display: flex;
    flex-Direction: column;
    width: 45%;
    margin-Bottom: 15px;
    align-Items: center;
    box-sizing: border-box;
    @media (max-width: 900px) {
        width: 45%;
        height: 46%;
    }
`