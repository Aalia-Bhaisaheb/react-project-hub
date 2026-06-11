import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "../data/technoContactData";

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <img src={icon} alt="" className="w-5 h-5 md:w-7 md:h-7 mt-1 shrink-0" />
      <div className="text-gray-200 text-sm leading-relaxed min-w-0 break-words">
        {children}
      </div>
    </div>
  );
}

export default function ContactSection({ showHeader = true }) {
  const [form, setForm] = useState({});
  const [captcha, setCaptcha] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    console.log(form);
    e.preventDefault();
  }

  const inputClass =
    "w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C36522] focus:ring-1 focus:ring-[#e8834a] transition bg-white";

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Header */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#5F2913] text-xs font-bold tracking-widest uppercase mb-3">
              {contactData.sectionLabel}
            </p>

            <h2 className="text-[#281D15] font-playfair text-2xl sm:text-3xl font-bold mb-3">
              {contactData.heading}
            </h2>

            <p className="text-[#7D695A] text-sm max-w-md mx-auto leading-relaxed">
              {contactData.subheading}
            </p>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-[300px] lg:w-[400px] md:min-h-[450px] shrink-0 bg-[#5C3123] rounded-2xl p-5 md:p-10 flex flex-col gap-6"
          >
            <h3 className="text-white text-base md:text-[22px] font-playfair font-semibold">
              {contactData.info.heading}
            </h3>

            <div className="flex flex-col gap-5">
              <InfoRow icon={contactData.info.addressIcon}>
                <h2 className="text-base lg:text-[18px] font-medium mb-1">
                  {contactData.info.addressTitle}
                </h2>
                <p>{contactData.info.address}</p>
              </InfoRow>

              <InfoRow icon={contactData.info.phoneIcon}>
                <h2 className="text-base lg:text-[18px] font-medium mb-1">
                  {contactData.info.phoneTitle}
                </h2>
                <p>{contactData.info.phone}</p>
              </InfoRow>

              <InfoRow icon={contactData.info.emailIcon}>
                <h2 className="text-base lg:text-[18px] font-medium mb-1">
                  {contactData.info.emailTitle}
                </h2>
                <p>{contactData.info.email}</p>
              </InfoRow>
            </div>

            {/* WhatsApp */}
            <motion.a
              href={contactData.info.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-auto w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold py-3 rounded-lg transition-colors"
            >
              <img
                src={contactData.info.whatsappIcon}
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
              {contactData.info.whatsappTitle}
            </motion.a>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="flex-1 w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7 flex flex-col gap-4"
          >
            {/* Paired fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactData.form.fields
                .filter((field) => field.half)
                .map((field) => (
                  <div key={field.id} className="flex flex-col gap-1">
                    <label
                      htmlFor={field.id}
                      className="text-xs text-gray-600 font-medium"
                    >
                      {field.label}
                    </label>

                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id] || ""}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                ))}
            </div>

            {/* Textarea */}
            {contactData.form.fields
              .filter((field) => !field.half)
              .map((field) => (
                <div key={field.id} className="flex flex-col gap-1">
                  <label
                    htmlFor={field.id}
                    className="text-xs text-gray-600 font-medium"
                  >
                    {field.label}
                  </label>

                  <textarea
                    id={field.id}
                    placeholder={field.placeholder}
                    rows={4}
                    value={form[field.id] || ""}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              ))}

            {/* Captcha */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <input
                type="text"
                placeholder="Enter the captcha"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                className={`${inputClass} flex-1`}
              />

              <div className="shrink-0 bg-gray-100 border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-700 font-mono select-none text-center">
                5 – four = ?
              </div>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#C36522] hover:bg-[#d4713a] text-white font-semibold text-sm py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              {contactData.form.submitLabel}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
