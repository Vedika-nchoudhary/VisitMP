import { useEffect, useState } from "react";
import "./ExperiencesPage.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";

import { FaLeaf, FaPalette, FaUtensils } from "react-icons/fa";

// const experienceData = {
//   ecoTourism: [
//     {
//       id: 1,
//       title: "Forest Escape Trails",
//       image:
//         "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 2,
//       title: "Nature Camping",
//       image:
//         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 3,
//       title: "Waterfall Exploration",
//       image:
//         "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 4,
//       title: "River Trails",
//       image:
//         "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
//     },
//   ],

//   artforms: [
//     {
//       id: 5,
//       title: "Gond Art Traditions",
//       image:
//         "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 6,
//       title: "Maheshwari Weaving",
//       image:
//         "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 7,
//       title: "Terracotta Pottery",
//       image:
//         "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 8,
//       title: "Folk Dance Traditions",
//       image:
//         "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1200&auto=format&fit=crop",
//     },
//   ],

//   cuisine: [
//     {
//       id: 9,
//       title: "Flavors of MP",
//       image:
//         "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 10,
//       title: "Poha & Jalebi",
//       image:
//         "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 11,
//       title: "Traditional Cuisine",
//       image:
//         "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop",
//     },

//     {
//       id: 12,
//       title: "Village Cooking",
//       image:
//         "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
//     },
//   ],
// };

const tabs = [
  {
    key: "ecoTourism",
    label: "Eco Tourism",
    icon: <FaLeaf />,
  },

  {
    key: "artforms",
    label: "Artforms & Culture",
    icon: <FaPalette />,
  },

  {
    key: "cuisine",
    label: "Cuisine",
    icon: <FaUtensils />,
  },
];

export default function ExperiencesPage() {
  const [experienceData, setExperienceData] = useState({
    ecoTourism: [],
    artforms: [],
    cuisine: [],
  });
  const location = useLocation();

const [activeTab, setActiveTab] = useState(
  location.state?.activeTab || "ecoTourism"
);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const res = await axios.get("http://localhost:8080/experiences");

      setExperienceData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="experiences-page" style={{ paddingTop: "95px" }}>
      {/* HEADER */}

      <div className="experience-header">
        <p className="experience-subtitle">CURATED EXPERIENCES</p>

        <h1 className="experience-title">Explore Authentic Experiences</h1>
      </div>

      {/* TABS */}

      <div className="experience-tabs">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`tab-item ${activeTab === tab.key ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <span className="tab-icon">{tab.icon}</span>

            <p>{tab.label}</p>
          </div>
        ))}
      </div>

      {/* LOADER */}

      {loading && <div className="exp-loader">Loading experiences...</div>}

      {/* EMPTY */}

      {!loading && experienceData[activeTab].length === 0 && (
        <div className="empty-exp-message">
          <h3>Experiences Coming Soon</h3>

          <p>We are curating authentic experiences from Madhya Pradesh.</p>
        </div>
      )}

      {/* CARDS */}

      {experienceData[activeTab].length > 0 && (
        <div className="experience-grid-exp-page">
          {experienceData[activeTab].map((item) => (
            <Link
              key={item._id}
              to={`/experiences/detail/${activeTab}/${item._id}`}
              className="experience-card-exp-page"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div className="card-overlay-exp-page">
                <h3>{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
