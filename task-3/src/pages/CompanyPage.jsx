import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  companyHeroBg,
  companyHeroContent,
  founderData,
  companyDescription,
  infrastructureData,
  historyData,
} from "../data/companyData";

// ─── Reusable section eyebrow + title ───
function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-6">
      <h2 className="text-[#2D258E] text-[18px] font-geist font-medium lg:text-[24px] uppercase mb-1">
        {eyebrow}
      </h2>

      <h2 className="text-[#7C7C7C] text-xl sm:text-2xl lg:text-3xl font-bold font-geist leading-snug">
        {title}
      </h2>
    </div>
  );
}

// ─── Image placeholder ───
function ImgPlaceholder({ label, className }) {
  return (
    <div
      className={`bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-3 ${className}`}
    >
      {label}
    </div>
  );
}

export default function CompanyPage() {
  // ─── Mobile Slider State ───
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === infrastructureData.images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>About Auro Pumps | Industrial Pump Manufacturer</title>

        <meta
          name="description"
          content="Learn about Auro Pumps, a trusted industrial pump manufacturer with decades of expertise in precision pumping solutions and infrastructure."
        />

        <meta
          name="keywords"
          content="Auro Pumps, industrial pump manufacturer, process pumps company, molten salt pumps India, pumping solutions"
        />

        <meta name="author" content="Auro Pumps" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="http://localhost:5173/company" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="About Auro Pumps | Industrial Pump Manufacturer"
        />

        <meta
          property="og:description"
          content="Discover Auro Pumps' history, infrastructure, expertise, and commitment to industrial pumping solutions."
        />

        <meta
          property="og:image"
          content="http://localhost:5173/og-image.png"
        />

        <meta property="og:url" content="http://localhost:5173/company" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="About Auro Pumps | Industrial Pump Manufacturer"
        />

        <meta
          name="twitter:description"
          content="Learn more about Auro Pumps and our industrial pumping expertise."
        />

        <meta
          name="twitter:image"
          content="http://localhost:5173/og-image.png"
        />
      </Helmet>

      {/* ── Hero Banner ── */}
      <div
        className="relative h-[180px] sm:h-[180px] md:h-[250px] flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        {companyHeroBg ? (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${companyHeroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0a1628 0%, #1a3a5c 40%, #2d6b8f 70%, #4a9aba 100%)",
            }}
          />
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl font-bold font-geist shadow-2xl"
        >
          {companyHeroContent.title}
        </motion.h1>
        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </div>

      {/* ── Founder Section ── */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-16">
        <div className="relative">
          {/* TOP SECTION */}
          <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 text-center lg:text-left">
            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="
                w-full
                max-w-[280px]
                sm:max-w-[340px]
                lg:w-[350px]
                lg:h-[350px]
                rounded-[8px]
                overflow-hidden
                shadow-lg
                flex-shrink-0
                lg:ml-[60px]
              "
            >
              {founderData.image ? (
                <img
                  src={founderData.image}
                  alt={founderData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImgPlaceholder
                  label="[ Founder photo ]"
                  className="w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-0"
                />
              )}
            </motion.div>

            {/* DETAILS */}
            <div className="pt-2 lg:pt-8 max-w-md lg:max-w-[322px]">
              <p className="font-geist font-bold text-[#2D258E] text-[22px] sm:text-[28px] leading-[110%] uppercase mb-3">
                {founderData.name}
              </p>

              <p className="font-geist text-[#666666] text-[14px] sm:text-[16px] uppercase leading-[160%] mb-2">
                {founderData.designation}
              </p>

              <p className="font-geist italic text-[#8C8C8C] text-[16px] sm:text-[18px]">
                {founderData.title}
              </p>
            </div>
          </div>

          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
              relative
              z-10
              w-full
              bg-[#F5F4FF]
              rounded-[22px]
              mt-6
              lg:mt-[-190px]
              px-6
              sm:px-10
              lg:px-14
              pt-6
              sm:pt-8
              lg:pt-5
              pb-10
            "
          >
            <div className="block text-left">
              {/* FLOAT BLOCK */}
              <div className="hidden lg:block lg:float-left lg:w-[410px] lg:h-[190px]" />

              {/* BIO */}
              <p className="font-geist text-[#737373] text-[14px] lg:text-[15px] leading-[26px] sm:leading-[28px]">
                {founderData.bio}
              </p>

              {/* EXTRA PARAGRAPHS */}
              <div className="flex flex-col gap-4 mt-6">
                {companyDescription.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="font-geist text-[#737373] text-[14px] lg:text-[15px] leading-[26px] sm:leading-[28px]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div className="clear-both"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Infrastructure Section ── */}
      <section className="bg-white py-10 sm:py-14 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow={infrastructureData.eyebrow}
              title={infrastructureData.title}
            />
          </motion.div>

          {/* MOBILE SLIDER */}
          <div className="md:hidden relative w-full mt-8">
            <div className="relative w-full h-[240px] sm:h-[320px] overflow-hidden rounded-[12px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {infrastructureData.images[currentSlide]?.image ? (
                    <img
                      src={infrastructureData.images[currentSlide].image}
                      alt={infrastructureData.images[currentSlide].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImgPlaceholder
                      label={`[ ${infrastructureData.images[currentSlide]?.alt} ]`}
                      className="w-full h-full"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* DOTS */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {infrastructureData.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-6 h-2 bg-[#2D258E]"
                      : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid grid-cols-2 gap-4 lg:gap-6 items-stretch mt-8">
            {/* LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full h-full min-h-[400px] lg:min-h-[520px] overflow-hidden rounded-[12px] shadow-sm"
            >
              {infrastructureData.images[0]?.image ? (
                <img
                  src={infrastructureData.images[0].image}
                  alt={infrastructureData.images[0].alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImgPlaceholder
                  label={`[ ${
                    infrastructureData.images[0]?.alt || "Main Layout"
                  } ]`}
                  className="w-full h-full"
                />
              )}
            </motion.div>

            {/* RIGHT STACK */}
            <div className="w-full flex flex-col gap-4 lg:gap-6">
              {infrastructureData.images.slice(1, 3).map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-1 overflow-hidden rounded-[12px] shadow-sm"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-[250px] lg:h-full object-cover"
                    />
                  ) : (
                    <ImgPlaceholder
                      label={`[ ${item.alt} ]`}
                      className="w-full h-[250px] lg:h-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── History Section ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              eyebrow={historyData.eyebrow}
              title={historyData.title}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full lg:col-span-4 flex"
            >
              {historyData.image ? (
                <img
                  src={historyData.image}
                  alt="Company History"
                  className="w-full aspect-[16/10] lg:aspect-auto lg:h-full object-cover rounded-[12px] shadow-sm"
                />
              ) : (
                <ImgPlaceholder
                  label="[ History plant image ]"
                  className="w-full aspect-[16/10] lg:aspect-auto lg:h-full rounded-[12px]"
                />
              )}
            </motion.div>

            {/* TIMELINE */}
            <div className="lg:col-span-8 flex flex-col gap-0">
              {historyData.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex gap-6 sm:gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#2D258E] shrink-0 mt-2" />

                    {i < historyData.timeline.length - 1 && (
                      <div className="w-[2px] flex-1 bg-gray-200 my-1" />
                    )}
                  </div>

                  <div className="pb-6">
                    <p className="text-[#2D258E] text-xl sm:text-2xl font-bold font-geist leading-none mb-2">
                      {item.year}
                    </p>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
