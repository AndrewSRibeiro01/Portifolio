import * as S from "./styled"

interface ComponentExperiences {
    data: string;
    cargo: string;
    texto: string;
    imagem: string;
}

const Experiences: React.FC<ComponentExperiences> = ({ data, cargo, texto, imagem }) => {
    return (
        <S.Div>
            <S.CardExperiencias>
                <S.Logoempresa>
                    <S.Img src={imagem} alt="Digigrow" />
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
