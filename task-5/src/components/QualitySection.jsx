import { motion } from "framer-motion";
import { qualityData } from "../data/technoProductData";

export default function QualitySection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-[#281D15] text-xl font-playfair sm:text-2xl font-bold mb-4">
            {qualityData.heading}
          </h2>

          <p className="text-[#7D695A] italic text-sm leading-relaxed mb-6">
            {qualityData.intro}
          </p>

          {/* Standards list */}
          <ul className="flex flex-col gap-3 mb-6">
            {qualityData.standards.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-2 text-sm text-[#7D695A]"
              >
                <span className="text-[#e8834a] mt-0.5 shrink-0">›</span>
                <span>
                  <span className="font-semibold text-[#281D15]">{s.title}</span>{" "}
                  {s.text}
                </span>
              </motion.li>
            ))}
          </ul>

          <p className="text-[#7D695A] text-sm leading-relaxed mb-6">
            {qualityData.certParagraph}
          </p>

          {/* Download */}
          <motion.a
            href={qualityData.certDownloadHref}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#e8834a] hover:bg-[#d4713a] text-white text-sm px-5 py-2.5 rounded-md transition-colors"
          >
            ↓ {qualityData.certDownloadLabel}
          </motion.a>
        </motion.div>

        {/* ISO certificate */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full md:w-[300px] lg:w-[340px] shrink-0"
        >
          {qualityData.certImage ? (
            <img
              src={qualityData.certImage}
              alt="ISO Certificate"
              className="w-full rounded-xl shadow-lg"
            />
          ) : (
            <div className="w-full h-[340px] rounded-xl bg-amber-50 border-2 border-amber-200 flex flex-col items-center justify-center gap-3 shadow-lg">
              <div className="text-amber-400 text-5xl">🏅</div>
              <p className="text-amber-700 text-sm font-bold text-center px-4">
                ISO Certificate Image 
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
