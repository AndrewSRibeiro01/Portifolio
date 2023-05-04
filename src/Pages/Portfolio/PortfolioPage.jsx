import styled from 'styled-components'
import Pesquisa from '../../components/Sobre/sobre'
import React from 'react'

const AppContainer = styled.div`
    width: 100vw;
    bottom:0px;
    margin-bottom: 100px;
`
const PortFolioPage = () => {
    return (
        <div>
            <AppContainer>
                <Pesquisa />
            </AppContainer>
        </div>
    )
}

export default PortFolioPage