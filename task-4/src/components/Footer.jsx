// Footer.jsx
// Premium responsive footer with background image from data file

import { footerData } from "../data/aboutData";

const socialLabel = {
  linkedin: "in",
  youtube: "▶",
  instagram: "ig",
  twitter: "𝕏",
  google: "G",
};

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${footerData.backgroundImage})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#011442]/70" />

      {/* Watermark Logo */}
      <div className="absolute right-1.5 opacity-[0.7] pointer-events-none select-none">
        <img
          src={footerData.logo}
          alt=""
          className="w-8 md:w-18 object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-12 pt-14 md:pt-20 pb-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[18px] font-condensed font-semibold mb-6 tracking-wide">
              {footerData.quickLinks.title}
            </h4>

            <ul className="space-y-4">
              {footerData.quickLinks.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gray-400 text-[15px] font-condensed text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Innovative Solutions */}
          <div>
            <h4 className="text-white text-[18px] font-condensed font-semibold mb-6 tracking-wide">
              {footerData.innovativeSolutions.title}
            </h4>

            <ul className="space-y-4">
              {footerData.innovativeSolutions.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gray-400 text-[15px] text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[18px] font-semibold mb-6 tracking-wide">
              {footerData.contact.title}
            </h4>

            <ul className="space-y-4 text-white text-[15px]">
              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5">📞</span>
                <span>{footerData.contact.phone}</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5">✉</span>

                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="hover:text-gray-400 transition-colors"
                >
                  {footerData.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-white mt-0.5">📍</span>
                <span>{footerData.contact.address}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {footerData.contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-sm font-semibold hover:bg-[#1c3d99] hover:scale-110 transition-all duration-300"
                >
                  {socialLabel[social.platform] ||
                    social.platform[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-white">
          <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
            <span>{footerData.copyright}</span>

            {footerData.legalLinks.map((link) => (
              <span
                key={link.label}
                className="flex items-center gap-2"
              >
                <span className="text-gray-700">|</span>

                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          <span className="text-white text-center">
            {footerData.designCredit}
          </span>
        </div>
      </div>
    </footer>
  );
}