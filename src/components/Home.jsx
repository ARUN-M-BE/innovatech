import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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

      <main className="flex-1 w-full max-w-7xl px-4 md:px-6 py-24 mx-auto">
        {/* Hero Section */}
        <motion.div
          className="relative rounded-2xl bg-blue-100 p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Sound
            </span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            Immerse yourself in a world of music tailored just for you. Millions of songs at your fingertips.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg flex items-center gap-2 text-white">
            Start Listening Now <FaHeadphones />
          </button>
        </motion.div>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
              Choose Us
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:border-blue-400 transition-all"
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Trending Now</h2>
            <button className="text-blue-500 hover:text-teal-500 flex items-center gap-1">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <motion.div
                key={item}
                className="bg-blue-50 rounded-lg overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-blue-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaMusic className="text-4xl text-blue-300" />
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-teal-400 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white">
                    <FaRegHeart />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="text-gray-800 font-medium truncate">Popular {item}</h3>
                  <p className="text-gray-600 text-sm truncate">Artist</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
