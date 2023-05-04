import { DivContato, TituloContato } from "../../Estilizações/Econtato"
import Formulario from "../../components/Formulario/Formulario"
import React, { useEffect } from "react"
import AOS from "aos"

const Contato = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div data-aos="fade-up" className="teste">
            <DivContato>
                <TituloContato>Projeto</TituloContato><br />
                <Formulario />
            </DivContato>
        </div>
    )
}
export default Contato