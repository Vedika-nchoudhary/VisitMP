import { useRef, useEffect, useState } from "react";
import "./UpcomingEvents.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UpcomingEvents() {
  const scrollRef = useRef();

  const [events, setEvents] = useState([]);

  // FETCH EVENTS
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/events"
        );

        setEvents(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEvents();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

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
    <section className="upcoming-events-section">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <div>
            <p className="event-tag">
              Upcoming Events
            </p>

            <h2>
              Explore Festivals & Cultural Events
            </h2>
          </div>
        </div>

        {/* EVENTS */}
        <div
          className="events-scroll-wrapper"
          ref={scrollRef}
        >
          {events.map((event) => (
            <Link
              to={`/events/detail/${event._id}`}
              key={event._id}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="event-card">
                {/* IMAGE */}
                <div
                  className="event-image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                  }}
                >
                  <div className="date-badge">
                    {formatDate(event.date)}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="event-content">
                  <p className="event-type">
                    {event.type}
                  </p>

                  <h4>{event.name}</h4>

                  <p className="event-location">
                    {event.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="events-controls">
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
          <Link to="/events">
            <button className="btn btn-outline-success explore-events-btn">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}