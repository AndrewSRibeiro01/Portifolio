import styled from "styled-components"


export const DivIam = styled.div`
    display: flex;
    width: 1062px;
`

export const DivHome = styled.div`
    margin-left: 60px;
    margin: 0 0 0 20px;
    @media (max-width: 900px) {
        margin: 0;
        padding: 0;
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

export const Div = styled.div`
    text-align: initial;
`

export const Card = styled.div`
        @media (max-width: 768px){
        flex-direction: column;
        }
        padding-bottom: 20px;
`

export const SubTitle = styled.h2`
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

export const Iam = styled.p`
    width: 599px;
    height: 130px;
`

export const Gap = styled.div`
    height: 50px;
`

export const DivImg = styled.div`
    display: flex;
    align-Items: center;
    @media (max-width: 900px) {
        display: none;
    }
`

export const Image = styled.img`
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
    border-radius: 160px;
`