import React from "react";
import { FaBell, FaHeart, FaUser } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-around px-6 py-4 bg-gray-800 text-white shadow-md font-sans">
      {/* Logo and Website Name */}
      <div className="flex items-center space-x-3">
        <img
          src="/path-to-your-logo.png"
          alt="Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold">Law Master</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-400 font-medium transition duration-200">
          Home
        </a>
        <a href="#" className="hover:text-blue-400 font-medium transition duration-200">
          Find Lawyers
        </a>
        <a href="#" className="hover:text-blue-400 font-medium transition duration-200">
          About
        </a>
        <a href="#" className="hover:text-blue-400 font-medium transition duration-200">
          Blog
        </a>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="hover:text-blue-400">
          <FaBell size={20} />
        </button>
        <button className="hover:text-blue-400">
          <FaHeart size={20} />
        </button>
        <button className="hover:text-blue-400">
          <FaUser size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
