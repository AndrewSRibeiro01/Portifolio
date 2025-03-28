import * as S from "../../Estilizações/Eexperiencia"
import digigrow from "../assets/img/digigrow.png"

interface ComponenteExperienciasProps {
    data: string;
    cargo: string;
    texto: string;
}

const ComponenteExperiencias: React.FC<ComponenteExperienciasProps> = ({ data, cargo, texto }) => {
    return (
        <S.Div>
            <S.CardExperiencias>
                <S.Logoempresa>
                    <img style={{ width: "20%", height: "15%", mixBlendMode: "color" }}
                        src={digigrow} alt="Digigrow" />
                </S.Logoempresa>
                <S.H1Experiencia>
                    {cargo}
                </S.H1Experiencia>
                <S.Pexperiencia>
                    {data}
                </S.Pexperiencia>
                <S.PtextoExperiencia>
                    {texto}
                </S.PtextoExperiencia>
            </S.CardExperiencias>
        </S.Div >
    )
}

export default ComponenteExperiencias;
