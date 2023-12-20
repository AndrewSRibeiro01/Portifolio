import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"
import NotFound from "../Pages/404/notFound.jsx";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<PortFolioPage />} />
            <Route exact path="/sobre" element={<PortFolioPage />} />
            <Route exact path="/competencias" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoute 