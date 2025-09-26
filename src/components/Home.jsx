import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import Services from "./Services";
import { motion } from "framer-motion";
import { FaMusic, FaHeadphones, FaMicrophone, FaRegHeart } from "react-icons/fa";

const Home = () => {
  const featureCards = [
    {
      icon: <FaMusic className="text-3xl text-blue-500" />,
      title: "Curated Playlists",
      description: "Discover handpicked collections for every mood and occasion",
    },
    {
      icon: <FaHeadphones className="text-3xl text-teal-500" />,
      title: "Hi-Fi Audio",
      description: "Experience studio-quality sound with our advanced audio engine",
    },
    {
      icon: <FaMicrophone className="text-3xl text-pink-500" />,
      title: "Artist Focus",
      description: "Exclusive content from your favorite creators",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-800">
      <Header />
      <div className="h-8 py-8"></div>
      <HeroSection />
      <WhatWeDo />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
