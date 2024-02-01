/* eslint-disable jsx-a11y/alt-text */
import { Div, DivMap, DivName } from "../../Estilizações/Emap"

const Map = ({ nome, imagem, texto }) => {
    return (
        <DivMap>
            <Div>
                <DivName> {nome} </DivName>
                <div>
                    <img src={imagem} draggable="false" />
                    <br />
                </div>
            </Div >
            <div style={{ marginTop: "20px", fontWeight: 700, fontSize: "24px" }}> {texto} </div>
        </DivMap>
    )
}

export default Map