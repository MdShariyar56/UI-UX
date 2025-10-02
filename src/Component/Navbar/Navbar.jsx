import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-none">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/KxXD9mh0/logo-8-1.png"
            className="w-36 h-8"
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <div className="flex-none">
          <ul className="flex gap-6 text-white">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
