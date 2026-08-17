import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./placespage/Destination";
import NavBar from "./components/NavBar";
import Placesbytype from "./placespage/Placesbytype";
import PlaceDetails from "./placespage/Placedetails";
import HomePage from "./home page/HomePage";
import EventPage from "./Event pages/EventPage";
import CategoryEventsPage from "./Event pages/CategoryEventsPage";
import EventDetailPage from "./Event pages/EventDetailPage";
import PlanTrip from "./Planpages/PlanTrip";
import HowToReach from "./Planpages/HowToReach";
import Itinerary from "./Planpages/Itinerary";
import ItineraryResult from "./Planpages/ItineraryResult";
import WhereToStay from "./Planpages/WhereToStay";
import HotelDetails from "./Planpages/HotelDetails";
import ChatBot from "./components/ChatBot";
import Signup from "./authpages/Signup";
import Login from "./authpages/Login";
import ExperiencesPage from "./experience/ExperiencesPage";
import ExperienceDetails from "./experience/ExperienceDetails";
import TourGuide from "./Planpages/TourGuide"
import EmergencyContact from "./Planpages/EmergencyContact";
import Cities from "./placespage/Cities";
import District from "./placespage/District";
import DistcityDetail from "./placespage/DistcityDetail";
import WeatherPage from "./Planpages/WeatherPage";
import Map from "./Planpages/Map";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:category" element={<CategoryEventsPage />} />
        <Route path="/events/detail/:id" element={<EventDetailPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/destination/:type" element={<Placesbytype />} />
        <Route path="/plan" element={<PlanTrip />} />
        <Route path="/how-to-reach" element={<HowToReach />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/itineraryresult" element={<ItineraryResult />} />
        <Route path="/hotels" element={<WhereToStay />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/experiences" element={<ExperiencesPage/>} />
        <Route path="/experiences/detail/:type/:id" element={<ExperienceDetails />}/>
        <Route path="/tour-guide" element={<TourGuide/>}/>
        <Route path="/emergency-contacts" element={<EmergencyContact/>}/>
        <Route path="/destination/district" element={<District/>}/>
        <Route path="/destination/city" element={<Cities/>}/>
        <Route path="/destination/:type/:name" element={<DistcityDetail/>}/>
        <Route path="/weather" element={<WeatherPage/>} />
        <Route path="/map" element={<Map/>}/>
      </Routes>
      <ChatBot />
    </>
  );
}

export default App;
