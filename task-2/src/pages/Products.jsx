import products from "../data/product";
import Contact from "../components/Contact";

export default function ProductsPage() {
  return (
    <div className="pt-[72px] md:pt-[80px] font-sans overflow-hidden">

      {/* HEADER */}
      <div className="bg-[#2b2580] text-center relative">

        <div className="pt-5 pb-8">
          <h1 className="text-white font-bold text-[20px] sm:text-[24px]">
            Products
          </h1>
        </div>

        {/* WAVE */}
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

      {/* BREADCRUMB */}
      <div className="bg-[#007753] py-2 relative z-10">
        <div className="flex items-center justify-center gap-2 text-[10px] text-white">

          <a
            href="/"
            className="hover:opacity-80 transition-opacity"
          >
            Home
          </a>

          <span>›</span>

          <span>Products</span>

        </div>
      </div>

      {/* TOP CONTENT */}
      <div className="bg-white py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#2b2580]">
            Our Products
          </h2>
          <p className="text-gray-600 text-[13px] sm:text-[14px] max-w-3xl">
            Based in Ahmedabad we have been catering to the needs of various industries such as Textile,
            Rubber, Leather, Dyes &amp; Dyes Intermediates, Paints with our range of premium quality Acid
            dyes, Direct dyes, Reactive Dyes, Dyes Intermediates and Industrial Chemicals.
          </p>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="relative bg-[#2b2580] overflow-hidden py-12 sm:py-16">

        {/* Decorative Blob */}
        <div
          className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, #1a7a5e 0%, #145f49 50%, transparent 80%)",
            borderRadius: "0 60% 0 0",
          }}
        />

        {/* Hexagon Pattern */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-80 h-80">
          <svg viewBox="0 0 300 300" fill="none" className="w-full h-full">
            {[
              [60, 60],
              [150, 60],
              [240, 60],
              [105, 145],
              [195, 145],
              [60, 230],
              [150, 230],
              [240, 230],
            ].map(([cx, cy], i) => (
              <polygon
                key={i}
                points={`${cx},${cy - 35} ${cx + 30},${cy - 17} ${cx + 30},${cy + 17} ${cx},${cy + 35} ${cx - 30},${cy + 17} ${cx - 30},${cy - 17}`}
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            ))}
          </svg>
        </div>

        {/* GRID */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {products.map((product, i) => (

              <div
                key={i}
                className="bg-white rounded-sm flex flex-col p-6 shadow-lg hover:-translate-y-1 transition-all duration-300"
              >

                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-[#EAE7FF] flex items-center justify-center mb-5">

                  <img
                    src={product.icon}
                    alt={product.title}
                    className="w-7 h-7 object-contain"
                  />

                </div>

                {/* TITLE */}
                <h3 className="text-gray-900 font-bold text-[15px] mb-3">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-[13px] leading-[1.8] flex-1 mb-6">
                  {product.description}
                </p>

                {/* BUTTON */}
                <div>
                  <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-[13px] px-5 py-2.5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    Know More
                  </a>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* CONTACT */}
      <div className="mt-24">
        <Contact />
      </div>

    </div>
  );
}