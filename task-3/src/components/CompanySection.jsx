import { motion } from "framer-motion";
import Button from "./Button";
import { companySection } from "../data/clienteleCompanyContactData";

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

const CompanySection = () => {
  return (
    <section id="company" className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

{/* LEFT IMAGE — Desktop Only */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  className="hidden lg:block relative w-full lg:max-w-[600px] h-[435px] flex-shrink-0 overflow-hidden"
>
  {companySection.image ? (
    <img
      src={companySection.image}
      alt="Auro Pump factory"
      className="w-full h-full object-cover"
    />
  ) : (
    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-[10px] text-gray-500 tracking-widest uppercase">
      [ Company / Factory Image ]
    </div>
  )}

  {/* Stat Overlay */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.6 }}
    viewport={{ once: true }}
    className="absolute bottom-6 right-6 flex items-end gap-3 text-right"
  >
    <span className="font-geist font-bold text-[96px] leading-none text-white">
      {companySection.stat}
    </span>

    <span className="font-geist font-medium text-[16px] leading-[140%] text-white max-w-[220px] text-left">
      {companySection.statLabel}
    </span>
  </motion.div>
</motion.div>

{/* RIGHT CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex-1 min-w-0"
>
  <h2 className="font-geist font-medium text-[18px] sm:text-[20px] lg:text-[24px] uppercase text-[#2D258E] mb-3">
    {companySection.eyebrow}
  </h2>

  <p className="font-geist font-bold text-[22px] sm:text-[20px] lg:text-[38px] leading-[110%] text-[#7C7C7C] w-full max-w-[578px] mb-6">
    {companySection.title}
  </p>

  {/* MOBILE IMAGE — AFTER TITLE */}
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="lg:hidden relative w-full h-[260px] sm:h-[340px] rounded-[12px] overflow-hidden mb-6"
  >
    {companySection.image ? (
      <img
        src={companySection.image}
        alt="Auro Pump factory"
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full bg-gray-300 flex items-center justify-center text-[10px] text-gray-500 tracking-widest uppercase">
        [ Company / Factory Image ]
      </div>
    )}

    {/* Mobile Stat */}
    <div className="absolute bottom-4 right-4 flex items-end gap-2">
      <span className="font-geist font-bold text-[52px] sm:text-[64px] leading-none text-white">
        {companySection.stat}
      </span>

      <span className="font-geist font-medium text-[12px] sm:text-[14px] leading-[140%] text-white max-w-[140px]">
        {companySection.statLabel}
      </span>
    </div>
  </motion.div>

  <p className="w-full max-w-[700px] font-geist font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#737373] mb-8">
    {companySection.description}
  </p>

  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
    <Button
      href={companySection.ctaHref}
      variant="primary"
      size="md"
      icon={<ArrowIcon />}
    >
      {companySection.ctaLabel}
    </Button>
  </motion.div>
</motion.div>

</div>
      </div>
    </section>
  );
};

export default CompanySection;