import React from "react"
import { whatsApp } from "../assets";
import { Offcanvas } from 'react-bootstrap';
import { P, Img, A, ButtonContato } from "../../Estilizações/Eformulario";
import SwiperCore, { Autoplay, FreeMode } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, FreeMode]);

const Contato = () => {

    const [showOffcanvas, setShowOffcanvas] = React.useState(false);
    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <>
            <iframe style={{ maxWidth: "1448px", width: "80%", height: "500px", margin: "0 auto", display: "flex", borderRadius: "15px", border: "1px solid #59371c" }} src="https://patroa-imports.vercel.app/"></iframe>
            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <ButtonContato
                    onClick={handleOffcanvas}>
                    Contato
                </ButtonContato>
                <Offcanvas style={{
                    justifyContent: "center",
                    background: "#e1e1e1",
                    borderEndEndRadius: "1000px",
                    borderEndStartRadius: "1000px"
                }}
                    show={showOffcanvas}
                    onHide={handleOffcanvas}
                    placement="top"
                    aria-labelledby="offcanvasTopLabel">
                    <Offcanvas.Header style={{
                        display: "flex",
                        justifyContent: "space-around"
                    }}>
                        <Offcanvas.Title id="offcanvasTopLabel">
                            <A href="https://wa.me/5511998571371?text=Oi,%20Andrew!"
                                style={{
                                    justifyItems: "center",
                                    color: "black"
                                }}>
                                WhatsApp
                                <Img src={whatsApp} alt="LogoWhatsapp" />
                            </A>
                            <br>
                            </br>
                        </Offcanvas.Title>
                        <Offcanvas.Title id="offcanvasTopLabel"
                            style={{
                                textAlign: "center",
                                color: "#000"
                            }}>
                            Email
                            <P>
                                Andrewsouza57@gmail.com
                            </P>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                </Offcanvas>
            </div>
        </>
    )
}

export default Contato