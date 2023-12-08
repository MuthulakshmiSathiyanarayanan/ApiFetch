import { useState, useMemo, useEffect } from "react";
import "../App.css";
//import App from "../App";
import HotCoffeeComponent from "../components/hotCoffeeComponent";

export default function HotCoffeeApp() {
  const [hotCoffee, setHotCoffee] = useState([]);

  // fetching hotCoffee list
  const getHotCoffee = async () => {
    try {
      const apiResp_hotcoffee = await fetch(
        "https://api.sampleapis.com/coffee/hot"
      );
      const json_hotCoffeeFetch = await apiResp_hotcoffee.json();
      console.log("-----hotCoffee-------json", json_hotCoffeeFetch);
      setHotCoffee(json_hotCoffeeFetch);
    } catch (err) {
      setHotCoffee({ sorry: "Some Server Errror" });
      alert("Something Error Happened, try after sometime");
      console.log("Hot Cofee Api failed-------", err);
    }
  };
  const memVal = useMemo(() => (async) => getHotCoffee(), [hotCoffee]);

  useEffect(() => {
    getHotCoffee();
  }, []);

  /* console.log(
    "-----------hotCoffee--------------",
    hotCoffee.length,
    typeof hotCoffee
  ); */

  return (
    <div>
      <>{memVal}</>
      <div className="BeverageContainer">
        {hotCoffee?.map((e) => (
          <HotCoffeeComponent {...e} />
        ))}
      </div>
    </div>
  );
}
