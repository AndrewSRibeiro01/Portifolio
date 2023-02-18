import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"
import Curriculo from "../Pages/Curriculo/Curriculo";

const AppRoute = () => {
    return (
        <Routes>         
            <Route path="/" element={<PortFolioPage />} />
            <Route path="/curriculo" element={<Curriculo />} />
        </Routes>
    )
}

export default AppRoute 