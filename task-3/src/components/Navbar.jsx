import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, logoData } from "../data/heroData";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (link) => {
    if (link.href === "/") return location.pathname === "/";
    return location.pathname.startsWith(link.href);
  };

  const NavItem = ({ link, onClick }) => {
    const active = isActive(link);
    const className = `font-geist ${active ? "font-bold" : "font-normal"} text-[16px] 2xl:text-[18px] leading-[100%] transition-colors duration-200 ${
      active ? "text-white border-b-2 border-white pb-1" : "text-white/80 hover:text-white"
    }`;

    if (link.isRoute) {
      return (
        <Link to={link.href} className={className} onClick={onClick}>
          {link.label}
        </Link>
      );
    }

    return (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    );
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-[#2D258E] overflow-visible">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Inner */}
        <div className="flex items-center h-16 md:h-20 pl-[85px] sm:pl-[110px] md:pl-[135px] lg:pl-[155px] xl:pl-[175px]">

          {/* Logo */}
          <Link
            to="/"
            className="absolute top-0 z-50 left-4 sm:left-8 md:left-14 lg:left-24 xl:left-[125px] 2xl:left-[150px]"
          >
            <div className="w-[75px] h-[95px] sm:w-[75px] sm:h-[95px] md:w-[110px] md:h-[135px] lg:w-[135px] lg:h-[160px] xl:w-[120px] xl:h-[130px] flex items-center justify-center">
              <img
                src={logoData.image}
                alt={logoData.name}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center justify-end ml-auto mr-[80px] 2xl:mr-[200px] gap-8 2xl:gap-16">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavItem link={link} />
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className="xl:hidden text-white p-2 focus:outline-none ml-auto flex justify-end"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Offcanvas */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 xl:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#2D258E] z-50 xl:hidden shadow-2xl"
            >
              <div className="flex justify-end p-5">
                <button onClick={() => setMenuOpen(false)} className="text-white text-3xl leading-none">
                  ×
                </button>
              </div>
              <ul className="flex flex-col px-6 py-4 gap-5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <NavItem link={link} onClick={() => setMenuOpen(false)} />
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;