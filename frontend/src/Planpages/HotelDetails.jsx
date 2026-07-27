import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import {
  FaLocationDot,
  FaStar,
  FaHotel,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa6";

import "./HotelDetails.css";
import Gallery from "../components/Gallery/Gallery.jsx";

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [galleryMedia, setGalleryMedia] = useState([]);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/hotels/booking/${id}`,
        );

        setHotel(res.data);
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

    fetchHotel();
    fetchGallery();
  }, [id]);

  if (!hotel) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="hoteldtl-page py-5">
      <div className="container">
        {/* HERO IMAGE */}

        <div className="hoteldtl-hero-wrapper mb-5">
          <img
            // src={`http://localhost:8080${hotel.image}`}
            src={`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt={hotel.name}
            className="hoteldtl-image"
          />

          <div className="hoteldtl-overlay">
            <div className="d-flex justify-content-between align-items-end flex-wrap gap-3">
              <div>
                <p className="hoteldtl-subheading mb-2">PREMIUM STAY</p>

                <h1 className="fw-bold hoteldtl-title">{hotel.name}</h1>

                <p className="hoteldtl-location mb-0">
                  <FaLocationDot className="me-2" />

                  {hotel.city}
                </p>
              </div>

              <div className="hoteldtl-rating">
                <FaStar className="me-2" />

                {hotel.rating}
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS */}

        <div className="row g-4">
          {/* LEFT */}

          <div className="col-lg-8">
            {/* ABOUT */}

            <div className="hoteldtl-section mb-4">
              <div className="d-flex gap-3 flex-wrap mb-4">
                <span className="hoteldtl-badge">
                  <FaHotel className="me-2" />

                  {hotel.type}
                </span>

                <span className="hoteldtl-price">
                  Starting from &#8377;{hotel.price}
                </span>
              </div>

              <h3 className="hoteldtl-heading">About Hotel</h3>

              <p className="hoteldtl-description">{hotel.description}</p>
            </div>

            {/* AMENITIES */}

            <div className="hoteldtl-section">
              <h3 className="hoteldtl-heading mb-4">Amenities</h3>

              <div className="d-flex flex-wrap gap-3">
                {hotel.amenities?.map((item, index) => (
                  <div className="hoteldtl-amenity" key={index}>
                    <FaCheck className="me-2" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="col-lg-4">
            <div className="hoteldtl-map-card">
              <h4 className="fw-bold mb-4">Location</h4>

              <iframe
                title="hotel-map"
                width="100%"
                height="260"
                className="hoteldtl-map"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${hotel.location}&output=embed`}
              ></iframe>

              <button className="btn hoteldtl-btn w-100 mt-4">
                Book Now
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Gallery media={galleryMedia} />
    </div>
  );
}

export default HotelDetails;
