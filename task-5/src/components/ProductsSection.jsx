import { motion } from "framer-motion";
import { productsData } from "../data/technoChemicalsData";

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <p className="text-[#5F2913] text-xs font-bold tracking-widest uppercase mb-3">
            {productsData.sectionLabel}
          </p>

          <h2 className="text-[#281D15] font-playfair text-2xl sm:text-3xl font-bold leading-snug mb-5">
            {productsData.heading}
          </h2>

          <p className="text-[#7D695A] text-sm sm:text-base leading-relaxed mb-7">
            {productsData.description}
          </p>

          <motion.a
            href={productsData.ctaHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-[#e8834a]  hover:bg-[#f7f5f2] hover:text-[#e8834a] text-[#e8834a] bg-[#e8834a] text-white text-sm font-semibold px-6 py-3 rounded-md transition-colors"
          >
            {productsData.ctaLabel}
            <span className="text-base">↗</span>
          </motion.a>
        </motion.div>

        {/* Right — product card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="w-full md:w-[42%] shrink-0 rounded-xl overflow-hidden shadow-lg border border-gray-100"
        >
          {/* Product image */}
          {productsData.featuredProduct.image ? (
            <img
              src={productsData.featuredProduct.image}
              alt={productsData.featuredProduct.name}
              className="w-full h-[240px] sm:h-[280px] object-cover"
            />
          ) : (
            <div className="w-full h-[240px] sm:h-[280px] bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
              [ Cadmium Oxide Powder image ]
            </div>
          )}

          {/* Product info */}
          <div className="px-5 py-4 bg-white">
            <p className="text-gray-900 font-bold text-sm sm:text-base">
              {productsData.featuredProduct.name}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {productsData.featuredProduct.tagline}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

