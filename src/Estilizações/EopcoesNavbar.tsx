import styled from 'styled-components'

export const Opcoes = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
    @media (max-width: 900px) {
      flex-direction: column;
      padding: 0;
  }
`
export const Sobre = styled.p`
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