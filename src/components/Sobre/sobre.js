import { Fragment } from "react"
import styled from "styled-components"
import { FotoContainer } from "../../Estilizações/Esobre"
import { Titulo } from "../../Estilizações/Esobre"
import { SubTitulo } from "../../Estilizações/Esobre"
import { LogoImg } from "../../Estilizações/Esobre"



const AppContainer = styled.div`
   display:flex;
   justify-content: center
`
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
                <LogoImg src="https://dummyimage.com/300x300/000/fff" />
            </AppContainer>

        </Fragment>

    )
}

export default Sobre