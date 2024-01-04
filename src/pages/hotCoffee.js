import { useState, useEffect, useRef, useContext } from "react";
import "../App.css";
import { SearchKeyContext } from "../App";
import HotCoffeeComponent from "../components/hotCoffeeComponent";
import api from "../common/json/api.json";

export default function HotCoffeeApp() {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [originalHotCoffee, setOriginalHotCoffee] = useState([]);
  // const [searchBoxValue, setSearchBoxValue] = useState("...");
  // const inputRef = useRef(null);
  const [srcCtxVal] = useContext(SearchKeyContext);
  console.log("---------srcCtxVal-------------------", srcCtxVal);

  // fetching hotCoffee list
  const getHotCoffee = async () => {
    try {
      const apiResp_hotcoffee = await fetch(api[0]);
      const json_hotCoffeeFetch = await apiResp_hotcoffee.json();
      // console.log("-----hotCoffee-------json", json_hotCoffeeFetch);
      setHotCoffee(json_hotCoffeeFetch);
      setOriginalHotCoffee(json_hotCoffeeFetch);

      // Trial test search context
      handleContextSearch(json_hotCoffeeFetch);
    } catch (err) {
      setHotCoffee({ sorry: "Some Server Errror" });
      alert("Something Error Happened, try after sometime");
      console.log("Hot Coffee Api failed-------", err);
    }
  };
  //use effect to avoid unwanted renderings
  useEffect(() => {
    getHotCoffee();
  }, []);

  useEffect(() => {
    handleContextSearch();
  }, [srcCtxVal]);

  const handleContextSearch = (defaultValue = originalHotCoffee) => {
    const searchedValue = defaultValue?.filter(
      (element) =>
        element?.title?.toUpperCase()?.indexOf(srcCtxVal?.toUpperCase()) !== -1
    );
    console.log(
      "--------searchedValuesearchedValue-------",
      searchedValue,
      defaultValue
    );
    setHotCoffee(srcCtxVal ? searchedValue : defaultValue);
  };

  //displaying the searched searchBox contents
  /* const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    console.log("--srcvalue--", srcValue);
    //Filter operation
    const searchedValue = hotCoffee?.filter(
      (element) =>
        element?.title?.toUpperCase()?.indexOf(srcValue?.toUpperCase()) !== -1
    );
    console.log("searchedValue", searchedValue);
    setHotCoffee(srcValue ? searchedValue : originalHotCoffee);
    console.log("---basic check--", setHotCoffee);
    console.log("--checking the setState--", hotCoffee);
    setSearchBoxValue(srcValue);
  }; */

  //console logs for hotCoffee and original hot coffee changes
  // console.log(
  //   "-----------hotCoffee--------------",
  //   hotCoffee.length,
  //   typeof hotCoffee
  // );
  // console.log("----hotcoffee after search---", hotCoffee);
  // console.log("--original hotcoffee after search---", originalHotCoffee);

  //return statements start
  return (
    <div>
      {/* <input type="text" ref={inputRef} /> */}
      {/* uncontrolled component- to make it controlled can call value=
      {searchBoxValue} in input type*/}
      {/* <button onClick={handleSearch}>Search</button>
      <br /> */}
      <div className="BeverageContainer">
        {hotCoffee?.map((e) => (
          <HotCoffeeComponent {...e} />
        ))}
      </div>
    </div>
  );
}
