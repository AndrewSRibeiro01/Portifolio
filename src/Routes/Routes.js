import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"


const AppRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<PortFolioPage />} />
                <Route exact path="/sobre" element={<PortFolioPage />} />
            </Routes>
    )
}

export default AppRoute 