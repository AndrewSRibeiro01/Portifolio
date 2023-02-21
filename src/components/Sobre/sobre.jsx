import { Fragment } from "react"
import { FotoContainer } from "../../Estilizações/Esobre"
import { Titulo } from "../../Estilizações/Esobre"
import { SubTitulo } from "../../Estilizações/Esobre"
import { LogoImg } from "../../Estilizações/Esobre"
import eu from "../../Imagens/eu1.png"
import { AppContainer } from "../../Estilizações/Esobre"

function Sobre() {
    return (
        <Fragment>
            <FotoContainer>
                <Titulo>Um pouco sobre mim!</Titulo>
            </FotoContainer>
            <SubTitulo>
                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance, moro em Santa Isabel SP
            </SubTitulo>
            <AppContainer>
                <LogoImg src={eu} />
            </AppContainer>
        </Fragment>

    )
}

export default Sobre