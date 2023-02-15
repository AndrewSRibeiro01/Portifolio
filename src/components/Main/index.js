import styled from "styled-components"

const TituloCurriculo = styled.section`
color: #fff;
display: flex;
justify-content: center;
margin-top: 20vh;
font-size: 35px;
`

function Main() {
    return (
        <div>
        <TituloCurriculo>
            <p>Curriculo</p>
        </TituloCurriculo>
        </div>
    )
}

export default Main