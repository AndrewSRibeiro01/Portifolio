import styled from "styled-components";

interface TituloProps {
    cor?: string;
    tamanhoFonte?: string;
    alinhamento?: string;
};

export const Titulo = styled.h2<TituloProps>`
  width: 100%;
  padding: 30px 0;
  background-color: var(--color);
  color: ${(props) => props.cor || "#000"};
  font-size: ${(props) => props.tamanhoFonte || "18px"};
  text-align: ${(props) => props.alinhamento || "center"};
  margin: 0;
`;
