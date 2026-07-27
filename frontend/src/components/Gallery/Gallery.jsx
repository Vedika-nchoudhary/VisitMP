import { useState } from "react";

import "./Gallery.css";

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";

function Gallery({ media = [] }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!media.length) return null;

  return (
    <section className="gallery-section-dp">
      <div className="gallery-header-dp">
        <p className="gallery-subtitle-dp">Explore Through Visuals</p>

        <h2 className="gallery-title-dp">Gallery</h2>
      </div>

      <PhotoProvider>
        <div className="gallery-masonry-dp">
          {media.map((item) => (
            <div className="gallery-item-dp" key={item._id}>
              {item.type === "photo" ? (
                <PhotoView src={item.mediaUrl}>
                  <img
                    src={item.mediaUrl}
                    alt={item.title}
                    className="gallery-media-dp"
                  />
                </PhotoView>
              ) : (
                <div
                  className="gallery-video-wrapper-dp"
                  onClick={() => setSelectedVideo(item.mediaUrl)}
                >
                  <video
                    className="gallery-media-dp"
                    poster={item.thumbnailUrl}
                    muted
                  >
                    <source src={item.mediaUrl} type="video/mp4" />
                  </video>

                  <div className="gallery-play-button-dp">▶</div>
                </div>
              )}

              <div className="gallery-overlay-dp">
                <h3>{item.title}</h3>

                {item.category && <p>{item.category}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* VIDEO MODAL */}

        {selectedVideo && (
          <div
            className="video-modal-dp"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="video-modal-content-dp"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-close-btn-dp"
                onClick={() => setSelectedVideo(null)}
              >
                ✕
              </button>

              <video
                src={selectedVideo}
                controls
                autoPlay
                className="fullscreen-video-dp"
              />
            </div>
          </div>
        )}
      </PhotoProvider>
    </section>
  );
}

export default Gallery;
