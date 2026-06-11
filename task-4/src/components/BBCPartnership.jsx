import { useEffect, useRef } from "react";
import { bbcPartnershipData } from "../data/businessHighlightsData";

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
            el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
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

function useCardReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(60px) scale(0.95)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0) scale(1)";
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

export default function BBCPartnership() {
  const titleRef = useScrollReveal(0);

  const cardRef1 = useCardReveal(100);
  const cardRef2 = useCardReveal(300);
  const cardRef3 = useCardReveal(500);

  const cardRefs = [cardRef1, cardRef2, cardRef3];

  const { title, backgroundImage, cardLine, cards } = bbcPartnershipData;

  return (
    <section
      className="relative w-full overflow-hidden py-12 md:py-20"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: "#d9dfea",
        backgroundSize: "100%",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg,#FFFFFF 0%,rgba(255,255,255,0) 45%,#FFFFFF 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] md:mt-35">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-5">
          <h2 className="text-white font-bold text-[24px] md:text-[42px]">
            {title}
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden xl:block mt-3">
          <div className="relative w-full max-w-[1200px] mx-auto">
            {/* Single Border Framework */}
            <img
              src={cardLine}
              alt=""
              aria-hidden="true"
              className="w-full h-auto select-none pointer-events-none"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0">
              {cards.map((card, index) => {
                const positions = ["left-[3%]", "left-[36%]", "right-[3%]"];

                return (
                  <div
                    ref={cardRefs[index]}
                    key={card.id}
                    className={`absolute ${positions[index]} top-[5%] w-[28%] text-center`}
                  >
                    {/* Number + Label */}
                    <div className="flex items-center justify-center gap-3 mb-5">
                      <span
                        className="font-black text-[72px] leading-none animate-pulse mt-4"
                        style={{
                          color: card.accentColor,
                          animationDuration: "2.5s",
                        }}
                      >
                        {card.number}
                      </span>

                      <div
                        className="inline-flex items-center justify-center text-white px-15 py-5 mt-4 rounded-md font-semibold text-[16px] transition-transform duration-500 hover:scale-105"
                        style={{
                          backgroundColor: card.accentColor,
                        }}
                      >
                        {card.label}
                      </div>
                    </div>

                    {/* Paragraphs */}
                    <div className="text-[13px] leading-[23px] text-gray-700">
                      {card.paragraphs.map((para, i) => (
                        <p key={i} className="mb-4">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="xl:hidden mt-10 space-y-8">
          {cards.map((card, index) => {
            const mobileRef =
              index === 0
                ? cardRef1
                : index === 1
                ? cardRef2
                : cardRef3;

            return (
              <div
                ref={mobileRef}
                key={card.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden border"
                style={{
                  borderColor: card.accentColor,
                }}
              >
                <div
                  className="flex items-center gap-3 px-5 py-4"
                  style={{
                    backgroundColor: card.accentColor,
                  }}
                >
                  <span className="text-white font-black text-[28px] leading-none">
                    {card.number}
                  </span>

                  <span className="text-white font-semibold text-[18px] leading-none">
                    {card.label}
                  </span>
                </div>

                <div className="p-5">
                  {card.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-gray-600 text-[14px] leading-[24px] mb-4"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}