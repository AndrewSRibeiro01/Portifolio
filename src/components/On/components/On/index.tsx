import * as S from "./styled";
import * as Img from "../../../assets"
import React from "react";
import Typewriter from 'typewriter-effect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from "swiper";
import Footer from "../../../Footer";
import Curriculo from "../../../../Pages/Curriculo/components/Curriculo/Curriculo";
import { HashLink } from "react-router-hash-link";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sobre = () => {
    const [rotation, setRotation] = React.useState(0);

    React.useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 2);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <S.BackgroundDiv id="Home">
                <S.DivMain>
                    <S.DivFlex>
                        <S.DivIcons>
                            <S.DivWhatsApp>
                                <S.DisplayIconWhats>
                                    <S.DivBackgroundWhats>
                                        <HashLink to="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                            <img style={{ width: "20px", margin: "5px" }} src={Img.whatsApp} alt="whatsApp" draggable="false" />
                                        </HashLink>
                                    </S.DivBackgroundWhats>
                                </S.DisplayIconWhats>
                            </S.DivWhatsApp>
                            <S.DivStyleIcons>
                                <HashLink to="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                                    <img style={{ width: "36px", margin: "5px" }} src={Img.linkedin} alt="Linkedin" draggable="false" />
                                </HashLink>
                            </S.DivStyleIcons>
                            <S.DivStyleIcons>
                                <HashLink to="https://github.com/AndrewSRibeiro01">
                                    <img style={{ width: "36px", margin: "5px" }} src={Img.gitHub} alt="GitHub" draggable="false" />
                                </HashLink>
                            </S.DivStyleIcons>
                        </S.DivIcons>
                        <S.DivSobreMim>
                            <S.DivHome>
                                <S.Title>
                                    Olá, me chamo <span className="gradientText">Andrew</span>!
                                </S.Title>
                                <S.Div>
                                    <S.Card>
                                        <S.SubTitulo1 className="gradientText">
                                            <Typewriter
                                                options={{
                                                    autoStart: true,
                                                    loop: true,
                                                    strings: ["Full Stack Developer"]
                                                }}
                                            />
                                        </S.SubTitulo1>
                                    </S.Card>
                                    <S.Iam>
                                        Tenho 26 anos e sou um desenvolvedor de software Full Stack, contendo conhecimento nas principais habilidades que seria React, TypeScript, JavaScript e Express.js. Estou sempre procurando aprimorar minhas técnicas e habilidades para entregar sites e aplicativos Web Responsivos e altamente funcionais.
                                    </S.Iam>
                                    <S.Espaço />
                                </S.Div>
                            </S.DivHome>
                            <S.DivImg>
                                <S.Imagem
                                    src={Img.eu}
                                    alt="Eu"
                                    style={{ borderColor: "white" }}
                                    draggable="false"
                                />
                            </S.DivImg>
                        </S.DivSobreMim>
                    </S.DivFlex>
                </S.DivMain>
                <S.Background style={{ height: "100%" }}>
                    <div id="Habilidades" />
                    <S.DivSobre >
                        <S.Width>
                            <S.Divhabilibades>
                                <S.H2>HABILIDADES</S.H2>
                                <S.Paragrafo>Atualmente, tenho conhecimento nas principais tecnologias, que seria o React, TypeScript, JavaScript e Express.js, porém, sempre busco estudar outras tecnologias, sempre me atualizando para ficar por dentro do mercado digital!
                                </S.Paragrafo>
                            </S.Divhabilibades>
                            <S.DivIconHabilidades>
                                <S.DivIconReactjs>
                                    <img style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-in-out' }}
                                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                        alt="Logo React"
                                        draggable="false"
                                    />
                                </S.DivIconReactjs>
                                <S.DivIconReactjs>
                                    <img src={Img.javascriptLogo}
                                        alt="Logo Javascript"
                                        draggable="false"
                                    />
                                </S.DivIconReactjs>
                                <S.DivIconReactjs>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                        alt="Logo TypeScript"
                                        draggable="false"
                                    />
                                </S.DivIconReactjs>
                            </S.DivIconHabilidades>
                            <S.FlexzIndex>
                                <S.H1Tecnologia> OUTRAS TECNOLOGIAS</S.H1Tecnologia>
                                <S.Margin />
                                <Swiper
                                    style={{ background: "#15151578", paddingLeft: "50px" }}
                                    spaceBetween={0}
                                    modules={[Autoplay, FreeMode]}
                                    className="mySwiper"
                                    freeMode={true}
                                    speed={5000}
                                    slidesPerView={7}
                                    loop={true}
                                    autoplay={{ delay: 0, disableOnInteraction: false }}
                                >
                                    {Img.logo1.map((item, key) =>
                                        <SwiperSlide key={key}>
                                            <S.Img src={item} alt="logo" />
                                        </SwiperSlide>
                                    )}
                                </Swiper >
                            </S.FlexzIndex>
                        </S.Width>
                    </S.DivSobre>
                </S.Background>
            </S.BackgroundDiv>
            <Curriculo />
            <Footer />
        </>
    )
}
export default Sobre