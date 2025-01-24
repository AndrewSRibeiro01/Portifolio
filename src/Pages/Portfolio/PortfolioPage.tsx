import styled from 'styled-components'
import Pesquisa from '../../components/Sobre/sobre'

const AppContainer = styled.div`
    width: 100vw;
`
const Background = styled.div`
    width: 1920px;
    margin: 0 auto;
    background-image: url("https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg");
    background-size: 100%;
    background-attachment: local;
    background-repeat: no-repeat;
    height: 1000px;
    padding-top: 1px;
`

const PortFolioPage = () => {
    return (
        <Background>
            < AppContainer >
                <Pesquisa />
            </AppContainer >
        </Background >
    )
}

export default PortFolioPage