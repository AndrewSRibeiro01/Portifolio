import React from "react"
import { Offcanvas } from 'react-bootstrap';
import whatsApp from "../../Imagens/whatsApp.png"
import { DivForm } from "../../Estilizações/Eformulario";
import { A } from "../../Estilizações/Eformulario";
import { Img } from "../../Estilizações/Eformulario";
import { P } from "../../Estilizações/Eformulario";
import styled from "styled-components";
import imagemProjeto from "../../Imagens/imagemProjeto.png";

const Imagem = styled.img`
    width: 500px; 
    height: 240px;
    @media (min-width: 1440px) {
        width: 700px;
        height: 300px;
    }
    @media (min-width: 2000px) {
        width: 1150px;
        height: 550px;
    }
    @media (max-width: 440px) {
        width: 310px;
        height: 160px;
    }
`
const Div = styled.div`
    width: 100%;
    height: 250px;
    color: white;
`
const Margin = styled.div`
    @media (min-width: 1440px) {
        margin-top: 100px;
    }
    @media (max-width: 1439px) {
        margin-top: 30px;
    }
    @media (max-width: 440px) {
        margin-top: 0;
    }
    @media (min-width: 2000px) {
        margin-top: 400px;
    }
`
const Contato = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <DivForm>

            <div>
                <Div>
                    <Imagem src={imagemProjeto} alt="Projeto" />
                </Div>
            </div>
            <Margin />

            <button type="button" class="btn btn-secondary"
                variant="primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
                onClick={handleOffcanvas}>

                Contato</button>

            <Offcanvas style={{ justifyContent: "center", background: "#e1e1e1", borderEndEndRadius: "1000px", borderEndStartRadius: "1000px" }}
                show={showOffcanvas}
                onHide={handleOffcanvas}
                placement="top"
                aria-labelledby="offcanvasTopLabel">

                <Offcanvas.Header style={{ display: "flex", justifyContent: "space-around" }}>
                    <Offcanvas.Title id="offcanvasTopLabel"><A href="https://wa.me/5511998571371?text=Oi,%20Andrew!" style={{ justifyItems: "center", color: "black" }}>
                        WhatsApp
                        <Img src={whatsApp} alt="LogoWhatsapp" /></A>
                        <br></br></Offcanvas.Title>
                    <Offcanvas.Title id="offcanvasTopLabel" style={{ textAlign: "center", color: "#000" }} div>Email<P>Andrewsouza57@gmail.com</P>
                    </Offcanvas.Title>
                </Offcanvas.Header>

            </Offcanvas>

        </DivForm>
    )
}

export default Contato