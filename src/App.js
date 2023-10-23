import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="search-bar">
        <form id="search-form">
          <div className="row">
            <div className="search-bar">
              <div className="col-9 search-form">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control search-input"
                  id="city-input"
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  className="btn btn-primary w-200"
                  value="Search"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <h1>
        😀👋🏻
        <br />
      </h1>
      <div className="weather-icon">
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          width="200"
          height="200"
          alt="clear"
          id="icon"
        />
        <div className="temp" id="temp">
          21
        </div>
        <span id="celcius" className="celcius">
          <strong id="temperature"></strong>
          <a href="/#" id="celsius-link">
            °C
          </a>
          |
          <a href="/#" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
      <h1>
        <div id="city" className="city">
          New Zealand
        </div>
      </h1>
      <div className="time" id="time">
        Monday, 1:45pm
      </div>

      <div className="weather-info">
        <div className="description" id="description">
          Weather Condition
        </div>

        <ul>
          <li>Humidity: %</li>
          <li>Wind: km/h</li>
        </ul>
      </div>

      <div className="weather-forecast" id="weather-forecast">
        <div className="row">
          <div className="col-3">
            <div className="weather-forecast-date">Thur</div>
            <div className="weather-icon">
              <img
                src="http://openweathermap.org/img/wn/50d@2x.png"
                alt="weather"
                width="200"
                height="100"
              />
            </div>

            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">18°</span>/
              <span className="weather-forecast-temperatue-min">12° </span>
            </div>
          </div>
        </div>
      </div>
      <script src="src/app.js"></script>

      <footer>
        This project was coded by{" "}
        <a href="https://github.com/lydi-in-tech">Lydia Pelesane</a> and is{" "}
        <a
          href="https://github.com/lydi-in-tech/react-week4-homework"
          target="_blank"
          title="GitHub weather app project"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://shecodes-weather.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="weather app project on netlify website"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
