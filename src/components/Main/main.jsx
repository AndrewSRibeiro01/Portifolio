import React, { useEffect } from "react"
import { curriculo, ferramenta } from "../assets"
import { TituloCurriculo, SubTituloCurriculo, Image, DivContainer } from "../../Estilizações/Emain"
import AOS from 'aos';
import Map from "./Map"
import habilidades from "../../db/db.jsx";
import styled from "styled-components";

const NamePortifolio = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 5px;
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
            <div data-aos="fade-up">
                <div id="Portifolio" style={{ display: "flex", flexDirection: "column", background: "#202020", width: "1440px", height: "1180px", flexShrink: 0 }}>
                    <H1Port>Portifólio</H1Port>
                    <NamePortifolio>
                        {
                            habilidades.map((item, index) => (
                                <Map key={index}{...item} />
                            ))
                        }
                    </NamePortifolio>
                </div>
            </div >
        </TituloCurriculo >
    )
}

export default Main