import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>
        😀👋🏻
        <br />
      </h1>
      <br />
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
      <br />
      <br />

      <h2>
        <div id="city" className="city">
          New Zealand
        </div>
        <div className="time" id="time">
          Monday, 1:45pm
        </div>
      </h2>

      <div className="icon">
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
          width="100"
          height="100"
          alt="clear"
          id="icon"
        />
        <div className="temp" id="temp">
          21
          <span id="celsius" className="celsius">
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
            <h4>Tomorrow's Forecast</h4>
            <br />
            <div className="weather-forecast-date">Tuesday</div>
            <div className="weather-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="weather"
                width="100"
                height="100"
              />
            </div>

            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">21°</span>/
              <span className="weather-forecast-temperatue-min">7° </span>
            </div>
          </div>
        </div>
      </div>
      <script src="src/app.js"></script>

      <footer>
        Coded by Tiffany,{" "}
        <a
          href="https://github.com/svttop/weather-app-react"
          target="_blank"
          title="GitHub weather app project"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://ubiquitous-kitsune-e44a9c.netlify.app/?#"
          target="_blank"
          rel="noreferrer"
          title="netlify url"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
