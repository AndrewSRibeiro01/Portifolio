import { Fragment } from "react"
import styled from "styled-components"
import { Display } from "../../Estilizações/CardStyle"
import { FotoContainer } from "../../Estilizações/Esobre"
import { LogoImg } from "../../Estilizações/Esobre"
import { AppContainer } from "../../Estilizações/Esobre"
import eu3 from "../../Imagens/eu4.png"
import eu4 from "../../Imagens/eu5.png"


const SubTitulo = styled.h3`
    @media (max-width: 450px) {
    font-size: 14px;
    }
    text-align: inherit;
    margon: 0px 20px 0 20px; 
    font-size: 16px;
    text-align: center;
    color: #FFF;
    font-weight: 400;
    margin-bottom: 40px;
    align-items: center;
    text-align: inherit;
`
const Titulo = styled.h2`
    @media (max-width: 450px) {
    font-size: 20px;
    }
    padding 20px;
    margin: 0 0 5px 0;
    color: #FFF;
    font-size: 29px;
    text-align: center;
    width: 100%;
    background: linear-gradient(to right,#fe5d26,#370d44)
    border-top-right-radius:11px;
    border-top-left-radius:11px;
`
const DisplayCard = styled.div`
    @media (max-width: 768px) {
        width: 100px;
        }
    justify-content: center;
    display:flex;
    max-width: 100%;
`
const Margin = styled.div`
    margin-top: 100px;
`
const CardStyle = styled.div`
    @media (max-width: 768px){
    width: 100px;
    margin: 0 2px 0 0px;
    }
    text-align: inherit;
    margin: 0 15px 0 0;
    border-radius: 15px;
    width: 680px;
    heigth: 300px;
    margin: 30px;
    background: linear-gradient(to right,#fe5d26,#370d44)
`
const Imagem = styled.img`
    height: 320px;  
    border-radius: 10px;
    margin: 20px;

`
const Card = styled.div`
    display:flex;
    align-items: center;
    background: linear-gradient(to right,#fe5d26,#370d44);
    text-align: initial;
`
const CardBody = styled.div`
    background: linear-gradient(to right,#fe5d26,#370d44)
    border-bottom-right-radius:11px;
    border-bottom-left-radius:11px;
`

const Div =styled.div`
    text-align: center;
`


const Sobre = () => {
    return (
        <Margin>
            {/* <FotoContainer>
                <Titulo>Um pouco sobre mim!</Titulo>
            </FotoContainer> */}
            {/* <SubTitulo>
                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.<br /> Moro em Santa Isabel SP, faço faculdade de Gestão da tecnologia da informação <br /> Estou sempre buscando por novos conhecimentos!
            </SubTitulo> */}


            <DisplayCard>
                <CardStyle class="card">
                    <Titulo>Um pouco sobre mim! <hr /> </Titulo>
                    <Div>
                        <Card>
                            <Imagem src={eu3} class="card-img-top" alt="Eu" />
                            <SubTitulo>
                                Me chamo Andrew, tenho 24 anos, trabalho como Quality Assurance na empresa ArsenalCar| Digigrow.
                                <br /> <br />
                                Moro em Santa Isabel SP, faço faculdade de Gestão da tecnologia da informação
                                <br /> <br />
                                Estou sempre buscando por novos conhecimentos!
                            </SubTitulo>

                        </Card>
                        <button style={{fontWeight: "500", width: "200px", borderRadius: "15px", textDecoration: "none"}} type="button" class="btn btn-light btn-lg"> < a href="/contato" style={{textDecoration: "none", color: "black"}}> Contato</a></button>
                    </Div>
                    <CardBody>
                        <div class="card-body">
                            <div class="card-text" />
                        </div>
                    </CardBody>
                </CardStyle>
            </DisplayCard>

            {/* <AppContainer>
                <LogoImg src={eu3} alt="Eu" />
            </AppContainer> */}
        </Margin>

    )
}

export default Sobre