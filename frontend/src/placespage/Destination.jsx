import { useState } from "react";

import CategoryCard from "../components/CategoryCard";

import { categoriesData } from "../data/Categories";

import "./Destination.css";

function Destination() {
  const [activeCategory, setActiveCategory] =
    useState("attractions");

  const categories = [
    {
      key: "attractions",
      icon: "fa-solid fa-tree",
      label: "Attractions",
    },
    {
      key: "artCulture",
      icon: "fa-solid fa-palette",
      label: "Artforms & Culture",
    },
    {
      key: "picnicSpots",
      icon: "fa-solid fa-utensils",
      label: "Picnic Spots",
    },
    {
      key: "regions",
      icon: "fa-solid fa-mountain-city",
      label: "Regions",
    },
    {
      key: "spirituality",
      icon: "fa-solid fa-place-of-worship",
      label: "Spirituality",
    },
  ];

  return (
    <div className="destination-page-desti" style={{ paddingTop: "95px" }}>

      {/* HEADER */}

      <section className="destination-top-desti">
        <div className="container">

          {/* <p className="destination-subtitle-desti">
            POPULAR DESTINATIONS
          </p> */}

          <h1 className="destination-title-desti">
            Discover The Beauty Of Madhya Pradesh
          </h1>
          <br></br>
            <br></br>

          {/* CATEGORY SECTION */}

          <div className="destination-tabs-desti">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className={`destination-tab-desti ${
                  activeCategory === cat.key
                    ? "active-desti"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(cat.key)
                }
              >
                <i className={cat.icon}></i>

                <p>{cat.label}</p>

                <div className="destination-line-desti"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CARDS */}

      <section className="destination-cards-desti">
        <div className="container">

          <div className="row g-4">
            {categoriesData[activeCategory].map(
              (item, index) => (
                <CategoryCard
                  key={index}
                  title={item.title}
                  image={item.image}
                  category={activeCategory}
                />
              )
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Destination;