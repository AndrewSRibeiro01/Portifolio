/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components"
import { Div, DivMap, DivName } from "../../Estilizações/Emap"
import { MdLanguage } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const DivImg = styled.div`
        background-image: url(${props => props.background});
        height: 100%;
        background-size: cover;
        >p{
            display: none;
        }
        >div{
                display: none;
                height: 100%;
                background-color: #02020280;
            }
        :hover{
            background-color: #020202;
            >div{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 15px;
                background-color: #02020280;
            }
    }
`
const FaCodeStyle = styled(FaCode)`
    color: black;
    font-weight: 700;
    font-size: 20px;
`
const MdLanguageStyle = styled(MdLanguage)`
    color: black;
    font-weight: 700;
    font-size: 30px;
`
const P = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
`
const HashLinkStyle = styled(HashLink)`
  text-decoration: none;
  color: white;
  :hover{
    color: white;
  }
`

const Map = ({ nome, imagem, texto, ir, link }) => {
    return (
        <DivMap>
            <Div>
                <DivName> {nome} </DivName>
                <DivImg background={imagem}>
                    <div>
                        <div style={{ display: "flex" }}>
                            <HashLinkStyle to={ir}>
                                <div style={{ display: "flex", margin: "20px", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ background: "white", width: "36px", height: "36px", borderRadius: "25px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                        <FaCodeStyle />
                                    </div>
                                    <P>View Code</P>
                                </div>
                            </HashLinkStyle>
                            <HashLinkStyle to={link}>
                                <div style={{ display: "flex", margin: "20px", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ background: "white", width: "36px", height: "36px", borderRadius: "25px", alignItems: "center", display: "flex", justifyContent: "center" }}>
                                        <MdLanguageStyle />
                                    </div>
                                    <P>View Site</P>
                                </div>
                            </HashLinkStyle>
                        </div>
                    </div>
                    <br />
                </DivImg>
            </Div >
            <div style={{ marginTop: "20px", fontWeight: 700, fontSize: "24px" }}> {texto} </div>
        </DivMap >
    )
}

export default Map