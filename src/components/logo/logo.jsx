import bug from '../../Imagens/bug.png'
import { LogoContainer } from '../../Estilizações/Elogo'
import { LogoImage } from '../../Estilizações/Elogo'
import { Portifólio } from '../../Estilizações/Elogo'

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage src={bug} alt='logo'/>
            <Portifólio>Portfólio</Portifólio>
        </LogoContainer>
    )
}

export default Logo