import { Background, H2, H6, Imagem, Card, Div, SubTitulo1, Espaço, SubTitle, Title, DivSobre, Hr } from "../../Estilizações/Emain";
import eu from "../assets/img/eu1.jpeg";
import wpp from "../assets/img/whatsApp.png";
import linkedin from "../assets/img/linkedin1.png";
import gtHub from "../assets/img/GitHub1.png";
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { logos } from "../assets/index"

const Sobre = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);



    return (
        <>
            <div style={{
                background: "black", width: "100%", color: "#cacaca"
            }}>
                <div style={{ width: "85%", margin: "0 auto" }}>
                    <div data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <Title>Olá, me chamo <h7 style={{ color: "red" }}>Andrew</h7>!</Title>
                        <Div>
                            <Card>
                                <SubTitulo1>
                                    <Typewriter options={{ autoStart: true, loop: true, strings: ["Desenvolvedor web"] }} />
                                </SubTitulo1>
                            </Card>
                            <a href="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                <img style={{ width: "50px" }} src={wpp} alt="whatsApp" />
                            </a>
                            <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                                <img style={{ width: "60px" }} src={linkedin} alt="Linkedin" />
                            </a>
                            <a href="https://github.com/AndrewSRibeiro01">
                                <img style={{ width: "60px" }} src={gtHub} alt="GitHub" />
                            </a>
                            <Espaço />
                        </Div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <Background>
                        <DivSobre>
                            <Imagem draggable="false" src={eu} alt="Eu" style={{ borderColor: "white" }} />
                            <div style={{ width: "100%" }}>
                                <H2 style={{ width: "100%" }}>Sobre mim!</H2> <br />
                                <p style={{ fontSize: "17px" }}>Olá, tenho 25 anos sou um programador web com habilidades em React, CSS e JavaScript.<br /> <H6>
                                    Estou sempre procurando maneiras de melhorar minhas técnicas e habilidades para entregar sites e aplicativos web responsivos e altamente funcionais.<br />
                                    Além disso, estou constantemente aprendendo novas tecnologias e ferramentas para manter-me atualizado e oferecer à minha equipe as soluções mais eficientes e modernas possíveis.</H6> </p>
                            </div>
                        </DivSobre>
                    </Background>
                </div>
            </div >
            <div data-aos="fade-up">
                <Hr style={{}} />
                <Title>Competências</Title>
                <SubTitle>
                    <Typewriter options={{ delay: 3, autoStart: true, loop: true, strings: ["React", "Postman", "Css", "Sass", "Javascript", "Bootstrap", "Node.Js", "MongoDb", "Material Ui", "Tailwind"] }} >
                    </Typewriter>
                    {logos}
                </SubTitle>
            </div>
        </>
    )
}
export default Sobre