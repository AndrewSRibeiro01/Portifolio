import styled from 'styled-components'

export const NavbarContainer = styled.header`
    background-color: #181818;
    display: flex;
    width:100%;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3em;
    position: fixed;
    top: 0;
    z-index: 1;
`
export const H1 = styled.h1`
    @media (max-width:500px) {
        display: none;
    }
    color: white;
`
export const H1Red = styled.h1`
    @media (max-width:500px) {
        display: none;
    }
    color: red;
`