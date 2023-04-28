import { Imagem } from "../../Estilizações/CardStyle"
import styled from "styled-components"

const Div = styled.div`
    background: linear-gradient(to right, transparent, #535353);
    width: 100%;
    text-align: center;
    border-radius: 15px;
    display: flex;
    justify-content: center;
`
const DivText = styled.div`
    margin-top: 15px;
    padding: 15px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`
const DivName = styled.div`
    margin-bottom: 15px;
    @media (max-width:768px) {
        font-size: 10px;
    }
`
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