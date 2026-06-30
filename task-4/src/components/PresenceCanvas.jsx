import { useEffect, useRef } from "react";
import { presenceCanvasData } from "../data/strategicPromotionData";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
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

function MultiHighlight({ text, highlights }) {
  if (!highlights || highlights.length === 0) return <>{text}</>;

  const sorted = [...highlights].sort((a, b) => b.word.length - a.word.length);
  const pattern = sorted
    .map((h) => h.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const parts = text.split(regex);
  const map = {};
  highlights.forEach((h) => {
    map[h.word.toLowerCase()] = h.color;
  });

  return (
    <>
      {parts.map((part, i) => {
        const color = map[part.toLowerCase()];
        return color ? (
          <span key={i} style={{ color }} className="font-semibold">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </>
  );
}

// Card text content (title + paragraphs with highlights)
function CardContent({ card }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[#1e3a8a] font-semibold text-[16px] md:text-[19px] leading-snug mb-1">
        {card.title}
      </h3>
      {card.paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-gray-600 text-[12px] md:text-[13px] leading-[22px] text-justify"
        >
          <MultiHighlight text={para.text} highlights={para.highlights} />
        </p>
      ))}
    </div>
  );
}

export default function PresenceCanvas() {
  const leftRef = useScrollReveal(0);
  const centerRef = useScrollReveal(150);
  const rightRef = useScrollReveal(300);

  const { leftCard, rightCard, centerImage, centerFrame } = presenceCanvasData;

  // Circle size for center image
  const CIRCLE = 300; // px on desktop

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 lg:mt-30 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] pt-24 pb-16 md:pt-50 md:pb-20">
      <div className="flex flex-col gap-6 lg:hidden">
        <div className="border-2 border-green-600 rounded-2xl p-6 bg-white shadow-sm">
          <CardContent card={leftCard} />
        </div>

        <div className="border-2 border-[#2b4ea2] rounded-2xl p-6 bg-white shadow-sm">
          <CardContent card={rightCard} />
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center lg:gap-[-20px]">
        <div
          ref={leftRef}
          className="relative w-[450px] lg:w-[500px] flex-shrink-0 lg:-mr-25"
          style={{ aspectRatio: "1 / 1" }}
        >
          {/* Green frame image — fills the full square */}
          <img
            src={leftCard.frame}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />
          <div
            className="absolute z-10 flex items-start"
            style={{
              top: "31%",
              left: "0%",
              right: "38%",
              bottom: "10%",
              padding: "25px",
            }}
          >
            <CardContent card={leftCard} />
          </div>
        </div>
        <div
          ref={centerRef}
          className="relative flex-shrink-0 z-20"
          style={{ width: CIRCLE, height: CIRCLE }}
        >
          {/* back-frame.png — the quarter-circle green+blue ring */}
          <img
            src={centerFrame}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 2 }}
          />

          {/* Water bottle image — circular crop, slightly inset from frame */}
          <div
            className="absolute rounded-full overflow-hidden"
            style={{
              top: "8%",
              left: "8%",
              right: "8%",
              bottom: "8%",
              zIndex: 3,
            }}
          >
            <img
              src={centerImage}
              alt="Precious Spring Water"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          ref={rightRef}
          className="relative w-[450px] lg:w-[500px] flex-shrink-0 lg:-ml-25"
          style={{ aspectRatio: "1 / 1" }}
        >
          {/* Blue frame image */}
          <img
            src={rightCard.frame}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />

          {/* Card text — inside top-right box area of blue frame
              Blue frame box occupies roughly:
              top: 3% → bottom: 68%  |  left: 40% → right: 2%
          */}
          <div
            className="absolute z-10 flex items-start"
            style={{
              top: "8%",
              left: "38%",
              right: "0%",
              bottom: "10%",
              padding: "22px",
            }}
          >
            <CardContent card={rightCard} />
          </div>
        </div>
      </div>
    </section>
  );
}
