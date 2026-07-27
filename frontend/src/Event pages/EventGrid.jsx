import { Link } from "react-router-dom";
import "./EventGrid.css";

export default function EventGrid() {
  const categories = [
    {
      title: "Festivals",
      image:
        "festival.jpg",
      slug: "festival",
    },

    {
      title: "Fairs",
      image:
        "fair.jpg",
      slug: "fair",
    },

    {
      title: "Food Festivals",
      image:
        "food.jpeg",
      slug: "food",
    },

    {
      title: "Religious Events",
      image:
        "religious.jpg",
      slug: "religious",
    },

    {
      title: "Adventure Events",
      image:
        "adventure.jpeg",
      slug: "adventure",
    },

    {
      title: "Cultural events",
      image:
        "cultural.jpeg",
      slug: "cultural",
    },
  ];

  return (
    <section className="event-grid-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Browse by Category</h2>

          <p className="text-muted">
            Discover unique experiences across Madhya Pradesh.
          </p>
        </div>

        {/* Category Cards */}
        <div className="row g-4">
          {categories.map((category, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <Link
                to={`/events/${category.slug}`}
                className="text-decoration-none"
              >
                <div className="category-card">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="img-fluid"
                  />

                  <div className="category-overlay">
                    <h3>{category.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
