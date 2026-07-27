import { useNavigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-photo-view/dist/react-photo-view.css";
import "./GalleryPreview.css";

export default function GalleryPreview() {
  const navigate = useNavigate();
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get("http://localhost:8080/media/featured");

        setGalleryItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGallery();
  }, []);

  // const galleryItems = [
  //   {
  //     type: "photo",
  //     title: "Nature Trails",
  //     image:
  //       "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
  //   },

  //   {
  //     type: "photo",
  //     title: "Wildlife Safari",
  //     image:
  //       "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1200&auto=format&fit=crop",
  //   },

  //   {
  //     type: "video",
  //     title: "Folk Dance Festival",
  //     image:
  //       "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",

  //     video: "https://www.w3schools.com/html/mov_bbb.mp4",
  //   },

  //   {
  //     type: "photo",
  //     title: "Heritage Walk",
  //     image:
  //       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
  //   },

  //   {
  //     type: "photo",
  //     title: "Local Cuisine",
  //     image:
  //       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  //   },
  // ];

  return (
    <section className="gallery-preview-section-hp">
      <div className="container">
        {/* HEADER */}

        <div className="gallery-preview-header-hp">
          <p className="gallery-tag-hp">Gallery</p>

          <h2>Explore Moments & Memories</h2>
        </div>

        {/* MASONRY */}

        <PhotoProvider>
          <div className="gallery-masonry-hp">
            {galleryItems.map((item, index) => (
              <div className="gallery-card-hp" key={index}>
                {item.type === "photo" ? (
                  <PhotoView src={item.mediaUrl}>
                    <img
                      src={item.mediaUrl}
                      alt={item.title}
                      className="gallery-media-hp"
                    />
                  </PhotoView>
                ) : (
                  <div className="gallery-video-wrapper-hp">
                    <video className="gallery-media-hp" muted>
                      <source src={item.mediaUrl} type="video/mp4" />
                    </video>

                    <div className="video-icon-hp">▶</div>
                  </div>
                )}

                {/* OVERLAY */}

                <div className="gallery-overlay-hp">
                  <div className="gallery-content-hp">
                    <h4>{item.title}</h4>

                    {/* <span>Explore →</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PhotoProvider>

        {/* BUTTON

        <div className="gallery-controls-hp">
          <button
            className="gallery-btn-hp"
            onClick={() => navigate("/destinations")}
          >
            Explore More
          </button>
        </div> */}
      </div>
    </section>
  );
}
