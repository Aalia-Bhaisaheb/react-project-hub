import { useState,useEffect } from "react";
import "./App.css";
import logo from "./assets/The Kala Foundation Logo 1.png";
import Banner from "./assets/BANNER.png";

const NAV_LINKS = ["HOME", "EVENTS", "GALLERY", "CALENDAR", "ABOUT US", "CONTACT"];

function Icon () {
  return <img src={logo} alt="logo" />;
};

function BannerIcon() {
  return (
    <img
      src={Banner}
      alt="banner"
      className="w-full object-cover"
    />
  );
}

export default function App() {
  const [active, setActive]     = useState("HOME");
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* nav height: 56px collapsed → 112px expanded */
  const navH = scrolled ? 112 : 112;

  return (
    <div className="min-h-screen bg-stone-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
        .font-oswald    { font-family: 'Oswald', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/** Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center bg-neutral-600 shadow-xl transition-all duration-500"
        style={{ height: navH }}
      >

      {/**logo */}
      <div
          className="flex items-center justify-center shrink-0 bg-orange-500 transition-all duration-500"
          style={{ width: 85, height: 106, marginLeft:165 }}
        >
          <div
            className="transition-all duration-500 overflow-hidden"
            style={{ opacity: scrolled ? 0 : 1, height: scrolled ? 0 : "auto", position: scrolled ? "absolute" : "relative" }}
          >
            <Icon />
          </div>
          <div
            className="transition-all duration-500 overflow-hidden"
            style={{ opacity: scrolled ? 1 : 0, height: scrolled ? "auto" : 0, position: scrolled ? "relative" : "absolute" }}
          >
            <Icon />
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full justify-center ml-20">

{/* Top arrow indicator (only when scrolled) */}
<div
  className="flex justify-center transition-all duration-300 overflow-hidden"
  style={{ maxHeight: scrolled ? 24 : 0, opacity: scrolled ? 1 : 0 }}
>
  <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
    <path d="M9 0 L16 10 L9 7 L2 10 Z" fill="#f47c20" />
  </svg>
</div>

{/* Nav links row */}
<div className="flex items-center justify-center flex-1">
  <ul className="flex items-center ml-16">
    {NAV_LINKS.map((link) => (
      <li key={link}>
        <button
          onClick={() => setActive(link)}
          className={`
            font-open-sans text-[12px] font-semibold tracking-[0.1em] px-7
            transition-colors duration-150
            ${scrolled ? "h-10" : "h-14"}
            ${active === link
              ? "text-orange-400 border-orange-400"
              : "text-neutral-300 border-transparent hover:text-white"
            }
          `}
        >
          {link}
        </button>
      </li>
    ))}
  </ul>
</div>
</div>

{/* CTA button */}
<button
className={`
  font-open-sans mr-40 shrink-0
  transition-all duration-300
  text-[12px] font-bold tracking-widest uppercase
  px-4 py-2.5 
  ${scrolled
    ? "bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
    : "bg-orange-500 hover:bg-orange-600 text-white"
  }
  active:scale-95
`}
>
Artist Register / Login
</button>
</nav>
      {/** hero section */}
      <section
      className="relative -mt-10 flex items-center justify-center overflow-hidden"
      style={{ maxHeight: 680, minHeight: 420 }}
      >
      <BannerIcon />
      </section>

      {/**upcoming section */}
      
    </div>
  );
}
