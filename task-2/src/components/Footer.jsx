export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#2F2482] overflow-hidden">
      {/* ── Hexagon watermark pattern (top-right) ── */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none w-96 h-full">
        <svg
          viewBox="0 0 400 300"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[
            [60, 50],
            [160, 50],
            [260, 50],
            [360, 50],
            [110, 135],
            [210, 135],
            [310, 135],
            [60, 220],
            [160, 220],
            [260, 220],
            [360, 220],
          ].map(([cx, cy], i) => (
            <polygon
              key={i}
              points={`${cx},${cy - 40} ${cx + 35},${cy - 20} ${cx + 35},${
                cy + 20
              } ${cx},${cy + 40} ${cx - 35},${cy + 20} ${cx - 35},${cy - 20}`}
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 pt-10 pb-24 mb-8 md:mt-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo box */}
            <div className="bg-[#EAE7FF] inline-flex items-center px-8 py-5 rounded-md">
              <img
                src="/src/assets/images/logo.png"
                alt="Elemental Trade"
                className="w-[240px] h-auto object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-white/75 text-[13px] leading-[1.85] mb-6">
              ETC Provides The Chemicals For The Manufacture Of Products That
              Range From Commodities To Resins And Advanced Chemicals &amp;
              Pharmaceutical Preparations.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              >
                <img src="./src/assets/images/basil_facebook-solid.png"/>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              >
                <img src="./src/assets/images/ri_instagram-fill.png"/>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              >
                <img src="./src/assets/images/garden_twitter-fill-12.png"/>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-md bg-white/15 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
              >
                <img src="./src/assets/images/iconoir_youtube-solid.png"/>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-white text-[14px] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 & 4: Contact Details ── */}
          <div className="sm:col-span-2">
            <h4 className="text-white font-bold text-[14px] uppercase tracking-widest mb-6">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-5">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                  <img src="./src/assets/images/fluent_call-forward-24-filled.png"/>
                </div>
                <div>
                  <p className="text-white font-semibold text-[14px]">
                    Ronak Desai
                  </p>
                  <p className="text-white/75 text-[13px]">91 8511126788</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center shrink-0">
                  <img src="./src/assets/images/mage_email-fill.png"/>
                </div>
                <a
                  href="mailto:Enquiry@elementaltrade.in"
                  className="text-white/75 hover:text-white text-[13px] transition-colors"
                >
                  Enquiry@elementaltrade.in
                </a>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                 <img src="./src/assets/images/subway_location-3.png"/>
                </div>
                <p className="text-white/75 text-[13px] leading-[1.7]">
                  Shed No. 4, Shree Hari Krupa Industrial Park, Dhamatvan Road,
                  Bakrol, Ahemdabad 382433 ( Gujarat ) INDIA
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Green wave + copyright bar ── */}
      <div className="absolute bottom-0 left-0 right-0 mt-8 md:mt-0">
        {/* Wave SVG */}
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "40px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#1a7a5e"
          />
        </svg>
        {/* Copyright bar */}
        <div className="bg-[#1a7a5e] px-6 lg:px-10 py-3">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-white/80 text-[12px]">
              © Copyright 2025, Elemental Trade Pvt.Ltd. All Rights Reserved
            </p>
            <p className="text-white/80 text-[12px]">Design by D&amp;C</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
