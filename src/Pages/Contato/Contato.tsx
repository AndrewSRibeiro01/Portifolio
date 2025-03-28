import * as S from "../../Estilizações/Econtato"
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
            <S.DivContato>
                <S.TituloContato>Projeto</S.TituloContato><br />
            </S.DivContato>
        </div>
    )
}
export default Contato