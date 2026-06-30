import { motion } from "framer-motion";
import { aboutData } from "../data/technoChemicalsData";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-10 lg:gap-20 items-center">

        {/* Left  */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full md:w-[45%] shrink-0"
        >
          {aboutData.image ? (
            <img
              src={aboutData.image}
              alt="Factory"
              className="w-full h-[280px] lg:h-[340px] object-cover rounded-xl"
            />
          ) : (
            <div className="w-full h-[280px] sm:h-[340px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              [ Factory / facility image ]
            </div>
          )}

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-6 translate-y-1/2 bg-[#5F2913] text-white text-sm font-semibold px-5 py-3 rounded-md shadow-lg"
          >
            {aboutData.location}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex-1 pt-6 md:pt-0"
        >
          <p className="text-[#5F2913] text-xs font-bold tracking-widest uppercase mb-3">
            {aboutData.sectionLabel}
          </p>

          <h2 className="text-gray-900 text-2xl sm:text-3xl font-playfair text-[#281D15] font-bold leading-snug mb-5">
            {aboutData.heading}
          </h2>

          <p className="text-[#7D695A] text-sm sm:text-base leading-relaxed mb-7 text-justify">
            {aboutData.description}
          </p>

          <motion.a
            href={aboutData.ctaHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-[#e8834a] text-[#e8834a] bg-[#e8834a] hover:bg-[#f7f5f2] hover:text-[#e8834a] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
          >
            {aboutData.ctaLabel}
            <span className="text-base">↗</span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
