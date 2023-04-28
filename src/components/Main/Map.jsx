import { Imagem } from "../../Estilizações/CardStyle"
import { Div, DivName, DivText } from "../../Estilizações/Emap"
const Map = ({ nome, imagem, texto }) => {
    return (
        <Div>
            <div>
                <DivName> {nome} </DivName>
                <Imagem src={imagem} alt="LogoReact" />
                <DivText>
                    <div> {texto} </div>
                </DivText>
                <br />
            </div >
        </Div>
    )
}

export default Map