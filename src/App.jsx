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
import LoginSection from "./pages/LoginSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gericht__gericht">
        <Router>
          <Header />
          <Routes>
            <Route path="/LoginSection" element={<LoginSection />} />
            {/* <Route path="*" element={<h2>404 ERROR: PAGE NOT FOUND</h2>} /> */}
            <Route path="/" element={<HeroSection />} />
            <Route path="/" element={<MenuSection />} />
            <Route path="/" element={<ChefSection />} />
            <Route path="/" element={<VideoSection />} />
            <Route path="/" element={<AwardSection />} />
            <Route path="/" element={<GallerySection />} />
            <Route path="/" element={<ContactSection />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
