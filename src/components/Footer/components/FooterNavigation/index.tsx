import * as S from "./styled";

export const FooterNavigation = () => (
    <S.DivFooterHome>
        <S.H1>HOME</S.H1>
        <S.P><S.HashLinkStyled to="/#Home">Início</S.HashLinkStyled></S.P>
        <S.P><S.HashLinkStyled to="/#Habilidades">Habilidades</S.HashLinkStyled></S.P>
        <S.P><S.HashLinkStyled to="/#Portfolio">Projetos</S.HashLinkStyled></S.P>
        <S.P><S.HashLinkStyled to="/#Contatos">Contatos</S.HashLinkStyled></S.P>
    </S.DivFooterHome>
);