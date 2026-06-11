// Navbar.jsx

import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoData, navLinksData } from "../data/navbarData";

function NavItem({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const hasDropdown =
    link.hasDropdown && link.dropdown?.length > 0;

  const isActive =
    location.pathname === link.href ||
    link.dropdown?.some(
      (item) => item.href === location.pathname
    );

  useEffect(() => {
    function handleClick(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <div ref={ref} className="relative">
      {hasDropdown ? (
        <button
          onClick={() => setOpen(!open)}
          className={`roboto-condensed text-[14px] xl:text-[18px] font-normal flex items-center gap-1 transition-colors duration-200 ${
            isActive
              ? "text-[#22c55e]"
              : "text-gray-700 hover:text-[#1e3a8a]"
          }`}
        >
          {link.label}

          <span
            className={`text-gray-400 text-xs transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
      ) : (
        <Link
          to={link.href}
          className={`roboto-condensed text-[14px] xl:text-[18px] font-normal flex items-center gap-1 transition-colors duration-200 ${
            isActive
              ? "text-[#22c55e]"
              : "text-gray-700 hover:text-[#1e3a8a]"
          }`}
        >
          {link.label}
        </Link>
      )}

      {hasDropdown && (
        <div
          className={`absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 origin-top ${
            open
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {link.dropdown.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-[14px] transition-colors ${
                location.pathname === item.href
                  ? "bg-[#f5f7ff] text-[#1e3a8a] font-semibold"
                  : "text-gray-700 hover:bg-[#f5f7ff] hover:text-[#1e3a8a]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(null);
  }, [location.pathname]);

  return (
    <>
      <nav className="w-full h-[80px] lg:h-[110px] bg-white border-b-[3px] border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to={logoData.href}
            className="flex-shrink-0"
          >
            <img
              src={logoData.image}
              alt="Marcost Logo"
              className="h-[25px] md:h-[38px] lg:h-[45px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden min-[1006px]:flex items-center gap-6">
            {navLinksData.map((link) => (
              <NavItem
                key={link.label}
                link={link}
              />
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="min-[1006px]:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="w-5 h-0.5 bg-gray-700" />
            <span className="w-5 h-0.5 bg-gray-700" />
            <span className="w-5 h-0.5 bg-gray-700" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => {
          setMenuOpen(false);
          setMobileOpen(null);
        }}
      />

      {/* Off Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 overflow-y-auto ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => {
              setMenuOpen(false);
              setMobileOpen(null);
            }}
            className="text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Mobile Links */}
        <div className="px-6 flex flex-col gap-6">
          {navLinksData.map((link) => {
            const hasDropdown =
              link.hasDropdown &&
              link.dropdown?.length > 0;

            const isOpen =
              mobileOpen === link.label;

            const isActive =
              location.pathname ===
                link.href ||
              link.dropdown?.some(
                (item) =>
                  item.href ===
                  location.pathname
              );

            return (
              <div key={link.label}>
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpen(
                          isOpen
                            ? null
                            : link.label
                        )
                      }
                      className={`w-full text-left roboto-condensed text-[18px] flex items-center justify-between transition-colors ${
                        isActive
                          ? "text-[#22c55e]"
                          : "text-gray-700 hover:text-[#1e3a8a]"
                      }`}
                    >
                      {link.label}

                      <span
                        className={`text-gray-400 transition-transform duration-200 ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "max-h-60 mt-2"
                          : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-2">
                        {link.dropdown.map(
                          (item) => (
                            <Link
                              key={
                                item.label
                              }
                              to={
                                item.href
                              }
                              onClick={() => {
                                setMenuOpen(
                                  false
                                );
                                setMobileOpen(
                                  null
                                );
                              }}
                              className={`text-[15px] transition-colors ${
                                location.pathname ===
                                item.href
                                  ? "text-[#1e3a8a] font-semibold"
                                  : "text-gray-600 hover:text-[#1e3a8a]"
                              }`}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileOpen(null);
                    }}
                    className={`block roboto-condensed text-[18px] transition-colors ${
                      isActive
                        ? "text-[#22c55e]"
                        : "text-gray-700 hover:text-[#1e3a8a]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}