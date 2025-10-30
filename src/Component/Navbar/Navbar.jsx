import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  const linkStyle =
    "px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all";

  const activeStyle =
    "bg-blue-400 text-white border-blue-400 shadow-[0_0_10px_#00D9FF]"; // ✅ Active হলে এই স্টাইল

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <img
          src="https://i.ibb.co/KxXD9mh0/logo-8-1.png"
          className="w-36 h-8"
          alt="Logo"
        />

        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${linkStyle} ${activeStyle}` : linkStyle
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${linkStyle} ${activeStyle}` : linkStyle
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? `${linkStyle} ${activeStyle}` : linkStyle
              }
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive ? `${linkStyle} ${activeStyle}` : linkStyle
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${linkStyle} ${activeStyle}` : linkStyle
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
