/* eslint-disable jsx-a11y/alt-text */
import { CardExperiencias, Div, H1Experiencia, Logoempresa, Pexperiencia, PtextoExperiencia } from "../../Estilizações/Eexperiencia"


const ComponenteExperiencias = ({ data, cargo, texto }) => {
    return (
        <Div>
            <CardExperiencias>
                <Logoempresa>
                    <img style={{ width: "15%", height: "15%" }}
                        src="https://s3-alpha-sig.figma.com/img/d2c2/6e19/7a78fe314dc422c3452be49e90ae6082?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DOh5Y5B9F2VKtmNlztU~ccEUfbptGU4wNrOHQFO3tZ1X92O5nIpWWFQLYMCO0KefLiRYhY26J6j3di1bWpsufH3F7j-CvzJDpKksE3NXkaR0AgEavh98KJ0wh7EkjEoibScLShUwLGE~Pb1zpp-UaBw9hiayZt9Lu0WJ8n0RzUQqzTxZltPcDeQ~OFfsdhAyyD19D~cBCMBK5SEgkwU7pSlRBDwwdjv6MHD69Bv0j4UBMdydfrVodtDExvzNZ6K1EZFwsKO3mu5aHa0016VQVkbyyxXMUlQkkAtmA9mIT074mxmGVqPRS9LYg0q07C-PTCG1j6G9si-21GLWr1dXlQ__" />
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