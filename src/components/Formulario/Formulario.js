import React from "react"
import styled from "styled-components"
import { Button, Offcanvas } from 'react-bootstrap';

const DivForm = styled.div`
    text-align: center;
`
const A = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
`
function Formulario() {
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
                Clique Aqui</button>
            <Offcanvas
                show={showOffcanvas}
                onHide={handleOffcanvas}
                placement="top"
                aria-labelledby="offcanvasTopLabel"
            >
                <Offcanvas.Header closeButton >
                    <div style={{display: "grid"}}>
                    <Offcanvas.Title id="offcanvasTopLabel"><A href="https://wa.me/5511998571371?text=Oi,%20Andrew!"> WhatsApp</A>
                    <br></br></Offcanvas.Title>
                    <Offcanvas.Title id="offcanvasTopLabel"><A href="https://wa.me/5511998571371?text=Oi,%20Andrew!"> Email</A>
                    </Offcanvas.Title>
                    </div>
                </Offcanvas.Header>
            </Offcanvas>
        </DivForm>
    );
}

export default Formulario
