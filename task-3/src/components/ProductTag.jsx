import { motion } from "framer-motion";

const ProductTag = ({ label }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      className="inline-flex items-center justify-center w-[126px] h-[48px] rounded-[80px] border border-[#D1D1D1] bg-white font-geist font-semibold text-[12px] leading-[100%] tracking-[0%] text-[#737373]"
    >
      {label}
    </motion.span>
  );
};

export default ProductTag;