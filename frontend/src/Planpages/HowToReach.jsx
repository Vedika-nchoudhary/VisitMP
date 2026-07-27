import {
  FaPlaneDeparture,
  FaTrain,
  FaRoad,
  FaCircleCheck,
} from "react-icons/fa6";

import "./HowToReach.css";

function HowToReach() {
  const travelOptions = [
    {
      title: "By Air",
      icon: <FaPlaneDeparture />,
      details: [
        "Major airports: Bhopal, Indore, Jabalpur & Gwalior",
        "Direct flights from Delhi, Mumbai & Bangalore",
        "Taxi and cab services available",
      ],
    },
    {
      title: "By Train",
      icon: <FaTrain />,
      details: [
        "Well connected railway network across India",
        "Major stations: Bhopal, Itarsi & Jabalpur",
        "Express and superfast trains available daily",
      ],
    },
    {
      title: "By Road",
      icon: <FaRoad />,
      details: [
        "Connected through NH-44 & NH-46",
        "Luxury buses and interstate transport available",
        "Easy road trips from nearby states",
      ],
    },
  ];

  const cities = [
    {
      name: "Bhopal",
      image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d",
    },
    {
      name: "Indore",
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b",
    },
    {
      name: "Jabalpur",
      image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c",
    },
    {
      name: "Gwalior",
      image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393",
    },
  ];

  return (
    <div className="htr-page-pp">
      {/* HERO SECTION */}

      <div className="htr-hero-pp d-flex align-items-center justify-content-center text-white text-center">
        <div className="px-3">
          <p className="htr-subheading-pp mb-3">TRAVEL GUIDE</p>

          <h1 className="fw-bold display-3 htr-hero-title-pp">How To Reach</h1>

          <p className="fs-5 mt-3 htr-hero-text-pp">
            Discover the easiest ways to travel across Madhya Pradesh
          </p>

          <p className="htr-hero-tagline-pp mt-4 mb-0">
            Your gateway to the heart of India
          </p>
        </div>
      </div>

      {/* TRAVEL OPTIONS */}

      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="htr-subheading-pp mb-2">TRAVEL OPTIONS</p>

          <h2 className="fw-bold display-6 htr-section-title-pp">
            Comfortable Ways To Travel
          </h2>

          <p className="htr-section-text-pp">
            Explore the heart of India through air, rail and road
          </p>
        </div>

        <div className="row g-4">
          {travelOptions.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="htr-card-pp h-100 p-4">
                <div className="htr-icon-pp mb-4">{item.icon}</div>

                <h3 className="fw-bold mb-4 text-center">{item.title}</h3>

                <ul className="list-unstyled">
                  {item.details.map((detail, i) => (
                    <li key={i} className="mb-3 htr-list-item-pp">
                      <FaCircleCheck className="me-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CITIES */}

      <div className="container pb-5">
        <div className="text-center mb-5">
          <p className="htr-subheading-pp mb-2">CONNECTED CITIES</p>

          <h2 className="fw-bold display-6 htr-section-title-pp">
            Popular Entry Cities
          </h2>

          <p className="htr-section-text-pp">
            Major connected destinations in Madhya Pradesh
          </p>
        </div>

        <div className="row g-4">
          {cities.map((city, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="htr-city-card-pp h-100">
                <div className="overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-100 htr-city-image-pp"
                  />
                </div>

                <div className="text-center p-4">
                  <h4 className="fw-bold">{city.name}</h4>

                  <button className="btn htr-outline-btn-pp px-4 mt-3">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}

      <div className="htr-stats-section-pp py-5 mt-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h1 className="fw-bold htr-stats-number-pp">12+</h1>

              <p className="mb-0">Major Railway Junctions</p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold htr-stats-number-pp">4</h1>

              <p className="mb-0">International Airports</p>
            </div>

            <div className="col-md-4">
              <h1 className="fw-bold htr-stats-number-pp">50+</h1>

              <p className="mb-0">Tourist Destinations Connected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToReach;
