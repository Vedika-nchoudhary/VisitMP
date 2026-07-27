import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import EcoTourismDetail from "./EcoTourismDetail";
import CuisineDetail from "./CuisineDetail";
import ArtFormDetail from "./ArtFormDetail";

import Gallery from "../components/Gallery/Gallery.jsx";

function ExperienceDetails() {
  const { type, id } = useParams();

  const [experience, setExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [galleryMedia, setGalleryMedia] = useState([]);

  useEffect(() => {
    fetchExperienceDetail();
    fetchGallery();
  }, [type, id]);

  const fetchExperienceDetail = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/experiences/detail/${type}/${id}`,
      );

      setExperience(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGallery = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/media/place/${id}`,
        );

        console.log(response.data);

        setGalleryMedia(response.data);
      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return <div className="exp-loader">Loading experience...</div>;
  }

  if (!experience) {
    return <div className="empty-exp-message">Experience not found</div>;
  }

  /* =========================
     DYNAMIC COMPONENT MAP
  ========================= */

  const componentMap = {
    "eco-tourism": EcoTourismDetail,
    cuisine: CuisineDetail,
    artform: ArtFormDetail,
  };

  const Component = componentMap[type] || EcoTourismDetail;

  return (
  <>
  <Component experience={experience} />
  <Gallery media={galleryMedia} />
  </>
  );
}

export default ExperienceDetails;
