import { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const carouselRef = useRef(null);

  const slides = [
    {
      type: "video",
      src: "/hero-video1.mp4",
      tag: "Eco Tourism • Pachmarhi",
      title: "Into the Wild Heart",
      text: "Discover waterfalls, forests and untouched landscapes of Madhya Pradesh",
      buttons: ["Explore Nature", "View Destinations"],
      overlay: "eco-overlay-hhero",
    },

    {
      type: "video",
      src: "/hero-video2.mp4",
      tag: "Heritage • Architecture",
      title: "Eternal Heritage of India",
      text: "Explore timeless temples, carvings and architectural wonders across Madhya Pradesh",
      buttons: ["Explore Heritage", "Discover History"],
      overlay: "heritage-overlay-hhero",
    },

    {
      type: "image",
      src: "/hero-slide3.jpg",
      tag: "Culture • Handloom Heritage",
      title: "Threads of Tradition",
      text: "Experience the timeless artistry and craftsmanship of Madhya Pradesh handloom culture",
      buttons: ["Explore Culture", "View Crafts"],
      overlay: "culture-overlay-hhero",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Move to next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Auto timing for image slides
  useEffect(() => {
    const currentSlide = slides[activeIndex];

    if (currentSlide.type === "image") {
      const timer = setTimeout(() => {
        nextSlide();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <div id="heroCarousel" className="carousel slide carousel-fade">
      {/* Indicators */}

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slides */}

      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <div className="hero-slide-hhero">
              {/* VIDEO */}

              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  playsInline
                  className="hero-media-hhero"
                  onEnded={nextSlide}
                >
                  <source src={slide.src} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="hero-media-hhero"
                  style={{
                    backgroundImage: `url(${slide.src})`,
                  }}
                ></div>
              )}

              {/* Overlay */}

              <div className={`overlay-hhero ${slide.overlay}`}>
                <div className="hero-content-hhero container">
                  <span className="hero-tag-hhero">{slide.tag}</span>

                  <h1>{slide.title}</h1>

                  <p>{slide.text}</p>

                  <div className="hero-buttons-hhero">
                    <button className="btn btn-success me-3">
                      {slide.buttons[0]}
                    </button>

                    <button className="btn btn-outline-light">
                      {slide.buttons[1]}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}

      <button
        className="carousel-control-prev hero-control-hhero"
        onClick={() =>
          setActiveIndex(
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
          )
        }
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next hero-control-hhero"
        onClick={nextSlide}
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
