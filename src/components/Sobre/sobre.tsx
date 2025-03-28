import * as S from "../../Estilizações/Emain";
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
import * as E from "../../Estilizações/Esobre";
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
            <E.BackgroundDiv id="Home">
                <E.DivMain>
                    <E.DivFlex>
                        <E.DivIcons>
                            <E.DivWhatsApp>
                                <E.DisplayIconWhats>
                                    <E.DivBackgroundWhats>
                                        <HashLink to="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                            <img style={{ width: "20px", margin: "5px" }} src={wpp} alt="whatsApp" draggable="false" />
                                        </HashLink>
                                    </E.DivBackgroundWhats>
                                </E.DisplayIconWhats>
                            </E.DivWhatsApp>
                            <E.DivStyleIcons>
                                <HashLink to="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                                    <img style={{ width: "36px", margin: "5px" }} src={linkedin} alt="Linkedin" draggable="false" />
                                </HashLink>
                            </E.DivStyleIcons>
                            <E.DivStyleIcons>
                                <HashLink to="https://github.com/AndrewSRibeiro01">
                                    <img style={{ width: "36px", margin: "5px" }} src={gtHub} alt="GitHub" draggable="false" />
                                </HashLink>
                            </E.DivStyleIcons>
                        </E.DivIcons>
                        <E.DivSobreMim>
                            <E.DivHome>
                                <S.Title>
                                    Olá, me chamo <span className="gradientText">Andrew</span>!
                                </S.Title>
                                <S.Div>
                                    <S.Card>
                                        <S.SubTitulo1 className="gradientText">
                                            <Typewriter options={{ autoStart: true, loop: true, strings: ["Full Stack Developer"] }} />
                                        </S.SubTitulo1>
                                    </S.Card>
                                    <p style={{ width: "599px", height: "130px" }}>Tenho 26 anos e sou um desenvolvedor de software Full Stack, contendo conhecimento nas principais habilidades que seria React, TypeScript, JavaScript e Express.js. Estou sempre procurando aprimorar minhas técnicas e habilidades para entregar sites e aplicativos Web Responsivos e altamente funcionais.</p>
                                    <S.Espaço />
                                </S.Div>
                            </E.DivHome>
                            <E.DivImg>
                                <S.Imagem draggable="false" src={eu} alt="Eu" style={{ borderColor: "white" }} />
                            </E.DivImg>
                        </E.DivSobreMim>
                    </E.DivFlex>
                </E.DivMain>
                <S.Background style={{ height: "100%" }}>
                    <div id="Habilidades" />
                    <S.DivSobre >
                        <div style={{ width: "100%" }}>
                            <E.Divhabilibades>
                                <S.H2>HABILIDADES</S.H2>
                                <S.Paragrafo>Atualmente, tenho conhecimento nas principais tecnologias, que seria o React, TypeScript, JavaScript e Express.js, porém, sempre busco estudar outras tecnologias, sempre me atualizando para ficar por dentro do mercado digital!
                                </S.Paragrafo>
                            </E.Divhabilibades>
                            <E.DivIconHabilidades>
                                <E.DivIconReactjs>
                                    <img style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-in-out' }}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="Logo React"
                                        draggable="false"
                                    />
                                </E.DivIconReactjs>
                                <E.DivIconReactjs>
                                    <img src={javascriptLogo} alt="Logo Javascript" draggable="false" />
                                </E.DivIconReactjs>
                                <E.DivIconReactjs>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="Logo TypeScript" draggable="false" />
                                </E.DivIconReactjs>
                            </E.DivIconHabilidades>
                            <div style={{ display: "flex", flexDirection: "column", cursor: "default", zIndex: 1 }}>
                                <E.H1Tecnologia> OUTRAS TECNOLOGIAS</E.H1Tecnologia>
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
                                            <S.Img src={item} alt="logo" />
                                        </SwiperSlide>
                                    )}
                                </Swiper >
                            </div>
                        </div>
                    </S.DivSobre>
                </S.Background>
            </E.BackgroundDiv>
            <Curriculo />
            <Footer1 />
        </>
    )
}
export default Sobre