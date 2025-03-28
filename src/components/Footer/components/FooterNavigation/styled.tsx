import { HashLink } from "react-router-hash-link"
import styled from "styled-components"

export const P = styled.p`
    color: #E0E0E0;
    cursor: default;
`

export const HashLinkStyled = styled(HashLink)`
  color: var(--menu);
  text-decoration: none;
  padding: 0 1rem;

  :hover {
    color: var(--floral);
    transition: 1.2s;
  }

  :focus {
    color: var(--floral);
  }
`

export const DivFooterHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    @media (max-width: 900px) {
        display: none;
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
    margin-bottom: 40px;
`