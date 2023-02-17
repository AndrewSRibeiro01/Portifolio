import React from "react"
import { TituloCurriculo } from "../../Estilizações/Emain"
import { SubTituloCurriculo } from "../../Estilizações/Emain"
import { Container } from "../../Estilizações/Emain"
import { H4 } from "../../Estilizações/Emain"

const ParagrafoContainer = ['React', 'Javascript', 'Css', 'Sass', 'Bootstrap', 'MongoDB', 'Python', 'R', 'Java', 'MachineLearning', 'DeepLearning', 'Cypress', 'RobotFramework', 'Postman']

function Main() {

    return (
        <TituloCurriculo>
            <h1>Curriculo</h1>
            <SubTituloCurriculo>Conhecimentos 🛠️ Habilidades
  
                

            </SubTituloCurriculo>
            <Container>
                {ParagrafoContainer.length > 0 && ParagrafoContainer.map((Paragrafo, index) => { return <Paragrafo key={index}>{Paragrafo}</Paragrafo> }
                )}
            </Container>
            <SubTituloCurriculo>Experiência Profissional</SubTituloCurriculo>
            <H4>ArsenalCar |Digigrow </H4>
        </TituloCurriculo>
    )
}

export default Main