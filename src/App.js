import "./App.css";
import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/header";
export const SearchKeyContext = createContext();

export default function App() {
  const globSearch = useState("");

  return (
    <SearchKeyContext.Provider value={globSearch}>
      <div>
        <Header />
        <Outlet />
      </div>
    </SearchKeyContext.Provider>
  );
}
