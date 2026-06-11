import { useState, useRef, useEffect } from "react";
import { connectCornerData } from "../data/connectCornerData";
import PrimaryButton from "./PrimaryButton";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(35px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

// Contact Info Row
function ContactRow({ label, value, icon }) {
  return (
    <div className="flex items-start gap-3 mb-6 md:mb-7">
      <img
        src={icon}
        alt={label}
        className="w-6 h-6 md:w-7 md:h-7 mt-1 flex-shrink-0 object-contain"
      />

      <div>
        <p className="text-gray-800 font-semibold text-[14px] md:text-[18px]">
          {label}
        </p>

        <p className="text-gray-600 text-[13px] md:text-[14px] leading-[22px] whitespace-pre-line">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ConnectCornerSection() {
  const { contact, form } = connectCornerData;

  const leftRef = useScrollReveal(0);
  const rightRef = useScrollReveal(150);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    captcha: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit() {
    alert("Form submitted! Connect your backend here.");
  }

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-20 items-start">
        {/* LEFT SIDE */}
        <div
          ref={leftRef}
          className="w-full lg:w-[380px] xl:w-[420px] flex-shrink-0"
        >
          <h3 className="text-[#1e3a8a] font-semibold text-[18px] md:text-[22px] mb-2">
            {contact.findUsTitle}
          </h3>

          <div className="mb-7" />

          <ContactRow
            icon={contact.location.icon}
            label={contact.location.label}
            value={contact.location.value}
          />

          <ContactRow
            icon={contact.phone.icon}
            label={contact.phone.label}
            value={contact.phone.value}
          />

          <ContactRow
            icon={contact.email.icon}
            label={contact.email.label}
            value={contact.email.value}
          />

          {/* Google Map */}
          <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] rounded-xl overflow-hidden shadow-md mt-4 border border-gray-200">
            <iframe
              title="Marcost Location"
              src={contact.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div ref={rightRef} className="flex-1 min-w-0 w-full">
          <h3 className="text-[#1e3a8a] font-semibold text-[18px] md:text-[20px] leading-snug mb-6">
            {form.title}
          </h3>

          <div className="flex flex-col gap-4">
            {/* Name */}
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-4 lg:py-5 rounded-lg text-sm md:text-[16px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] transition-all shadow-sm lg:mb-3"
            />

            {/* Phone + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="phone"
                type="tel"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-4 lg:py-5 rounded-lg text-sm md:text-[16px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] transition-all shadow-sm lg:mb-3"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-4 lg:py-5 rounded-lg text-sm md:text-[16px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] transition-all shadow-sm lg:mb-3"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-4 lg:py-7 rounded-lg text-sm md:text-[16px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] transition-all resize-none shadow-sm lg:mb-3"
            />

            {/* Captcha */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <input
                name="captcha"
                type="text"
                placeholder="Enter Captcha"
                value={formData.captcha}
                onChange={handleChange}
                className="flex-1 px-4 py-4 lg:py-7 rounded-lg text-sm md:text-[16px] text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] transition-all shadow-sm"
              />

              <div className="flex-shrink-0 h-[52px] lg:h-[72px] sm:w-[160px] px-4 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center lg:mb-3">
                <span className="text-gray-500 text-sm md:text-[15px] font-mono tracking-widest select-none">
                  S1Tr@@s\\
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center sm:justify-start mt-4">
              <PrimaryButton
                label="Submit"
                type="button"
                onClick={handleSubmit}
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}