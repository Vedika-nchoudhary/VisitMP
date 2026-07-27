import React from "react";

function Map() {
  const mapSrc =
    "https://www.google.com/maps?q=23.473324,77.947998&z=7&output=embed";

  return (
    <div className="container my-3">
      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body">

          {/* Centered Heading */}
          <h5 className="card-title text-center mb-3">
            Madhya Pradesh Map
          </h5>

          <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
            <iframe
              title="mp-map"
              src={mapSrc}
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Map;