import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black font-bold">
              GM
            </div>
            <span className="text-lg font-semibold">Innovatech Solutions</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
            {/* <Link to="/about" className="hover:underline">
              About
            </Link> */}
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {currentYear} <a href="https://arunm.pages.dev" className="hover:underline">Arun M</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
