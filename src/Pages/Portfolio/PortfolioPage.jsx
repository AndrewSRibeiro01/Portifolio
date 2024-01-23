import styled from 'styled-components'
import Pesquisa from '../../components/Sobre/sobre'
import React from 'react'

const AppContainer = styled.div`
    width: 100vw;
`
const Background = styled.div`
    background-image: url("https://s3-alpha-sig.figma.com/img/82ab/f3cc/9ca7af5060215dd871d38f6629ead205?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yrkzq8M9J~2v0f5gPIIDyLuwjmdcCix0BWKKd6xHcJvSrQw4iKcktaoK~XgXh7CXz43O4Og1CSxbxeXOclf0sbLwrDk4A1lde3TAtENHZzYHUzAjR7Mua9nBLPlWFH7OFGJdOpu~ddYdUP6iG3hyccAItGCEr1GJyzt~LforeO~mh1alTb8Ff4ufOymRzm-7xzINWvG3OEx2qWbyFhKEcoDaLHb0mMCcEBFor7upaBY7Xkh2mGGhqp88X4bIwxsrvwPq5icajsIjX-0waKAO8M1VN~l1OYkOm7FwG~HnfwGc0qlSUgnJcaoEub616pcK4w-2VuFTCxw2pnZILazJZA__");
    background-size: 100%;
    background-attachment: local;
    /* background-position: 0%; */
    background-repeat: no-repeat;
`

const PortFolioPage = () => {
    return (
        <Background>
            {/* <img src={Fundo} style={{ position: 'absolute', width: "100%" }}></img> */}
            < AppContainer >
                <Pesquisa />
            </AppContainer >
        </Background >
    )
}

export default PortFolioPage