import { HashLink } from "react-router-hash-link"
import styled from "styled-components"


export const HashLink1 = styled(HashLink)`
  color: var(--menu);
  text-decoration: none;
  padding: 0 1rem;
  :hover{
    transition: 1.2s;
    color: var(--floral);
    
  }
  :focus{
    color: var(--floral);
  }

    @media (min-width: 1448px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
    @media (min-width: 2000px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
  @media (max-width: 900px) {
      padding: 10px;

    }
`

export const HashLink2 = styled(HashLink)`
  color: var(--menu);
  text-decoration: none;
  padding: 0 1rem;
  :hover{
    transition: 1.2s;
    color: var(--floral);
    
  }
  :focus{
    color: var(--floral);
  }

    @media (min-width: 1448px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
    @media (min-width: 2000px) {
      :hover{
        transition: 1.2s;
    color: var(--floral);
    }
  }
  @media (max-width: 900px) {
      display: none;
    }
`

export const Options = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
    @media (max-width: 900px) {
      flex-direction: column;
      padding: 0;
  }
`

export const On = styled.p`
  @media (max-width: 768px) {
   font-size: 14px;     
   padding: 0px;
}
  @media (min-width: 1448px) {
        font-size: 17px;
}
  @media (min-width: 2000px) {
        font-size: 23px;
}
  display: flex;
  justify-content: center;
  font-size: 15px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 0 0 0;
`