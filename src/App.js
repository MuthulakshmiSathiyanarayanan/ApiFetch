import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [hotCoffee, sethotCoffee] = useState([]);
  const [wine, setwine] = useState(" ");
  const [beer, setbeer] = useState(" ");
  const [games, setgames] = useState("");

  // fetching hotCoffee list
  const gethotcoffee = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await resp.json();
      console.log("-----hotCoffee-------json", json);
      sethotCoffee(json);
    } catch (err) {
      // sethotCoffee({ sorry: "Some Server Errror" });
      // alert("Something Error Happened, try after sometime");
      console.log("Hot Cofee Api failed-------", err);
    }
  };

  //fetching wine details
  const getwine = async () => {
    const resp = await fetch("https://api.sampleapis.com/wines/reds");
    const json = await resp.json();
    console.log("-----wine-------json", json);
    setwine(json);
  };
  // fetching beer prices
  const getbeer = async () => {
    const resp = await fetch("https://api.sampleapis.com/beers/ale");
    const json = await resp.json();
    console.log("-----beer-------json", json);
    //beer = json;
    setbeer(json);
  };
  // fetching game types
  const getgames = async () => {
    const resp = fetch("https://api.sampleapis.com/switch/games");
    const json = await resp.json();
    console.log("-----games-------json", json);
    //games = json;
    setgames(json);
  };

  useEffect(() => {
    // getwine();
    // getbeer();
    gethotcoffee();
    // getgames();
  }, []);

  console.log(
    "-----------hotCoffee--------------",
    hotCoffee.length,
    typeof hotCoffee
  );

  return (
    <pre>
      {hotCoffee?.map((e) => (
        <CardComponent {...e} />
      ))}
      {/* {JSON.stringify(hotCoffee, null, 2)}
      {JSON.stringify(wine, null, 2)}
      {JSON.stringify(beer, null, 2)}
      {JSON.stringify(games, null, 2)} */}
    </pre>
  );
}

const CardComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div className="mydiv" style={{ marginRight: 100 }}>
      <img className="image" src={image}></img>
      <span className="title">{title}</span>
      <span className="description"> {description}</span>
    </div>
  );
};
