import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./Icon";
import WeatherTemperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormatDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex justify-content-start">
          <WeatherIcon code={props.info.icon} size={60} />
          <WeatherTemperature
            tempC={props.info.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>
        <div className="col-6 propieties">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
            <li>Pressure: {props.info.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
