import React from "react";
import "./WeatherForecast.css";

function WeatherForecast({ weatherData }) {
  const hourlyList = weatherData?.forecast?.list || [];

  const hourlyData = hourlyList.slice(0, 8);

  const current = weatherData?.current;

  const humidity = current?.main?.humidity;

  const wind = current?.wind?.speed;

  const city = current?.name;

  const formatTime = (timestamp) => {
    if (!timestamp) return "--";

    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatHour = (dt_txt) => {
    return new Date(dt_txt).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getIcon = (main) => {
    switch (main) {
      case "Clear":
        return "☀️";

      case "Clouds":
        return "🌤️";

      case "Rain":
        return "🌧️";

      case "Drizzle":
        return "🌦️";

      case "Thunderstorm":
        return "⛈️";

      default:
        return "🌡️";
    }
  };

  return (
    <section className="weather-forecast-wf">
      <div className="container">
        {/* HEADER */}

        <div className="forecast-header-wf text-center">
          <p className="forecast-subtitle-wf">LIVE FORECAST</p>

          <h2 className="forecast-title-wf">Today's Weather Details</h2>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* FORECAST */}

          <div className="col-lg-8">
            <div className="forecast-card-wf">
              <div className="forecast-top-wf">
                <div>
                  <h3>Hourly Forecast</h3>

                  <p>Next 24 hours for {city || "your location"}</p>
                </div>
              </div>

              <div className="hourly-scroll-wf">
                {hourlyData.map((item, index) => (
                  <div className="hour-card-wf" key={index}>
                    <span>{formatHour(item.dt_txt)}</span>

                    <div className="forecast-icon-wf">
                      {getIcon(item.weather?.[0]?.main)}
                    </div>

                    <h4>{Math.round(item.main?.temp)}°</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DETAILS */}

          <div className="col-lg-4">
            <div className="details-card-wf">
              <h3>Weather Highlights</h3>

              <div className="details-grid-wf">
                <div className="detail-box-wf">
                  <span>Sunrise</span>

                  <h5>{formatTime(current?.sys?.sunrise)}</h5>
                </div>

                <div className="detail-box-wf">
                  <span>Sunset</span>

                  <h5>{formatTime(current?.sys?.sunset)}</h5>
                </div>

                <div className="detail-box-wf">
                  <span>Humidity</span>

                  <h5>{humidity ? `${humidity}%` : "--"}</h5>
                </div>

                <div className="detail-box-wf">
                  <span>Wind</span>

                  <h5>{wind ? `${wind} m/s` : "--"}</h5>
                </div>

                <div className="detail-box-wf">
                  <span>City</span>

                  <h5>{city || "--"}</h5>
                </div>

                <div className="detail-box-wf">
                  <span>Condition</span>

                  <h5>{current?.weather?.[0]?.main || "--"}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherForecast;
