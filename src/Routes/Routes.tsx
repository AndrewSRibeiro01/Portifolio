import { Route, Routes } from "react-router-dom";
import React from "react";
import PortFolioPage from "../Pages/Portfolio/PortfolioPage";
import NotFound from "../Pages/404/NotFound";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PortFolioPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
