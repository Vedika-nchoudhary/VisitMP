import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaPlaneDeparture,
  FaTrain,
  FaRoad,
  FaLocationDot,
} from "react-icons/fa6";

import "./PlaceDetails.css";
import Gallery from "../components/Gallery/Gallery.jsx";

function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [galleryMedia, setGalleryMedia] = useState([]);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/destination/detail/${id}`,
        );

        setPlace(res.data);
      } catch (err) {
        console.log(err);
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

    fetchPlace();
    fetchGallery();
  }, [id]);

  if (!place) {
    return (
      <div className="placedtl-loader d-flex justify-content-center align-items-center">
        <div className="spinner-border text-success"></div>
      </div>
    );
  }

  return (
    <div className="placedtl-page">
      {/* HERO SECTION */}

      <div className="placedtl-hero-section position-relative">
        <img
          src={place.image}
          alt={place.name}
          className="w-100 placedtl-hero-image"
        />

        <div className="placedtl-overlay">
          <div className="container">
            <div className="placedtl-overlay-content">
              <p className="placedtl-subheading mb-3">DESTINATION DETAILS</p>

              <h1 className="fw-bold placedtl-title">{place.name}</h1>

              <p className="placedtl-location mb-0">
                <FaLocationDot className="me-2" />
                {place.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}

      <div className="container py-5">
        {/* TAGS */}

        <div className="d-flex flex-wrap gap-3 mb-5">
          <span className="placedtl-tag">{place.category}</span>

          <span className="placedtl-tag-secondary">{place.type}</span>
        </div>

        {/* ABOUT */}

        <div className="mb-5">
          <p className="placedtl-section-subheading mb-2">ABOUT</p>

          <h2 className="fw-bold placedtl-section-title mb-4">
            About This Place
          </h2>

          <p className="placedtl-description mb-0">{place.description}</p>
        </div>

        {/* TRANSPORT */}

        <div className="mb-5">
          <p className="placedtl-section-subheading mb-2">TRANSPORT</p>

          <h2 className="fw-bold placedtl-section-title mb-4">
            Travel Information
          </h2>

          <div className="row g-4">
            {[
              {
                icon: <FaPlaneDeparture />,
                title: "Nearest Airport",
                value: place.transport?.nearestAirport,
              },
              {
                icon: <FaTrain />,
                title: "Railway Station",
                value: place.transport?.nearestRailway,
              },
              {
                icon: <FaRoad />,
                title: "Road Access",
                value: place.transport?.roadAccess,
              },
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="placedtl-transport-card h-100 p-4">
                  <div className="placedtl-transport-icon mb-4">
                    {item.icon}
                  </div>

                  <h5 className="fw-bold mb-3">{item.title}</h5>

                  <p className="placedtl-transport-text mb-0">
                    {item.value || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAP */}

        <div>
          <p className="placedtl-section-subheading mb-2">LOCATION</p>

          <h2 className="fw-bold placedtl-section-title mb-4">
            Location On Map
          </h2>

          <div className="placedtl-map-wrapper overflow-hidden">
            <iframe
              title="google-map"
              width="100%"
              height="420"
              className="placedtl-map"
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${place.name}, ${place.location}&z=15&output=embed`}
            ></iframe>
          </div>

          <div className="mt-4">
            <a
              href={`https://www.google.com/maps?q=${place.name}, ${place.location}`}
              target="_blank"
              rel="noreferrer"
              className="btn placedtl-map-btn"
            >
              <FaLocationDot className="me-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
      <Gallery media={galleryMedia} />
    </div>
  );
}

export default PlaceDetails;
