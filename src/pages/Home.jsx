import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";
import ChefSection from "../components/ChefSection";
import VideoSection from "../components/VideoSection";
import AwardSection from "../components/AwardSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";

function Home() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   onAuthStateChanged(firebaseAuth, (currentUser) => {
  //     if (!currentUser) navigate("/register");
  //   });
  // }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <MenuSection />
      <ChefSection />
      <VideoSection />
      <AwardSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}

export default Home;
