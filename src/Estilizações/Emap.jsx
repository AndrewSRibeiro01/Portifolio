import styled from "styled-components"

export const Div = styled.div`
    background: linear-gradient(to right, transparent, #535353);
    width: 100%;
    text-align: center;
    border-radius: 15px;
    display: flex;
    justify-content: center;
`
export const DivText = styled.div`
    margin-top: 15px;
    padding: 15px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`
export const DivName = styled.div`
    margin-bottom: 15px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`