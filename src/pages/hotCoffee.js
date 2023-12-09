import { useState, useEffect, useRef } from "react";
import "../App.css";
//import App from "../App";
import HotCoffeeComponent from "../components/hotCoffeeComponent";
import api from "../common/json/api.json";

export default function HotCoffeeApp() {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [originalHotCoffee, setOriginalHotCoffee] = useState([]);
  const [searchBoxValue, setSearchBoxValue] = useState("");
  const inputRef = useRef(null);
  const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    const searchedValue = originalHotCoffee?.filter(
      (e) => e?.title?.toLowerCase()?.indexOf(srcValue) !== -1
    );
    setHotCoffee(srcValue ? searchedValue : originalHotCoffee);
    setSearchBoxValue(srcValue);
  };

  // fetching hotCoffee list
  const getHotCoffee = async () => {
    try {
      const apiResp_hotcoffee = await fetch(api[0]);
      const json_hotCoffeeFetch = await apiResp_hotcoffee.json();
      console.log("-----hotCoffee-------json", json_hotCoffeeFetch);
      setHotCoffee(json_hotCoffeeFetch);
      setOriginalHotCoffee(json_hotCoffeeFetch);
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
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search</button>
      <br />
      <span>This is the search result for: {searchBoxValue}</span>
      <div className="BeverageContainer">
        {hotCoffee?.map((e) => (
          <HotCoffeeComponent {...e} />
        ))}
      </div>
    </div>
  );
}
