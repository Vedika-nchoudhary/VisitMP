import React, { useMemo } from "react";
import "./WeeklyForecast.css";

function WeeklyForecast({ weatherData }) {
  const forecastList = weatherData?.forecast?.list || [];

  const weeklyData = useMemo(() => {
    const daysMap = {};

    forecastList.forEach((item) => {
      const date = new Date(item.dt_txt);

      // use full date as unique key
      const dateKey = date.toLocaleDateString();

      if (!daysMap[dateKey]) {
        daysMap[dateKey] = {
          day: date.toLocaleDateString("en-US", {
            weekday: "short",
          }),

          temps: [],

          icons: [],
        };
      }

      daysMap[dateKey].temps.push(item.main.temp);

      daysMap[dateKey].icons.push(item.weather?.[0]?.main);
    });

    return Object.values(daysMap)
      .slice(0, 5)
      .map((item) => {
        const high = Math.round(Math.max(...item.temps));

        const low = Math.round(Math.min(...item.temps));

        const iconSource = item.icons;

        const mainCondition = iconSource.sort(
          (a, b) =>
            iconSource.filter((v) => v === b).length -
            iconSource.filter((v) => v === a).length,
        )[0];

        const getIcon = (cond) => {
          switch (cond) {
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

        return {
          day: item.day,

          high: `${high}°`,

          low: `${low}°`,

          icon: getIcon(mainCondition),
        };
      });
  }, [forecastList]);

  const current = weatherData?.current;

  return (
    <section className="weekly-section-wf">
      <div className="container">
        {/* HEADER */}

        <div className="weekly-header-wf text-center">
          <p className="weekly-subtitle-wf">EXTENDED FORECAST</p>

          <h2 className="weekly-title-wf">5 Day Weather Outlook</h2>
        </div>

        {/* WEEKLY FORECAST */}

        <div className="weekly-cards-wrapper-wf">
          {weeklyData.map((item, index) => (
            <div className="weekly-card-wf" key={index}>
              <h5>{item.day}</h5>

              <div className="weekly-icon-wf">{item.icon}</div>

              <h3>{item.high}</h3>

              <p>{item.low}</p>
            </div>
          ))}
        </div>

        {/* RECOMMENDATION CARD */}

        <div className="travel-card-wf">
          <div className="row g-0 align-items-center">
            {/* IMAGE */}

            <div className="col-lg-6">
              <div className="travel-image-wf">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1974&auto=format&fit=crop"
                  alt="Travel"
                />
              </div>
            </div>

            {/* CONTENT */}

            <div className="col-lg-6">
              <div className="travel-content-wf">
                <p className="travel-subtitle-wf">TRAVEL RECOMMENDATION</p>

                <h2>Best Time To Visit</h2>

                <p className="travel-description-wf">
                  Based on the current weather trends, mornings and evenings are
                  most suitable for outdoor exploration and sightseeing.
                </p>

                <div className="travel-grid-wf">
                  <div className="travel-box-wf">
                    <span>Humidity</span>

                    <h5>{current?.main?.humidity ?? "--"}%</h5>
                  </div>

                  <div className="travel-box-wf">
                    <span>Wind</span>

                    <h5>{current?.wind?.speed ?? "--"} m/s</h5>
                  </div>

                  <div className="travel-box-wf">
                    <span>Condition</span>

                    <h5>{current?.weather?.[0]?.main ?? "--"}</h5>
                  </div>

                  <div className="travel-box-wf">
                    <span>Feels Like</span>

                    <h5>
                      {current?.main?.feels_like
                        ? `${Math.round(current.main.feels_like)}°`
                        : "--"}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeeklyForecast;
