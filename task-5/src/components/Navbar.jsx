import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { navData } from "../data/technoChemicalsData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-14 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          {navData.logo.icon ? (
            <img
              src={navData.logo.icon}
              alt="logo"
              className="w-18 h-18 md:w-20 md-h-20 lg:w-30 lg:h-30 object-contain"
            />
          ) : (
            <div className="w-9 h-9 rounded bg-[#b45309] flex items-center justify-center text-white text-xs font-black">
              TC
            </div>
          )}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7">
          {navData.links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={`text-sm font-medium lg:text-[18px] transition-colors ${
                  location.pathname === link.path
                    ? "text-[#b45309]"
                    : "text-gray-600 hover:text-[#b45309]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navData.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-[#b45309]"
                        : "text-gray-700 hover:text-[#b45309]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}