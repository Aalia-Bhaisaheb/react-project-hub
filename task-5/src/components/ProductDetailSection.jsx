import { motion } from "framer-motion";
import { productDetailData } from "../data/technoProductData";

export default function ProductDetailSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-10 lg:gap-14 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-[280px] lg:w-[320px] shrink-0"
        >
          {productDetailData.image ? (
            <img
              src={productDetailData.image}
              alt="Cadmium Oxide"
              className="w-full h-[260px] sm:h-[300px] object-cover rounded-xl shadow"
            />
          ) : (
            <div className="w-full h-[260px] sm:h-[300px] rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm shadow">
              [ Product image ]
            </div>
          )}
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* About */}
          <h2 className="text-[#281D15] font-playfair lg:text-[30px] sm:text-2xl font-semibold mb-4">
            {productDetailData.aboutHeading}
          </h2>

          {productDetailData.aboutParagraphs.map((p, i) => (
            <p key={i} className="text-[#7D695A] font-inter lg:text-[16px] text-sm leading-relaxed mb-3 text-justify">
              {p}
            </p>
          ))}

          {/* Technical */}
          <h3 className="text-[#281D15] lg:text-[26px] sm:text-md font-playfair font-bold mt-7 mb-4">
            {productDetailData.specsHeading}
          </h3>
          <div className="rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {productDetailData.specs.map((row, i) => (
                  <tr
                  key={row.property}
                  className={`border-b border-[#7D695A] ${
                    i % 2 === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                    <td className="px-4 py-2.5 text-[#7D695A] font-inter font-medium w-[42%] ">
                      {row.property}
                    </td>
                    <td className="px-4 py-2.5 text-[#281D15] font-medium">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p className="text-gray-500 text-xs mt-4 leading-relaxed font-semibold italic">
            {productDetailData.specsNote}
          </p>

          {/* Download */}
          <motion.a
            href={productDetailData.downloadHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#e8834a] hover:bg-[#d4713a] text-white text-sm px-5 py-2.5 rounded-md mt-6 transition-colors"
          >
            ↓ {productDetailData.downloadLabel}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}

