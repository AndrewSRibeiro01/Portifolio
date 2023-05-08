import React from "react"
import { whatsApp } from "../assets";
import { Offcanvas } from 'react-bootstrap';
import { P, Img, A, ButtonContato, Hr } from "../../Estilizações/Eformulario";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Iframe } from "../../Estilizações/Eformulario";

const Contato = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);
    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);
    return (
        <>
            <Iframe src="https://patroa-imports.vercel.app/" />
            <Hr />
            <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                <ButtonContato
                    onClick={handleOffcanvas}>
                    Contato
                </ButtonContato>
                <Offcanvas style={{
                    justifyContent: "center",
                    background: "var(--bgcolor2)",
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