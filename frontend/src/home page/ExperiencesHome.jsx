import { useState } from "react";
import "./ExperiencesHome.css";
import { Link, useNavigate } from "react-router-dom";

export default function Experiences() {
  const experiences = [
    {
      title: "Cuisine",

      description:
        "Experience authentic flavors and traditional recipes from across Madhya Pradesh.",

      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",

      link: "/experiences",

      tab: "cuisine",
    },

    {
      title: "Ecotourism",

      description:
        "Explore forests, wildlife safaris, waterfalls and breathtaking natural landscapes.",

      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",

      link: "/experiences",

      tab: "ecoTourism",
    },

    {
      title: "Artforms",

      description:
        "Discover tribal paintings, handicrafts and traditional cultural artforms.",

      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",

      link: "/experiences",

      tab: "artforms",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  // NEXT
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  // PREVIOUS
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  // ACTIVE CARD
  const activeExperience = experiences[activeIndex];

  // SECOND CARD
  const secondCard =
    experiences[activeIndex === experiences.length - 1 ? 0 : activeIndex + 1];

  return (
    <section className="experiences-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-5">
            <div className="experience-details">
              <p className="experience-tag">Unique Experiences</p>

              <h2>{activeExperience.title}</h2>

              <p className="experience-description">
                {activeExperience.description}
              </p>

              <Link to="/experiences">
                <button className="btn btn-success explore-btn">
                  Explore More
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-7">
            <div className="experience-slider">
              {/* CARDS */}
              <div className="cards-wrapper">
                {/* ACTIVE CARD */}
                <div
                  className="experience-card active-card"
                  style={{
                    backgroundImage: `url(${activeExperience.image})`,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(activeExperience.link, {
                      state: {
                        activeTab: activeExperience.tab,
                      },
                    })
                  }
                >
                  <div className="card-overlay">
                    <div>
                      <h4 className="experience-card-title">
                        {activeExperience.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* SECOND CARD */}
                <div
                  className="experience-card"
                  style={{
                    backgroundImage: `url(${secondCard.image})`,
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(secondCard.link, {
                      state: {
                        activeTab: secondCard.tab,
                      },
                    })
                  }
                >
                  <div className="card-overlay">
                    <div>
                      <h4 className="experience-card-title">
                        {secondCard.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="slider-buttons">
                <button onClick={prevSlide}>←</button>

                <button onClick={nextSlide}>→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
