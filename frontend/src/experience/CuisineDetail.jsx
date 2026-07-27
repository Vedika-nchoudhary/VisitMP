import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";
import ExperienceHero from "./ExperienceHero";

function CuisineDetail({ experience }) {
  return (
    <ExperienceLayout>
      <ExperienceHero
        image={experience.image}
        title={experience.title || experience.name}
        location={experience.location}
        subtitle="EXPERIENCE DETAILS"
      />

      <section className="experience-section-expd">
        <div className="container">
          <div className="detail-tags-expd">
            <span>Food</span>
            <span>Local Cuisine</span>
          </div>

          <div className="section-block">
            <p className="section-mini-title">ABOUT</p>

            <h2>Food Journey</h2>

            <p>{experience.description}</p>
          </div>

          <div className="info-grid-expd">
            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-utensils"></i>
              </div>

              <h3>Traditional Food</h3>

              <p>Authentic local dishes</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <h3>Local Markets</h3>

              <p>Cultural food exploration</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-fire"></i>
              </div>

              <h3>Cooking Style</h3>

              <p>Traditional preparation</p>
            </div>
          </div>
        </div>
      </section>
    </ExperienceLayout>
  );
}

export default CuisineDetail;
