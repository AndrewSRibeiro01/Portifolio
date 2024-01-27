import React, { useEffect } from "react"
import { DivPortifolio, TituloCurriculo } from "../../Estilizações/Emain"
import AOS from 'aos';
import Map from "./Map"
import habilidades from "../../db/db.jsx";
import styled from "styled-components";

const NamePortifolio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    @media (max-width: 900px) {
        width: 100%;
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

    const cardsToShow = window.innerWidth < 900 ? 4 : 6;

    return (
        <TituloCurriculo>
            <DivPortifolio id="Portifolio">
                <H1Port>Portifólio</H1Port>
                <NamePortifolio>
                    {
                        habilidades.slice(0, cardsToShow).map((item, index) => (
                            <Map key={index}{...item} />
                        ))
                    }
                </NamePortifolio>
            </DivPortifolio>
        </TituloCurriculo >
    )
}

export default Main