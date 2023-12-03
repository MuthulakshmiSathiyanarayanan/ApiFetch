import { useState, useEffect } from "react";
import "../App.css";
export default function BeerApp() {
  const [beer, setBeer] = useState([]);

  // fetching beer prices
  const getBeer = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/beers/ale");
      const json = await resp.json();
      console.log("-----beer-------json", json);
      //beer = json;
      setBeer(json);
    } catch (err) {
      console.log("Beer Api failed-------", err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div className="BeverageContainer">
      {beer?.map((e) => (
        <BeerComponent name={e.name} price={e.price} image={e.image} />
      ))}
    </div>
  );
}
const BeerComponent = (props) => {
  const { name, price, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName">{name}</span>
    </div>
  );
};
