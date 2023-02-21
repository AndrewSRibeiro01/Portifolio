import bug from '../../Imagens/bug.png'
import { LogoContainer } from '../../Estilizações/Elogo'
import { LogoImage } from '../../Estilizações/Elogo'

const Logo = () => {
    return (
        <LogoContainer>
            <LogoImage
                src={bug}
                alt='logo'
            />
            <p><strong style={{color:"#00009f"}}>Portifólio</strong></p>
        </LogoContainer>
    )
}

export default Logo