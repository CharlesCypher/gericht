import React from "react";
import "./App.css";
import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";
import MenuSection from "./pages/MenuSection";
import ChefSection from "./pages/ChefSection";
import VideoSection from "./pages/VideoSection";
import AwardSection from "./pages/AwardSection";
import GallerySection from "./pages/GallerySection";
import ContactSection from "./pages/ContactSection";

function App() {
  return (
    <div className="App">
      <div className="gericht__gericht">
        <Header />
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ChefSection />
        <VideoSection />
        <AwardSection />
        <GallerySection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
