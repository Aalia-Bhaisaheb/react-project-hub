import { motion } from "framer-motion";
import ClientCard from "./ClientCard";
import {clienteleSection, clients} from "../data/clienteleCompanyContactData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const ClienteleSection = () => {
  return (
    <section id="clientele" className="py-14 md:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-geist font-medium sm:text-[18px] lg:text-[24px] leading-[100%] tracking-[0%] uppercase text-[#2D258E] mb-4"
        >
          {clienteleSection.eyebrow}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-[920px] min-h-[49px] font-geist font-bold text-[22px] sm:text-[22px] lg:text-[32px] leading-[100%] tracking-[0%] text-[#7C7C7C] mb-5"
        >
          {clienteleSection.title}
        </motion.p>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            speed={800}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id}>
                <ClientCard client={client} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ClienteleSection;