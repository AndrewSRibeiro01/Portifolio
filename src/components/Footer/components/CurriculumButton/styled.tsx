import { HashLink } from "react-router-hash-link"
import styled from "styled-components"

export const PCurriculo = styled.p`
    color: #000;
    font-size: 20px;
    font-weight: 700;
`

export const BackgroundButton = styled.p`
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 200px;
    border-radius: 20px;
    background: #FFF;
    padding: 5px;
    height: 40px;
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