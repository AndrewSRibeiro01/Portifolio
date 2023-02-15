import styled from 'styled-components'
import react from '../../imagens/react.png'

const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const icones = [react]

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone><img src={icone} height="40px"></img></Icone>
      ))}
    </Icones>
  )
}

export default IconesHeader