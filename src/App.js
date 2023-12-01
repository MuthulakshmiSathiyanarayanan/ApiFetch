import "./App.css";

import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(" ");
  // console.log(data);
  const getData = async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const json = await resp.json();
    console.log(json);
    setData(json);
  };
  useEffect(() => {
    getData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
