import { motion } from "framer-motion";
import { aboutStatsData } from "../data/technoAboutData";
import { heroData } from "../data/technoChemicalsData";

export default function StatsBar() {
  return (
    <div className="bg-[#EFE3DB] lg:py-15 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {aboutStatsData.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white rounded-lg border border-[#5F2913] px-5 py-7 shadow-sm"
            >
              {/* Icon box */}
              <div className="w-14 h-14 shrink-0 rounded-md bg-[#5c2010] flex items-center justify-center">
                {heroData.stats[i]?.icon ? (
                  <img
                    src={heroData.stats[i].icon}
                    alt={stat.label}
                    className="w-9 h-9 object-contain"
                  />
                ) : (
                  <span className="text-white text-xl">◎</span>
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-[#5F2913] text-2xl font-bold leading-none">
                  {stat.value}
                </p>
                <p className="text-[#323232] font-inter text-sm mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
