import * as S from "../../Estilizações/Efooter"
import Andrew from "../assets/img/Andrew.svg"
import { ContactInfo } from "./components/ContactInfo";
import { CurriculumButton } from "./components/CurriculumButton";
import { FooterNavigation } from "./components/FooterNavigation";
import { SocialLinks } from "./components/SocialLinks";
import { H1 } from "./styled";


const Footer = () => {
    return (
        <S.AppContainer1 id="Contato">
            <H1>
                <p>
                    <img src={Andrew} alt="Andrew" draggable="false" />
                </p>
            </H1>
            <S.MarginFooter>
                <H1 style={{ marginBottom: "40px" }}>CONTATO</H1>
                <ContactInfo />
                <SocialLinks />
                <CurriculumButton />
            </S.MarginFooter>
            <FooterNavigation />
        </S.AppContainer1>
    );
};

export default Footer;
