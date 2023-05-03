import "./App.css";
import React from "react";
import Listing from "./Listing";
import data from "./data.json";

function App() {
  return (
    <>
      <Listing items={data} />
    </>
  );
}

export default App;
