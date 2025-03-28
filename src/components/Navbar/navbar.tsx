import OpcoesHeader from '../OpcoesNavbar/opcoesNavbar'
import * as S from '../../Estilizações/Enavbar'
import Andrew from '../assets/img/Andrew.svg'

const Navbar = () => {
    return (
        <S.NavbarContainer>
            <S.H1>
                <img src={Andrew} alt='imagem Andrew' draggable="false" />
            </S.H1>
            <OpcoesHeader />
        </S.NavbarContainer >
    )
}

export default Navbar