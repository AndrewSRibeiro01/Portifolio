import styled from 'styled-components'

export const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: center
`
export const LogoImage = styled.img`
    margin-right: 10px;
    height: 25px;
    margin-top: 13px; 
`
export const Portifólio = styled.p`
    @media (max-width: 450px) {
    font-size: 25px;
    }
    @media (min-width: 1448px) {
        font-size: 35px;
    }
    font-weight: bold;
    color: #3c3c3c;
`