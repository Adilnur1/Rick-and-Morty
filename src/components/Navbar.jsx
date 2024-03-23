import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logotype.png";
import sigh from "../images/button_icon.svg";
import basket from "../images/basket.png";
import button from "../images/button.png";

const Navbar = () => {
  return (
    <header className="container">
      <div className="navbar">
        <NavLink to={"/"}>
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>

        <div className="navbar-menu">
          <NavLink className="navbar-item" to={"/"}>
            Главная
          </NavLink>
          <NavLink className="navbar-item" to={"/card"}>
            Персонажи
          </NavLink>
        </div>
        <div className="navbar-icon">
          <img src={sigh} alt="" />
          <img src={basket} alt="" />
          <img src={button} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
