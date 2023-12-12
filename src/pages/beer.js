import { useState, useEffect, useRef, useContext } from "react";
import "../App.css";
import BeerComponent from "../components/beerComponent";
import api from "../common/json/api.json";
import { SearchKeyContext } from "../App";

export default function BeerApp() {
  const [beer, setBeer] = useState([]);
  const [originalBeer, setOriginalBeer] = useState([]);
  const [srcCtxVal, setSrcCtxValue] = useContext(SearchKeyContext);

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
  useEffect(() => {
    handleContextSearch();
  }, [srcCtxVal]);

  //handle search
  const handleContextSearch = (defaultValue = originalBeer) => {
    const searchedValue = defaultValue?.filter(
      (element) =>
        element?.name?.toUpperCase()?.indexOf(srcCtxVal?.toUpperCase()) !== -1
    );
    setBeer(srcCtxVal ? searchedValue : originalBeer);
  };

  return (
    <div>
      <div className="BeverageContainer">
        {beer?.map((e) => (
          <BeerComponent name={e.name} price={e.price} image={e.image} />
        ))}
      </div>
    </div>
  );
}
