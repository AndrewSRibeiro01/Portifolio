import { FotoContainer } from "../../Estilizações/Esobre"
import { Titulo } from "../../Estilizações/Esobre"
import { SubTitulo } from "../../Estilizações/Esobre"
import { LogoImg } from "../../Estilizações/Esobre"

function Sobre() {
    return (
        <FotoContainer>
            <Titulo>Um pouco Sobre mim!</Titulo>
            <SubTitulo>Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance, moro em Santa Isabel SP</SubTitulo>
            <LogoImg src="https://dummyimage.com/300x300/000/fff" />
        </FotoContainer>
    )
}

export default Sobre