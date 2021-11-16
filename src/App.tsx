import React from "react";
import { PriceTag } from "./PriceTag";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PriceTag retailPrice={ 3_000.50 } />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
