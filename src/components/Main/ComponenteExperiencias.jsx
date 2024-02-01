/* eslint-disable jsx-a11y/alt-text */
import { CardExperiencias, Div, H1Experiencia, Logoempresa, Pexperiencia, PtextoExperiencia } from "../../Estilizações/Eexperiencia"


const ComponenteExperiencias = ({ data, cargo, texto }) => {
    return (
        <Div>
            <CardExperiencias>
                <Logoempresa>
                    <img src="https://app.digigrow.com.br/97b986d5f83334bdf2f4adf2bb24394d.svg" />
                </Logoempresa>
                <H1Experiencia>
                    {cargo}
                </H1Experiencia>
                <Pexperiencia>
                    {data}
                </Pexperiencia>
                <PtextoExperiencia>
                    {texto}
                </PtextoExperiencia>
            </CardExperiencias>
        </Div >
    )
}

export default ComponenteExperiencias;