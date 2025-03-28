import styled from "styled-components";


export const BackgroundDiv = styled.div`
    width: 100%;
    color: #cacaca;
`

export const DivMain = styled.div`
    width: 85%;
    margin: 0 auto;
    cursor: default;
`

export const DivFlex = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15rem;
    justify-content: center;
`

export const DivIcons = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
        width: 100px;
        display: none;
    }
`

export const DivWhatsApp = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 900px) {
        width: 46px;
    }
`

export const DisplayIconWhats = styled.div`
    width: 100%;
    display: flex;
`

export const DivBackgroundWhats = styled.div`
    background: white;
    border-radius: 50%;
    padding: 4px;
    margin: 4px; 

`

export const DivHome = styled.div`
    margin-left: 60px;
    margin: 0 0 0 20px;
    @media (max-width: 900px) {
        margin: 0;
        padding: 0;
    }
`

export const DivIconHabilidades = styled.div`
    display: flex;
    flex-Direction: row;
    justify-Content: space-evenly;
`

export const DivIconReactjs = styled.div`
    width: 150px;
    height: 150px;
    @media (max-width: 900px) {
        width: 80px;
    }
`

export const DivSobreMim = styled.div`
    display: flex;
    width: 1062px;
`

export const DivImg = styled.div`
    display: flex;
    align-Items: center;
    @media (max-width: 900px) {
        display: none;
    }
`

export const DivStyleIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Divhabilibades = styled.div`
    padding: 60px;
    @media (max-width: 900px) {
        padding: 10px;
    }
`

export const H1Tecnologia = styled.h1`
    color: #FFF;
    text-Align: center;
    font-Size: 20px;
    font-Style: normal;
    font-Weight: 800;
    line-Height: normal;
    letter-Spacing: 0.6px;
    display: flex;
    justify-Content: center;
    margin-Top: 60px; 
`

export const SubTitulo1 = styled.h2`
    @media (max-width: 450px) {
    padding: 0;
    font-size: 15px;
    margin: 0 auto;
    }
    @media (min-width: 451px) {
    padding: 0;
    font-size: 20px;
    margin: 0 auto;
    }
    @media (min-width: 1448px) {
    font-size: 23px;
    margin: 0 auto;
    }
    padding: 50px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 40px;
`

export const Card = styled.div`
        @media (max-width: 768px){
        flex-direction: column;
        }
        padding-bottom: 20px;
`

export const Imagem = styled.img`
     @media (min-width: 320px){
        height: 100px;
        margin: 10px;
        box-shadow: none;
    }
    @media (min-width: 768px){
        height: 200px;
    }
    @media (min-width: 1064px){
        height: 250px;
    }
    @media (min-width: 1448px){
        height: 300px;
    }
    border-radius: 160px;
`

export const Div = styled.div`
    text-align: initial;
`

export const DivSobre = styled.div`
    display: flex;
    border-radius: 35px 35px 0px 0px;
    background: #292929;
    color: white;
    margin: 0 auto;
    height: 750px;
    margin-top: 150px;
    @media (max-width: 500px) {
        height: 650px;
    }
`

export const Background = styled.div`
@media (max-width: 768px) {
    height: 480px;
    padding: 10px;
}
@media (min-width: 769px) {
    height: 550px;
}
    display: flex;
    padding: 60px 60px 0 60px ;
    width: 1182px;
    height: 100%;
    margin: 0 auto;
`

export const Title = styled.h1`
    color: white;
    text-align: initial;
    padding: 15% 0 1%;
    width: 100%;
    @media (max-width: 900px) {
        margin-top: 50px;
    }
`

export const H2 = styled.h2`
    cursor: default;
    line-height: 7;
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.72px;
    font-size: 36px;
    @media (max-width: 900px) {
    line-height: 3;
    font-size: 20px;
    }  
`

export const Espaço = styled.div`
    height: 50px;
`

export const Img = styled.img`
    width: 50px;
    margin: 20px;

    @media (max-width: 900px) {
        width: 30px;
    }
`

export const Paragrafo = styled.p`
    text-align: center;
    color: #E0E0E0;
    font-size: 20px;
    font-style: normal;
    font-Weight: 500;
    line-Height: normal;
    cursor: default;
    @media (max-width: 900px) {
        font-size: 15px;
    }
`

export const Iam = styled.p`
    width: 599px;
    height: 130px;
`

export const Width = styled.div`
    width: 100%;
`

export const FlexzIndex = styled.div`
    flex-direction: column;
    cursor: default;
    display: flex;
    z-index: 1;
`

export const Margin = styled.div`
    margin-left: 20px;
    margin-top: 40px;
`

// export const DivImg = styled.div<{ background: string }>`
//   background-image: url(${(props) => props.background});
//         height: 100%;
//         background-size: cover;
//         >p{
//             display: none;
//         }
//         >div{
//                 display: none;
//                 height: 100%;
//                 background-color: #02020280;
//             }
//         :hover{
//             background-color: #020202;
//             >div{
//                 display: flex;
//                 flex-direction: row;
//                 align-items: center;
//                 justify-content: center;
//                 gap: 15px;
//                 background-color: #02020280;
//             }
//     }
// `

// export const DivFlex = styled.div`
//     display: flex;

// `
