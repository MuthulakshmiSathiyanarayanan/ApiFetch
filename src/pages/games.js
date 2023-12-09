import { useState, useEffect } from "react";
import "../App.css";
import GamesComponent from "../components/gamesComponent";
import api from "../common/json/api.json";
export default function GamesApp() {
  const [games, setGames] = useState([]);

  // fetching game types
  const getGames = async () => {
    try {
      const apiRespGames = await fetch(api[3]);
      const jsonGamesFetch = await apiRespGames.json();
      console.log("-----games-------json", jsonGamesFetch);
      //games = json;
      setGames(jsonGamesFetch);
    } catch (err) {
      console.log("Games Api failed-------", err);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <div className="BeverageContainer">
      {games?.map((e) => (
        <GamesComponent {...e} />
      ))}
    </div>
  );
}
