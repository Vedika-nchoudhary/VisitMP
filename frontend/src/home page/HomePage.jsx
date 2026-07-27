import { useEffect, useState } from "react";
import { getHomeData } from "../api/homeApi";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "./HeroSection";
import QuickExplore from "./QuickExplore";
import TrendingEvents from "./TrendingEvents";
import ExperiencesHome from "./ExperiencesHome";
import UpcomingEvents from "./UpcomingEvents";
import PopularDestinations from "./PopularDestinations";
import GalleryPreview from "./GalleryPreview";

export default function HomePage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchHomeData() {
      try {
        const result = await getHomeData();

        setData(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchHomeData();
  }, []);

  if (!data) {
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to right, #232526, #414345)"
      }}
    >
      <div
        className="spinner-grow text-success"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>

      <h4
        className="mt-4 fw-bold"
        style={{ color: "#f5f5f5", letterSpacing: "1px" }}
      >
        Discovering Incredible Places...
      </h4>
    </div>
  );
}

  console.log(data);

  return (
    <>
      <HeroSection />
      <h1>{data.message}</h1>
      {/* <QuickExplore /> */}
      <TrendingEvents />
      <ExperiencesHome />
      <UpcomingEvents />
      <PopularDestinations />
      <GalleryPreview />
      <Footer />
    </>
  );
}
