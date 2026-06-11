import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    emailId: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setForm({ firstName: "", lastName: "", contactNumber: "", emailId: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#EAE7FF] relative pt-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">  
        <div className="flex justify-center lg:justify-start relative z-100 -mt-24 lg:-mt-17">
        <img
        src="/src/assets/images/contact-1.png"
        alt="Scientist working in lab"
        className="w-[220px] sm:w-[260px] lg:w-[320px] h-[320px] sm:h-[380px] lg:h-[450px] object-cover"
        />

        </div>

          {/* ── RIGHT: Contact Form ── */}
          <div className="px-8 sm:px-12 py-12 lg:py-16">
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#2F2482] mb-8">
              Contact Form
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Row 1: First Name + Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="border border-gray-[#2F2482] bg-white px-4 py-2.5 text-[13px] text-gray-700 placeholder-[#2F2482] focus:outline-none focus:border-[#2F2482] transition-colors"
                />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="border border-gray-[#2F2482] bg-white px-4 py-2.5 text-[13px] text-gray-700 placeholder-[#2F2482] focus:outline-none focus:border-[#2F2482] transition-colors"
                />
              </div>

              {/* Row 2: Contact Number + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="contactNumber"
                  value={form.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  required
                  className="border border-gray-[#2F2482] bg-white px-4 py-2.5 text-[13px] text-gray-700 placeholder-[#2F2482] focus:outline-none focus:border-[#2F2482] transition-colors"
                />
                <input
                  type="email"
                  name="emailId"
                  value={form.emailId}
                  onChange={handleChange}
                  placeholder="Email ID"
                  required
                  className="border border-gray-[#2F2482] bg-white px-4 py-2.5 text-[13px] text-gray-700 placeholder-[#2F2482] focus:outline-none focus:border-[#2F2482] transition-colors rounded-sm"
                />
              </div>

              {/* Row 3: Message textarea */}
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
                className="border border-gray-[#2F2482] bg-white px-4 py-3 text-[13px] text-gray-700 placeholder-[#2F2482] focus:outline-none focus:border-[#2F2482] transition-colors resize-none"
              />

              {/* Submit */}
              <div>
              <button
              type="submit"
              className="bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-[14px] px-5 py-1 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
              Submit
              </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
