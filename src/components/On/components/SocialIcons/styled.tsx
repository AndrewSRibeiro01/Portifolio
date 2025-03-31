import styled from "styled-components";


export const DivIcons = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
        width: 100px;
        display: none;
    }
`

export const DivWhatsApp = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 900px) {
        width: 46px;
    }
`

export const DisplayIconWhats = styled.div`
    width: 100%;
    display: flex;
`

export const DivBackgroundWhats = styled.div`
    background: white;
    border-radius: 50%;
    padding: 4px;
    margin: 4px; 

`

export const DivStyleIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`