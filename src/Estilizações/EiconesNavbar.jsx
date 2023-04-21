import styled from 'styled-components'

export const Icones = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center
  }
  padding: 0 0 0 20px;
`
export const Icone = styled.li`
  margin-right: 40px;
  width: 40px;
  @media (max-width: 768px) {
    padding-top: 15px;
  }
`