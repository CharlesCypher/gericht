import React from "react";
import "./App.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import MenuSection from "./MenuSection";
import ChefSection from "./ChefSection";
import VideoSection from "./VideoSection";
import AwardSection from "./AwardSection";
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";

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
