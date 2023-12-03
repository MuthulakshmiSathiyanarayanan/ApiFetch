import { useState, useEffect } from "react";
import "../App.css";
import WineComponent from "../components/wineComponent";
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
