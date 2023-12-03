import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/header";

export default function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
