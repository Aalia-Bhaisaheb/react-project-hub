// Navbar.jsx

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LOGO_SRC = "/src/assets/images/logo.png";
const call_icon = "/src/assets/images/call icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img
                src={LOGO_SRC}
                alt="Elemental Trade Logo"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>

                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    location.pathname === link.path
                      ? "text-[#2e5fa3] border-b-2 border-[#2e5fa3] pb-0.5"
                      : "text-gray-600 hover:text-[#2e5fa3]"
                  }`}
                >
                  {location.pathname === link.path && (
                    <span className="mr-1 text-[#2e5fa3]">•</span>
                  )}

                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

          {/* DESKTOP CALL SECTION */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">

            <img
              src={call_icon}
              alt="call icon"
              className="w-10 h-10"
            />

            <div className="leading-tight">
              <p className="text-gray-400 text-xs">
                Call Anytime
              </p>

              <p className="text-gray-800 font-semibold text-sm">
                +91 85111 26788
              </p>
            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-600 hover:text-[#2e5fa3] transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >

            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}

          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (

        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">

          <ul className="flex flex-col px-4 py-3 gap-1">

            {navLinks.map((link) => (
              <li key={link.name}>

                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 px-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "bg-[#2e5fa3]/10 text-[#2e5fa3]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#2e5fa3]"
                  }`}
                >
                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

          {/* MOBILE CALL SECTION */}
          <div className="flex items-center gap-3 px-7 py-4 border-t border-gray-100">

            <img
              src={call_icon}
              alt="call icon"
              className="w-8 h-8"
            />

            <div>
              <p className="text-gray-400 text-xs">
                Call Anytime
              </p>

              <p className="text-gray-800 font-semibold text-sm">
                +91 85111 26788
              </p>
            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;