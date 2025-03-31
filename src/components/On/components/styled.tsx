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