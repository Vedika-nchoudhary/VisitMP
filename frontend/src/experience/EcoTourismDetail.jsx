import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";
import ExperienceHero from "./ExperienceHero";

function EcoTourismDetail({ experience }) {
  return (
    <ExperienceLayout >
      {/* HERO */}
      <ExperienceHero
        image={experience.image}
        title={experience.title || experience.name}
        location={experience.location}
        subtitle="EXPERIENCE DETAILS"
      />

      {/* MAIN CONTENT */}
      <section className="experience-section-expd">
        <div className="container">
          {/* TAGS */}
          <div className="detail-tags-expd">
            <span>Nature</span>
            <span>Adventure</span>
          </div>

          {/* ABOUT */}
          <div className="section-block">
            <p className="section-mini-title">ABOUT</p>

            <h2>About This Experience</h2>

            <p>{experience.description}</p>
          </div>

          {/* INFO CARDS
          <div className="info-grid-expd">
            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-clock"></i>
              </div>

              <h3>Duration</h3>

              <p>{experience.duration || "2 Days"}</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-users"></i>
              </div>

              <h3>Group Size</h3>

              <p>{experience.groupSize || "10 People"}</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-leaf"></i>
              </div>

              <h3>Experience Type</h3>

              <p>Eco Tourism</p>
            </div>
          </div> */}
        </div>
      </section>
    </ExperienceLayout>
  );
}

export default EcoTourismDetail;
