import React from "react"
import { TituloCurriculo } from "../../Estilizações/Emain"
import { SubTituloCurriculo } from "../../Estilizações/Emain"
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
import arsenalcar from "../../Imagens/arsenalcar.png"
import digigrow from "../../Imagens/logoDigi.png"
import { CardStyle, H1, Imagem, Paragrafo } from "../../Estilizações/CardStyle"
import { CardStyleJ } from "../../Estilizações/CardStyle"
import { CardJD } from "../../Estilizações/CardStyle"
import { CardText } from "../../Estilizações/CardStyle"
import { Display } from "../../Estilizações/CardStyle"
import Qa from "../../Imagens/QA.png"
import { SubtituloExperiencia } from "../../Estilizações/Emain"

const Main = () => {
    return (
        <TituloCurriculo>
            <H1>Curriculo</H1>
            <SubTituloCurriculo>Conhecimentos 🛠️ Habilidades </SubTituloCurriculo>

            <Display>
                <CardStyle class="card">
                    <Paragrafo>React</Paragrafo>
                    <img src={LogoReact} class="card-img-top" alt="LogoReact" />
                    <div class="card-body">
                        <CardText class="card-text" >O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU).</CardText> <br></br>
                    </div>
                </CardStyle>

                <CardStyle class="card">
                    <Paragrafo>javascript</Paragrafo>
                    <Imagem src={javascript} alt="LogoJavascript" />
                    <div class="card-body">
                        <CardText class="card-text" >JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web.</CardText>
                    </div>
                </CardStyle>

                <CardStyleJ>
                    <Paragrafo>Css</Paragrafo>
                    <Imagem src={Css} alt="LogoCss" />
                    <div class="card-body">
                        <CardText class="card-text" >CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Sass</Paragrafo>
                    <Imagem src={sass} alt="LogoSass" width="150px" style={{ marginTop: "25px" }} />
                    <div class="card-body">
                        <CardText class="card-text" style={{ marginTop: "20px" }}>O SASS significa (Syntactically Awesome Style Sheets), folhas de estilo com uma sintaxe incrível. Sua ideia é adicionar recursos especiais como variáveis, mixins, funções, operações e outras opções variadas </CardText>
                    </div>
                </CardStyleJ>

            </Display>
            <br></br>

            <Display>
                <CardStyleJ>
                    <Paragrafo>Bootstraap</Paragrafo>
                    <Imagem src={bootstrap} alt="LogoBootstrap" width="150px" />
                    <div class="card-body">
                        <CardText class="card-text" >Bootstrap é um framework front-end que fornece estruturas de CSS para a criação de sites. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Python</Paragrafo>
                    <Imagem src={python} alt="LogoPython" />
                    <div class="card-body">
                        <CardText class="card-text" >O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML)</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>R</Paragrafo>
                    <Imagem src={r} alt="LogoR" />
                    <div class="card-body">
                        <CardText class="card-text" style={{ margin: "20px 0 0 0" }}>R é uma linguagem de programação estatística e gráfica que vem se especializando na manipulação, análise e visualização de dados, sendo atualmente considerada uma das melhores ferramentas para essa finalidade</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Java</Paragrafo>
                    <Imagem src={java} alt="LogoJava" width="150px" />
                    <div class="card-body">
                        <CardText class="card-text" style={{ margin: "40px 0 0 0" }}>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirida pela empresa Oracle Corporation</CardText>
                    </div>
                </CardStyleJ>

            </Display>
            <br></br>

            <Display>
                <CardStyleJ>
                    <Paragrafo>Machine Learning</Paragrafo>
                    <Imagem src={machine} alt="LogoMachineLearning" />
                    <div class="card-body">
                        <CardText class="card-text" >De maneira geral, machine learning é a capacidade dos computadores de aprender de forma autônoma, a partir da interação com o usuário. Este fornece dados que serão analisados e interpretados pela máquina, a partir da tecnologia de Inteligência Artificial (IA).</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Deep Learning</Paragrafo>
                    <Imagem src={deep} alt="LogoDeepLearning" />
                    <div class="card-body">
                        <CardText class="card-text" >Deep Learning é um aprofundamento de Machine Learning, que nada mais é do que a aplicação de Inteligência Artificial e Data Science. O Deep Learning vai além, definindo padrões de análise profunda, incluindo processamento de linguagem natural.</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>RobotFramework</Paragrafo>
                    <Imagem src={robot} alt="LogoRobotFramework" />
                    <div class="card-body">
                        <CardText class="card-text" >Robot Framework é uma estrutura de automação genérica open source, ou seja, de código aberto que pode ser usado para testar e automatizar processos de software.</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Postman</Paragrafo>
                    <Imagem src={postman} alt="LogoPostman" />
                    <div class="card-body">
                        <CardText class="card-text" >O Postman é um API Client que facilita aos desenvolvedores criar, compartilhar, testar e documentar APIs. Isso é feito, permitindo aos usuários criar e salvar solicitações HTTP e HTTPs simples e complexas, bem como ler suas respostas.</CardText>
                    </div>
                </CardStyleJ>
            </Display>
        <br />
            <Display>
                <CardStyleJ>
                    <Paragrafo>MongoDb</Paragrafo>
                    <Imagem src={mongoDb} alt="LogoMongoDb" />
                    <div class="card-body">
                        <CardText class="card-text" >MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Cypress</Paragrafo>
                    <Imagem src={cypress} alt="LogoCypress" />
                    <div class="card-body">
                        <CardText class="card-text" >Cypress é uma ferramenta poderosa de última geração desenvolvida especialmente para engenheiros de controle de qualidade (analistas QA) e desenvolvedores, que podem usá-la para os testes de software</CardText>
                    </div>
                </CardStyleJ>

            </Display>
            <br></br>

            <SubtituloExperiencia>Experiência Profissional</SubtituloExperiencia>
            <H4>ArsenalCar |Digigrow</H4><br />

            <Display>
                <CardStyleJ>
                    <Paragrafo>ArsenalCar</Paragrafo>
                    <Imagem src={arsenalcar} alt="LogoArsenalCar" />
                    <div class="card-body">
                        <CardText class="card-text" >Nascida em 2012, no Centro Industrial de Arujá, a Arsenal Car é o e-commerce com o maior número de peças e acessórios para automóveis sendo referência do mercado</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Digigrow</Paragrafo>
                    <CardJD src={digigrow} alt="LogoDigigrow" />
                    <div class="card-body">
                        <CardText class="card-text" >A Digigrow nasceu com o objetivo de facilitar a entrada de empresas no mercado digital, sejam pequenas, médias e até grandes empresas, facilitando o caminho para o sucesso das vendas de nossos parceiros</CardText>
                    </div>
                </CardStyleJ>

                <CardStyleJ>
                    <Paragrafo>Quality Assurance</Paragrafo>
                    <CardJD src={Qa} alt="LogoQuality Assurance" />
                    <div class="card-body">
                        <CardText class="card-text" >O Analista de Quality Assurance, é o profissional responsável por realizar testes, procurar bugs, falhas e reportá-los para a equipe de desenvolvimento, além de sugerir estratégias de otimização para programas e sistemas.</CardText>
                    </div>
                </CardStyleJ>
            </Display>
            <br></br>

        </TituloCurriculo >
    )
}

export default Main