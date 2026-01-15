import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full bg-black px-8 py-4 flex items-center justify-between">
      <h3 className="text-2xl font-bold text-amber-300">
        Niki
      </h3>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-300
             ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-300
             ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-300
             ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `text-lg font-medium transition-colors duration-300
             ${isActive ? "text-amber-300" : "text-white hover:text-amber-300"}`
          }
        >
          Github
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
