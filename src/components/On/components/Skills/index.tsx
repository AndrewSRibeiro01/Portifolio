import * as S from "./styled";
import RotatingIcon from "../RotatingIcon";
import TechnologyCarousel from "../TecnologyCarousel";

const Skills = () => {
    return (
        <S.DivSobre id="Habilidades">
            <S.Width>
                <S.Divhabilibades>
                    <S.H2>HABILIDADES</S.H2>
                    <S.Paragrafo>
                        Tenho conhecimento em React, TypeScript, JavaScript e Express.js, e estou sempre estudando novas tecnologias.
                    </S.Paragrafo>
                </S.Divhabilibades>
                <S.DivIconHabilidades>
                    <RotatingIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <S.DivIconReactjs>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" draggable="false" />
                    </S.DivIconReactjs>
                    <S.DivIconReactjs>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" draggable="false" />
                    </S.DivIconReactjs>
                </S.DivIconHabilidades>
                <S.FlexzIndex>
                    <S.H1Tecno> OUTRAS TECNOLOGIAS </S.H1Tecno>
                    <S.Margin />
                    <TechnologyCarousel />
                </S.FlexzIndex>
            </S.Width>
        </S.DivSobre>
    );
};

export default Skills;
