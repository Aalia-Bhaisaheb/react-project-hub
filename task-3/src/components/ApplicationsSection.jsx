import { useState } from "react";
import { motion } from "framer-motion";
import ApplicationTabs from "./ApplicationTab";
import ApplicationContent from "./ApplicationContent";
import { applicationsSection, applicationProducts } from "../data/applicationsData";

const ApplicationsSection = () => {
  const [activeTab, setActiveTab] = useState("molten-sulfer");

  const currentData = applicationProducts[activeTab];

  return (
    <section id="application" className="bg-[#F0EFF8]">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 md:pt-12 md:pb-6"
      >
        <div className="flex items-start justify-between gap-4">

          <div>
            <h2 className="font-geist font-medium text-[18px] sm:text-[18px] lg:text-[24px] leading-[100%] tracking-[0%] uppercase text-[#2D258E] mb-3 sm:mb-4">
              {applicationsSection.eyebrow}
            </h2>

            <p className="font-geist font-bold text-[22px] sm:text-[22px] lg:text-[32px] leading-[110%] tracking-[0%] text-[#7C7C7C] mb-4 sm:mb-5 w-full max-w-[391px]">
              {applicationsSection.title}
            </p>
          </div>

          <div className="flex-shrink-0 mt-1"></div>

        </div>
      </motion.div>

      {/* Tabs */}
      <ApplicationTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <ApplicationContent data={currentData} />
      </div>

    </section>
  );
};

export default ApplicationsSection;