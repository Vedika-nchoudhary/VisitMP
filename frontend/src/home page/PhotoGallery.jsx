import "./PhotoGallery.css";

export default function PhotoGallery() {
  const galleryImages = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Nature Trails",
    },

    {
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
      title: "Wildlife Safari",
    },

    {
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      title: "Heritage Sites",
    },

    {
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      title: "Cultural Festivals",
    },

    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      title: "Local Cuisine",
    },

    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      title: "Traditional Art",
    },
  ];

  return (
    <section className="photo-gallery-section">
      <div className="container">
        {/* HEADING */}
        <div className="gallery-header">
          <p className="gallery-tag">Photo Gallery</p>

          <h2>Explore Moments & Memories</h2>
        </div>

        {/* GALLERY GRID */}
        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <div
              className={`gallery-item ${
                index === 0 || index === 3 ? "large" : ""
              }`}
              key={index}
            >
              <img src={item.image} alt={item.title} />

              {/* OVERLAY */}
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
