import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const iconVariants = {
    hover: { scale: 1.3, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <footer className="bg-white text-white py-8 w-full border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-6 mb-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 mb-4 md:mb-0 text-center text-sm text-gray-800">
            <a href="http://example.com">privacy & policy</a>
            <a href="http://example.com">Terms and condition</a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl">
            <motion.a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-800">
          &copy; {currentYear}{" "}
          <a href="https://arunm.pages.dev" className="hover:underline">
            Innovatech Solutions
          </a>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
