import { useState, useMemo, useEffect } from "react";
import "../App.css";
//import App from "../App";
import HotCoffeeComponent from "../components/hotCoffeeComponent";

export default function HotCoffeeApp() {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [counter, setCounter] = useState(10); //tried a sample  dummy fun for useMemo
  const [arr, setArr] = useState([1, 2, 35, 3]);
  function showMax() {
    console.log("changing arr");
    return;
    <>Math.max(...arr)</>;
  }
  const memoValue = useMemo(() => showMax(), [arr]); //arr is the dependency but no update fun has been written
  // fetching hotCoffee list
  const getHotcoffee = async () => {
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

  useEffect(() => {
    getHotcoffee();
  }, []);

  /* console.log(
    "-----------hotCoffee--------------",
    hotCoffee.length,
    typeof hotCoffee
  ); */

  return (
    <div>
      {/* rendering the dummy functions*/}
      <button onClick={() => setCounter(counter + 1)}>Counter </button>
      <span> {counter}</span>
      <>{memoValue}</>
      <div className="BeverageContainer">
        {hotCoffee?.map((e) => (
          <HotCoffeeComponent {...e} />
        ))}
      </div>
    </div>
  );
}
