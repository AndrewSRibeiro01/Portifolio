import { HashLink } from "react-router-hash-link";
import gtHub from "../../../assets/img/Github.svg";
import * as S from "./styled";
import * as Img from "../../../assets";

const SocialIcons = () => (
    <S.DivIcons>
        <S.DivWhatsApp>
            <S.DisplayIconWhats>
                <S.DivBackgroundWhats>
                    <HashLink to="https://wa.me/5511998571371?text=Ol%C3%A1%2C+tudo+bem%3F+">
                        <img style={{ width: "20px", margin: "5px" }} src={Img.whatsApp} alt="WhatsApp" draggable="false" />
                    </HashLink>
                </S.DivBackgroundWhats>
            </S.DisplayIconWhats>
        </S.DivWhatsApp>
        <S.DivStyleIcons>
            <HashLink to="https://www.linkedin.com/in/andrew-souza-ab776623b/">
                <img style={{ width: "36px", margin: "5px" }} src={Img.linkedin} alt="LinkedIn" draggable="false" />
            </HashLink>
        </S.DivStyleIcons>
        <S.DivStyleIcons>
            <HashLink to="https://github.com/AndrewSRibeiro01">
                <img style={{ width: "36px", margin: "5px" }} src={gtHub} alt="GitHub" draggable="false" />
            </HashLink>
        </S.DivStyleIcons>
    </S.DivIcons>
);

export default SocialIcons;
