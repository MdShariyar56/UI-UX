
import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/50 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <img
          src="https://i.ibb.co/KxXD9mh0/logo-8-1.png"
          className="w-36 h-8"
          alt="Logo"
        />

        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 border rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
