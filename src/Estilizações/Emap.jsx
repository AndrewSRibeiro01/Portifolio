import styled from "styled-components"

export const Div = styled.div`
    border-radius: 20px;
    border: 2px solid rgba(223, 0, 0, 0.46);
    background: #202020;
    border-radius: 15px;
    width: 100%;
    height: 416px;
`
export const DivText = styled.div`
    display: flex;
    margin-top: 15px;
    align-content: center;
    padding: 15px;
    margin-bottom: 15px;
    @media (max-width:768px) {
        font-size: 10px;
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