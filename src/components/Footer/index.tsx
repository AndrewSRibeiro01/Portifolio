import * as S from "./styled"
import Andrew from "../assets/img/Andrew.svg"
import { ContactInfo } from "./components/ContactInfo";
import { CurriculumButton } from "./components/CurriculumButton";
import { FooterNavigation } from "./components/FooterNavigation";
import { SocialLinks } from "./components/SocialLinks";

const Footer = () => {
    return (
        <S.AppContainer1 id="Contato">
            <S.H1>
                <p>
                    <img src={Andrew} alt="Andrew" draggable="false" />
                </p>
            </S.H1>
            <S.MarginFooter>
                <S.H1>CONTATO</S.H1>
                <ContactInfo />
                <SocialLinks />
                <CurriculumButton />
            </S.MarginFooter>
            <FooterNavigation />
        </S.AppContainer1>
    );
};

export default Footer;
