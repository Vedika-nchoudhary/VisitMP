import districts from "../data/district";
import { useNavigate } from "react-router-dom";

import "./District.css";

function District() {
  const navigate = useNavigate();

  return (
    <div className="district-page-district" style={{ paddingTop: "95px" }}>
      <div className="container py-5">
        {/* HEADER */}

        <div className="district-header-district text-center">
          <p className="district-subtitle-district">EXPLORE MADHYA PRADESH</p>

          <h1 className="district-title-district">
            Districts of Madhya Pradesh
          </h1>

          <p className="district-desc-district">
            Explore hidden gems, heritage landscapes, wildlife regions, and
            culturally rich districts across the heart of India.
          </p>
        </div>

        {/* GRID */}

        <div className="row g-4">
          {districts.map((district) => (
            <div key={district.name} className="col-lg-4 col-md-6">
              <div
                className="district-card-district"
                onClick={() =>
                  navigate(
                    `/destination/district/${district.name.toLowerCase()}`,
                  )
                }
              >
                {/* IMAGE */}

                <div className="district-image-wrapper-district">
                  <img
                    // src={district.image}
                    src="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={district.name}
                    className="district-image-district"
                  />

                  <div className="district-overlay-district"></div>
                </div>

                {/* CONTENT */}

                <div className="district-content-district">
                  <h3>{district.name}</h3>

                  <p>{district.description}</p>

                  <button className="district-btn-district">
                    Explore District
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

export default District;
