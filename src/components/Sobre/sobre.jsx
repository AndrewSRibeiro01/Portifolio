import { Link } from "react-router-dom"
import eu6 from "../../Imagens/eu6.png"
import { SubTitulo1 } from "../../Estilizações/Esobre"
import { Titulo1 } from "../../Estilizações/Esobre"
import { DisplayCard } from "../../Estilizações/Esobre"
import { CardStyle } from "../../Estilizações/Esobre"
import { Imagem } from "../../Estilizações/Esobre"
import { Card } from "../../Estilizações/Esobre"
import { CardBody } from "../../Estilizações/Esobre"
import { Div } from "../../Estilizações/Esobre"
import { Margin } from "../../Estilizações/Esobre"


const Sobre = () => {
    return (
        <Margin>
            <DisplayCard>
                <CardStyle class="card">
                    <Titulo1>Um pouco sobre mim! <hr /> </Titulo1>
                    <Div>
                        <Card>
                            <Imagem src={eu6} class="card-img-top" alt="Eu" />
                            <SubTitulo1>
                                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.
                                <br /> <br />
                                Moro em Santa Isabel SP, faço faculdade de Gestão da tecnologia da informação
                                <br /> <br />
                                Estou sempre buscando por novos conhecimentos!
                            </SubTitulo1>
                        </Card>
                        <button style={{ fontWeight: "500", width: "200px", borderRadius: "15px", textDecoration: "none" }} type="button" class="btn btn-light btn-lg"> < Link to={"/contato"} style={{ textDecoration: "none", color: "black" }}> Contato</Link></button>
                    </Div>
                    <CardBody>
                        <div class="card-body">
                            <div class="card-text" />
                        </div>
                    </CardBody>
                </CardStyle>
            </DisplayCard>
        </Margin>
    )
}
export default Sobre