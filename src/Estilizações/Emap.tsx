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