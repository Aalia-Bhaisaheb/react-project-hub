import React from "react";

const HERO_BG = "./src/assets/images/hero.png";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[520px] md:min-h-[620px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${HERO_BG})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-20 flex justify-center lg:justify-start">
        {/* CARD */}
        <div className="bg-[#EAE7FF] shadow-2xl w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] p-5 sm:p-7 md:p-8 rounded-sm">
          {/* Heading */}
          <h1 className="bg-gradient-to-r from-[#2F2482] to-[#007753] bg-clip-text text-transparent font-bold leading-tight text-xl sm:text-xl md:text-2xl lg:text-[34px] mb-4">
            Manufacturer Cum Merchant Exporter of Chemicals
          </h1>

          {/* Description */}
          <p
            className="text-[#007753] text-sm sm:text-[15px] sm:leading-7 mb-6">
            We are a premier manufacturer and merchant exporter of
            high-quality chemicals, dedicated to delivering reliable
            solutions for diverse industries worldwide.
          </p>

          {/* Button */}
          <a
            href="#products"
            className="inline-block bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-sm sm:text-[15px] px-5 sm:px-7 py-2.5 sm:py-3 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;