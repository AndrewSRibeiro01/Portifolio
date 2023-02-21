import React from "react"
import { Offcanvas } from 'react-bootstrap';
import whatsApp from "../../Imagens/whatsApp.png"
import { DivForm } from "../../Estilizações/Eformulario";
import { A } from "../../Estilizações/Eformulario";
import { Img } from "../../Estilizações/Eformulario";
import { P } from "../../Estilizações/Eformulario";

const Contato = () => {
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

            <Offcanvas style={{justifyContent: "center", backgroundImage: "url(https://i0.wp.com/www.coliseugeek.com.br/wp-content/uploads/2023/01/a6b3a-clickwallpapers-planet-earth-3840x2160-in-4k-img8-scaled-1.jpg?resize=1536%2C810&ssl=1)", borderEndEndRadius: "1000px", borderEndStartRadius: "1000px"}}
                show={showOffcanvas}
                onHide={handleOffcanvas}
                placement="top"
                aria-labelledby="offcanvasTopLabel">

                <Offcanvas.Header style={{ display: "flex", justifyContent: "space-around"}}>
                        <Offcanvas.Title id="offcanvasTopLabel"><A href="https://wa.me/5511998571371?text=Oi,%20Andrew!" style={{ justifyItems: "center" }}>
                            WhatsApp
                            <Img src={whatsApp} /></A>
                            <br></br></Offcanvas.Title>
                        <Offcanvas.Title id="offcanvasTopLabel" style={{ textAlign: "center", color: "#0d6efd" }} div>Email<P>Andrewsouza57@gmail.com</P>
                        </Offcanvas.Title>
                </Offcanvas.Header>

            </Offcanvas>

        </DivForm>
    )
}

export default Contato
