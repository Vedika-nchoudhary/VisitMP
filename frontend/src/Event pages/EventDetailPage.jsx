import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import {
  FaCalendarDays,
  FaClock,
  FaLocationDot,
  FaCheck,
} from "react-icons/fa6";

import "./EventDetailPage.css";
import Gallery from "../components/Gallery/Gallery.jsx";

function EventDetailPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryMedia, setGalleryMedia] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/events/detail/${id}`
        );

        setEvent(res.data);
      } catch (err) {
        console.log("Error fetching event:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchGallery = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/media/place/${id}`,
        );

        console.log(response.data);

        setGalleryMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEvent();
    fetchGallery();
  }, [id]);

  if (loading) {
    return (
      <div className="event-loading-evdt">
        Loading Event...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="event-loading-evdt">
        Event Not Found
      </div>
    );
  }

  return (
  <div
    className="event-page-evdt"
  >
    {/* HERO */}

    <section className="event-hero-evdt">
      <img
        src={event.image}
        alt={event.name}
        className="event-hero-image-evdt"
      />

      <div className="event-overlay-evdt">
        <div className="container">
          <div className="event-hero-content-evdt">
            <p className="event-subtitle-evdt">
              EVENT DETAILS
            </p>

            <h1>{event.name}</h1>

            <p className="event-location-evdt">
              <FaLocationDot />
              {event.location}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT */}

    <section className="event-section-evdt">
      <div className="container">
        {/* TAGS */}

        <div className="event-tags-evdt">
          <span className="active-tag-evdt">
            {event.type}
          </span>

          <span>trending</span>
        </div>

        {/* TWO COLUMN LAYOUT */}

        <div className="event-content-layout-evdt">
          {/* LEFT */}

          <div className="event-left-evdt">
            {/* ABOUT */}

            <div className="event-block-evdt">
              <p className="section-label-evdt">
                ABOUT
              </p>

              <h2>About This Event</h2>

              <p className="event-description-evdt">
                {event.description}
              </p>
            </div>

            {/* EVENT INFO */}

            <div className="event-block-evdt">
              <p className="section-label-evdt">
                EVENT INFORMATION
              </p>

              <h2>Event Information</h2>

              <div className="event-info-grid-evdt">
                <div className="event-info-card-evdt">
                  <div className="info-icon-evdt">
                    <FaCalendarDays />
                  </div>

                  <div>
                    <h4>Date</h4>

                    <p>
                      {new Date(
                        event.date
                      ).toLocaleDateString(
                        "en-IN",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>

                <div className="event-info-card-evdt">
                  <div className="info-icon-evdt">
                    <FaClock />
                  </div>

                  <div>
                    <h4>Event Type</h4>

                    <p>{event.type}</p>
                  </div>
                </div>

                <div className="event-info-card-evdt">
                  <div className="info-icon-evdt">
                    <FaLocationDot />
                  </div>

                  <div>
                    <h4>Location</h4>

                    <p>{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="event-right-evdt">
            <div className="event-block-evdt">
              <p className="section-label-evdt">
                HIGHLIGHTS
              </p>

              <h2>Why Visit This Event?</h2>

              <div className="highlights-column-evdt">
                <div className="highlight-item-evdt">
                  <FaCheck />

                  <span>
                    Traditional cultural
                    experiences
                  </span>
                </div>

                <div className="highlight-item-evdt">
                  <FaCheck />

                  <span>
                    Authentic local food &
                    crafts
                  </span>
                </div>

                <div className="highlight-item-evdt">
                  <FaCheck />

                  <span>
                    Perfect for photography
                    lovers
                  </span>
                </div>

                <div className="highlight-item-evdt">
                  <FaCheck />

                  <span>
                    Vibrant atmosphere &
                    celebrations
                  </span>
                </div>

                <div className="highlight-item-evdt">
                  <FaCheck />

                  <span>
                    Explore local traditions &
                    heritage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Gallery media={galleryMedia} />
  </div>
);
}

export default EventDetailPage;