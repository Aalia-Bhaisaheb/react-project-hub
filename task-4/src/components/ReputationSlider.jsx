// ReputationSlider.jsx

import { useState, useEffect, useRef } from "react";
import { reputationSliderData } from "../data/brandBuildingData";

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
            el.style.transition =
              "opacity 0.7s ease, transform 0.7s ease";

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

export default function ReputationSlider() {
  const { slides } = reputationSliderData;

  const [order, setOrder] = useState(
    slides.map((_, i) => i)
  );

  const [animating, setAnimating] = useState(false);

  const textRef = useScrollReveal(0);
  const sliderRef = useScrollReveal(150);

  const activeSlide = slides[order[0]];

  function handlePanelClick(panelPos) {
    if (panelPos === 0 || animating) return;

    setAnimating(true);

    setOrder((prev) => {
      const next = [...prev];
    
      for (let i = 0; i < panelPos; i++) {
        next.push(next.shift());
      }
    
      return next;
    
    });

    setTimeout(() => setAnimating(false), 500);
  }

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] py-16 md:py-20 md:mt-50">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">

        {/* LEFT CONTENT */}
        <div
          ref={textRef}
          className="flex-1 min-w-0 flex flex-col justify-center"
        >
          <div className="mb-5">
            <h2 className="font-condensed text-[#1e3a8a] text-[22px] md:text-[28px] font-medium leading-tight inline-block pb-1 transition-all duration-500">
              {activeSlide.title}
            </h2>
          </div>

          <p className="font-roboto text-gray-600 text-[13px] md:text-[14px] leading-[26px] text-justify mb-4 transition-all duration-500">
            {activeSlide.paragraphs[0]}
          </p>

          <p className="font-roboto text-[#22c55e] text-[13px] md:text-[14px] font-semibold leading-[24px] mb-4 transition-all duration-500">
            {activeSlide.missionText}
          </p>

          {activeSlide.paragraphs.slice(1).map((para, i) => (
            <p
              key={i}
              className="font-roboto text-gray-600 text-[13px] md:text-[14px] leading-[26px] text-justify mb-3 transition-all duration-500"
            >
              {para}
            </p>
          ))}
        </div>

        {/* RIGHT SLIDER */}
        <div
          ref={sliderRef}
          className="flex-shrink-0 w-full md:w-[550px] h-[300px] md:h-[500px] flex rounded-xl overflow-hidden p-2"
        >
          {order.map((slideIdx, panelPos) => {
            const slide = slides[slideIdx];
            const isActive = panelPos === 0;
            
            // Calculate z-index dynamically so the leftmost card stays on top
            const zIndex = slides.length - panelPos;

            return (
              <div
                key={slide.id}
                onClick={() => handlePanelClick(panelPos)}
                className={`
                  relative
                  overflow-hidden
                  rounded-xl
                  transition-all
                  duration-500
                  ease-in-out
                  
                  ${
                    isActive
                      ? "flex-[3] cursor-default z-30"
                      : "flex-[0.8] cursor-pointer hover:flex-[1] -ml-5"
                  }
                `}
                style={{
                  zIndex: zIndex,
                  background: isActive
                    ? "transparent"
                    : "#2d4a8a",
                }}
              >
                {/* ACTIVE IMAGE */}
                {isActive && (
                  <>
                    <img
                      src={slide.image}
                      alt={slide.label}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* BLUE GRADIENT OVERLAY */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(90deg, #457CFF 0%, rgba(69,124,255,0.3) 47%, rgba(69,124,255,0) 100%)",
                      }}
                    />
                  </>
                )}

                {/* INACTIVE PANELS */}
                {!isActive && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        panelPos === 1
                          ? "linear-gradient(180deg, #3a5fa8 0%, #2d4a8a 100%)"
                          : "linear-gradient(180deg, #4a6bb8 0%, #3a5fa8 100%)",
                    }}
                  />
                )}

                {/* LABEL */}
                <div className="absolute bottom-6 left-7 z-10">
                  <span
                    className={`
                      text-white
                      font-semibold
                      tracking-widest
                      uppercase
                      whitespace-nowrap
                      select-none
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "text-[14px]"
                          : "text-[12px] opacity-90"
                      }
                    `}
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {slide.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}