import { useState, useEffect } from "react";
import "./CardList.style.css";

const CardList = ({ xusers }) => {
  return (
    <div className="container">
      <div className="row">
        React
        <div className="flex-container">
          {xusers.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
