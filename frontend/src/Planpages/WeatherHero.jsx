import React, { useState } from "react";
import "./WeatherHero.css";

function WeatherHero({ weatherData, onSearch }) {
  const [city, setCity] = useState("");

  const temp = weatherData?.current?.main?.temp;
  const cityName = weatherData?.current?.name;
  const condition = weatherData?.current?.weather?.[0]?.main;
  const humidity = weatherData?.current?.main?.humidity;
  const wind = weatherData?.current?.wind?.speed;
  const feelsLike = weatherData?.current?.main?.feels_like;

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <section className="weather-hero-wh">
      <div className="weather-overlay-wh"></div>

      <div className="container position-relative">
        <div className="row align-items-center min-vh-100">
          {/* LEFT */}

          <div className="col-lg-7">
            <div className="weather-content-wh">
              <p className="weather-subtitle-wh">LIVE WEATHER INSIGHTS</p>

              <h1 className="weather-title-wh">
                Plan Your Journey
                <br />
                With Confidence
              </h1>

              <p className="weather-description-wh">
                Real-time forecasts, destination insights, and travel-friendly
                weather updates for exploring Madhya Pradesh.
              </p>

              {/* SEARCH */}

              <div className="weather-search-wh">
                <input
                  type="text"
                  placeholder="Search destination..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />

                <button onClick={handleSearch}>Search</button>
              </div>

              {/* CHIPS */}

              <div className="weather-chips-wh">
                {["Bhopal", "Indore", "Goa", "Jaipur", "Pachmarhi"].map(
                  (item) => (
                    <span key={item} onClick={() => onSearch(item)}>
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}

          <div className="col-lg-5 d-flex justify-content-center">
            <div className="weather-card-wh">
              <div className="weather-temp-wh">
                {temp ? `${Math.round(temp)}°` : "--"}
              </div>

              <h3>{cityName || "Search City"}</h3>

              <p className="weather-condition-wh">{condition || "Weather"}</p>

              <div className="weather-grid-wh">
                <div className="weather-item-wh">
                  <span>Humidity</span>

                  <h5>{humidity ? `${humidity}%` : "--"}</h5>
                </div>

                <div className="weather-item-wh">
                  <span>Wind</span>

                  <h5>{wind ? `${wind} m/s` : "--"}</h5>
                </div>

                <div className="weather-item-wh">
                  <span>Feels Like</span>

                  <h5>{feelsLike ? `${Math.round(feelsLike)}°` : "--"}</h5>
                </div>

                <div className="weather-item-wh">
                  <span>UV Index</span>

                  <h5>--</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherHero;
