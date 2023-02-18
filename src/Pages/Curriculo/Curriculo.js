import styled from 'styled-components'
import Main from '../../components/Main/main'
import React from 'react'
import { Footer1 } from '../../components/Footer/footer'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    bottom:0px;
    background-image: linear-gradient(90deg, #520000 35%, #ff0000  165%);
`

const Curriculo = () => {
    return (
        <AppContainer>
            <Main />
            <Footer1 />
        </AppContainer>
    )
}

export default Curriculo