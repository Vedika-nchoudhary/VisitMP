import React, { useMemo } from "react";
import "./TravelRecommendations.css";

function TravelRecommendations({ weatherData }) {
  const current = weatherData?.current;

  const temp = current?.main?.temp;

  const condition = current?.weather?.[0]?.main;

  const wind = current?.wind?.speed;

  const humidity = current?.main?.humidity;

  const recommendations = useMemo(() => {
    const list = [];

    // HOT WEATHER

    if (temp >= 38) {
      list.push({
        icon: "🥵",

        title: "Extreme Heat",

        text: "Avoid outdoor sightseeing during afternoon hours and stay hydrated.",

        theme: "hot",
      });

      list.push({
        icon: "🌅",

        title: "Best Time To Explore",

        text: "Early mornings and evenings are the most comfortable for travel.",

        theme: "sunset",
      });
    }

    // WARM WEATHER
    else if (temp >= 28) {
      list.push({
        icon: "☀️",

        title: "Warm & Sunny",

        text: "Great conditions for sightseeing and local exploration.",

        theme: "sunny",
      });

      list.push({
        icon: "🧴",

        title: "Carry Sunscreen",

        text: "UV exposure may be high during midday hours.",

        theme: "cream",
      });
    }

    // COOL WEATHER
    else {
      list.push({
        icon: "🌿",

        title: "Pleasant Climate",

        text: "Perfect weather for outdoor walks, photography, and nature trails.",

        theme: "nature",
      });

      list.push({
        icon: "🚶",

        title: "Ideal For Walking Tours",

        text: "Comfortable temperatures make long exploration enjoyable.",

        theme: "walk",
      });
    }

    // RAIN

    if (condition === "Rain" || condition === "Drizzle") {
      list.push({
        icon: "🌧️",

        title: "Rain Expected",

        text: "Carry an umbrella and prefer indoor attractions or cafés.",

        theme: "rain",
      });
    }

    // THUNDERSTORM

    if (condition === "Thunderstorm") {
      list.push({
        icon: "⛈️",

        title: "Storm Conditions",

        text: "Outdoor activities are not recommended during thunderstorms.",

        theme: "storm",
      });
    }

    // WINDY

    if (wind > 8) {
      list.push({
        icon: "💨",

        title: "Windy Weather",

        text: "Be careful near open viewpoints and lakeside areas.",

        theme: "wind",
      });
    }

    // HUMIDITY

    if (humidity > 75) {
      list.push({
        icon: "💧",

        title: "High Humidity",

        text: "Wear breathable cotton clothing for better comfort.",

        theme: "humidity",
      });
    }

    return list.slice(0, 4);
  }, [temp, condition, wind, humidity]);

  return (
    <section className="travel-rec-section-new">
      <div className="container">
        {/* HEADER */}

        <div className="travel-rec-header-new text-center">
          <p className="travel-rec-subtitle-new">SMART INSIGHTS</p>

          <h2 className="travel-rec-title-new">
            Weather Based Travel Recommendations
          </h2>

          <p className="travel-rec-desc-new">
            Smart suggestions based on real-time weather conditions to help you
            plan a more comfortable and enjoyable trip.
          </p>
        </div>

        {/* GRID */}

        <div className="row g-4 justify-content-center">
          {recommendations.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div   className={`travel-rec-card-new ${item.theme}`}>
                <div className="travel-rec-icon-new">{item.icon}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelRecommendations;
