import styled from 'styled-components'

export const Opcoes = styled.ul`
  display: flex;
  @media (max-width: 768px) {
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
  @media (max-width: 550px) {
   font-size: 14px;     
   padding: 0px;
  }
  font-size: 15px;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 0 0 0;
`

