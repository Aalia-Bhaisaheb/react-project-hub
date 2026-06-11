import { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    contactNumber: "",
    emailId: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setForm({ fullName: "", contactNumber: "", emailId: "", message: "" });
  };

  return (
    <div className="font-sans">
      <div className="pt-[72px] md:pt-[80px] font-sans overflow-hidden">
        <div className="bg-[#2b2580] text-center relative">
          <div className="pt-5 pb-8">
            <h1 className="text-white font-bold text-[20px] sm:text-[24px]">
            Contact Us
            </h1>
          </div>

          <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 60"
          fill="none"
          >
          <path
          fill="#007753"
          d="M0,32L120,34C240,36,480,40,720,40C960,40,1200,36,1320,34L1440,32V60H1320C1200,60,960,60,720,60C480,60,240,60,120,60H0Z"
          />
          </svg>
        </div>
{/* GREEN BREADCRUMB */}
        <div className="bg-[#007753] py-2 relative z-10">
          <div className="flex items-center justify-center gap-2 text-[10px] text-white">
            <a
            href="/"
            className="hover:opacity-80 transition-opacity"
            >
            Home
            </a>
            <span>›</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[380px]">
          <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5560419679135!2d72.49915!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84576f9d2e5b%3A0x2f8f4f9a5b2c3e1a!2sDhamatvan%20Rd%2C%20Bakrol%2C%20Ahmedabad%2C%20Gujarat%20382433!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-sm w-[220px] sm:w-[260px] overflow-hidden">
          {/* Card header */}
            <div className="bg-[#2b2580] flex items-center gap-2 px-4 py-2.5">
              <svg className="w-4 h-4 text-white shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="text-white font-semibold text-[13px]">Office Location</span>
            </div>
          {/* Address */}
            <div className="px-4 py-3">
              <p className="text-gray-700 text-[12px] leading-[1.75]">
              Shed No. 4, Shree Hari Krupa<br />
              Industrial Park, Dhamatvan Road,<br />
              Bakrol, Ahmedabad 382433<br />
              ( Gujarat ) INDIA
              </p>
            </div>
          </div>
        </div>

      <div className="bg-white py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-[28px] sm:text-[34px] font-bold text-[#2b2580] leading-tight mb-8">
                Get In Touch<br />With Us
              </h2>
              <div className="flex items-start gap-3 mb-5">
                <div className="w-9 h-9 flex items-center justify-center shrink-0 mt-0.5">
                <FiPhoneCall className="text-[#2b2580] text-2xl" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-[14px]">Ronak Desai</p>
                  <p className="text-gray-500 text-[13px]">91 8511126788</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center shrink-0">
                <MdEmail className="text-[#2b2580] text-2xl" />
                </div>
                <a
                  href="mailto:Enquiry@elementaltrade.in"
                  className="text-gray-600 text-[13px] hover:text-[#2b2580] transition-colors"
                >
                  Enquiry@elementaltrade.in
                </a>
              </div>
            </div>

            {/* ── RIGHT: Contact form ── */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Row 1: Full Name | Contact Number | Email ID */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-600 text-[12px] font-medium">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                      required
                      className="border border-gray-300 bg-white px-3 py-2.5 text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2b2580] transition-colors rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-600 text-[12px] font-medium">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={form.contactNumber}
                      onChange={handleChange}
                      placeholder="Enter Contact Number"
                      required
                      className="border border-gray-300 bg-white px-3 py-2.5 text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2b2580] transition-colors rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-gray-600 text-[12px] font-medium">Email ID</label>
                    <input
                      type="email"
                      name="emailId"
                      value={form.emailId}
                      onChange={handleChange}
                      placeholder="Enter Email ID"
                      required
                      className="border border-gray-300 bg-white px-3 py-2.5 text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2b2580] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* Row 2: Message textarea */}
                <div className="flex flex-col gap-1">
                  <label className="text-gray-600 text-[12px] font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Comment"
                    rows={5}
                    required
                    className="border border-gray-300 bg-white px-3 py-3 text-[12px] text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2b2580] transition-colors resize-none rounded-sm"
                  />
                </div>

                {/* Submit button — full width, teal/green */}
                <button type="submit"
                className="w-full bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-[14px] py-3 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                 Know More
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
</div>
    </div>
  );
}
