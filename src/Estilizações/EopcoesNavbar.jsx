import styled from 'styled-components'

export const Opcoes = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (max-width: 359px) {
    flex-direction: column;
  }
`
export const Opcao = styled.li`
  font-size: 16px;
  justify-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
  
  @media (max-width: 768px) {
    flex-direction: column;
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
  font-size: 15px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  margin: 1rem 5rem 0 0px;
`