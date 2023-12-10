import { useState, useEffect, useRef } from "react";
import "../App.css";
import BeerComponent from "../components/beerComponent";
import api from "../common/json/api.json";

export default function BeerApp() {
  const [beer, setBeer] = useState([]);
  const [originalBeer, setOriginalBeer] = useState([]);
  const [searchBoxValue, setSearchBoxValue] = useState();
  const inputRef = useRef(null);

  // fetching beer prices
  const getBeer = async () => {
    try {
      const resp = await fetch(api[1]);
      const json = await resp.json();
      console.log("-----beer-------json", json);
      //beer = json;
      setOriginalBeer(json);
      setBeer(json);
    } catch (err) {
      console.log("Beer Api failed-------", err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  //handle search
  const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    const searchedValue = originalBeer?.filter(
      (element) =>
        element?.name?.toUpperCase()?.indexOf(srcValue?.toUpperCase()) !== -1
    );
    setBeer(srcValue ? searchedValue : originalBeer);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search</button>
      <br />
      <span>This is the search result for: {searchBoxValue}</span>
      <div className="BeverageContainer">
        {beer?.map((e) => (
          <BeerComponent name={e.name} price={e.price} image={e.image} />
        ))}
      </div>
    </div>
  );
}
