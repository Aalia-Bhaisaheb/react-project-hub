import { motion } from "framer-motion";
import { footerData } from "../data/technoFooterData";

export default function Footer() {
  return (
    <footer className="bg-[#2e1a0e] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              {footerData.logo.icon ? (
                <img
                  src={footerData.logo.icon}
                  alt="Techno Chemicals"
                  className="w-30 h-25 lg:w-35 lg:h-25 object-contain -mt-5"
                />
              ) : (
                <div className="w-9 h-9 rounded bg-[#e8834a] flex items-center justify-center text-white text-xs font-black shrink-0">
                  TC
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed -mt-5">
              {footerData.tagline}
            </p>

            {/* ISO */}
            {footerData.isoLogo ? (
              <img
                src={footerData.isoLogo}
                alt="ISO Certified"
                className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
              />
            ) : (
              <div className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center text-gray-500 text-[10px] font-bold text-center leading-tight">
                ISO
              </div>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DBA670] font-playfair text-md mb-5">{footerData.linksTitle}</p>
            <ul className="flex flex-col gap-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#e8834a] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DBA670] font-playfair text-md mb-5">{footerData.productTitle}</p>
            <ul className="flex flex-col gap-3">
              {footerData.products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    className="text-gray-400 text-sm hover:text-[#e8834a] transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            viewport={{ once: true }}
          >
            <p className="text-[#DBA670] font-playfair text-md mb-5">{footerData.contactTitle}</p>

            <ul className="flex flex-col gap-4">
              {footerData.contactItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-400 text-sm"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="w-5 h-5 object-contain shrink-0 mt-0.5"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1">
            <span>{footerData.copyright}</span>
            {footerData.legalLinks.map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-[#e8834a] transition-colors">
                  {l}
                </a>
              </span>
            ))}
          </div>
          <span className="shrink-0">{footerData.designCredit}</span>
        </div>
      </div>
    </footer>
  );
}
