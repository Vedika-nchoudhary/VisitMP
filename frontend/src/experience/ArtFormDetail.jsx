import ExperienceLayout from "./ExperienceLayout";
import "./ExperienceDetails.css";
import ExperienceHero from "./ExperienceHero";

function ArtFormDetail({ experience }) {
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
            <span>Culture</span>
            <span>Heritage</span>
          </div>

          <div className="section-block">
            <p className="section-mini-title">ABOUT</p>

            <h2>Art & Cultural Heritage</h2>

            <p>{experience.description}</p>
          </div>

          <div className="info-grid-expd">
            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-masks-theater"></i>
              </div>

              <h3>Traditional Arts</h3>

              <p>Local cultural performances</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-landmark"></i>
              </div>

              <h3>Heritage</h3>

              <p>Historical cultural roots</p>
            </div>

            <div className="info-card-expd">
              <div className="info-icon-expd">
                <i className="fa-solid fa-palette"></i>
              </div>

              <h3>Artforms</h3>

              <p>Traditional artistic expression</p>
            </div>
          </div>
        </div>
      </section>
    </ExperienceLayout>
  );
}

export default ArtFormDetail;
