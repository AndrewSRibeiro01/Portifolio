import styled from 'styled-components'
import Navbar from '../../components/Navbar/navbar'
import Main from '../../components/Main/main'
import Pesquisa from '../../components/Sobre/sobre'
import React from 'react'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #520000 35%, #ff0000  165%);
`

const PortFolioPage = () => {
    return (
        <AppContainer>
            <Navbar />
            <Pesquisa />
        </AppContainer>
    )
}

export default PortFolioPage