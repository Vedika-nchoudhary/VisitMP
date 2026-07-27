import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaLocationDot,
  FaCalendarDays,
  FaWallet,
  FaUsers,
  FaHeart,
} from "react-icons/fa6";

import "./Itinerary.css";

function Itinerary() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startDestination: "",
    days: "",
    budget: "",
    travelers: "",
    interests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateTrip = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/ai/generate-itinerary",
        formData,
      );

      localStorage.setItem("itinerary", JSON.stringify(response.data));

      navigate("/itineraryresult");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ paddingTop: "75px" }}>
    <div className="itegen-page-pp d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="itegen-card-pp p-4 p-md-5">
              <div className="text-center mb-5">
                <p className="itegen-subheading-pp mb-2">AI TRAVEL PLANNER</p>

                <h1 className="itegen-heading-pp fw-bold">
                  Plan Your Perfect Trip
                </h1>

                <p className="itegen-text-pp">
                  Generate a personalized itinerary based on your preferences
                </p>
              </div>

              {/* Destination */}

              <div className="mb-4">
                <label className="form-label itegen-label-pp">
                  Destination
                </label>

                <div className="input-group">
                  <span className="input-group-text itegen-iconbox-pp">
                    <FaLocationDot />
                  </span>

                  <input
                    type="text"
                    name="startDestination"
                    className="form-control itegen-input-pp"
                    placeholder="Enter starting city (e.g. Bhopal)"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Days */}

              <div className="mb-4">
                <label className="form-label itegen-label-pp">
                  Number of Days
                </label>

                <div className="input-group">
                  <span className="input-group-text itegen-iconbox-pp">
                    <FaCalendarDays />
                  </span>

                  <input
                    type="number"
                    name="days"
                    className="form-control itegen-input-pp"
                    placeholder="Enter number of days"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Budget */}

              <div className="mb-4">
                <label className="form-label itegen-label-pp">Budget</label>

                <div className="input-group">
                  <span className="input-group-text itegen-iconbox-pp">
                    <FaWallet />
                  </span>

                  <select
                    name="budget"
                    className="form-select itegen-input-pp"
                    onChange={handleChange}
                  >
                    <option value="">Select Budget</option>

                    <option value="Low">Low</option>

                    <option value="Medium">Medium</option>

                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
              </div>

              {/* Travelers */}

              <div className="mb-4">
                <label className="form-label itegen-label-pp">Travelers</label>

                <div className="input-group">
                  <span className="input-group-text itegen-iconbox-pp">
                    <FaUsers />
                  </span>

                  <input
                    type="text"
                    name="travelers"
                    className="form-control itegen-input-pp"
                    placeholder="Solo, Family, Friends..."
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Interests */}

              <div className="mb-4">
                <label className="form-label itegen-label-pp">Interests</label>

                <div className="input-group">
                  <span className="input-group-text itegen-iconbox-pp">
                    <FaHeart />
                  </span>

                  <input
                    type="text"
                    name="interests"
                    className="form-control itegen-input-pp"
                    placeholder="Nature, Food, Adventure..."
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Button */}

              <button
                onClick={generateTrip}
                className="btn w-100 itegen-btn-pp"
              >
                Generate Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Itinerary;
