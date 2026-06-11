import { motion } from "framer-motion";
import Button from "./Button";
import { heroData } from "../data/heroData";

const ArrowIcon = () => (
  <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="white"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        src={heroData.backgroundImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-36 sm:pt-40 md:pt-44 lg:pt-48">
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[95%] sm:max-w-2xl lg:max-w-4xl"
        >
          
          {/* Heading */}
          <h1
            className="
            font-geist
            font-bold
            text-[25px]
            sm:text-[42px]
            md:text-[46px]
            lg:text-[52px]
            xl:text-[60px]
            leading-[105%]
            text-white
            mb-4
            md:mb-6
            drop-shadow-lg
          "
          >
            {heroData.title}
            <br />
            {heroData.titleHighlight}
          </h1>

          {/* Description */}
          <p
            className="
            font-geist
            font-normal
            text-[14px]
            sm:text-[16px]
            md:text-[17px]
            lg:text-[18px]
            leading-[26px]
            md:leading-[30px]
            text-white/80
            mb-6
            md:mb-8
            max-w-xl
          "
          >
            {heroData.description}
          </p>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              href={heroData.ctaHref}
              variant="primary"
              size="md"
              icon={<ArrowIcon />}
            >
              {heroData.ctaLabel}
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;