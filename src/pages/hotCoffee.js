import { useState, useEffect } from "react";
import "../App.css";
//import App from "../App";
import HotCoffeeComponent from "../components/hotCoffeeComponent";
import api from "../common/json/api.json";
import SearchHotCoffee from "./searchHotCoffee";

export default function HotCoffeeApp() {
  const [hotCoffee, setHotCoffee] = useState([]);

  // fetching hotCoffee list
  const getHotCoffee = async () => {
    try {
      const apiResp_hotcoffee = await fetch(api[0]);
      const json_hotCoffeeFetch = await apiResp_hotcoffee.json();
      console.log("-----hotCoffee-------json", json_hotCoffeeFetch);
      setHotCoffee(json_hotCoffeeFetch);
    } catch (err) {
      setHotCoffee({ sorry: "Some Server Errror" });
      alert("Something Error Happened, try after sometime");
      console.log("Hot Cofee Api failed-------", err);
    }
  };

  useEffect(() => {
    getHotCoffee();
  }, []);

  console.log(
    "-----------hotCoffee--------------",
    hotCoffee.length,
    typeof hotCoffee
  );

  return (
    <div>
      <SearchHotCoffee />
      {/*  <div className="BeverageContainer">
        {hotCoffee?.map((e) => (
          <HotCoffeeComponent {...e} />
        ))}
      </div> */}
    </div>
  );
}
