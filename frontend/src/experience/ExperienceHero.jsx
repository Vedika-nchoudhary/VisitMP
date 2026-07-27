import "./ExperienceDetails.css";

function ExperienceHero({ image, title, location, subtitle }) {
  return (
    <section className="experience-hero-expd">
      <img src={image} alt={title} className="hero-image-expd" />

      <div className="hero-overlay-expd">
        <div className="container-fluid hero-container-expd">
          <div className="hero-content-expd">
            <p className="hero-subtitle-expd">{subtitle}</p>

            <h1>{title || "Experience Details"}</h1>

            <p className="hero-location-expd">
              <i className="fa-solid fa-location-dot"></i>

              {location || "Madhya Pradesh"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceHero;
