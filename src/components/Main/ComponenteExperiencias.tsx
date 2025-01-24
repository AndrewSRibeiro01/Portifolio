import { CardExperiencias, Div, H1Experiencia, Logoempresa, Pexperiencia, PtextoExperiencia } from "../../Estilizações/Eexperiencia"
import digigrow from "../assets/img/digigrow.png"

interface ComponenteExperienciasProps {
    data: string;
    cargo: string;
    texto: string;
}

const ComponenteExperiencias: React.FC<ComponenteExperienciasProps> = ({ data, cargo, texto }) => {
    return (
        <Div>
            <CardExperiencias>
                <Logoempresa>
                    <img style={{ width: "20%", height: "15%", mixBlendMode: "color" }}
                        src={digigrow} />
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
