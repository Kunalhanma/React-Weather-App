import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Kunalhanma/React-Weather-App">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/kunal-malhotra-164742259/">
          Kunal 
        </a>{" "}
         with ❤️
      </div>
    </React.Fragment>
  );
}

export default App;
