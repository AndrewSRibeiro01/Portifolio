import React from "react"
import * as S from "./styled"
import AOS from 'aos';
// import Map from "../.."
// import habilidades from "../../../../db/db";
import Experiencia from "../Skills";

const Main = () => {
    React.useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <S.TitleCurriculum>
            <S.DivPort id="Portfolio">
                {/* <S.H1Port>Portfólio</S.H1Port> */}
                {/* <S.NamePort>
                    {
                        habilidades.map((item, index) => (
                            <Map key={index}{...item} />
                        ))
                    }
                </S.NamePort> */}
                <div id="Experiências" />
                <Experiencia />
            </S.DivPort>
        </S.TitleCurriculum >
    )
}

export default Main