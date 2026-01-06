import styled from "styled-components"


export const NamePort = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`

export const H1Port = styled.h1`
    margin-bottom: 70px;
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.72px;
    text-align: center;
    padding-top: 100px;
`

export const TitleCurriculum = styled.section`
    color: var(--color);
    max-width:1920px;
    font-size: 18px;
    margin: 0 auto;
    cursor: default;
`

export const DivPort = styled.div`
    display: flex;
    flex-Direction: column;
    background: #202020;
    width: 1920px;
    height: 800px;
    @media (max-width: 900px) {
        height: 650px;
    }
`