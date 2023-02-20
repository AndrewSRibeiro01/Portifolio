import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"
import Curriculo from "../Pages/Curriculo/Curriculo";
import Contato from "../Pages/Contato/Contato";

const AppRoute = () => {
    return (
        <Routes>        
            <Route path="/" element={<PortFolioPage />} />
            <Route path="/curriculo" element={<Curriculo />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    )
}

export default AppRoute 