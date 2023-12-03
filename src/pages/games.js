import { useState, useEffect } from "react";
import "../App.css";

const GamesComponent = (props) => {
  const { id, genre, name } = props;
  return (
    <div className="mydiv">
      <>{id}</>
      <span className="productName">{name}</span>{" "}
      {genre?.map((e) => (
        <span>{e}</span>
      ))}
    </div>
  );
};
export default GamesComponent;
