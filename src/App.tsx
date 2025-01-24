import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AppRoute from "./Routes/Routes";
import Navbar from "./components/Navbar/navbar";
import "./index.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    /* max-width: 1124px; */

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
    <div>
      <BrowserRouter>
        <GlobalStyle />
        < Navbar />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
};

export default App;
