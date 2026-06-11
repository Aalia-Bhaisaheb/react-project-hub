import { motion } from "framer-motion";
import { heroData, pageHeader } from "../data/technoChemicalsData";

export default function PageHeader({ title, breadcrumb }) {
  return (
    <div className="relative h-44 sm:h-52 flex items-center justify-center pt-20">
      <div className="absolute inset-0">
        {heroData.backgroundImage ? (
          <img
            src={pageHeader.backgroundImage}
            alt="page header background"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full bg-[#2a1a0e]" />
        )}
        <div className="absolute inset-0 bg-[#5F2913]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-white text-2xl sm:text-3xl font-playfair font-bold mb-2"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-gray-300 text-sm"
        >
          {breadcrumb}
        </motion.p>
      </div>
    </div>
  );
}
