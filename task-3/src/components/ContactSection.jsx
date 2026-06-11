import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import FormField from "./FormField";
import {contactSection,contactData} from "../data/clienteleCompanyContactData";

const ArrowIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContactSection = () => {
  const initialFormState = Object.fromEntries(
    contactSection.formFields.map((f) => [f.id, ""])
  );

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setFormData(initialFormState);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-14 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN WRAPPER */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 xl:gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[45%] flex flex-col gap-8"
          >

            {/* Address + Email */}
            <div className="flex flex-col gap-8">

              {/* OFFICE */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 sm:gap-4"
              >

                <div className="flex-shrink-0">
                  <img
                    src={contactData[0].icon}
                    alt="location icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>

                <div className="min-w-0">

                  <p className="font-geist font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[140%] text-[#4B4B4B] mb-2">
                    {contactSection.officeTitle}
                  </p>

                  {contactSection.address.split("\n").map((line, i) => (
                    <p
                      key={i}
                      className="font-geist text-[14px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[30px] text-[#737373]"
                    >
                      {line}
                    </p>
                  ))}

                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 sm:gap-4"
              >

                <div className="flex-shrink-0">
                  <img
                    src={contactData[1].icon}
                    alt="mail icon"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>

                <div className="min-w-0">

                  <p className="font-geist font-bold text-[16px] sm:text-[18px] md:text-[20px] leading-[140%] text-[#4B4B4B] mb-2">
                    {contactSection.emailTitle}
                  </p>

                  {contactSection.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block break-words font-geist text-[14px] sm:text-[16px] lg:text-[18px] leading-[26px] sm:leading-[30px] text-[#737373] hover:text-[#3D2DB8] transition-colors"
                    >
                      {email}
                    </a>
                  ))}

                </div>
              </motion.div>
            </div>

            {/* MAP */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[420px] rounded-[12px] overflow-hidden border border-gray-200 shadow-sm"
            >
              {contactSection.mapEmbedUrl ? (

                <iframe
                  src={contactSection.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />

              ) : contactSection.mapImage ? (

                <img
                  src={contactSection.mapImage}
                  alt="Office location map"
                  className="w-full h-full object-cover"
                />

              ) : (

                <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-400">

                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>

                  <span className="text-[10px] tracking-widest uppercase">
                    [ Google Map Embed ]
                  </span>

                </div>
              )}
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[55%] bg-[#F0EFF8] rounded-[12px] p-5 sm:p-6 md:p-8 lg:p-10"
          >

            {/* EYEBROW */}
            <h2 className="font-geist font-medium text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] uppercase text-[#2D258E] mb-4">
              {contactSection.eyebrow}
            </h2>

            {/* TITLE */}
            <p className="w-full max-w-[596px] font-geist font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] leading-[110%] text-[#7C7C7C] mb-6">
              {contactSection.title}
            </p>

            {submitted ? (

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center h-48 text-[#3D2DB8] font-semibold text-sm sm:text-base"
              >
                ✓ Thank you! We'll be in touch soon.
              </motion.div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-5"
              >

                {contactSection.formFields.map((field) => (
                  <FormField
                    key={field.id}
                    field={field}
                    value={formData[field.id]}
                    onChange={handleChange}
                  />
                ))}

                {/* BUTTON */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="pt-2"
                >

                  <Button
                    variant="primary"
                    size="md"
                    icon={<ArrowIcon />}
                    onClick={handleSubmit}
                    className="w-full sm:w-auto justify-center"
                  >
                    {contactSection.submitLabel}
                  </Button>

                </motion.div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;