import React, { useEffect } from "react"
import { curriculo, ferramenta } from "../assets"
import { TituloCurriculo, SubTituloCurriculo, Image, DivContainer } from "../../Estilizações/Emain"
import AOS from 'aos';
import Map from "./Map"
import habilidades from "../../db/db.js";

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <TituloCurriculo>
            <div data-aos="fade-up">
                <img src={curriculo} alt="curriculo" />
            </div>
            <div data-aos="fade-up" style={{ marginTop: "80px" }}>
                <SubTituloCurriculo>
                    Conhecimentos
                    <Image src={ferramenta} alt="ferramenta" />
                    Habilidades
                </SubTituloCurriculo>
            </div>
            <div data-aos="fade-up">
                <DivContainer>
                    {habilidades.map((item, index) => (
                        <Map key={index}{...item} />
                    ))}
                </DivContainer>
            </div>
        </TituloCurriculo >

    )
}

export default Main