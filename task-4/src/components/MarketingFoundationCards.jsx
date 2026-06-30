// FoundationCards.jsx

import { useEffect, useRef } from "react";
import { foundationCardsData } from "../data/creativeMarketingData";
import AnimatedCard from "./common/AnimatedCard";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              "opacity 0.7s ease, transform 0.7s ease";

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

function FoundationCard({ card, delay, fillColor }) {
  const ref = useScrollReveal(delay);

  return (
    <div ref={ref}>
      <AnimatedCard
        fillColor={fillColor}
        borderColor={fillColor}
        title={card.title}
        titleColor={fillColor}
      >
        {/* Bullet List */}
        <ul className="space-y-3 relative z-10">
          {card.bullets.map((point, i) => (
            <li
              key={i}
              className="
                flex items-start gap-2
                text-gray-600
                group-hover:text-white
                transition-all duration-300
                text-[13px] md:text-[14px]
                leading-[22px]
              "
            >
              <span
                className="
                  mt-[7px]
                  w-[5px]
                  h-[5px]
                  rounded-full
                  bg-gray-400
                  group-hover:bg-white
                  transition-all duration-300
                  flex-shrink-0
                "
              />
              {point}
            </li>
          ))}
        </ul>

        {/* Watermark */}
        {card.watermarkImage && (
          <img
            src={card.watermarkImage}
            alt=""
            aria-hidden="true"
            className="
              absolute
              bottom-4
              right-4
              w-16
              h-16
              object-contain
              opacity-10
              pointer-events-none
              select-none
              z-10
            "
          />
        )}
      </AnimatedCard>
    </div>
  );
}

export default function MarketingFoundationCards() {
  const bgStyle = foundationCardsData.backgroundImage
    ? `url(${foundationCardsData.backgroundImage})`
    : "linear-gradient(180deg, #334155 0%, #1e293b 100%)";

  return (
    <section
      className="
        relative
        w-full
        lg:mt-16
        lg:h-[420px]
        flex items-end
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: bgStyle }}
      
    >

       {/* Overlay */}
       <div className="absolute inset-0 bg-black/40 z-10" />
     

      {/* Content */}
      <div
        className="
          relative z-10 w-full max-w-[1500px] mx-auto
          px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px]
          py-16 md:py-20
          lg:translate-y-[50%]
        "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {foundationCardsData.cards.map((card, i) => (
            <FoundationCard
              key={card.id}
              card={card}
              delay={i * 150}
              fillColor={i === 0 ? "#1E3D88" : "#009846"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}