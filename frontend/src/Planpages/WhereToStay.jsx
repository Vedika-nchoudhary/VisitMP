import { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { FaLocationDot, FaHotel, FaArrowRight } from "react-icons/fa6";

import "./WhereToStay.css";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await axios.get("http://localhost:8080/hotels/booking");

        setHotels(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className="wtstay-page py-5">
      <div className="container">
        {/* HEADING */}

        <div className="text-center mb-5">
          <p className="wtstay-subheading mb-2">STAY & COMFORT</p>

          <h1 className="fw-bold display-5 wtstay-title">Where To Stay</h1>

          <p className="wtstay-text fs-5">
            Discover premium stays across Madhya Pradesh
          </p>
        </div>

        {/* HOTELS */}

        <div className="row g-4">
          {hotels.map((hotel) => (
            <div className="col-lg-4 col-md-6" key={hotel._id}>
              <div
                className="wtstay-card h-100"
                onClick={() => navigate(`/hotel/${hotel._id}`)}
              >
                {/* IMAGE */}

                <div className="wtstay-image-wrapper">
                  <img
                    // src={`http://localhost:8080${hotel.image}`}
                    src={`https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt={hotel.name}
                    className="wtstay-image"
                  />

                  <div className="wtstay-badge">
                    <FaHotel className="me-2" />
                    {hotel.type}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="wtstay-content">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h4 className="fw-bold wtstay-name mb-0">{hotel.name}</h4>

                    <span className="wtstay-price">&#8377;{hotel.price}</span>
                  </div>

                  <p className="wtstay-location">
                    <FaLocationDot className="me-2" />

                    {hotel.city}
                  </p>

                  <p className="wtstay-description">{hotel.description}</p>

                  <button className="btn wtstay-btn">
                    View Details
                    <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hotels;
