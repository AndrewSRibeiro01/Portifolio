import React from "react"
import styled, { css } from "styled-components"
import { TituloCurriculo } from "../../Estilizações/Emain"
import { SubTituloCurriculo } from "../../Estilizações/Emain"
import { Container } from "../../Estilizações/Emain"
import { H4 } from "../../Estilizações/Emain"
import LogoReact from "../../Imagens/react.png"
import javascript from "../../Imagens/javascript.png"
import Css from "../../Imagens/css.png"
import sass from "../../Imagens/sass.png"
import bootstrap from "../../Imagens/bootstrap.png"
import mongoDb from "../../Imagens/mongodb.png"
import python from "../../Imagens/python.png"
import r from "../../Imagens/r.png"
import java from "../../Imagens/java.png"
import machine from "../../Imagens/machine.png"
import deep from "../../Imagens/deep.png"
import cypress from "../../Imagens/cypress.png"
import robot from "../../Imagens/robot.png"
import postman from "../../Imagens/postman.png"



const ParagrafoContainer = []

const Paragraph = [{ img: LogoReact, title: 'React' },
{ img: javascript, title: ' JavaScript' },
{ img: Css, title: ' Css' },
{ img: sass, title: ' Sass' },
{ img: bootstrap, title: ' Bootstraap' },
{ img: mongoDb, title: ' MongoDb' },
{ img: python, title: ' Python' },
{ img: r, title: ' R' },
{ img: java, title: ' Java' },
{ img: machine, title: ' MachineLearning' },
{ img: deep, title: ' DeepLearning' },
{ img: cypress, title: ' Cypress' },
{ img: robot, title: ' RobotFramework' },
{ img: postman, title: ' Postman' },
]

const Card = styled.div`
    height: "60px" 
    width: "100px"
    `
const CardStyle = styled.div`
    text-align: center;
    border-radius: 15px;
    width: 230px;
    background-image: linear-gradient(to right, #fe5d26, #370d44);
`
const CardStyleJ = styled.div`
    text-align: center;
    border-radius: 15px;
    width: 230px;
    background-image: linear-gradient(to right, #fe5d26, #370d44);
`

const CardText = styled.p`
    text-align: initial;
`
const Display = styled.div`
    display:flex;
` 

function Main() {

    return (
        <TituloCurriculo>
            <h1>Curriculo</h1>
            <SubTituloCurriculo>Conhecimentos 🛠️ Habilidades </SubTituloCurriculo>
            <Display>


                {/* <Card>
                    {Paragraph.map((card) => (
                        <Card><img src={card.img} height="30px" width="40px"></img>{card.title}</Card>
                    ))}
                </Card> */}

                <CardStyle class="card">
                    <p>React</p>
                    <img src={LogoReact} widht="35px" class="card-img-top" alt="LogoReact" />
                    <div class="card-body">
                        <CardText class="card-text" >O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU).</CardText>
                    </div>
                </CardStyle> <p></p>
                
                <CardStyleJ>
                <p>javascript</p>
                    <img src={javascript} alt="LogoJavascript" width = "160px"/>
                    <div class="card-body">
                        <CardText class="card-text" >JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.</CardText>
                    </div>
                </CardStyleJ>

                </Display>
            
            <Container>
                {ParagrafoContainer.length > 0 && ParagrafoContainer.map((Paragrafo, index) => { return <Paragrafo key={index}>{Paragrafo}</Paragrafo> }
                )}<hr></hr>
            </Container>
            <SubTituloCurriculo>Experiência Profissional</SubTituloCurriculo>
            <H4>ArsenalCar |Digigrow</H4>
        </TituloCurriculo>
    )
}

export default Main