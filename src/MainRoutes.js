import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CardName from "./components/CardName";
import NotFoundPage from "./components/NotFoundPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardName />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
