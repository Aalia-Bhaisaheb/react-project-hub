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
            el.style.transition =
              "opacity 0.7s ease, transform 0.7s ease";

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

export default function AnimatedCard({
  title,
  children,
  delay = 0,
  borderColor = "#1E3D88",
  fillColor = "#1E3D88",
  titleColor = "#1E3D88",
  shadowColor = "rgba(30,61,136,0.35)",
  watermark,
}) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden bg-white/95 rounded-xl p-6 md:p-8 shadow-xl border-l-4 hover:-translate-y-2 transition-all duration-500"
      style={{
        borderLeftColor: borderColor,
      }}
    >
      <div
        className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"
        style={{ backgroundColor: fillColor }}
      />

      <div className="relative z-10">
        <h3
          className="text-[24px] md:text-[30px] font-medium mb-4 transition-all duration-300 group-hover:!text-white"
          style={{ color: titleColor }}
        >
          {title}
        </h3>

        <div className="text-gray-600 group-hover:text-white/90 transition-all duration-300">
          {children}
        </div>
      </div>

      {watermark && (
        <img
          src={watermark}
          alt=""
          className="absolute bottom-5 right-3 w-16 h-16 opacity-10 pointer-events-none z-10"
        />
      )}
    </div>
  );
}