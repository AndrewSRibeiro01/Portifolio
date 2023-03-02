import styled from 'styled-components'
import Pesquisa from '../../components/Sobre/sobre'
import React from 'react'
import Footer from '../../components/Footer/footer'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    bottom:0px;
`
const PortFolioPage = () => {
    return (
        <div>
            <AppContainer>
                <Pesquisa />
            </AppContainer>
            <Footer />
        </div>
    )
}

export default PortFolioPage