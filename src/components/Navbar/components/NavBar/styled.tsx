import styled from 'styled-components'

export const NavbarContainer = styled.header`
    background: rgba(0, 0, 0, 0.45);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3em;
    position: fixed;
    top: 0;
    z-index: 10;
    @media (max-width:900px) {
        padding: 0;
    }
`

export const H1 = styled.h1`
    @media (max-width:900px) {
        display: none;
    }
    color: #FFF9F9;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    display: flex;
    cursor: default;
`