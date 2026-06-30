import { useEffect, useRef } from "react";

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

function MultiHighlightText({ text = "", highlights = [] }) {
  const validHighlights = highlights.filter(
    (h) => h && typeof h.word === "string"
  );

  if (!validHighlights.length) return <>{text}</>;

  const sorted = [...validHighlights].sort(
    (a, b) => b.word.length - a.word.length
  );

  const pattern = sorted
    .map((h) => h.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|");

  const regex = new RegExp(`(${pattern})`, "gi");

  const parts = text.split(regex);

  const colorMap = {};

  validHighlights.forEach((h) => {
    colorMap[h.word.toLowerCase()] = h.color;
  });

  return (
    <>
      {parts.map((part, i) => {
        const color = colorMap[part.toLowerCase()];

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

export default function RightContentSection({
  title,
  image,
  paragraphs,
  imageAlt = "Section Image",
}) {
  const imgRef = useScrollReveal(0);
  const textRef = useScrollReveal(150);

  return (
    <section className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] py-16 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Mobile Title */}
        <h2 className="lg:hidden w-full text-[#1e3a8a] font-semibold text-[20px] md:text-[28px] leading-tight text-center">
          {title}
        </h2>

        {/* Image */}
        <div
          ref={imgRef}
          className="shadow-2xl flex-shrink-0 w-full lg:w-[380px] xl:w-[420px] h-[280px] md:h-[340px] rounded-2xl overflow-hidden"
        >
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <span className="text-blue-300 text-sm font-medium">
                No Image
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div ref={textRef} className="flex-1 min-w-0">
          <h2 className="hidden lg:block text-[#1e3a8a] font-semibold text-[20px] md:text-[28px] leading-tight mb-5">
            {title}
          </h2>

          <div className="space-y-4">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-gray-600 text-[13px] md:text-[15px] leading-[26px] text-justify"
              >
                <MultiHighlightText
                  text={para.text}
                  highlights={para.highlights}
                />
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
