import { useState, useEffect } from "react";
import "../App.css";

const WineComponent = (props) => {
  const { winery, location, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName">{winery}</span>
      {/* <span> {location}</span> */}
    </div>
  );
};
export default WineComponent;
