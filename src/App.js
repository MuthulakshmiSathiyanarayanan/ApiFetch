import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [hotcoffee, sethotcoffee] = useState([]);
  const [wine, setwine] = useState(" ");
  const [beer, setbeer] = useState(" ");
  const [games, setgames] = useState("");

  // fetching hotcoffee list
  const gethotcoffee = async () => {
    try {
      const resp = await fetch("https://api.sampleapis.com/coffee/hot");
      const json = await resp.json();
      console.log("-----hotcoffee-------json", json);
      sethotcoffee(json);
    } catch (err) {
      // sethotcoffee({ sorry: "Some Server Errror" });
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
    "-----------hotcoffee--------------",
    hotcoffee.length,
    typeof hotcoffee
  );

  return (
    <pre>
      {hotcoffee?.map((e) => (
        <CardComponent {...e} />
      ))}
      {/* {JSON.stringify(hotcoffee, null, 2)}
      {JSON.stringify(wine, null, 2)}
      {JSON.stringify(beer, null, 2)}
      {JSON.stringify(games, null, 2)} */}
    </pre>
  );
}

const CardComponent = (props) => {
  const { title, description, image } = props;
  return (
    <div className="mydiv" style={{ marginBottom: 10 }}>
      <img className="image" width={100} height={100} src={image}></img>
      <span class="title">{title}</span>
      <br />
      <span>{description}</span>
      <br />
    </div>
  );
};
