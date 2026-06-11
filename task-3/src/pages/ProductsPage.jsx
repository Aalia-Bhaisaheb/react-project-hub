import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { productTabs } from "../data/productData";
import {
  categorySpecs,
  heroBg,
  heroContent,
  sidebarContent,
} from "../data/productPageData";
import { Helmet } from "react-helmet";

function ProductCard({ product, specs, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="w-full max-w-[1066px] bg-[#F5F4FF] border border-gray-200 rounded-[12px] mb-8 overflow-hidden"
    >
      {/* Card Header */}
      <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="w-full lg:w-[400px] h-[260px] sm:h-[320px] lg:h-[360px] bg-white rounded-[12px] overflow-hidden shrink-0"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[540px] flex flex-col gap-5"
        >
          {/* Model Tag + Download */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <motion.span
              whileHover={{ scale: 1.04 }}
              className="border border-gray-400 text-gray-700 text-sm sm:text-[15px] font-semibold px-4 py-2 tracking-wide bg-white rounded-[4px]"
            >
              {product.name}
            </motion.span>

            {product.pdfUrl && (
              <motion.a
                whileHover={{ x: 4 }}
                href={product.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2D258E] text-xs sm:text-sm font-semibold hover:underline"
              >
                {heroContent.downloadLabel}
              </motion.a>
            )}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:max-w-[540px] lg:min-h-[320px] font-geist font-normal text-[16px] sm:text-[18px] leading-[30px] sm:leading-[32px] tracking-[0%] text-[#737373]"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Specs Table */}
      <div className="border-t border-gray-200 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
        <div className="flex flex-col gap-[2px]">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className={`flex flex-col sm:flex-row items-stretch w-full min-h-[55px] rounded-[2px] overflow-hidden ${
                i % 2 === 0 ? "bg-[#2D258E]" : "bg-[#F4F3FF]"
              }`}
            >
              {/* Label */}
              <div
                className={`sm:w-56 shrink-0 px-4 sm:px-5 py-3 flex items-center justify-center text-center font-semibold text-xs sm:text-sm tracking-wide ${
                  i % 2 === 0 ? "text-white" : "text-[#737373]"
                }`}
              >
                {spec.label}
              </div>

              {/* Value */}
              <div
                className={`flex-1 px-4 sm:px-5 py-3 flex items-center justify-center sm:justify-start text-center sm:text-left text-xs sm:text-sm leading-relaxed ${
                  i % 2 === 0 ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState(productTabs[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const activeCategory = productTabs.find((t) => t.id === activeTab);

  const specs = categorySpecs[activeTab] || [];

  const currentActiveLabel =
    productTabs.find((tab) => tab.id === activeTab)?.label || "Select Category";

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Helmet>
        <title>Industrial Process Pumps | Auro Pumps</title>

        <meta
          name="description"
          content="Explore industrial process pumps, molten salt pumps and molten metal pumps designed for high-performance industrial applications."
        />

        <meta
          name="keywords"
          content="process pumps, molten salt pumps, molten metal pumps, industrial pump systems, Auro Pumps products"
        />

        <meta name="author" content="Auro Pumps" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="http://localhost:5173/products" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Industrial Process Pumps | Auro Pumps"
        />

        <meta
          property="og:description"
          content="High-quality industrial pumps for critical applications."
        />

        <meta property="og:url" content="http://localhost:5173/products" />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="http://localhost:5173/og-image.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Industrial Process Pumps | Auro Pumps"
        />

        <meta
          name="twitter:description"
          content="Industrial pump systems and precision pumping solutions."
        />

        <meta
          name="twitter:image"
          content="http://localhost:5173/og-image.png"
        />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[180px] sm:h-[180px] md:h-[250px] flex items-center justify-center overflow-hidden pt-20">
        {heroBg && (
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-center h-full w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold font-geist px-4 leading-none"
          >
            {heroContent.title}
          </motion.h1>
        </div>
        <div className="absolute inset-0 bg-black/30 z-[1]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-6 lg:gap-8">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-[260px] shrink-0 z-30"
        >
          <div className="bg-[#F4F3FF] border border-gray-200 rounded-[12px] overflow-visible">
            {/* Header */}
            <div className="px-5 sm:px-6 pt-6 pb-5 border-b border-[#2D258E]">
              <h2 className="font-geist font-semibold text-[18px] sm:text-[15px] leading-[100%] tracking-[0%] text-[#2D258E]">
                {sidebarContent.heading}
              </h2>
            </div>

            {/* Mobile Dropdown */}
            <div
              className="md:hidden px-4 sm:px-5 py-4 w-full relative"
              ref={dropdownRef}
            >
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full h-[52px] sm:h-[56px] border border-gray-300 rounded-[8px] px-4 text-[14px] font-bold font-geist text-[#2D258E] bg-white flex items-center justify-between text-left focus:outline-none focus:border-[#2D258E] transition-all duration-200"
              >
                <span className="truncate pr-4">{currentActiveLabel}</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`w-3.5 h-3.5 text-gray-500 transform transition-transform duration-200 shrink-0 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-4 right-4 sm:left-5 sm:right-5 mt-2 bg-white border border-gray-200 rounded-[10px] shadow-xl z-50 overflow-hidden max-h-72 overflow-y-auto"
                >
                  <ul className="py-2">
                    {productTabs.map((tab) => (
                      <li key={tab.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab(tab.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-5 py-3 font-geist font-bold text-[15px] transition-all duration-200 ${
                            activeTab === tab.id
                              ? "bg-[#F4F3FF] text-[#2D258E]"
                              : "text-[#737373] hover:bg-[#F4F3FF]"
                          }`}
                        >
                          {tab.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col py-4">
              {productTabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-5 lg:px-6 py-3 text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? "text-[#2D258E]"
                      : "text-[#737373] hover:text-[#2D258E]"
                  }`}
                >
                  <span className="font-geist font-semibold text-[14px] leading-[29px] tracking-[0%]">
                    {tab.label}
                  </span>

                  {activeTab === tab.id && (
                    <span className="text-[22px] leading-none font-light text-[#2D258E]">
                      —
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* Product Cards */}
        <main className="flex-1 min-w-0">
          {activeCategory?.products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              specs={specs}
              description={activeCategory.description}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
