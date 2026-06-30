import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">

        <h1 className="font-geist font-bold text-[80px] sm:text-[120px] leading-none text-[#2D258E]">
          404
        </h1>

        <p className="font-geist text-[22px] sm:text-[30px] font-bold text-[#4B4B4B] mt-4">
          Page Not Found
        </p>

        <p className="font-geist text-[#737373] text-[15px] sm:text-[17px] mt-3">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-[#2D258E] text-white rounded-[8px] font-geist font-semibold hover:opacity-90 transition-all duration-300"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}