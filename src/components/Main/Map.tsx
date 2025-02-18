import { BotaoCurriculo, CardsPortfolio, CorIconeCode, DivFlex, DivFlexColumn, DivImg, DivMarginTop, FaCodeStyle, HashLinkStyle, MdLanguageStyle, P } from "../../Estilizações/Emain"
import { Div, DivMap, DivName } from "../../Estilizações/Emap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { spotifyImage } from "../../db/dbSpotify";

interface MapProps {
    imagem: string;
    texto: string;
    ir: string;
    link: string;
}

const Map: React.FC<MapProps> = ({ imagem, texto, ir, link }) => {
    return (
        <DivMap>
            <Div>
                <DivName />
                {link !== "" ? (
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
                ) : (<>
                    <Swiper
                        style={{ height: "100%" }}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        navigation={true}
                        modules={[Navigation]}
                        className="swiper-button-prev1"
                    >
                        {spotifyImage.map((item, index) =>
                            <SwiperSlide>
                                <DivImg background={item.image} >
                                    <div>
                                        <DivFlex key={index}{...item}>
                                            <HashLinkStyle to={ir}>
                                                <DivFlexColumn>
                                                    <BotaoCurriculo>
                                                        <FaCodeStyle />
                                                    </BotaoCurriculo>
                                                    <P>View Code</P>
                                                </DivFlexColumn>
                                            </HashLinkStyle>
                                            <CardsPortfolio>
                                                <CorIconeCode
                                                    style={{ opacity: 0.5, pointerEvents: "none" }}
                                                >
                                                    <MdLanguageStyle />
                                                </CorIconeCode>
                                                <P>View Site</P>
                                            </CardsPortfolio>
                                        </DivFlex>
                                    </div>
                                    <br />
                                </DivImg>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </>
                )}
            </Div >
            <DivMarginTop>
                {texto}
            </DivMarginTop>
        </DivMap >
    )
}

export default Map