import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AppRoute from "./Routes/Routes";
import Navbar from "./components/Navbar/components/NavBar";

import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }

  li {
    list-style: none;
  }
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      < Navbar />
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
