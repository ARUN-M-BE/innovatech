import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActiveStyle = "text-blue-500 font-bold border-b-2 border-blue-500";
  const isNotActiveStyle = "text-gray-700 hover:text-blue-500 transition";

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
          {/* <NavLink to="/musics" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>Musics</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>About</NavLink> */}
          <NavLink to="/contact" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}>Contact</NavLink>
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
          {/* <NavLink to="/musics" onClick={() => setMobileMenuOpen(false)}>Musics</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</NavLink> */}
          <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
