import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage"
import Contato from "../Pages/Contato/Contato";
import Main from "../components/Main/main";

const AppRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<PortFolioPage />} />
                <Route exact path="/sobre" element={<PortFolioPage />} />
                {/* <Route path="/main" element={<Main />} /> */}
                {/* <Route path="/contato" element={<Contato />} /> */}
            </Routes>
    )
}

export default AppRoute 