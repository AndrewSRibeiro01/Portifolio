import React from "react"
import { Offcanvas } from 'react-bootstrap';
import whatsApp from "../../Imagens/whatsApp.png"
import imagemProjeto from "../../Imagens/imagemProjeto.png";
import { Margin, Imagem, Div, P, Img, A, DivForm, Hr, FundoEspelho } from "../../Estilizações/Eformulario";
import imagemProjeto2 from "../../Imagens/imagemProjeto2.png"
import imagemProjeto3 from "../../Imagens/imagemProjeto3.png"
import imagemProjeto4 from "../../Imagens/imagemProjeto4.png"

const Contato = () => {
    const [showOffcanvas, setShowOffcanvas] = React.useState(false);

    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <FundoEspelho>

                <DivForm>

                    <div>
                        <Div>

                            <body style={{ background: "transparent" }} class="bd-example">

                                <div id="carouselExampleIndicators" class="carousel slide">
                                    <div style={{ margin: "-20px" }} class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" />
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <Imagem src={imagemProjeto} alt="imagemProjeto" />
                                        </div>
                                        <div class="carousel-item">
                                            <Imagem src={imagemProjeto2} alt="imagemProjeto" />
                                        </div>
                                        <div class="carousel-item">
                                            <Imagem src={imagemProjeto3} alt="imagemProjeto" />
                                        </div>
                                        <div class="carousel-item">
                                            <Imagem src={imagemProjeto4} alt="imagemProjeto" />
                                        </div>
                                    </div>
                                </div>
                            </body>

                        </Div>
                    </div>
                    <Margin />
                    <Hr />
                    <button style={{
                        background: "transparent",
                        borderColor: "rgba( 255, 255, 255, 0.18)",
                        width: "200px",
                        height: "48px",
                        borderRadius: "15px",
                        fontWeight: "bold",
                        fontSize: "1.25rem"
                    }}
                        type="button" className="btn btn-secondary"
                        variant="primary"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop"
                        onClick={handleOffcanvas}>

                        Contato</button>

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
                </DivForm>
            </FundoEspelho>

            {/* <iframe style={{borderRadius:"15px"}} src="https://portifolio-andrew.netlify.app/" width="90%" height="800"></iframe> */}

        </div>
    )
}

export default Contato