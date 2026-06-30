// ContentSection.jsx — SHARED REUSABLE COMPONENT
// Used by: AboutSection.jsx, CommunityEngagement.jsx
// Layout: text left + image right (image moves above text on mobile)
//
// Props:
//   data = {
//     title        : string
//     paragraphs   : string[]
//     badges       : { label: string }[]
//     image        : imported image
//     highlightWord: string | undefined   — optional, highlights a word green in the LAST paragraph
//   }

import { useEffect, useRef } from "react";

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// Highlights a specific word in green within a string
function HighlightedText({ text, word }) {
  if (!word) return <>{text}</>;
  const parts = text.split(new RegExp(`(${word})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === word.toLowerCase() ? (
          <span key={i} className="text-[#22c55e] font-semibold">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function ContentSection({ data }) {
  const textRef      = useScrollReveal(0);
  const imgRef       = useScrollReveal(150);
  const mobileImgRef = useScrollReveal(0);

  const lastIdx = data.paragraphs.length - 1;

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

        {/* ── TEXT ── */}
        <div ref={textRef} className="flex-1 w-full max-w-[670px] mx-auto lg:mx-0">

          {/* Title */}
          <h2 className="text-[#1e3a8a] font-medium text-[22px] md:text-[30px] leading-[42px] mb-7">
            {data.title}
          </h2>

          {/* Mobile image — shows between title and text on small screens */}
          <div
            ref={mobileImgRef}
            className="lg:hidden w-full h-[260px] sm:h-[320px] rounded-lg overflow-hidden shadow-lg bg-gray-200 mb-7"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Paragraphs */}
          <div className="space-y-4">
            {data.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-gray-600 text-[13px] md:text-[15px] leading-[26px] font-normal text-justify"
              >
                {/* Highlight word only in last paragraph if highlightWord is set */}
                {i === lastIdx && data.highlightWord ? (
                  <HighlightedText text={para} word={data.highlightWord} />
                ) : (
                  para
                )}
              </p>
            ))}
          </div>

          {/* Badge buttons */}
          {data.badges?.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-7">
              {data.badges.map((badge, i) => (
                <button
                  key={i}
                  className="px-5 py-2.5 border border-gray-300 rounded text-[13px] md:text-[14px] font-medium text-[#009846] hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-all duration-300 cursor-pointer shadow-sm"
                >
                  {badge.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── DESKTOP IMAGE ── */}
        <div
          ref={imgRef}
          className="hidden lg:block flex-shrink-0 w-full max-w-[460px] h-[300px] md:h-[360px] rounded-lg overflow-hidden shadow-lg bg-gray-200"
        >
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}