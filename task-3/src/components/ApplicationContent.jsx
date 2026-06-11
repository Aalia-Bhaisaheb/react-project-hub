import { motion } from "framer-motion";
import ProductTag from "./ProductTag";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const ApplicationContent = ({ data }) => {
  if (!data) return null;

  return (
    <motion.div
      key={data.heading}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col xl:flex-row gap-10 xl:gap-14 items-start w-full"
    >
      {/* Left: Text Content */}
      <div className="flex-1 w-full min-w-0">

        <motion.p
          variants={itemVariants}
          className="font-geist font-bold text-[22px] sm:text-[22px] lg:text-[32px] leading-[110%] text-[#2D258E] mb-6"
        >
          {data.heading}
        </motion.p>

        <div className="flex flex-col gap-8 w-full min-h-[128px] xl:pr-8 2xl:max-w-[650px]">
          {data.items.length > 0 ? (
            data.items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                className="flex flex-col gap-4"
              >
                <ProductTag label={item.tag} />

                <p className="font-geist font-normal text-[16px] sm:text-[18px] leading-[30px] sm:leading-[34px] text-[#737373] w-full">
                  {item.description}
                </p>
              </motion.div>
            ))
          ) : (
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm"
            >
              Content coming soon…
            </motion.p>
          )}
        </div>
      </div>

      {/* Right: Product Images */}
      <motion.div
        variants={imageVariants}
        className="w-full xl:w-auto flex justify-center xl:justify-end gap-3 lg:gap-4 self-center xl:self-start"
      >
        {/* Main Product Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="flex-1 max-w-[450px] h-[320px] sm:h-[400px] lg:h-[519px] overflow-hidden flex items-center justify-center"
        >
          {data.image ? (
            <img
              src={data.image}
              alt={data.heading}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[10px] text-purple-400 tracking-widest uppercase text-center px-2">
              [ Main Product
              <br />
              Image ]
            </div>
          )}
        </motion.div>

        {/* Side Product Image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="w-[90px] sm:w-[120px] lg:w-[141px] h-[320px] sm:h-[400px] lg:h-[519px] overflow-hidden flex items-center justify-center"
        >
          {data.sideImage ? (
            <img
              src={data.sideImage}
              alt={`${data.heading} side view`}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[9px] text-purple-300 tracking-widest uppercase text-center px-1">
              [ Side
              <br />
              View ]
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationContent;