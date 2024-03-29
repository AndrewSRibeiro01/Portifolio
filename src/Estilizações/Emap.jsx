import styled from "styled-components"

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
export const DivFlex = styled.div`
    align-items: center;
    flex-direction: row;
    display: flex;


`