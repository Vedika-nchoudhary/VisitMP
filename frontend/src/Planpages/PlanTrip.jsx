import { useNavigate } from "react-router-dom";

import {
  FaEarthAsia,
  FaCalendarDays,
  FaTrain,
  FaHotel,
  FaCloudSun,
  FaMapLocationDot,
  FaUserTie,
  FaPhoneVolume,
} from "react-icons/fa6";

import "./PlanTrip.css";

function PlanTrip() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Explore Destinations",
      icon: <FaEarthAsia />,
      path: "/destination",
    },
    {
      title: "Build Itinerary",
      icon: <FaCalendarDays />,
      path: "/itinerary",
    },
    {
      title: "How to Reach",
      icon: <FaTrain />,
      path: "/how-to-reach",
    },
    {
      title: "Where to Stay",
      icon: <FaHotel />,
      path: "/hotels",
    },
    {
      title: "Weather Info",
      icon: <FaCloudSun />,
      path: "/weather",
    },
    {
      title: "Tour Guides",
      icon: <FaUserTie />,
      path: "/tour-guide",
    },
    {
      title: "Emergency Contacts",
      icon: <FaPhoneVolume />,
      path: "/emergency-contacts",
    },
    {
      title: "Tourist Map",
      icon: <FaMapLocationDot />,
      path: "/map",
    },
  ];

  return (
    <div className="plantrip-page-pp py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="plantrip-subheading-pp mb-2">PLAN YOUR JOURNEY</p>

          <h1 className="fw-bold display-5 plantrip-heading-pp">
            Plan Your Trip
          </h1>

          <p className="plantrip-text-pp fs-5">
            Everything you need for your Madhya Pradesh adventure
          </p>
        </div>

        <div className="row g-4">
          {features.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                onClick={() => navigate(item.path)}
                className="plantrip-card-pp h-100 p-4 text-center"
              >
                <div className="plantrip-icon-pp mb-4">{item.icon}</div>

                <h5 className="fw-semibold mb-2">{item.title}</h5>

                <p className="plantrip-card-text-pp mb-0">
                  Explore this feature
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanTrip;
