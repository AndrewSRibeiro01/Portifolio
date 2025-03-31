import Typewriter from "typewriter-effect";
import * as S from "./styled";
import eu from "../../../assets/img/perfil.jpeg";

const Introduction = () => (
    <S.DivIam>
        <S.DivHome>
            <S.Title>
                Olá, me chamo <span className="gradientText">Andrew</span>!
            </S.Title>
            <S.Div>
                <S.Card>
                    <S.SubTitle className="gradientText">
                        <Typewriter options={{
                            autoStart: true, loop: true, strings: ["Full Stack Developer",
                                "Seja bem-vindo!",
                                "Criando experiências incríveis 🚀",
                                "React | Node.js | TypeScript 💻",
                                "Transformando ideias em código!"]
                        }} />
                    </S.SubTitle>
                </S.Card>
                <S.Iam>
                    Tenho 26 anos e sou um desenvolvedor de software Full Stack, contendo conhecimento nas principais habilidades como React, TypeScript, JavaScript e Express.js. Estou sempre procurando aprimorar minhas técnicas e habilidades para entregar sites e aplicativos Web Responsivos e altamente funcionais.
                </S.Iam>
                <S.Gap />
            </S.Div>
        </S.DivHome>
        <S.DivImg>
            <S.Image src={eu} alt="Eu" draggable="false" />
        </S.DivImg>
    </S.DivIam>
);

export default Introduction;
