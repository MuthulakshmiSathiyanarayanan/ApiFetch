import "./App.css";
import { useEffect, useState } from "react";
import HotCoffeeComponent from "./pages/hotCoffee";
import BeerComponent from "./pages/beer";
import WineComponent from "./pages/wine";
import GamesComponent from "./pages/games";

export default function App() {
  const [hotCoffee, setHotCoffee] = useState([]);
  const [wine, setWine] = useState([]);
  const [beer, setBeer] = useState([]);
  const [games, setGames] = useState([]);

  // fetching hotCoffee list
  const getHotcoffee = async () => {
    try {
      const apiResp_hotcoffee = await fetch(
        "https://api.sampleapis.com/coffee/hot"
      );
      const json_hotCoffeeFetch = await apiResp_hotcoffee.json();
      console.log("-----hotCoffee-------json", json_hotCoffeeFetch);
      setHotCoffee(json_hotCoffeeFetch);
    } catch (err) {
      // sethotCoffee({ sorry: "Some Server Errror" });
      alert("Something Error Happened, try after sometime");
      console.log("Hot Cofee Api failed-------", err);
    }
  };

  //fetching wine details
  const getWine = async () => {
    try {
      const apiResp_wine = await fetch("https://api.sampleapis.com/wines/reds");
      const json_wineFetch = await apiResp_wine.json();
      console.log("-----wine-------json", json_wineFetch);
      setWine(json_wineFetch);
    } catch (err) {
      console.log("Wine Api failed-------", err);
    }
  };
  // fetching beer prices
  const getBeer = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/beers/ale");
      const json = await resp.json();
      console.log("-----beer-------json", json);
      //beer = json;
      setBeer(json);
    } catch (err) {
      console.log("Beer Api failed-------", err);
    }
  };
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
    getWine();
    getBeer();
    getHotcoffee();
    getGames();
  }, []);

  console.log(
    "-----------hotCoffee--------------",
    hotCoffee.length,
    typeof hotCoffee
  );
  console.log();

  return (
    <div className="hotCoffeeContainer">
      {hotCoffee?.map((e) => (
        <HotCoffeeComponent {...e} />
      ))}
      {wine?.map((e) => (
        <WineComponent {...e} />
      ))}
      {beer?.map((e) => (
        <BeerComponent name={e.name} price={e.price} image={e.image} />
      ))}
      {games?.map((e) => (
        <GamesComponent {...e} />
      ))}
    </div>
  );
}
