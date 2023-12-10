import { useEffect, useRef, useState } from "react";
import WineComponent from "../components/wineComponent";
import api from "../common/json/api.json";

export default function WineApp() {
  const [wine, setWine] = useState([]);
  const [originalWine, setOriginalWine] = useState([]);
  const inputRef = useRef(null);
  const [searchBoxValue, setSearchBoxValue] = useState();

  //fetching Wine
  const getOriginalWine = async () => {
    const apiResp = await fetch(api[2]);
    const respJson = await apiResp.json();
    setOriginalWine(respJson);
  };

  //useEffect
  useEffect(() => {
    getOriginalWine();
  }, []);

  //handle search
  const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    const searchedValue = originalWine?.filter(
      (element) =>
        element?.winery?.toUpperCase()?.indexOf(srcValue?.toUpperCase()) !== -1
    );
    setWine(srcValue ? searchedValue : originalWine);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>Search</button>
      <br />
      <span>This is the search result for: {searchBoxValue}</span>
      <br />
      <div className="BeverageContainer">
        {wine?.map((e) => (
          <WineComponent {...e} />
        ))}
      </div>
    </div>
  );
}
