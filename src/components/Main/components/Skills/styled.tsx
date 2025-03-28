import styled from "styled-components";

export const Experience = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
        height: 1500px;
        margin: 0;
        justify-content: flex-start;
    }
`

export const H1style = styled.h1`
    color: #FFF9F9;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: flex;
    cursor: default; 
    @media (max-width: 900px) {
        margin-top: 50px;
    }
`

export const Padding = styled.div`
    padding: 20px;
`