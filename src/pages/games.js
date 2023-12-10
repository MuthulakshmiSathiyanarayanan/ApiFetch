import { useState, useEffect, useRef } from "react";
import "../App.css";
import GamesComponent from "../components/gamesComponent";
import api from "../common/json/api.json";
export default function GamesApp() {
  const [games, setGames] = useState([]);
  const [originalGames, setOriginalGames] = useState([]);
  const [searchBoxValue, setSearchBoxValue] = useState("...");
  const inputRef = useRef(null);

  // fetching game types
  const getGames = async () => {
    try {
      const apiRespGames = await fetch(api[3]);
      const jsonGamesFetch = await apiRespGames.json();
      console.log("-----games-------json", jsonGamesFetch);
      //games = json;
      setOriginalGames(jsonGamesFetch);
      setGames(jsonGamesFetch);
    } catch (err) {
      console.log("Games Api failed-------", err);
    }
  };

  useEffect(() => {
    getGames();
  }, []);
  //handling search
  const handleSearch = () => {
    const srcValue = inputRef?.current?.value;
    //filtering
    const searchedValue = originalGames?.filter(
      (element) =>
        element?.name?.toLowerCase()?.indexOf(srcValue?.toLowerCase()) !== -1
    );
    setGames(srcValue ? searchedValue : originalGames);
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSearch}>search</button>
      <span>Search results are: {searchBoxValue}</span>
      <div>
        {games?.map((e) => (
          <GamesComponent {...e} />
        ))}
      </div>
    </div>
  );
}
