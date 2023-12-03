import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import HotCoffeeApp from "./pages/hotCoffee";
import BeerApp from "./pages/beer";
import WineApp from "./pages/wine";
import GamesApp from "./pages/games";

export default function App() {
  return (
    <div>
      <HotCoffeeApp />
      <BeerApp />
      <WineApp />
      <GamesApp />
    </div>
  );
}
