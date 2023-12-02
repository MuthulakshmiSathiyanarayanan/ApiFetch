import "./App.css";
import { useEffect, useState } from "react";

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
    <pre>
      {hotCoffee?.map((e) => (
        <HotCoffeeComponent {...e} />
      ))}
      {wine?.map((e) => (
        <WineComponent {...e} />
      ))}
      {beer?.map((e) => (
        <BeerComponent {...e} />
      ))}
      {games?.map((e) => (
        <GamesComponent {...e} />
      ))}

      {/* {JSON.stringify(hotCoffee, null, 2)}
      {JSON.stringify(wine, null, 2)}
      {JSON.stringify(beer, null, 2)}
      {JSON.stringify(games, null, 2)} */}
    </pre>
  );
}

const HotCoffeeComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div className="container" style={{ marginRight: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName" style={{ fontSize: "large" }}>
        {title}
      </span>
      <span className="description"> {description}</span>
    </div>
  );
};

const WineComponent = (props) => {
  const { winery, location, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName">{winery}</span>
      <span> {location}</span>
    </div>
  );
};
const BeerComponent = (props) => {
  const { name, price, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 100 }}>
      <img className="image" src={image}></img>
      <span className="productName">{name}</span>
      <span> {price}</span>
    </div>
  );
};
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
