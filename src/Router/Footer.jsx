import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8">
      {/* Top Section: Logo + Links */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

        {/* Logo */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-amber-300 mb-4">Niki</h3>
          <p className="text-gray-400">
            Your favorite website for amazing content.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white mb-2">Pages</h4>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-amber-300"
                    : "text-gray-400 hover:text-amber-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-amber-300"
                    : "text-gray-400 hover:text-amber-300"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive
                    ? "text-amber-300"
                    : "text-gray-400 hover:text-amber-300"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-white mb-2">Follow Us</h4>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Niki. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
