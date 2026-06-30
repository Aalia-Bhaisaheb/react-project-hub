import { motion } from "framer-motion";
import SocialIcon from "./SocialIcon";
import { footerData } from "../data/footerData";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#EEEDF8]">

      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16"
      >
        {/* Tablet Optimization: Uses grid on small/medium tablets, switches to flex-row on larger viewports */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-10 sm:gap-8 md:gap-16 lg:gap-24 items-start">

          {/* Left Block (Logo & Description) */}
          <div className="md:w-80 lg:w-96 flex-shrink-0 w-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="pt-0"
            >
              {footerData.logoImage ? (
                <img
                  src={footerData.logoImage}
                  alt={footerData.logoName}
                  /* Scaled logo size gracefully across mobile (h-24), tablet (h-28), and desktop (h-32) */
                  className="h-24 sm:h-28 md:h-32 w-auto object-contain object-left"
                />
              ) : null}
            </motion.div>

            <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-sm">
              {footerData.description}
            </p>
          </div>

          {/* Right Block (Quick Links & Socials) */}
          {/* Tablet Optimization: Adjusts top paddings to align elements nicely based on grid vs row execution */}
          <div className="flex-1 flex flex-col gap-10 w-full pt-4 sm:pt-6 md:pt-12">

            {/* Quick Links */}
            <div>
              <h3 className="text-[#737373] font-geist text-[18px] md:text-[20px] font-bold tracking-[0.18em] uppercase mb-4 sm:mb-6">
                {footerData.quickLinksHeading}
              </h3>

              <nav>
                {/* On tablets, links will wrap cleanly without breaking layouts */}
                <ul className="flex flex-wrap gap-x-6 gap-y-3">
                  {footerData.quickLinks.map((link) => (
                    <motion.li
                      key={link.label}
                      whileHover={{ y: -2 }}
                    >
                      <Link
                        to={link.href}
                        className="text-[15px] md:text-[16px] font-geist text-[#737373] hover:text-[#3D2DB8] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-[#737373] text-[18px] md:text-[20px] font-bold tracking-[0.18em] uppercase mb-4">
                {footerData.socialHeading}
              </h3>

              <div className="flex items-center gap-3">
                {footerData.socialLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{
                      y: -4,
                      scale: 1.1,
                    }}
                  >
                    <SocialIcon link={link} />
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
          <p className="text-sm font-semibold text-gray-700 text-center sm:text-left">
            {footerData.copyrightText}
          </p>
          <p className="text-sm text-gray-500 font-semibold text-center sm:text-right">
            {footerData.designCredit}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;