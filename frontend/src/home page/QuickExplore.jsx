import "./QuickExplore.css";

import {
  FaTree,
  FaLandmark,
  FaDrum,
  FaPaw,
  FaUtensils,
  FaHiking,
} from "react-icons/fa";

export default function QuickExplore() {
  const categories = [
    {
      icon: <FaTree />,
      title: "Nature",
      text: "Forests, lakes and eco tourism destinations",
    },
    {
      icon: <FaLandmark />,
      title: "Heritage",
      text: "Ancient temples and historical monuments",
    },
    {
      icon: <FaDrum />,
      title: "Festivals",
      text: "Cultural celebrations and folk traditions",
    },
    {
      icon: <FaPaw />,
      title: "Wildlife",
      text: "National parks and jungle safaris",
    },
    {
      icon: <FaUtensils />,
      title: "Cuisine",
      text: "Authentic local food experiences",
    },
    {
      icon: <FaHiking />,
      title: "Adventure",
      text: "Camping, trekking and outdoor fun",
    },
  ];

  return (
    <section className="quick-explore py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Quick Explore</h2>
          <p className="section-subtitle">
            Discover experiences across Madhya Pradesh
          </p>
        </div>

        <div className="row g-4">
          {categories.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="explore-card text-center">
                <div className="explore-icon">
                  {item.icon}
                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}