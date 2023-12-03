import "./App.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/coffee">HotCoffee</Link>
          </li>
          <li>
            <Link to="/wine">Wine</Link>
          </li>
          <li>
            <Link to="/beer">Beer</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
