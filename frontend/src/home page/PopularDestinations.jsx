import { useRef, useEffect, useState } from "react";
import "./PopularDestinations.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PopularDestinations() {
  const scrollRef = useRef();

  const navigate = useNavigate();

  const [destinations, setDestinations] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH DESTINATIONS FROM DB
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/destination"
        );
        console.log(res.data);
        // SHOW ONLY FIRST 6 DESTINATIONS
        setDestinations(res.data.slice(0, 6));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  // SCROLL LEFT
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  // SCROLL RIGHT
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  if (loading) {
    return (
      <section className="popular-destinations-section">
        <div className="container">
          <h2>Loading destinations...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="popular-destinations-section">
      <div className="container">
        {/* HEADING */}
        <div className="destinations-header">
          <div>
            <p className="destination-tag">
              Popular Destinations
            </p>

            <h2>
              Discover The Beauty Of Madhya Pradesh
            </h2>
          </div>
        </div>

        {/* DESTINATION CARDS */}
        <div
          className="destinations-wrapper"
          ref={scrollRef}
        >
          {destinations.map((destination) => (
            <div
              className="destination-card"
              key={destination._id}
              style={{
                backgroundImage: `url(${destination.image})`,
              }}
              onClick={() =>
                navigate(`/place/${destination._id}`)
              }
            >
              <div className="destination-overlay">
                <div className="destination-content">
                  <h3>{destination.name}</h3>

                  <p>{destination.description}</p>

                  <span className="read-more">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="destination-controls">
          {/* ARROWS */}
          <div className="slider-arrows">
            <button onClick={scrollLeft}>
              ←
            </button>

            <button onClick={scrollRight}>
              →
            </button>
          </div>

          {/* BUTTON */}
          <button
            className="btn btn-outline-success explore-btn-pd"
            onClick={() => navigate("/destination")}
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}