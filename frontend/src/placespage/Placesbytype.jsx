import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Placesbytype.css";

function Placesbytype() {
  const { type } = useParams();

  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/destination/type/${type}`,
        );

        setPlaces(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, [type]);

  if (loading) {
    return (
      <div className="placebytype-loading">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="placebytype-page">
      {/* HEADER */}

      <div className="container">
        <div className="placebytype-header text-center">
          <p className="placebytype-subtitle">EXPLORE MADHYA PRADESH</p>

          <h1 className="placebytype-title">
            {type.replace(/([A-Z])/g, " $1")}
          </h1>

          <span className="placebytype-desc">
            Discover heritage destinations, hidden gems, natural escapes, and
            cultural experiences across Madhya Pradesh.
          </span>
        </div>

        {/* GRID */}

        <div className="row g-4">
          {places.length === 0 ? (
            <div className="text-center">
              <h5>No places found</h5>
            </div>
          ) : (
            places.map((place) => (
              <div className="col-lg-4 col-md-6" key={place._id}>
                <div
                  className="placebytype-card"
                  onClick={() => navigate(`/place/${place._id}`)}
                >
                  {/* IMAGE */}

                  <div className="placebytype-image-wrapper">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="placebytype-image"
                    />

                    <div className="placebytype-overlay"></div>
                  </div>

                  {/* CONTENT */}

                  <div className="placebytype-content">
                    <div>
                      <h3>{place.name}</h3>

                      <p>
                        Explore breathtaking landscapes, heritage architecture,
                        and authentic cultural experiences.
                      </p>
                    </div>

                    <button className="placebytype-btn">Explore Place</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Placesbytype;
