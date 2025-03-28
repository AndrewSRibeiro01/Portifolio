import * as S from "../../Estilizações/Emain"
import * as E from "../../Estilizações/Emap"
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
        <E.DivMap>
            <E.Div>
                <E.DivName />
                {link !== "" ? (
                    <S.DivImg background={imagem}>
                        <div>
                            <S.DivFlex>
                                <S.HashLinkStyle to={ir}>
                                    <S.DivFlexColumn>
                                        <S.BotaoCurriculo>
                                            <S.FaCodeStyle />
                                        </S.BotaoCurriculo>
                                        <S.P>View Code</S.P>
                                    </S.DivFlexColumn>
                                </S.HashLinkStyle>
                                <S.HashLinkStyle to={link}>
                                    <S.CardsPortfolio>
                                        <S.CorIconeCode>
                                            <S.MdLanguageStyle />
                                        </S.CorIconeCode>
                                        <S.P>View Site</S.P>
                                    </S.CardsPortfolio>
                                </S.HashLinkStyle>
                            </S.DivFlex>
                        </div>
                        <br />
                    </S.DivImg>
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
                                <S.DivImg background={item.image} >
                                    <div>
                                        <S.DivFlex key={index}{...item}>
                                            <S.HashLinkStyle to={ir}>
                                                <S.DivFlexColumn>
                                                    <S.BotaoCurriculo>
                                                        <S.FaCodeStyle />
                                                    </S.BotaoCurriculo>
                                                    <S.P>View Code</S.P>
                                                </S.DivFlexColumn>
                                            </S.HashLinkStyle>
                                            <S.CardsPortfolio>
                                                <S.CorIconeCode
                                                    style={{ opacity: 0.5, pointerEvents: "none" }}
                                                >
                                                    <S.MdLanguageStyle />
                                                </S.CorIconeCode>
                                                <S.P>View Site</S.P>
                                            </S.CardsPortfolio>
                                        </S.DivFlex>
                                    </div>
                                    <br />
                                </S.DivImg>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </>
                )}
            </E.Div >
            <S.DivMarginTop>
                {texto}
            </S.DivMarginTop>
        </E.DivMap >
    )
}

export default Map