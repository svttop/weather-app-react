import logo from "./logo.svg";
import "./App.css";
import React from "react";
import axios from "axios";

function Weather() {
  let weatherData = {
    city: "Durban",
    temperature: 21,
    date: "Friday 17:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 76,
    wind: 6,
  };

  return (
    <div className="Weather">
      <form className="search">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter country here"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>
          😀👋🏻
          <br />
          {weatherData.city}
        </h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            <div>
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
