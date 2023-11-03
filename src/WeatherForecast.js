import React, { useEffect, useState } from "react";
import axios from "axios";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(true);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    if (!loaded) {
      let apiKey = "597c40c39084687093b091cd48b366f8";
      let city = props.data.city;
      let apiUrl =
        "https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric;";

      axios
        .get(apiUrl)
        .then((response) => {
          setForecast(response.data.list);
          setLoaded(true);
        })
        .catch((error) => {
          console.log(error);
          setLoaded(false);
        });
    }
  }, [loaded]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row mt-5 mb-4">
          {forecast.slice(0, 5).map(function (dailyForecast, index) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
