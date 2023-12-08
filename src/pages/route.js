import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotCoffeeApp from "./hotCoffee";
import BeerApp from "./beer";
import WineApp from "./wine";
import GamesApp from "./games";
import App from "../App";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="hotCoffee" element={<HotCoffeeApp />} /> /*higher order
          component*/
          <Route path="wine" element={<WineApp />} />
          <Route path="beer" element={<BeerApp />} />
          <Route path="games" element={<GamesApp />} />
          {/*           <Route path="*" element={<NoPage />} />
           */}{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
