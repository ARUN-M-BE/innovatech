import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import WhatWeDo from "./WhatWeDo";
import Testimonials from "./Testimonials";
import Services from "./Services";

const Home = () => {

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
