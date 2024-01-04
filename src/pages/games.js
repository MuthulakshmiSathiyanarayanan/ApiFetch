import { useState, useEffect, useRef, useContext } from "react";
import "../App.css";
import GamesComponent from "../components/gamesComponent";
import api from "../common/json/api.json";
import { SearchKeyContext } from "../App";

export default function GamesApp() {
  const [games, setGames] = useState([]);
  const [originalGames, setOriginalGames] = useState([]);
  const [srcCtxVal] = useContext(SearchKeyContext);

  // fetching game types
  const getGames = async () => {
    try {
      const apiRespGames = await fetch(api[3]);
      const jsonGamesFetch = await apiRespGames.json();
      console.log("-----games-------json", jsonGamesFetch);
      //games = json;
      setOriginalGames(jsonGamesFetch);
      setGames(jsonGamesFetch);
      handleContextSearch(jsonGamesFetch);
    } catch (err) {
      console.log("Games Api failed-------", err);
    }
  };
  const handleContextSearch = (defaultValue = originalGames) => {
    const searchedValue = defaultValue?.filter(
      (element) =>
        element?.name?.toUpperCase()?.indexOf(srcCtxVal?.toUpperCase()) !== -1
    );
    setGames(srcCtxVal ? searchedValue : defaultValue);
  };
  useEffect(() => {
    getGames();
  }, []);
  useEffect(() => {
    handleContextSearch();
  }, [srcCtxVal]);
  //handling search

  return (
    <div>
      <div>
        {games?.map((e) => (
          <GamesComponent {...e} />
        ))}
      </div>
    </div>
  );
}
