import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.97 }}
        className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* IMAGE */}
        <div className="aspect-[4/3] bg-[#F5F4FF] overflow-hidden relative">
          {product.image ? (
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
              {product.name}
            </div>
          )}
        </div>

        {/* NAME */}
        <div className="p-3 bg-[#F5F4FF]">
          <span className="text-sm font-semibold text-gray-800">
            {product.name}
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;