import { DivContato, TituloContato } from "../../Estilizações/Econtato"
import { useEffect } from "react"
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
            </DivContato>
        </div>
    )
}
export default Contato