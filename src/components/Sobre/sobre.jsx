import { Fragment } from "react"
import { FotoContainer } from "../../Estilizações/Esobre"
import { Titulo } from "../../Estilizações/Esobre"
import { SubTitulo } from "../../Estilizações/Esobre"
import { LogoImg } from "../../Estilizações/Esobre"
import { AppContainer } from "../../Estilizações/Esobre"
import imgTeste from "../../Imagens/ImagemTeste.png"

const Sobre = () => {
    return (
        <Fragment>
            <FotoContainer>
                <Titulo>Um pouco sobre mim!</Titulo>
            </FotoContainer>
            <SubTitulo>
                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.<br/> Moro em Santa Isabel SP, faço faculdade de Gestão da tecnologia da informação <br/> Estou sempre buscando por novos conhecimentos!
            </SubTitulo>
            <AppContainer>
                <LogoImg src={imgTeste} alt="imgTeste" />
            </AppContainer>
        </Fragment>

    )
}

export default Sobre