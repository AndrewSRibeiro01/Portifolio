import { Link } from "react-router-dom"
import { DisplayCard, Imagem, CardStyle, Card, Div, Margin, Titulo1, SubTitulo1, Espaço } from "../../Estilizações/Emain"
import eu from "../../Imagens/eu0.png"

const Sobre = () => {
    return (
        <Margin>
            <DisplayCard>
                <CardStyle>
                    <Titulo1>Um pouco sobre mim! <hr /></Titulo1>
                    <Div>
                        <Card>
                            <Imagem draggable="false" src={eu} class="card-img-top" alt="Eu" />
                            <SubTitulo1>
                                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.
                                <br /> <br />
                                Moro em Santa Isabel SP, faço faculdade de Gestão da tecnologia da informação
                                <br /> <br />
                                Estou sempre buscando por novos conhecimentos!
                            </SubTitulo1>
                        </Card>
                        <button style={{
                            background: "transparent",
                            borderColor: "rgba( 255, 255, 255, 0.18 )",
                            fontWeight: "500",
                            width: "200px",
                            borderRadius: "15px",
                            textDecoration: "none"
                        }} type="button"
                            className="btn btn-light btn-lg">
                            < Link to={"/contato"}
                                style={{
                                    textDecoration: "none",
                                    color: "#fff",
                                }}>
                                Projeto
                            </Link>
                        </button>
                        <Espaço />
                    </Div>
                </CardStyle>
            </DisplayCard>
        </Margin>
    )
}
export default Sobre