import { useParams } from "react-router-dom";

import cities from "../data/cities";
import districts from "../data/district";

import "./DistcityDetail.css";

function DistcityDetail() {
  const { type, name } = useParams();

  let data = [];

  if (type === "city") {
    data = cities;
  } else if (type === "district") {
    data = districts;
  }

  const item = data.find(
    (i) => i.name.toLowerCase() === name.toLowerCase()
  );

  if (!item) {
    return (
      <div className="distcity-notfound-distcity">
        <h1>Not Found</h1>

        <p>The requested destination could not be found.</p>
      </div>
    );
  }

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    item.name
  )}&output=embed`;

  return (
    <div className="distcity-page-distcity">
      {/* HERO SECTION */}

      <div className="distcity-hero-distcity">
        <img
          src="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop"
          alt={item.name}
          className="distcity-hero-image-distcity"
        />

        <div className="distcity-hero-overlay-distcity"></div>

        <div className="distcity-hero-content-distcity">
          <p className="distcity-subtitle-distcity">
            EXPLORE MADHYA PRADESH
          </p>

          <h1>{item.name}</h1>

          <p className="distcity-type-distcity">
            {type.toUpperCase()}
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="container py-5">
        {/* DESCRIPTION */}

        <div className="distcity-description-wrapper-distcity">
          <p className="distcity-description-distcity">
            {item.description}
          </p>
        </div>

        {/* TRANSPORT SECTION */}

        <div className="distcity-section-distcity">
          <div className="distcity-section-header-distcity">
            <p>HOW TO REACH</p>

            <h2>Transportation</h2>
          </div>

          <div className="row g-4">
            {/* AIRPORT */}

            <div className="col-md-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">✈️</div>

                <h4>Nearest Airport</h4>

                <p>{item.transport.airport}</p>
              </div>
            </div>

            {/* RAILWAY */}

            <div className="col-md-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚆</div>

                <h4>Nearest Railway Station</h4>

                <p>{item.transport.railway}</p>
              </div>
            </div>

            {/* ROAD */}

            <div className="col-md-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚌</div>

                <h4>By Road</h4>

                <p>{item.transport.road}</p>
              </div>
            </div>

            {/* LOCAL */}

            <div className="col-md-6">
              <div className="transport-card-distcity">
                <div className="transport-icon-distcity">🚕</div>

                <h4>Local Transport</h4>

                <p>{item.transport.local}</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}

        <div className="map-section-distcity">
          <div className="distcity-section-header-distcity">
            <p>LOCATION</p>

            <h2>Find on Map</h2>
          </div>

          <div className="map-card-distcity">
            <div className="ratio ratio-16x9">
              <iframe
                src={mapUrl}
                loading="lazy"
                allowFullScreen
                title={item.name}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistcityDetail;