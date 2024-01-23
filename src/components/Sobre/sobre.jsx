/* eslint-disable jsx-a11y/alt-text */
import { Background, H2, H6, Imagem, Card, Div, SubTitulo1, Espaço, SubTitle, Title, DivSobre, Hr, Img } from "../../Estilizações/Emain";
import eu from "../assets/img/eu1.jpeg";
import wpp from "../assets/img/whatsapp (1).png";
import linkedin from "../assets/img/LinkedIn.svg";
import gtHub from "../assets/img/Github.svg";
import React, { useEffect, useState } from "react";
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
import { NavLink } from "react-router-dom";
import { FaSquareWhatsapp } from "react-icons/fa6";


const Sobre = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);

    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 5);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div style={{ width: "100%", color: "#cacaca" }}>
                <div style={{ width: "85%", margin: "0 auto" }}>
                    <div data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">

                        <div style={{ display: "flex", flexDirection: "row", marginTop: "15rem", justifyContent: "center" }}>
                            <div style={{ width: "10%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }} >
                                    <div style={{ width: "100%", display: "flex" }}>
                                        <div style={{ background: "white", borderRadius: "50%", padding: "4px", margin: "4px" }}>
                                            <a href="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                                                <img style={{ width: "20px", margin: "5px" }} src={wpp} alt="whatsApp" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                                    <a href="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                                        <img style={{ width: "36px", margin: "5px" }} src={linkedin} alt="Linkedin" />
                                    </a>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                                    <a href="https://github.com/AndrewSRibeiro01">
                                        <img style={{ width: "36px", margin: "5px" }} src={gtHub} alt="GitHub" />
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: "flex", width: "1062px" }}>


                                <div style={{ marginLeft: "60px", margin: "0 0 0 20px" }} id="Home" >
                                    <Title>Olá, me chamo <h7 className="gradientText">Andrew</h7>!</Title>
                                    <Div>
                                        <Card>
                                            <SubTitulo1 className="gradientText">
                                                <Typewriter options={{ autoStart: true, loop: true, strings: ["Desenvolvedor de Software"] }} />
                                            </SubTitulo1>
                                        </Card>
                                        <p style={{ width: "599px", height: "130px" }}>Tenho 25 anos e sou um desenvolvedor de software full stack, contendo conhecimento nas principais habilidades que seria React, JavaScript e express. Estou sempre procurando aprimorar minhas técnicas e habilidades para entregar sites e aplicativos Web Responsivos e altamente funcionais.</p>
                                        <Espaço />
                                    </Div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Imagem draggable="false" src={eu} alt="Eu" style={{ borderColor: "white" }} />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* <div data-aos="fade-up"> */}
                <Background style={{ height: "100%" }}>
                    <DivSobre>
                        <div id="Habilidades" style={{ width: "100%" }}>
                            <div style={{ padding: "60px" }}>
                                <H2 style={{ fontSize: "36px" }}> <NavLink to="Habilidades"></NavLink>HABILIDADES</H2> <br />
                                <p style={{
                                    textAlign: "center", color: "#E0E0E0", fontSize: "20px", fontStyle: "normal", fontWeight: 500, lineHeight: "normal", cursor: "default"
                                }}>Atualmente, tenho conhecimento nas principais tecnologias, que seria o React, JavaScript e CSS3, porém, sempre busco estudar outras tecnologias, sempre me atualizando para ficar por dentro <br /> do mercado digital!</p>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                                <div style={{ width: "150px", height: "150px", flexShrink: "0" }}>
                                    <img
                                        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.1s ease-in-out', }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                </div>
                                <div style={{ width: "150px", height: "150px", flexShrink: "0" }}>
                                    <img src={javascriptLogo} />
                                </div>
                                <div style={{ width: "150px", height: "150px", flexShrink: "0" }}>
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <h1 style={{ color: "#FFF", textAlign: "center", fontSize: "20px", fontStyle: "normal", fontWeight: 800, lineHeight: "normal", letterSpacing: "0.6px", display: "flex", justifyContent: "center", marginTop: "60px" }}> OUTRAS TECNOLOGIAS</h1>
                                <div style={{ marginLeft: "20px", marginTop: "40px" }} />
                                <Swiper style={{ background: "#15151578", paddingLeft: "50px" }}
                                    spaceBetween={0}
                                    modules={[Autoplay, FreeMode]}
                                    className="mySwiper"
                                    freeMode={true}
                                    slidesPerView={5}
                                    loop={true}
                                    autoplay={{ delay: 1000, disableOnInteraction: false }}
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
            </div>
            <Curriculo />
            <Footer1 />
            {/* </div > */}
        </>
    )
}
export default Sobre