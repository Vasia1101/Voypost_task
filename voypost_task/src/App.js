import React from "react";
import "./App.css";
import TripList from "./Components/TriplList/TripList";

import TripsData from "./data/trips.json";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Voypost App Search</header>
      <TripList content={TripsData} />
    </div>
  );
}

export default App;
