import "./GalleryPage.css";

function GalleryPage() {
  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Waterfalls",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206",
      title: "Lakes & Rivers",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Festivals",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
      title: "Historic Places",
    },
    {
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "Wildlife",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Local Culture",
    },
    {
      image:
        "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
      title: "Mountains",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Adventure",
    },
  ];

  return (
    <div className="gallery-page-gal">
      {/* HERO */}
      <section className="gallery-hero-gal">
        <div className="container">
          <div className="gallery-hero-content-gal">
            <p className="gallery-subtitle-gal">
              VISUAL STORIES
            </p>

            <h1>Explore Madhya Pradesh Through Images</h1>

            <p>
              Discover breathtaking landscapes, vibrant
              festivals, rich heritage, wildlife, and unforgettable
              experiences across the heart of India.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery-section-gal">
        <div className="container">
          <div className="gallery-grid-gal">
            {galleryImages.map((item, index) => (
              <div
                className="gallery-card-gal"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay-gal">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;