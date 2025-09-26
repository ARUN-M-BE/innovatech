import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/image";
import { motion } from 'framer-motion';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActiveStyle = "text-blue-500 font-bold border-b-2 border-blue-500";
  const isNotActiveStyle = "text-gray-900 hover:text-blue-500 transition";

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-16" />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6">
          <NavLink to="/home" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>Home</NavLink>
          <NavLink to="/Services" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>Services</NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>Contact</NavLink>
        </nav>

        <nav className="hidden lg:flex gap-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 inline-flex items-center group"
          >
            Get Started
          </motion.button>
        </motion.div>
        </nav>


        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-2xl"
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-gray-100 flex flex-col gap-4 px-6 py-4">
          <NavLink to="/home" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/Services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          <button to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
