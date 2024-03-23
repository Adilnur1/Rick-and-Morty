import React, { useEffect, useState } from "react";
import { API } from "../helpers/const";
import axios from "axios";

const CardName = () => {
  const [card, setCard] = useState([]);
  const getUsers = async () => {
    const { data } = await axios(API);
    setCard(data.results);
  };
  console.log(card);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h1 className="h1">Персонажи</h1>
      <div className="card-container">
        {card.map((elem) => (
          <div key={elem.id}>
            <h5 className="card">{elem.name}</h5>
            {/* Картинки не отбражаются */}
            <img src={elem.url} alt={elem.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardName;
