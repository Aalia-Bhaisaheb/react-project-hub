import { motion } from "framer-motion";
import { contactData } from "../data/technoContactData";

export default function MapSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full h-[340px] sm:h-[420px]"
    >
      <iframe
        src={contactData.mapEmbedUrl}
        title="Techno Chemicals Location"
        width="100%"
        height="100%"
        style={{ border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </motion.div>
  );
}
