import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import ProductCard from "./ProductCard";
import ProductTabs from "./ProductTabs";
import { productTabs, productsSection } from "../data/productData";

const ArrowIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("pumps");

  // Current active tab data
  const currentTabData =
    productTabs.find((tab) => tab.id === activeTab) || {};

  // Products of active tab
  const currentProducts = currentTabData.products || [];

  return (
    <section
      id="products"
      className="py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Main Layout */}
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">

          {/* Left: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              w-full
              xl:max-w-[520px]
              2xl:max-w-[580px]
              xl:pl-[80px]
              2xl:pl-[120px]
              flex-shrink-0
            "
          >

            {/* Eyebrow */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                font-geist
                font-medium
                text-[18px]
                sm:text-[18px]
                lg:text-[24px]
                uppercase
                text-[#2D258E]
                mb-3
                sm:mb-4
              "
            >
              PRODUCTS
            </motion.h2>

            {/* Dynamic Title */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTabData.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.4 }}
                className="
                  font-geist
                  font-bold
                  text-[22px]
                  sm:text-[22px]
                  lg:text-[42px]
                  leading-[115%]
                  text-[#7C7C7C]
                  mb-5
                  w-full
                  max-w-[100%]
                "
              >
                {currentTabData.title}
              </motion.p>
            </AnimatePresence>

            {/* Dynamic Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTabData.description}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="
                  font-geist
                  font-normal
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[18px]
                  leading-[28px]
                  text-[#737373]
                  mb-7
                  sm:mb-8
                  w-full
                  max-w-full xl:max-w-[520px]
                "
              >
                {currentTabData.description}
              </motion.p>
            </AnimatePresence>

            {/* Button */}
            <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit"
            >
            <Button
            href={productsSection.ctaHref}
            variant="primary"
            size="md"
            icon={<ArrowIcon />}
            className="
            text-[13px]
            sm:text-[12px]
            md:text-[13px]
            "
            >
            {productsSection.ctaLabel}
              </Button>
            </motion.div>

          </motion.div>

          {/* Right: Tabs + Product Grid */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >

            {/* Tabs */}
            <div className="mb-6 w-full">
              <ProductTabs
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>

            {/* Product Cards */}
            {currentProducts.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-5
                    md:gap-6
                  "
                >
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                      }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="
                  flex
                  items-center
                  justify-center
                  h-48
                  border-2
                  border-dashed
                  border-gray-200
                  rounded-lg
                "
              >
                <p className="text-gray-400 text-sm">
                  Products coming soon...
                </p>
              </motion.div>
            )}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;