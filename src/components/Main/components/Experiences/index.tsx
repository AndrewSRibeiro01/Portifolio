import * as S from "./styled"
import digigrow from "../../../assets/img/digigrow.png"

interface ComponentExperiences {
    data: string;
    cargo: string;
    texto: string;
}

const Experiences: React.FC<ComponentExperiences> = ({ data, cargo, texto }) => {
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

export default Experiences;
