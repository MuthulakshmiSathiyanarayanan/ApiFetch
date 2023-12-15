import { useEffect, useState, useContext } from "react";
import WineComponent from "../components/wineComponent";
import api from "../common/json/api.json";
import { SearchKeyContext } from "../App";

export default function WineApp() {
  const [wine, setWine] = useState([]);
  const [originalWine, setOriginalWine] = useState([]);
  const [srcCtxValue] = useContext(SearchKeyContext);
  //fetching Wine
  const getWine = async () => {
    const apiResp = await fetch(api[2]);
    const respJson = await apiResp.json();
    setOriginalWine(respJson);
    setWine(respJson);
    handleContextSearch(respJson);
  };

  //useEffect
  useEffect(() => {
    getWine();
  }, []);

  useEffect(() => {
    handleContextSearch();
  }, [srcCtxValue]);

  //handle contextsearch
  const handleContextSearch = (defaultValue = originalWine) => {
    const searchedValue = defaultValue?.filter(
      (element) =>
        element?.winery?.toUpperCase()?.indexOf(srcCtxValue?.toUpperCase()) !==
        -1
    );
    setWine(srcCtxValue ? searchedValue : defaultValue);
  };

  return (
    <div>
      <div className="BeverageContainer">
        {wine?.map((e) => (
          <WineComponent {...e} />
        ))}
      </div>
    </div>
  );
}
