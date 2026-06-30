// ApproachSection.jsx
// Fluid, fully responsive layout: text is left-aligned on small screens and scales beautifully.

import { useEffect, useRef } from "react";
import { approachData } from "../data/aboutData";

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

const BOX = 460;

const POSITIONS = {
  top:         { cx: 230, cy: 37  },
  bottomLeft:  { cx: 46,  cy: 320 },
  bottomRight: { cx: 400, cy: 320 },
};

function getPercentStyle(cx, cy) {
  return {
    top: `${(cy / BOX) * 100}%`,
    left: `${(cx / BOX) * 100}%`,
  };
}

function IconCircle({ src, alt, borderColor, cx, cy }) {
  const percentCoords = getPercentStyle(cx, cy);

  return (
    <div
      className="absolute rounded-full bg-[#f3f3f3] flex items-center justify-center shadow-lg -translate-x-1/2 -translate-y-1/2
                 w-[16%] h-[16%] sm:w-[20%] sm:h-[20%] md:w-[96px] md:h-[96px]"
      style={{
        ...percentCoords,
        border: `calc(2px + 0.5vw) solid ${borderColor}`,
        zIndex: 10,
        animation: "counterSpin 20s linear infinite",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-[45%] h-[45%] object-contain"
      />
    </div>
  );
}

export default function ApproachSection() {
  const diagramRef = useScrollReveal(0);
  const textRef    = useScrollReveal(200);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-24 overflow-hidden">
      <style>{`
        @keyframes clockSpin   { from { transform: rotate(0deg);    } to { transform: rotate(360deg);  } }
        @keyframes counterSpin { from { transform: rotate(0deg);    } to { transform: rotate(-360deg); } }
      `}</style>

      <div className="max-w-[1500px] mx-auto px-5 sm:px-10 md:px-16 lg:px-24 xl:px-[165px]">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 lg:gap-24">

          {/* ── DIAGRAM CONTAINER ── */}
          <div
            ref={diagramRef}
            className="w-full max-w-[290px] sm:max-w-[380px] md:max-w-[460px] flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full aspect-square flex-shrink-0">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  animation: "clockSpin 20s linear infinite",
                  transformOrigin: "50% 50%",
                }}
              >
                <img
                  src={approachData.diagram.connectorRing}
                  alt="Connector Ring"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                  style={{ zIndex: 1 }}
                />

                <IconCircle
                  src={approachData.diagram.topIcon}
                  alt="Users"
                  borderColor="#ff8a3d"
                  cx={POSITIONS.top.cx}
                  cy={POSITIONS.top.cy}
                />

                <IconCircle
                  src={approachData.diagram.leftIcon}
                  alt="Channels"
                  borderColor="#00a651"
                  cx={POSITIONS.bottomLeft.cx}
                  cy={POSITIONS.bottomLeft.cy}
                />

                <IconCircle
                  src={approachData.diagram.rightIcon}
                  alt="Brands"
                  borderColor="#2647a8"
                  cx={POSITIONS.bottomRight.cx}
                  cy={POSITIONS.bottomRight.cy}
                />
              </div>

              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] flex items-center justify-center pointer-events-none"
                style={{ zIndex: 20 }}
              >
                <img
                  src={approachData.diagram.preciousImage}
                  alt="Precious"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>

          {/* ── TEXT CONTENT LAYER (Updated to text-left for mobile) ── */}
          <div
            ref={textRef}
            className="w-full lg:max-w-[470px] text-left order-1 lg:order-2"
          >
            <h2 className="font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-snug lg:leading-[42px] text-[#1E3D88] mb-4 sm:mb-5">
              {approachData.title}
            </h2>
            <p className="text-gray-600 text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] lg:leading-[26px]">
              {approachData.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}