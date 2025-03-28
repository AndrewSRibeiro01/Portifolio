import * as S from './styled'
import Andrew from '../../../assets/img/Andrew.svg'
import OptionsHeader from '../../../OptionsNavbar/components/OptionsNavBar'

const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.H1>
                <img src={Andrew} alt='imagem Andrew' draggable="false" />
            </S.H1>
            <OptionsHeader />
        </S.NavbarContainer >
    )
}

export default Navbar