import { useContext, useEffect, useRef, useState } from "react";
import WineComponent from "../components/wineComponent";
import { SearchKeyContext } from "../App";
import api from "../common/json/api.json";

export default function WineApp() {
  const [wine, setWine] = useState([]);
  const [originalWine, setOriginalWine] = useState([]);
  const [srcCtxVal] = useContext(SearchKeyContext);

  //fetching Wine
  const getOriginalWine = async () => {
    const apiResp = await fetch(api[2]);
    const respJson = await apiResp.json();
    setOriginalWine(respJson);
    setWine(respJson);

    //search context
    handleContextSearch(respJson);
  };
  //useEffect
  useEffect(() => {
    getOriginalWine();
  }, []);

  useEffect(() => {
    handleContextSearch();
  }, [srcCtxVal]);

  //handle search
  const handleContextSearch = (defaultValue = originalWine) => {
    const searchedValue = defaultValue?.filter(
      (element) =>
        element?.winery?.toUpperCase()?.indexOf(srcCtxVal?.toUpperCase()) !== -1
    );
    setWine(srcCtxVal ? searchedValue : defaultValue);
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
