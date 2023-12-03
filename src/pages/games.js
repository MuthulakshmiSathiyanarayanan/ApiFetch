import { useState, useEffect } from "react";
import "../App.css";

export default function GamesApp() {
  const [games, setGames] = useState([]);

  // fetching game types
  const getGames = async () => {
    try {
      const apiRespGames = await fetch(
        "https://api.sampleapis.com/switch/games"
      );
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

const GamesComponent = (props) => {
  const { id, genre, name } = props;
  return (
    <div className="mydiv">
      <>{id}</>
      <span className="productName">{name}</span>{" "}
      {genre?.map((e) => (
        <span>{e}</span>
      ))}
    </div>
  );
};
