import AppRoute from '../src/Routes/Routes'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import { createGlobalStyle } from 'styled-components';
import "./index.css"
import Footer1 from './components/Footer/footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin:0px;
    max-width:1124;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  li {
    list-style: none;
  }
`
const App = () => {
  return (
    <div className="height" >
      <BrowserRouter>
        <GlobalStyle />
        <Navbar />
        <AppRoute />
      </BrowserRouter>
      <Footer1 />
    </div>
  )
}

export default App