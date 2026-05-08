import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Logos/logoFinal.png";

const Navbar = () => {
  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="relative w-16 h-16 overflow-visible">
            <img
              src={logo}
              alt="ResQbite Logo"
              className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-[45%] object-contain"
            />
          </div>

          <h1 className="text-3xl font-bold text-orange-500 tracking-wide">
            ResQbite
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">

          <Link
            to="/"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            HOME
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            ABOUT US
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            CONTACT US
          </Link>

          <Link
            to="/deals"
            className="text-white hover:text-orange-400 transition duration-300"
          >
            DEALS
          </Link>

          {/* Login Button */}
          <Link
            to="/login"
            className="hover:bg-orange-600 text-white px-5 py-2 rounded-full transition duration-300"
          >
            LOGIN
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
};

export default Navbar;