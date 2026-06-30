import { motion } from "framer-motion";

const FormField = ({ field, value, onChange }) => {
  const inputBase =
    "w-full bg-white border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3D2DB8] focus:ring-1 focus:ring-[#3D2DB8] transition-all duration-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1.5"
    >
      <label className="text-xs font-semibold text-gray-700 tracking-wide">
        {field.label}
      </label>

      {field.type === "textarea" ? (
        <motion.textarea
          whileFocus={{
            scale: 1.01,
          }}
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.id, e.target.value)}
          rows={4}
          className={`${inputBase} resize-none`}
        />
      ) : (
        <motion.input
          whileFocus={{
            scale: 1.01,
          }}
          id={field.id}
          name={field.id}
          type={field.type}
          placeholder={field.placeholder}
          value={value}
          onChange={(e) => onChange(field.id, e.target.value)}
          className={inputBase}
        />
      )}
    </motion.div>
  );
};

export default FormField;