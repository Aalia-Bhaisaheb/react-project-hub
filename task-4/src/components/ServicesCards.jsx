import { servicesCards } from "../data/nextGenBranding";

export default function ServicesCards() {
  return (
    <section className="py-14 sm:py-20 bg-white lg:mt-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesCards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ card }) {
  return (
    <>
      {/* MOBILE & TABLET */}
      <div
        className="lg:hidden rounded-2xl p-6 shadow-md"
        style={{
          backgroundColor: card.hoverColor,
        }}
      >
        <div className="flex justify-center mb-4">
          <img
            src={card.icon}
            alt={card.title}
            className="w-[80px] h-[80px] object-contain"
          />
        </div>

        <h3 className="text-white font-semibold text-[18px] text-center mb-3">
          {card.title}
        </h3>

        <p className="text-white/90 text-[14px] leading-relaxed text-center">
          {card.description}
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block group relative w-full h-[420px] cursor-pointer select-none pt-6">
        {/* Icon */}
        <div
          className="
            absolute
            left-1/2
            -top-5
            -translate-x-1/2
            z-30
            transition-all
            duration-700
            ease-in-out
            group-hover:top-[calc(100%-50px)]
          "
        >
          {card.icon ? (
            <img
              src={card.icon}
              alt={`${card.title} icon`}
              className="w-[90px] h-[90px] object-contain"
            />
          ) : (
            <div className="w-[72px] h-[72px] rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="text-xl" style={{ color: card.hoverColor }}>
                ✦
              </span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="relative h-full rounded-2xl overflow-hidden">
          {/* Default Image */}
          <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
            {card.image ? (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-center scale-110 transition-transform duration-500 group-hover:scale-100"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center px-4">
                [{card.title} image]
              </div>
            )}
          </div>

          {/* Bottom Gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 transition-opacity duration-500 group-hover:opacity-0"
            style={{
              background: `linear-gradient(to top, ${card.hoverColor}cc, transparent)`,
            }}
          />

          {/* Default Title */}
          <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
            <p className="text-white font-semibold font-roboto text-[18px] text-center drop-shadow">
              {card.title}
            </p>
          </div>

          {/* Hover Background */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
            style={{
              backgroundColor: card.hoverColor,
            }}
          />

          {/* Hover Content */}
          <div
            className="
              absolute
              inset-0
              z-20
              flex
              flex-col
              justify-center
              items-center
              px-7
              opacity-0
              group-hover:opacity-100
              translate-y-4
              group-hover:translate-y-0
              transition-all
              duration-500
              ease-in-out
            "
          >
            <h3 className="text-white font-semibold text-[16px] lg:text-[20px] mb-3 text-center leading-snug">
              {card.title}
            </h3>

            <p className="text-white/90 text-[13px] lg:text-[15px] leading-relaxed text-center">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
