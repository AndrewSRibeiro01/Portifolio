import styled from "styled-components"

export const H1 = styled.h1`
    @media (max-width:900px) {
        display: none;
    }
    margin-bottom: 40px;
    line-height: normal;
    font-style: normal;
    color: #FFF9F9;
    font-weight: 800;
    font-size: 36px;
    cursor: default;
    display: flex;
`

export const AppContainer1 = styled.div`
    display: flex;
    max-width: 1920px;
    padding: 60px;
    margin: 0 auto;
    height: 360px;
    background-color: var(--bgcolor);
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
    }
`

export const MarginFooter = styled.div`
    margin: 0px 6rem;
    @media (max-width: 900px) {
        margin: 0 auto;
        text-align: center;
    }
`