import { motion } from "framer-motion";

const ClientCard = ({ client }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="
        flex
        items-center
        justify-center
        px-4
        sm:px-5
        md:px-6
        py-4
        sm:py-5
        md:py-6
        border
        border-gray-200
        bg-white
        rounded-[10px]
        min-h-[80px]
        sm:min-h-[100px]
        md:min-h-[120px]
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      {client.image ? (
        <img
          src={client.image}
          alt={client.name}
          className="
            max-h-10
            sm:max-h-14
            md:max-h-16
            lg:max-h-20
            w-auto
            max-w-full
            object-contain
          "
        />
      ) : (
        <span
          className="
            text-[10px]
            sm:text-xs
            md:text-sm
            font-bold
            text-gray-500
            tracking-wide
            text-center
            leading-tight
          "
        >
          {client.name}
        </span>
      )}
    </motion.div>
  );
};

export default ClientCard;