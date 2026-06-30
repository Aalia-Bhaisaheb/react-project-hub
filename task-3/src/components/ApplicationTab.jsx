import { useState } from "react";
import { motion } from "framer-motion";
import { applicationTabs } from "../data/applicationsData";

const ApplicationTabs = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">

      {/* ================= MOBILE DROPDOWN ================= */}
      <div className="block md:hidden w-full relative z-20 px-4 sm:px-6">

        {/* Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-full
            h-[56px]
            px-4
            rounded-[8px]
            bg-[#2D258E]
            text-white
            font-geist
            font-bold
            text-[15px]
            flex
            items-center
            justify-between
            border-none
            outline-none
          "
        >
          <span>
            {
              applicationTabs.find(
                (tab) => tab.id === activeTab
              )?.label
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

        {/* Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="
              absolute
              top-[66px]
              left-4
              right-4
              bg-[#2D258E]
              rounded-[8px]
              overflow-hidden
              shadow-xl
            "
          >
            {applicationTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full
                  h-[56px]
                  px-4
                  text-left
                  font-geist
                  font-bold
                  text-[15px]
                  uppercase
                  transition-all
                  duration-200
                  border-b
                  border-white/10
                  ${
                    activeTab === tab.id
                      ? "text-white bg-white/10"
                      : "text-white/60 hover:text-white"
                  }
                  ${
                    index === applicationTabs.length - 1
                      ? "border-b-0"
                      : ""
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
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
            w-full
            h-[92px]
            bg-[#2D258E]
            rounded-[8px]
            inline-flex
            min-w-max
          "
        >
          {applicationTabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              whileHover={{
                backgroundColor: "#3B329E",
              }}
              whileTap={{ scale: 0.97 }}
              className={`
                flex-1
                px-8
                h-[92px]
                flex
                text-center
                items-center
                justify-center
                whitespace-nowrap
                font-geist
                font-bold
                text-[20px]
                leading-[100%]
                uppercase
                transition-all
                duration-300
                border-r
                border-white/20
                ${
                  activeTab === tab.id
                    ? "bg-[#2D258E] text-white"
                    : "bg-[#2D258E] text-white/50 hover:text-white"
                }
                ${
                  index === 0 ? "rounded-tl-[4px]" : ""
                }
                ${
                  index === applicationTabs.length - 1
                    ? "rounded-tr-[4px] border-r-0"
                    : ""
                }
              `}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationTabs;