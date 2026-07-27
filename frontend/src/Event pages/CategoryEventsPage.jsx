import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./CategoryEventsPage.css";

export default function CategoryEventsPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/events/type/${category}`,
        );

        setEvents(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [category]);

  return (
    <div className="events-page" style={{ paddingTop: "90px" }}>
      {/* HERO */}

      <section className="events-hero">
        <div className="container text-center">
          <p className="events-subtitle">EXPLORE MADHYA PRADESH</p>

          <h1 className="events-title">
            {category.charAt(0).toUpperCase() + category.slice(1)} Events
          </h1>

          <p className="events-description">
            Discover heritage festivals, cultural celebrations, food fairs and
            unforgettable experiences across Madhya Pradesh.
          </p>
        </div>
      </section>

      {/* EVENTS */}

      <section className="events-section">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <h3>Loading Events...</h3>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-5">
              <h3>No Events Found</h3>
            </div>
          ) : (
            <div className="row g-4">
              {events.map((event) => (
                <div className="col-md-6 col-lg-4" key={event._id}>
                  <div className="modern-event-card">
                    {/* IMAGE */}

                    <div className="event-image-wrapper">
                      <img src={event.image} alt={event.name} />
                    </div>

                    {/* CONTENT */}

                    <div className="event-content-catp">
                      <h3>{event.name}</h3>

                      <p className="event-location">📍
                        
                        
                        
                        
                        
                   {event.location}</p>

                      <p className="event-date">
                        📅{" "}
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>

                      <button
                        className="explore-btn"
                        onClick={() => navigate(`/events/detail/${event._id}`)}
                      >
                        Explore Event
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
