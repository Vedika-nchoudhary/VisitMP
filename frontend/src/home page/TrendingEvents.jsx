import "./TrendingEvents.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingEvents() {
  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(true);

  // FETCH EVENTS
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/events"
        );

        // SHOW ONLY FIRST 3 EVENTS
        setEvents(res.data.slice(0, 3));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // LOADING
  if (loading) {
    return (
      <section className="trending-events py-5">
        <div className="container">
          <h2>Loading Events...</h2>
        </div>
      </section>
    );
  }

  // IF NO EVENTS
  if (events.length === 0) {
    return null;
  }

  // FEATURED EVENT
  const featuredEvent = events[0];

  // SIDE EVENTS
  const sideEvents = events.slice(1);

  // FORMAT DATE
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-GB",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  return (
    <section className="trending-events py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">
            Trending Events
          </h2>

          <p className="section-subtitle">
            Explore the most exciting cultural
            events
          </p>
        </div>

        <div className="row g-4">
          {/* FEATURED EVENT */}
          <div className="col-lg-7">
            <div
              className="featured-event-te"
              style={{
                backgroundImage: `url(${featuredEvent.image})`,
              }}
            >
              <div className="event-overlay-te">
                <div className="event-content-te">
                  <span className="event-date-te">
                    {formatDate(featuredEvent.date)}
                  </span>

                  <h2>{featuredEvent.name}</h2>

                  <p>
                    {featuredEvent.description}
                  </p>

                  <Link
                    to={`/events/detail/${featuredEvent._id}`}
                  >
                    <button className="btn btn-success">
                      Explore Event
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SIDE EVENTS */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              {sideEvents.map((event) => (
                <Link
                  key={event._id}
                  to={`/events/detail/${event._id}`}
                  className="text-decoration-none"
                >
                  <div
                    className="side-event-te"
                    style={{
                      backgroundImage: `url(${event.image})`,
                    }}
                  >
                    <div className="event-overlay-te">
                      <div className="event-content-te">
                        <span className="event-date-te">
                          {formatDate(event.date)}
                        </span>

                        <h4>{event.name}</h4>

                        <p>{event.location}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}