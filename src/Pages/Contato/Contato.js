import { Footer2 } from "../../components/Footer/footer"
import { DivContato } from "../../Estilizações/Econtato"
import { TituloContato } from "../../Estilizações/Econtato"
import Formulario from "../../components/Formulario/Formulario"

function Contato() {
    return (
        <DivContato>
            <TituloContato>Quer entrar em contato comigo?</TituloContato><br></br>
            <Formulario />
            <Footer2 />
        </DivContato>
    )
}

export default Contato