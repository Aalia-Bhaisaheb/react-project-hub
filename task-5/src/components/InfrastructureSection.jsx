import { motion } from "framer-motion";
import { infrastructureData } from "../data/technoAboutData";
import CheckIcon from "./CheckIcon";

function FacilityCard({ facility, index }) {
  const isLeft = facility.imagePosition === "left";

  const textBlock = (
    <div className="flex-1">
      {/* Icon */}
      <div className="w-12 h-12 rounded-md bg-[#e8834a]/10 flex items-center justify-center mb-4">
        {facility.icon ? (
          <img src={facility.icon} alt={facility.title} className="w-7 h-7 object-contain" />
        ) : (
          <span className="text-[#e8834a] text-xl">⚙</span>
        )}
      </div>
      <h3 className="text-[#281D15] font-bold text-lg mb-2">{facility.title}</h3>
      <p className="text-[#847062] text-sm leading-relaxed mb-5">{facility.description}</p>

      {/* Bullets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {facility.bullets.map((b) => (
          <div key={b} className="flex items-start gap-2 text-sm text-[#281D15]">
            <CheckIcon/>
            <span>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );


  const imageBlock = (
    <div className="w-full sm:w-[260px] lg:w-[300px] shrink-0 rounded-xl overflow-hidden">
      {facility.image ? (
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-[200px] sm:h-[220px] object-cover"
        />
      ) : (
        <div className="w-full h-[200px] sm:h-[220px] bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center px-4">
          [ {facility.title} image ]
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
    >
      {isLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </motion.div>
  );
}

export default function InfrastructureSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#f7f3ef]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#5F2913] text-xs font-bold tracking-widest uppercase mb-3">
            {infrastructureData.sectionLabel}
          </p>
          <h2 className="text-[#281D15] font-playfair text-2xl sm:text-3xl font-bold mb-3">
            {infrastructureData.heading}
          </h2>
          <p className="text-[#7D695A] text-sm max-w-lg mx-auto leading-relaxed">
            {infrastructureData.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-5">
          {infrastructureData.facilities.map((f, i) => (
            <FacilityCard key={f.id} facility={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
