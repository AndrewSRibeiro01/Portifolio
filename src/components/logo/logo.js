import caderno from '../../Imagens/Caderno.png'
import { LogoContainer } from '../../Estilizações/Elogo'
import { LogoImage } from '../../Estilizações/Elogo'

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