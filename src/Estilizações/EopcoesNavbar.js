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
