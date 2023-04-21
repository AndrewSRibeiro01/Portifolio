import React, { useEffect } from "react"
import { TituloCurriculo, SubTituloCurriculo } from "../../Estilizações/Emain"
import LogoReact from "../../Imagens/react.png"
import javascript from "../../Imagens/javascript.png"
import Css from "../../Imagens/css.png"
import sass from "../../Imagens/sass.png"
import bootstrap from "../../Imagens/bootstrap.png"
import mongoDb from "../../Imagens/mongodb.png"
import python from "../../Imagens/python.png"
import r from "../../Imagens/r.png"
import java from "../../Imagens/java.png"
import cypress from "../../Imagens/cypress.png"
import robot from "../../Imagens/robot.png"
import postman from "../../Imagens/postman.png"
import { CardStyle, Imagem, Paragrafo, DisplayFLex } from "../../Estilizações/CardStyle"
import { Display, CardText } from "../../Estilizações/CardStyle"
import ferramenta from "../../Imagens/ferramenta.png"
import curriculo from "../../Imagens/curriculo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <TituloCurriculo>
            <div data-aos="fade-up">
                <img src={curriculo} alt="curriculo" />
            </div>

            <div data-aos="fade-up" style={{ marginTop: "80px" }}>
                <SubTituloCurriculo>
                    Conhecimentos
                    <img style={{
                        width: "35px",
                        margin: "6px"
                    }}
                        src={ferramenta} alt="ferramenta"
                    />
                    Habilidades
                </SubTituloCurriculo>
            </div>
            <div data-aos="fade-up">
                <DisplayFLex>

                    <Display>
                        <CardStyle>
                            <Paragrafo>React</Paragrafo>
                            <Imagem draggable="false" src={LogoReact} class="card-img-top" alt="LogoReact" />
                            <div cclassNamelass="card-body">
                                <CardText className="card-text" >O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU).</CardText> <br></br>
                            </div>
                        </CardStyle>

                    </Display>
                    <br />
                    <Display>

                        <CardStyle>
                            <Paragrafo>javascript</Paragrafo>
                            <Imagem draggable="false" src={javascript} alt="LogoJavascript" />
                            <div className="card-body">
                                <CardText className="card-text" >JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.</CardText>
                            </div>
                        </CardStyle>

                    </Display>

                    <br />
                    <Display>

                        <CardStyle>
                            <Paragrafo>Css</Paragrafo>
                            <Imagem draggable="false" src={Css} alt="LogoCss" />
                            <div className="card-body">
                                <CardText className="card-text" >CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML</CardText>
                            </div>
                        </CardStyle>

                    </Display>
                    <br />

                    <Display>

                        <CardStyle>
                            <Paragrafo>Sass</Paragrafo>
                            <Imagem draggable="false" src={sass} alt="LogoSass" width="150px" style={{ marginTop: "25px" }} />
                            <div className="card-body">
                                <CardText className="card-text" style={{ marginTop: "20px" }}>O SASS significa (Syntactically Awesome Style Sheets), folhas de estilo com uma sintaxe incrível. Sua ideia é adicionar recursos especiais como variáveis, mixins, funções, operações e outras opções variadas </CardText>
                            </div>
                        </CardStyle>

                    </Display>

                </DisplayFLex>
                <br />
            </div>

            <div data-aos="fade-up">
                <DisplayFLex>
                    <Display>

                        <CardStyle>
                            <Paragrafo>Bootstraap</Paragrafo>
                            <Imagem draggable="false" src={bootstrap} alt="LogoBootstrap" width="150px" />
                            <div class="card-body">
                                <CardText class="card-text" >Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.</CardText>
                            </div>
                        </CardStyle>

                    </Display>
                    <br />
                    <Display>

                        <CardStyle>
                            <Paragrafo>Python</Paragrafo>
                            <Imagem draggable="false" src={python} alt="LogoPython" />
                            <div className="card-body">
                                <CardText class="card-text" >O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML)</CardText>
                            </div>
                        </CardStyle>
                    </Display>
                    <br />

                    <Display>

                        <CardStyle class="card">
                            <Paragrafo>R</Paragrafo>
                            <Imagem draggable="false" src={r} alt="LogoR" />
                            <div class="card-body">
                                <CardText class="card-text" style={{ margin: "20px 0 0 0" }}>R é uma linguagem de programação estatística e gráfica que vem se especializando na manipulação, análise e visualização de dados, sendo atualmente considerada uma das melhores ferramentas para essa finalidade</CardText>
                            </div>
                        </CardStyle >

                    </Display>
                    <br />

                    <Display>

                        <CardStyle class="card">
                            <Paragrafo>Java</Paragrafo>
                            <Imagem draggable="false" src={java} alt="LogoJava" width="150px" />
                            <div class="card-body">
                                <CardText class="card-text" style={{ margin: "40px 0 0 0" }}>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirida pela empresa Oracle Corporation</CardText>
                            </div>
                        </CardStyle>
                    </Display>

                </DisplayFLex>
                <br />
            </div>

            <div data-aos="fade-up">
                <DisplayFLex>
                    <Display>
                        <CardStyle class="card">
                            <Paragrafo>RobotFramework</Paragrafo>
                            <Imagem draggable="false" src={robot} alt="LogoRobotFramework" />
                            <div class="card-body">
                                <CardText class="card-text" >Robot Framework é uma estrutura de automação genérica open source, ou seja, de código aberto que pode ser usado para testar e automatizar processos de software.</CardText>
                            </div>
                        </CardStyle>
                    </Display>
                    <br />

                    <Display>
                        <CardStyle class="card">
                            <Paragrafo>Postman</Paragrafo>
                            <Imagem draggable="false" src={postman} alt="LogoPostman" />
                            <div class="card-body">
                                <CardText class="card-text" >O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.</CardText>
                            </div>
                        </CardStyle>

                    </Display>
                    <br />

                    <Display>
                        <CardStyle>
                            <Paragrafo>MongoDb</Paragrafo>
                            <Imagem draggable="false" src={mongoDb} alt="LogoMongoDb" />
                            <div class="card-body">
                                <CardText class="card-text" >MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.</CardText>
                            </div>
                        </CardStyle>

                    </Display>

                    <br />

                    <Display>
                        <CardStyle>
                            <Paragrafo>Cypress</Paragrafo>
                            <Imagem draggable="false" src={cypress} alt="LogoCypress" />
                            <div class="card-body">
                                <CardText class="card-text" >Cypress é uma ferramenta poderosa de última geração desenvolvida especialmente para engenheiros de controle de qualidade (analistas QA) e desenvolvedores, que podem usá-la para os testes de software</CardText>
                            </div>
                        </CardStyle>
                    </Display>
                </DisplayFLex>
                <br />
            </div>
        </TituloCurriculo >
    )
}

export default Main