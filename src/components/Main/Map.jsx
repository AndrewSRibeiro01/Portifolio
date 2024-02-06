import { BotaoCurriculo, CardsPortfolio, CorIconeCode, DivFlex, DivFlexColumn, DivImg, DivMarginTop, FaCodeStyle, HashLinkStyle, MdLanguageStyle, P } from "../../Estilizações/Emain"
import { Div, DivMap, DivName } from "../../Estilizações/Emap"

const Map = ({ nome, imagem, texto, ir, link }) => {
    return (
        <DivMap>
            <Div>
                <DivName> {nome} </DivName>
                <DivImg background={imagem}>
                    <div>
                        <DivFlex>
                            <HashLinkStyle to={ir}>
                                <DivFlexColumn>
                                    <BotaoCurriculo>
                                        <FaCodeStyle />
                                    </BotaoCurriculo>
                                    <P>View Code</P>
                                </DivFlexColumn>
                            </HashLinkStyle>
                            <HashLinkStyle to={link}>
                                <CardsPortfolio>
                                    <CorIconeCode>
                                        <MdLanguageStyle />
                                    </CorIconeCode>
                                    <P>View Site</P>
                                </CardsPortfolio>
                            </HashLinkStyle>
                        </DivFlex>
                    </div>
                    <br />
                </DivImg>
            </Div >
            <DivMarginTop>
                {texto}
            </DivMarginTop>
        </DivMap >
    )
}

export default Map