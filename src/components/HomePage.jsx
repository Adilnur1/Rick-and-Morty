import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="header-container">
          <h1>
            Планируете сделать <span>принт?</span> Вы пришли по адресу
          </h1>
          <p>
            Reklem - только оптовая работа высокого качества с индивидуальным
            подходом. Работаем с 2008 года.
          </p>
          <NavLink to={"/card"}>
            <button className="btn">Перейти в каталог</button>
          </NavLink>
        </div>
      </main>
    </>
  );
};

export default HomePage;
