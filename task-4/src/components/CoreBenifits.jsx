// CoreBenefits.jsx
// Same design preserved, only responsiveness and icon alignment improved

import { useEffect, useRef } from "react";
import { coreBenefitsData } from "../data/creativeMarketingData";

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

function BenefitItem({ benefit, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="
        group
        flex flex-col items-center gap-4
        transition-all duration-500 ease-out
        hover:-translate-y-3
      "
    >
      {/* Icon Area */}
      <div
        className="
          relative
          w-[120px] h-[120px]
          sm:w-[140px] sm:h-[140px]
          md:w-[160px] md:h-[160px]
          flex items-center justify-center
          -mt-10
        "
      >
        {/* Arc */}
        {benefit.arcImage ? (
          <img
            src={benefit.arcImage}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-contain
              pointer-events-none
              select-none
              transition-all duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `6px solid ${benefit.labelColor}`,
              clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 55%)",
              opacity: 0.9,
            }}
          />
        )}

        {/* Icon */}
        {benefit.iconImage ? (
          <img
            src={benefit.iconImage}
            alt={benefit.label}
            className="
              absolute
              top-[65%]
              left-1/2
              -translate-x-1/2
              -translate-y-[35%]
              z-10
              w-[90px]
              h-[90px]
              md:w-[140px]
              md:h-[140px]
              object-contain
              drop-shadow-md
              transition-all duration-500 ease-out
              group-hover:scale-110
              group-hover:drop-shadow-[0_10px_25px_rgba(0,0,0,0.25)]
            "
          />
        ) : (
          <div
            className="
              absolute
              top-[50%]
              left-1/2
              -translate-x-1/2
              -translate-y-[35%]
              z-10
              w-[90px]
              h-[90px]
              md:w-[100px]
              md:h-[100px]
              rounded-full
              bg-white
              shadow-lg
              border-2
              flex
              items-center
              justify-center
              transition-all duration-500
              group-hover:scale-110
            "
            style={{ borderColor: benefit.labelColor }}
          >
            <span className="text-[10px] text-gray-400 text-center px-1 leading-tight">
              Add icon
            </span>
          </div>
        )}
      </div>

      {/* Label */}
      <p
        className="
          font-roboto
          font-semibold
          text-[14px]
          md:text-[16px]
          text-center
          leading-tight
          md:mt-5
          transition-all duration-500
          group-hover:scale-105
        "
        style={{ color: benefit.labelColor }}
      >
        {benefit.label}
      </p>
    </div>
  );
}

export default function CoreBenefits() {
  const titleRef = useScrollReveal(0);

  return (
    <section
      className="
        relative
        w-full
        py-16
        md:py-20
        overflow-hidden
        md:mt-50
      "
      style={{
        backgroundImage: coreBenefitsData.bgImage
          ? `url(${coreBenefitsData.bgImage})`
          : undefined,
        backgroundColor: coreBenefitsData.bgImage ? undefined : "#ffffff",
        backgroundSize: "clamp(350px, 50%, 800px)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Light Overlay */}
      {coreBenefitsData.bgImage && (
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
      )}

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px]">
        {/* Title */}
        <h2
          ref={titleRef}
          className="
            font-condensed
            text-center
            text-[#1e3a8a]
            font-semibold
            text-[22px]
            md:text-[32px]
            leading-tight
            mb-14
            md:mb-16
          "
        >
          {coreBenefitsData.title}
        </h2>

        {/* Benefits Row */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            items-center
            justify-center
            gap-12
            sm:gap-16
            md:gap-24
          "
        >
          {coreBenefitsData.benefits.map((benefit, i) => (
            <BenefitItem key={benefit.id} benefit={benefit} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
