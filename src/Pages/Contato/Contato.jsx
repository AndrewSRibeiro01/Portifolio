import { Footer2 } from "../../components/Footer/footer"
import { DivContato } from "../../Estilizações/Econtato"
import { TituloContato } from "../../Estilizações/Econtato"
import Formulario from "../../components/Formulario/Formulario"
import React, {useEffect} from "react"
import AOS from "aos"
const Contato = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <DivContato>
                <TituloContato>Projeto</TituloContato><br />
                <Formulario />
                <Footer2 />
            </DivContato>
        </div>
    )
}
export default Contato