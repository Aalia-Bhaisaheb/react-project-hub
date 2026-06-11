import { motion } from "framer-motion";
import { heroData } from "../data/technoChemicalsData";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {heroData.backgroundImage ? (
          <img
            src={heroData.backgroundImage}
            alt="hero background"
            className="w-full h-full object-cover bg-[#5F2913]"
          />
        ) : (
          <div className="w-full h-full bg-[#5F2913]" />
        )}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 w-full py-16 flex flex-col lg:flex-row gap-12 lg:gap-65 items-center">

        {/* Left */}
        <div className="flex-1 max-w-xl">
          {/* top */}
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex text-white border-[#C3652280] text-xs sm:text-sm border rounded-full bg-[#C3652280] px-4 py-2 font-medium mb-4 flex items-center gap-2"
          >
            {heroData.badge}
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-playfair text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight mb-5"
          >
            {heroData.headingNormal}
            <span className="text-[#e8834a]">{heroData.headingHighlight}</span>
            {heroData.headingEnd}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base font-inter leading-relaxed mb-8"
          >
            {heroData.description}
          </motion.p>

          {/* CTA */}
          <motion.a
            href={heroData.ctaHref}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#e8834a] hover:bg-[#5F2913] font-inter text-white text-sm px-6 py-3 rounded-md transition-colors"
          >
            {heroData.ctaLabel}
            <span className="text-base">↗</span>
          </motion.a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 w-full lg:w-auto lg:min-w-[230px]">
          {heroData.stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              whileHover={{ x: -4 }}
              className="flex items-center gap-4 backdrop-blur-sm border border-white/50 rounded-lg px-4 lg:px-10 py-8"
            >
              {/* Icon */}
              <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                {stat.icon ? (
                  <img src={stat.icon} alt={stat.label} className="w-9 h-9 object-contain" />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#e8834a]/30 border border-[#e8834a]/50 flex items-center justify-center text-[#e8834a] text-lg font-black">
                    ◎
                  </div>
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-[#e8834a] text-[30px] font-inter font-extrabold leading-none">
                  {stat.value}
                </p>
                <p className="text-gray-300 text-xs mt-2 font-inter">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
