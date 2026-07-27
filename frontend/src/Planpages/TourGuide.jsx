import { useState } from "react";

import tourGuides from "../data/tourGuides";

import {
  FaMagnifyingGlass,
  FaLocationDot,
  FaPhone,
  FaLanguage,
  FaBriefcase,
} from "react-icons/fa6";

import "./TourGuide.css";

function TourGuide() {
  const [search, setSearch] = useState("");

  const filteredGuides = tourGuides.filter(
    (guide) =>
      guide.name.toLowerCase().includes(search.toLowerCase()) ||
      guide.city.toLowerCase().includes(search.toLowerCase()) ||
      guide.specialization.toLowerCase().includes(search.toLowerCase()) ||
      guide.languages.some((lang) =>
        lang.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <div className="tg-page-tg py-5">
      <div className="container">
        {/* HEADING */}

        <div className="text-center mb-5">
          <p className="tg-subheading-tg mb-2">LOCAL EXPERTS</p>

          <h1 className="fw-bold display-5 tg-title-tg">Tourist Guides</h1>

          <p className="tg-text-tg fs-5">
            Find experienced local guides across Madhya Pradesh
          </p>
        </div>

        {/* SEARCH */}

        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="input-group tg-searchbar-tg">
              <input
                type="text"
                className="form-control tg-searchinput-tg"
                placeholder="Search by language, city, specialization..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <span className="input-group-text tg-searchicon-tg">
                <FaMagnifyingGlass />
              </span>
            </div>
          </div>
        </div>

        {/* GUIDE CARDS */}

        <div className="row g-4">
          {filteredGuides.length === 0 ? (
            <div className="text-center">
              <h4 className="text-muted">No guides found</h4>
            </div>
          ) : (
            filteredGuides.map((guide) => (
              <div className="col-lg-4 col-md-6" key={guide.id}>
                <div className="tg-card-tg">
                  {/* IMAGE */}

                  <div className="tg-image-wrapper-tg">
                    <img
                      src={guide.image}
                      alt={guide.name}
                      className="tg-image-tg"
                    />

                    <div className="tg-badge-tg">{guide.specialization}</div>
                  </div>

                  {/* CONTENT */}

                  <div className="tg-content-tg">
                    <h3 className="fw-bold tg-guide-name-tg">{guide.name}</h3>

                    <div className="tg-info-tg">
                      <FaLocationDot />
                      <span>{guide.city}</span>
                    </div>

                    <div className="tg-info-tg">
                      <FaLanguage />
                      <span>{guide.languages.join(", ")}</span>
                    </div>

                    <div className="tg-info-tg">
                      <FaBriefcase />
                      <span>{guide.experience}</span>
                    </div>

                    <a href={`tel:${guide.phone}`} className="btn tg-btn-tg">
                      <FaPhone className="me-2" />
                      Contact Guide
                    </a>
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

export default TourGuide;
