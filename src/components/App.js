
import React, { useState} from "react";
import './../styles/App.css';
import Weather from "./Weather"


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <Weather />
    </div>
  );
    
 
}

export default App
