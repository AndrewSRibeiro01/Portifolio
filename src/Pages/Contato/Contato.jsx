import { Footer2 } from "../../components/Footer/footer"
import { DivContato } from "../../Estilizações/Econtato"
import { TituloContato } from "../../Estilizações/Econtato"
import Formulario from "../../components/Formulario/Formulario"

const Contato = () => {
    return (
        <DivContato>
            <TituloContato>Projeto</TituloContato><br></br>
            <Formulario />
            <Footer2 />
        </DivContato>
    )
}
export default Contato