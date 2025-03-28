import { HashLink } from "react-router-hash-link";

import wpp from "../../../assets/img/whatsapp (1).png";
import linkedin from "../../../assets/img/LinkedIn.svg";
import gtHub from "../../../assets/img/Github.svg";
import * as S from "./styled";

export const SocialLinks = () => (
    <S.SocialGrid>
        <S.DivWpp>
            <HashLink to="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                <S.ImgWpp src={wpp} alt="WhatsApp" />
            </HashLink>
        </S.DivWpp>
        <HashLink to="https://www.linkedin.com/in/andrew-souza-ab776623b/">
            <S.GridLink src={linkedin} alt="LinkedIn" />
        </HashLink>
        <HashLink to="https://github.com/AndrewSRibeiro01">
            <S.GridLink src={gtHub} alt="GitHub" />
        </HashLink>
    </S.SocialGrid>
);
