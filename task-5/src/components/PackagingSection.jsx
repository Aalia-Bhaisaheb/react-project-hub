import { motion } from "framer-motion";
import { packagingData } from "../data/technoProductData";

export default function PackagingSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-[#281D15] text-xl sm:text-2xl font-playfair font-bold text-center mb-10"
        >
          {packagingData.heading}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

          {/* cards */}
          {packagingData.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-xl overflow-hidden shadow border border-gray-100"
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[220px] sm:h-[240px] object-cover"
                />
              ) : (
                <div className="w-full h-[220px] sm:h-[240px] bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-4">
                  [ {card.title} image ]
                </div>
              )}
              <div className="px-4 py-3 bg-white">
                <p className="text-[#5F2913] font-bold text-sm">{card.title}</p>
                <p className="text-[#323232] text-xs mt-0.5">{card.caption}</p>
              </div>
            </motion.div>
          ))}

          {/* card — dark brown */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl bg-[#5C3123] p-6 flex flex-col justify-center gap-4 shadow"
          >
            <h3 className="text-white font-bold text-base">
              {packagingData.optionsCard.heading}
            </h3>
            <ul className="flex flex-col gap-3">
              {packagingData.optionsCard.options.map((opt) => (
                <li key={opt} className="flex items-start gap-2 text-gray-200 text-sm">
                  <span className="text-[#e8834a] mt-0.5 shrink-0">›</span>
                  {opt}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
