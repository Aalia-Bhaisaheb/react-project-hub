import { useState } from "react";
import { productTabs } from "../data/productData";
import { motion } from "framer-motion";

const ProductTabs = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className="block md:hidden w-full relative z-20">

        {/* Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-full
            h-[58px]
            px-5
            bg-[#F4F3FF]
            border
            border-[#E4E1FF]
            rounded-xl
            flex
            items-center
            justify-between
            text-[#2D258E]
            font-geist
            font-semibold
            text-[15px]
            shadow-sm
            transition-all
            duration-200
          "
        >
          <span>
            {
              productTabs.find((tab) => tab.id === activeTab)
                ?.label
            }
          </span>

          <svg
            className={`
              w-4
              h-4
              transition-transform
              duration-200
              ${isOpen ? "rotate-180" : ""}
            `}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              top-[68px]
              left-0
              w-full
              bg-white
              rounded-xl
              shadow-2xl
              border
              border-[#ECEBFF]
              overflow-hidden
            "
          >
            {productTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full
                  text-left
                  px-5
                  h-[54px]
                  font-geist
                  font-medium
                  text-[15px]
                  transition-all
                  duration-200
                  ${
                    activeTab === tab.id
                      ? "bg-[#2D258E] text-white"
                      : "text-[#2D258E] hover:bg-[#F5F4FF]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* ================= TABLET + DESKTOP SCROLL TABS ================= */}
      <div
        className="
          hidden
          md:block
          w-full
          overflow-x-auto
          scroll-smooth
          scrollbar-none
        "
      >
        <div
          className="
            inline-flex
            items-center
            gap-2
            min-w-max
            bg-[#F4F3FF]
            rounded-xl
            p-2
          "
        >
          {productTabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                h-[58px]
                px-6
                xl:px-8
                min-w-fit
                flex
                items-center
                justify-center
                whitespace-nowrap
                rounded-lg
                font-geist
                font-bold
                text-[13px]
                lg:text-[15px]
                uppercase
                tracking-wide
                transition-all
                duration-200
                ${
                  activeTab === tab.id
                    ? "bg-[#2D258E] text-white shadow-md"
                    : "bg-transparent text-[#737373] hover:bg-white/70"
                }
              `}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;