import { useState, useEffect } from "react";
import "../App.css";

export default function WineApp() {
  const [wine, setWine] = useState([]);

  //fetching wine details
  const getWine = async () => {
    try {
      const apiResp_wine = await fetch("https://api.sampleapis.com/wines/reds");
      const json_wineFetch = await apiResp_wine.json();
      console.log("-----wine-------json", json_wineFetch);
      setWine(json_wineFetch);
    } catch (err) {
      console.log("Wine Api failed-------", err);
    }
  };

  useEffect(() => {
    getWine();
  }, []);

  return (
    <div className="BeverageContainer">
      {wine?.map((e) => (
        <WineComponent {...e} />
      ))}
    </div>
  );
}

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
