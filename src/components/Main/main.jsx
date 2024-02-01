import React, { useEffect } from "react"
import { DivPortifolio, TituloCurriculo } from "../../Estilizações/Emain"
import AOS from 'aos';
import Map from "./Map"
import habilidades from "../../db/db.jsx";
import styled from "styled-components";
import Experiencia from "../Main/experiencia.jsx";

const NamePortifolio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    @media (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`
const H1Port = styled.h1`
    margin-bottom: 70px;
    color: #FFF;
    font-size: 36px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.72px;
    text-align: center;
    padding-top: 100px;
`

const Main = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <TituloCurriculo>
            <DivPortifolio id="Portfolio">
                <H1Port>Portfólio</H1Port>
                <NamePortifolio>
                    {
                        habilidades.map((item, index) => (
                            <Map key={index}{...item} />
                        ))
                    }
                </NamePortifolio>
                <div id="Experiências" />
                <Experiencia />
            </DivPortifolio>
        </TituloCurriculo >
    )
}

export default Main