import { Background, H2, Imagem, Card, Div, SubTitulo1, Espaço, Title, DivSobre, Img, Paragrafo } from "../../Estilizações/Emain";
import eu from "../assets/img/perfil.jpeg";
import wpp from "../assets/img/whatsapp (1).png";
import linkedin from "../assets/img/LinkedIn.svg";
import gtHub from "../assets/img/Github.svg";
import { useEffect, useState } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';
import { logo1 } from "../assets/index";
import javascriptLogo from "../assets/img/javascripImg.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode } from "swiper";
import Footer1 from "../Footer/footer";
import Curriculo from "../../Pages/Curriculo/Curriculo";
import { BackgroundDiv, DisplayIconWhats, DivBackgroundWhats, DivFlex, DivHome, DivIconHabilidades, DivIconReactjs, DivIcons, DivImg, DivMain, DivSobreMim, DivStyleIcons, DivWhatsApp, Divhabilibades, H1Tecnologia } from "../../Estilizações/Esobre";
import { HashLink } from "react-router-hash-link";

const Sobre = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 2);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <BackgroundDiv id="Home">
                <DivMain>
                    <DivFlex>
                        <DivIcons>
                            <DivWhatsApp>
                                <DisplayIconWhats>
                                    <DivBackgroundWhats>
                                        <HashLink to="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                            <img style={{ width: "20px", margin: "5px" }} src={wpp} alt="whatsApp" draggable="false" />
                                        </HashLink>
                                    </DivBackgroundWhats>
                                </DisplayIconWhats>
                            </DivWhatsApp>
                            <DivStyleIcons>
                                <HashLink to="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                                    <img style={{ width: "36px", margin: "5px" }} src={linkedin} alt="Linkedin" draggable="false" />
                                </HashLink>
                            </DivStyleIcons>
                            <DivStyleIcons>
                                <HashLink to="https://github.com/AndrewSRibeiro01">
                                    <img style={{ width: "36px", margin: "5px" }} src={gtHub} alt="GitHub" draggable="false" />
                                </HashLink>
                            </DivStyleIcons>
                        </DivIcons>
                        <DivSobreMim>
                            <DivHome>
                                <Title>
                                    Olá, me chamo <span className="gradientText">Andrew</span>!
                                </Title>
                                <Div>
                                    <Card>
                                        <SubTitulo1 className="gradientText">
                                            <Typewriter options={{ autoStart: true, loop: true, strings: ["Full Stack Developer"] }} />
                                        </SubTitulo1>
                                    </Card>
                                    <p style={{ width: "599px", height: "130px" }}>Tenho 25 anos e sou um desenvolvedor de software Full Stack, contendo conhecimento nas principais habilidades que seria React, TypeScript, JavaScript e Express.js. Estou sempre procurando aprimorar minhas técnicas e habilidades para entregar sites e aplicativos Web Responsivos e altamente funcionais.</p>
                                    <Espaço />
                                </Div>
                            </DivHome>
                            <DivImg>
                                <Imagem draggable="false" src={eu} alt="Eu" style={{ borderColor: "white" }} />
                            </DivImg>
                        </DivSobreMim>
                    </DivFlex>
                </DivMain>
                <Background style={{ height: "100%" }}>
                    <div id="Habilidades" />
                    <DivSobre >
                        <div style={{ width: "100%" }}>
                            <Divhabilibades>
                                <H2>HABILIDADES</H2>
                                <Paragrafo>Atualmente, tenho conhecimento nas principais tecnologias, que seria o React, TypeScript, JavaScript e Express.js, porém, sempre busco estudar outras tecnologias, sempre me atualizando para ficar por dentro do mercado digital!
                                </Paragrafo>
                            </Divhabilibades>
                            <DivIconHabilidades>
                                <DivIconReactjs>
                                    <img style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-in-out' }}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="Logo React"
                                        draggable="false"
                                    />
                                </DivIconReactjs>
                                <DivIconReactjs>
                                    <img src={javascriptLogo} alt="Logo Javascript" draggable="false" />
                                </DivIconReactjs>
                                <DivIconReactjs>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Logo TypeScript" draggable="false" />
                                </DivIconReactjs>
                            </DivIconHabilidades>
                            <div style={{ display: "flex", flexDirection: "column", cursor: "default", zIndex: 1 }}>
                                <H1Tecnologia> OUTRAS TECNOLOGIAS</H1Tecnologia>
                                <div style={{ marginLeft: "20px", marginTop: "40px" }} />
                                <Swiper style={{ background: "#15151578", paddingLeft: "50px" }}
                                    spaceBetween={0}
                                    modules={[Autoplay, FreeMode]}
                                    className="mySwiper"
                                    freeMode={true}
                                    speed={5000}
                                    slidesPerView={7}
                                    loop={true}
                                    autoplay={{ delay: 0, disableOnInteraction: false }}
                                >
                                    {logo1.map((item, key) =>
                                        <SwiperSlide key={key}>
                                            <Img src={item} alt="logo" />
                                        </SwiperSlide>
                                    )}
                                </Swiper >
                            </div>
                        </div>
                    </DivSobre>
                </Background>
            </BackgroundDiv>
            <Curriculo />
            <Footer1 />
        </>
    )
}
export default Sobre