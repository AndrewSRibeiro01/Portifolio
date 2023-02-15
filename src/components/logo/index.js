import styled from 'styled-components'
import caderno from '../../imagens/Caderno.png'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    height: 50px;
    margin-top: 25px;
`
function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={caderno}
                alt='logo'
            />
            <p><strong>Portifólio</strong></p>
        </LogoContainer>
    )
}

export default Logo