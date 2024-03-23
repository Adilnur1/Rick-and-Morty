import React from "react";
import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div className="home">
      <div className="header">
        <Navbar />
      </div>
      <MainRoutes />
    </div>
  );
};

export default App;
