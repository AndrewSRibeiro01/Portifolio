import styled from "styled-components"

export const Div = styled.div`
    border-radius: 20px;
    border: 2px solid #3CAA5C;
    background: #202020;
    border-radius: 15px;
    width: 20rem;
    height: 416px;
    @media (max-width: 900px) {
        height: 100%;
    }
`
export const DivText = styled.div`
    display: flex;
    margin-top: 15px;
    align-content: center;
    padding: 15px;
    margin-bottom: 15px;
    @media (max-width:768px) {
        font-size: 15px;
    }
`
export const DivName = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 15px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`
export const DivMap = styled.div`
    display: flex;
    flex-Direction: column;
    width: 25%;
    margin-Bottom: 15px;
    align-Items: center;
    box-sizing: border-box;
    @media (max-width: 900px) {
        width: 45%;
    }
`
export const MainMap = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-Content: center;
    border-Radius: 20px;
    background: #252525;
    height: 200px;
    align-Items: center;
    @media (max-width: 900px) {
        height: 100px;
    }
`
export const PMap = styled.p`
    font-Size: 48px;
    font-Style: normal;
    font-Weight: 900;
    line-Height: normal;
    letter-Spacing: 0.96px;
    @media (max-width: 900px) {
        letter-Spacing: 0;
        font-size: 20px;
    }
`