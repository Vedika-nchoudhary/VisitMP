import cities from "../data/cities";
import { useNavigate } from "react-router-dom";

import "./Cities.css";

function Cities() {
  const navigate = useNavigate();

  return (
    <div className="cities-page-city" style={{ paddingTop: "95px" }}>
      <div className="container py-5">
        {/* HEADER */}

        <div className="cities-header-city text-center">
          <p className="cities-subtitle-city">EXPLORE MADHYA PRADESH</p>

          <h1 className="cities-title-city">Cities of Madhya Pradesh</h1>

          <p className="cities-desc-city">
            Discover heritage cities, cultural hubs, spiritual destinations, and
            scenic escapes across the heart of India.
          </p>
        </div>

        {/* GRID */}

        <div className="row g-4">
          {cities.map((city) => (
            <div key={city.name} className="col-lg-4 col-md-6">
              <div
                className="city-card-city"
                onClick={() =>
                  navigate(`/destination/city/${city.name.toLowerCase()}`)
                }
              >
                {/* IMAGE */}

                <div className="city-image-wrapper-city">
                  <img
                    // src={city.image}
                    src="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={city.name}
                    className="city-image-city"
                  />

                  <div className="city-overlay-city"></div>
                </div>

                {/* CONTENT */}

                <div className="city-content-city">
                  <h3>{city.name}</h3>

                  <p>{city.description}</p>

                  <button className="city-btn-city">Explore City</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cities;
