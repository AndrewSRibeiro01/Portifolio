import React from "react";
import * as S from "./styled";
import Footer from "../../Footer";
import Curriculo from "../../../Pages/Curriculo/components/Curriculo/Curriculo";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Habilidades from "./Skills";
import SocialIcons from "./SocialIcons";
import Introduction from "./Introduction";

const Sobre = () => {
    React.useEffect(() => {
        AOS.init({ duration: 3000 });
    }, []);

    return (
        <>
            <S.BackgroundDiv id="Home">
                <S.DivMain>
                    <S.DivFlex>
                        <SocialIcons />
                        <Introduction />
                    </S.DivFlex>
                </S.DivMain>
                <S.Background style={{ height: "100%" }}>
                    <Habilidades />
                </S.Background>
            </S.BackgroundDiv>
            <Curriculo />
            <Footer />
        </>
    );
};

export default Sobre;
