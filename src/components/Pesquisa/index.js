import styled from "styled-components"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #520000  35%, #3ff0000 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const LogoImg = styled.img`
    border-radius: 50%
`

function Pesquisa() {
    return (
        <PesquisaContainer>
            <Titulo>Um pouco Sobre mim</Titulo>
            <SubTitulo>Me chamo Andrew, tenho 24 anos</SubTitulo>
            <LogoImg src="https://dummyimage.com/300x300/000/fff" />
        </PesquisaContainer>
    )
}

export default Pesquisa