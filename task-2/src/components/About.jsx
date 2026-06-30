export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* TOP SECTION */}
      <div className="bg-white pt-10 lg:pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* IMAGE */}
            <div className="relative z-20">
              <img
                src="/src/assets/images/test.png"
                alt="Colorful chemical test tubes"
                className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[400px] object-cover rounded-md shadow-lg lg:-mb-24"
              />
            </div>

            {/* CONTENT */}
            <div>
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#2F2482] mb-4">
                About Us
              </h2>

              <p className="text-gray-700 text-[13px] sm:text-[14px] lg:text-[15px] mb-6">
                Elemental Trade Corporation Pvt. Ltd. Is Based At Ahmedabad. ETC
                Is Wholly Owned Company By The Family Members Only. With An
                Experience & Expertise Of Almost 14 Years (since 2008). Huge
                Warehouse And With All Required Well Equipped Amenities & Well
                Trained & Educated Staff Has Proved To Be The Strong Foundation
                Of The Company.
              </p>

              <a href="#"
              className="inline-block bg-gradient-to-r from-[#2F2482] to-[#007753] text-white font-semibold text-[14px] sm:text-[15px] px-6 sm:px-7 py-2.5 sm:py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Know More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div
        className="bg-[#EAE7FF] pt-16 sm:pt-15 lg:pt-32 pb-16 relative">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[24px] sm:text-[30px] lg:text-[32px] font-bold text-[#2F2482] mb-4">
                Elemental Trade Pvt.Ltd
              </h2>

              <p className="text-gray-600 text-[13px] sm:text-[14px] mb-8">
                Provides excellent products to Large scale, Small scale Medium
                scale, & Micro scale Government industries and Organizations.
                The efforts of the company have been duly rewarded and
                recognized.
              </p>

              {/* FEATURES */}
              <div className="flex flex-col gap-6">
                {/* ITEM 1 */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <img
                      src="/src/assets/images/icon-1.png"
                      alt="Bulk Chemicals icon"
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>

                  <div>
                    <p
                      className=" text-gray-500 font-bold text-[13px] sm:text-[14px]"
                    >
                      Supply of Bulk Chemicals, Acids, Solvents, Minerals &
                      Other Rare Bulk Chemicals.
                    </p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    <img
                      src="/src/assets/images/icon-2.png"
                      alt="Laboratory Chemicals icon"
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>

                  <div>
                    <p
                      className="text-gray-500 font-bold text-[13px] sm:text-[14px]"
                    >
                      Supply of Laboratory Chemicals & Culture Media.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="/src/assets/images/about2.png"
                alt="Lab scientist with green flask"
                className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] object-cover rounded-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
