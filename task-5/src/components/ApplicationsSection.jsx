import { motion } from "framer-motion";
import { applicationsData } from "../data/technoApplicationsData";

function AppCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      className="bg-white rounded-xl border border-gray-100 p-5 md:p-7 flex flex-col gap-5 shadow-sm cursor-pointer"
    >
      {/* Top: */}
      <div className="flex items-center gap-1 md:gap-4">
        <div className="w-26 h-26 shrink-0 rounded-lg overflow-hidden bg-gray-100">
          {card.image ? (
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300 text-[10px] text-center px-1">
              img
            </div>
          )}
        </div>
        <h3 className="text-gray-900 font-semibold md:text-[20px] text-xs leading-snug">
          {card.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        {card.description}
      </p>
    </motion.div>
  );
}

export default function ApplicationsSection({
  className = "",
  whiteBg = false,
  showHeader = true,
}) {
  return (
    <section
      id="applications"
      className={`py-16 sm:py-24 ${
        whiteBg ? "bg-white" : "bg-[#EFE3DB]"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#5F2913] text-xs font-bold tracking-widest uppercase mb-3">
              {applicationsData.sectionLabel}
            </p>
            <h2 className="text-[#281D15] text-2xl sm:text-3xl font-playfair font-semibold mb-4">
              {applicationsData.heading}
            </h2>
            <p className="text-[#7D695A] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {applicationsData.subheading}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {applicationsData.cards.map((card, i) => (
            <AppCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
