import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import MenuSection from "./pages/MenuSection";
import ChefSection from "./pages/ChefSection";
import VideoSection from "./pages/VideoSection";
import AwardSection from "./pages/AwardSection";
import GallerySection from "./pages/GallerySection";
import ContactSection from "./pages/ContactSection";
// import LoginSection from "./pages/LoginSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gericht__gericht">
        <Router>
          <Header />
          <Routes>
            {/* <Route path="/LoginSection" element={<LoginSection />} />
            <Route path="/HeroSection" element={<HeroSection />} />
            <Route path="/AboutSection" element={<AboutSection />} />
            <Route path="/MenuSection" element={<MenuSection />} />
            <Route path="/ChefSection" element={<ChefSection />} />
            <Route path="/VideoSection" element={<VideoSection />} />
            <Route path="/AwardSection" element={<AwardSection />} />
            <Route path="/GallerySection" element={<GallerySection />} />
            <Route path="/ContactSection" element={<ContactSection />} />
            <Route path="*" element={<h2>404 ERROR: PAGE NOT FOUND</h2>} /> */}
          </Routes>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ChefSection />
          <VideoSection />
          <AwardSection />
          <GallerySection />
          <ContactSection />
        </Router>
      </div>
    </div>
  );
}

export default App;
