import React from "react";
import Weather from "./Weather";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New Zealand" />
        <footer>
          This project was coded by Tiffany {""}
          {""} and is {""}
          <a
            rel="noreferrer"
            href="https://github.com/svttop/weather-app-react"
            alt="Tiffany"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          on GitHub and hosted on {""}
          <a
            rel="noreferrer"
            href="https://ubiquitous-kitsune-e44a9c.netlify.app/"
            target="_blank"
            alt="Netlify"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
