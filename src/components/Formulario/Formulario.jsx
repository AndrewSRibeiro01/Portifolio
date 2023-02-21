import React from "react"
import { Offcanvas } from 'react-bootstrap';
import whatsApp from "../../Imagens/whatsApp.png"
import { DivForm } from "../../Estilizações/Eformulario";
import { A } from "../../Estilizações/Eformulario";
import { Img } from "../../Estilizações/Eformulario";
import { P } from "../../Estilizações/Eformulario";

function Contato() {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <DivForm>

            <button type="button" class="btn btn-secondary"
                variant="primary"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
                onClick={handleOffcanvas}>

                Clique Aqui!</button>

            <Offcanvas
                show={showOffcanvas}
                onHide={handleOffcanvas}
                placement="top"
                aria-labelledby="offcanvasTopLabel">

                <Offcanvas.Header style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <Offcanvas.Title id="offcanvasTopLabel"><A href="https://wa.me/5511998571371?text=Oi,%20Andrew!" style={{justifyItems: "center"}}>
                            WhatsApp 
                            <Img src={whatsApp} /></A>
                            <br></br></Offcanvas.Title>
                        <Offcanvas.Title id="offcanvasTopLabel" style={{textAlign: "center", color:"#0d6efd"}}>Email<P>Andrewsouza57@gmail.com</P>
                        </Offcanvas.Title>
                    </div>

                </Offcanvas.Header>

            </Offcanvas>

        </DivForm>
    )
}

export default Contato
