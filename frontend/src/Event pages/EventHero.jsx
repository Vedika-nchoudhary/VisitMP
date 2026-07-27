import "./EventHero.css";

export default function EventHero() {
  return (
    <section className="event-hero d-flex align-items-center">
      <div className="container text-white">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="event-hero-title">
              Discover Festivals & Events of Madhya Pradesh
            </h1>

            <p className="event-hero-text">
              Explore vibrant cultural festivals, music events, tribal fairs,
              food celebrations, and unforgettable experiences across Madhya Pradesh.
            </p>

            <button className="btn btn-warning btn-lg mt-3">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}