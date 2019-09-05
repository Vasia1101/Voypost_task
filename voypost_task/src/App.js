import React from "react";
import "./App.css";

// get data
import TripList from "./Components/TriplList/TripList";

import tripsData from "./data/trips.json";

function App() {
  return (
    <div className="App">
      <header className="App-header"> Voypost App Search</header>
      <TripList content={tripsData} />
    </div>
  );
}

export default App;
