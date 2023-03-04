import { Link } from "react-router-dom"
import eu6 from "../../Imagens/eu6.png"
import { SubTitulo1 } from "../../Estilizações/Emain" 
import { Titulo1 }  from "../../Estilizações/Emain" 
import { DisplayCard } from "../../Estilizações/Emain" 
import { CardStyle } from "../../Estilizações/Emain" 
import { Imagem } from "../../Estilizações/Emain" 
import { Card } from "../../Estilizações/Emain"  
import { CardBody } from "../../Estilizações/Emain" 
import { Div } from "../../Estilizações/Emain" 
import { Margin } from "../../Estilizações/Emain" 

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
                        <button style={{ fontWeight: "500", width: "200px", borderRadius: "15px", textDecoration: "none" }} type="button" class="btn btn-light btn-lg"> < Link to={"/contato"} style={{ textDecoration: "none", color: "black",  }}> Contato</Link></button>
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