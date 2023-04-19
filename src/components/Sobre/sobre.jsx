import { Link } from "react-router-dom"
import { Background, H5, Imagem, CardStyle, Card, Div, Titulo1, SubTitulo1, Espaço } from "../../Estilizações/Emain"
import eu from "../../Imagens/eu0.png"
import React, { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css';


const Sobre = () => {
    useEffect(() => {
        AOS.init({
            duration: 3000
        });
    }, []);
    return (
        <CardStyle>
            <div style={{
                background: "#616161", width: "100%", color: "#cacaca"
            }}>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <h2 style={{ textAlign: "center", paddingTop: "15px" }}>Bem vindo!</h2>
                    <h4 style={{ width: "1050px", margin: "0 auto", paddingTop: "50px", lineHeight: 2 }}> Como desenvolvedor front-end, tenho o prazer de criar interfaces incríveis que tornam a experiência do usuário final agradável e intuitiva. Com habilidades em React, CSS e JavaScript, estou sempre procurando maneiras de melhorar minhas técnicas e habilidades para entregar sites e aplicativos web responsivos e altamente funcionais. Além disso, estou constantemente aprendendo novas tecnologias e ferramentas para manter-me atualizado e oferecer à minha equipe as soluções mais eficientes e modernas possíveis.</h4>
                    <br />
                    <br />
                </div>
                <div data-aos="fade-up">
                    <Background>
                        <div style={{ background: "transparent", width: "500px", height: "500px", margin: "0 auto", border: "solid 1px rgba(255, 255, 255, 0.18)", borderRadius: "5px 5px ", padding: "25px", boxShadow: "-20px -20px 30px #4a4a4a" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <H5>Idade: 24 anos</H5>
                                <H5>Nacionalidade: Brasileiro</H5>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <H5>Endereço: Guarulhos-SP</H5>
                                <H5>Freelance: Disponivel!</H5>
                            </div>
                            <H5 style={{}}><a href="https://wa.me/5511998571371?text=Oi,%20Andrew!" target="_blank" style={{ textDecoration: "none", color: "#cacaca" }}>Telefone: (11)998571371</a></H5>
                        </div>
                    </Background>
                </div>
            </div>
            <div style={{width: "85%", margin: "0 auto"}}>
                <div data-aos="fade-up">
                    <Titulo1><i> Um pouco sobre mim!</i> <hr /></Titulo1>
                    <Div>
                        <Card>
                            <Imagem draggable="false" src={eu} class="card-img-top" alt="Eu" />
                            <SubTitulo1>
                                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.
                                <br /> <br />
                                Faço faculdade de Gestão da tecnologia da informação, estou buscando uma oportunidade como Front-End
                            </SubTitulo1>
                        </Card>
                        <hr style={{ color: "#ffffff" }} />
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
                </div>
            </div>
        </CardStyle>
    )
}
export default Sobre