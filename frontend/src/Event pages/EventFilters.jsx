import { useState } from "react";
import "./EventFilters.css";

export default function EventFilters() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    month: "",
    location: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="event-filters-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Find Events</h2>
          <p className="text-muted">
            Explore cultural festivals, music events, food fairs and more.
          </p>
        </div>

        {/* Filters Box */}
        <div className="filters-box p-4 shadow-sm">
          <div className="row g-3">
            {/* Search */}
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search events..."
                name="search"
                value={filters.search}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="col-lg-2">
              <select
                className="form-select"
                name="category"
                value={filters.category}
                onChange={handleChange}
              >
                <option value="">Category</option>

                <option value="Festival">Festival</option>

                <option value="Fair">Fair</option>

                <option value="Food">Food</option>

                <option value="Religious">Religious</option>

                <option value="Adventure">Adventure</option>

                <option value="Cultural">Cultural</option>
              </select>
            </div>

            {/* Month */}
            <div className="col-lg-2">
              <select
                className="form-select"
                name="month"
                value={filters.month}
                onChange={handleChange}
              >
                <option value="">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
              </select>
            </div>

            {/* Location Search */}
            <div className="col-lg-2">
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                name="location"
                value={filters.location}
                onChange={handleChange}
              />
            </div>

            {/* Button */}
            <div className="col-lg-2 d-grid">
              <button className="btn btn-warning">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
