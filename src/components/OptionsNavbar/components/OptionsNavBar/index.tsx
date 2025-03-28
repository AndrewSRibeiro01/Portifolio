import * as S from "./styled"

const OptionsHeader = () => {
  return (
    <S.Options>
      <S.On>
        <S.HashLink1 to="/#Home">Home</S.HashLink1>
        <S.HashLink1 to="/#Habilidades">Habilidades</S.HashLink1>
        <S.HashLink1 to="/#Portfolio">Projetos</S.HashLink1>
        <S.HashLink1 to="/#Experiências">Experiências</S.HashLink1>
        <S.HashLink2 to="/#Contato">Contato</S.HashLink2>
      </S.On>
    </S.Options >
  )
}

export default OptionsHeader;