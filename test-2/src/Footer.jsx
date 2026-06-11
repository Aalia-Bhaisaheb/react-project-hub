import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdBusiness } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black text-center py-18 px-4 relative">
      {/* Contact row */}
      <div className="flex items-center justify-center gap-8 mb-3">
        <a
          href="mailto:dummyemail123@example.com"
          className="flex items-center gap-2 text-gray-300 text-lg hover:text-white transition-colors"
        >
          <MdEmail className="text-[#E87722]" size={16} />
          dummyemail123@example.com
        </a>

        <a
          href="tel:+917874766966"
          className="flex items-center gap-2 text-gray-300 text-md hover:text-white transition-colors"
        >
          <MdPhone className="text-[#E87722]" size={16} />
          +91 78747 66966
        </a>
      </div>

      {/* Address row */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <MdBusiness className="text-[#E87722] shrink-0" size={16} />
        <p className="text-gray-300 text-md">
          522, VTC (Vihav Trade Centre), Nr. Waves Club, Bhayli, Vadodara 391410
        </p>
      </div>

      {/* Copyright row */}
      <p className="text-gray-400 text-md mb-2">
        Copyright &copy; 2023 The Foundation., All Rights Reserved.{" "}
        <span className="text-gray-500">|</span>{" "}
        <a href="#" className="hover:text-white transition-colors">
          Sitemap
        </a>
      </p>

      {/* Credit row */}
      <p className="text-gray-500 text-sm">Website Design by D&amp;C</p>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
}