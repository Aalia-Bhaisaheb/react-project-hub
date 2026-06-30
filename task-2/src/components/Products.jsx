import products from "../data/product";
export default function Products() {
  return (
    <section
      id="products"
      className="bg-white py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-1">

            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#2F2482] mb-5 leading-tight">
              Our Products
            </h2>

            <p className="text-gray-600 text-[13px] mb-4">
            Based in Ahmedabad we have been catering to the needs of various industries such as Textile, Rubber, Leather, Dyes & Dyes Intermediates, Paints with our range of premium quality Acid dyes/ Salt Free Acid Dyes, Direct dyes / Salt Free Direct Dyes, Reactive Dyes, Reactive MP dyes, Reactive 'HE' Dyes, Dyes Intermediates, Industrial Chemicals etc.
            </p>

            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-[13px] px-6 py-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View Details
            </a>

          </div>

          {/* RIGHT GRID */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">

            {products.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4"
              >

                {/* ICON */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-[#EAE7FF] flex items-center justify-center">

                  <img
                    src={p.icon}
                    alt={p.title}
                    className="w-7 h-7 object-contain"
                  />

                </div>

                {/* CONTENT */}
                <div>

                  <h3 className="text-[#646464] font-bold text-[15px] mb-2">
                    {p.title}
                  </h3>

                  <p className="text-gray-500 text-[13px]">
                    {p.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}