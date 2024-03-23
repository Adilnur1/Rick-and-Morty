import React from "react";
import { Link } from "react-router-dom";
import img from "../images/not.png";

const NotFoundPage = () => {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage-header">
        <Link className="link" to="/">
          Главная
        </Link>
        <div className="not">
          <span>Ошибка 404</span>
        </div>
        <div className="not-img">
          <img src={img} alt="" />
          <h5>Страница не найдена</h5>
          <p>Проверьте правильность адреса</p>
          <button className="btn">На главную</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
