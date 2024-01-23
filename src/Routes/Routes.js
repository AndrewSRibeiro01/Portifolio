import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"
// import { NotFound404 } from "../components/404/notFound.jsx";
import { HashRouter } from "react-router-dom";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<PortFolioPage />} />
            <Route exact path="/sobre" element={<PortFolioPage />} />
            <Route exact path="/#Habilidades" element={<PortFolioPage />} />
            {/* <Route exact path="/competencias" element={<NotFound404 />} /> */}
        </Routes>
    )
}

export default AppRoute 