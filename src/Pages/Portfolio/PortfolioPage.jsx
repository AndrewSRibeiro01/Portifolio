import styled from 'styled-components'
import Pesquisa from '../../components/Sobre/sobre'
import React from 'react'
import Footer from '../../components/Footer/footer'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    bottom:0px;
    background-image: linear-gradient(90deg, #520000 35%, #ff0000  165%);
`
const PortFolioPage = () => {
    return (
        <AppContainer>
            <Pesquisa />
            <div>
                <Footer />
            </div>
        </AppContainer>
    )
}

export default PortFolioPage