import { useEffect, useRef } from "react";
import { expertiseData } from "../data/aboutData";

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
            el.style.transition =
              "opacity 0.6s ease, transform 0.6s ease";

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

function ExpertiseItem({ item, align = "left", delay = 0 }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className={`group flex items-start gap-3 w-full lg:max-w-[341px]
      transition-all duration-500 hover:-translate-y-2 ${
        align === "right"
          ? "lg:flex-row-reverse lg:text-right text-left"
          : "flex-row text-left"
      }`}
    >
      {/* Colored Bullet */}
      <div
        className="
          w-3 h-3 rounded-full flex-shrink-0 mt-2
          transition-all duration-500
          group-hover:scale-[1.8]
          group-hover:shadow-lg
        "
        style={{ backgroundColor: item.color }}
      />

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h4
          className="
            roboto-condensed
            font-medium
            text-[15px]
            leading-[24px]
            text-[#1E3D88]
            transition-all duration-300
            group-hover:translate-x-1
          "
        >
          {item.title}
        </h4>

        <p
          className="
            text-gray-500
            text-[14px]
            leading-[22px]
            transition-all duration-300
            group-hover:text-gray-700
          "
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  const titleRef = useScrollReveal(0);

  const leftItems = expertiseData.items.filter(
    (i) => i.position === "left"
  );

  const rightItems = expertiseData.items.filter(
    (i) => i.position === "right"
  );

  const bottomItem = expertiseData.items.find(
    (i) => i.position === "bottom"
  );

  return (
    <section className="w-full bg-[#ECECEC] lg:mt-72 py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px]">
        {/* Title */}
        <div
          ref={titleRef}
          className="text-left md:text-center mb-12 md:mb-14"
        >
          <h2 className="roboto-condensed text-[#1E3D88] text-[22px] md:text-[30px] font-medium mb-4">
            {expertiseData.title}
          </h2>

          <p className="text-gray-500 text-[14px] md:text-[16px] max-w-2xl mx-auto">
            {expertiseData.subtitle}
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-10">
          {/* LEFT ITEMS */}
          <div className="flex flex-col gap-7 w-full items-start lg:items-start">
            {leftItems.map((item, i) => (
              <ExpertiseItem
                key={item.id}
                item={item}
                align="left"
                delay={i * 100}
              />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="hidden lg:block flex-shrink-0 w-full max-w-[420px]">
            <img
              src={expertiseData.centerImage}
              alt="Expertise Diagram"
              className="
                w-full
                h-auto
                object-contain
                transition-all
                duration-700
                hover:scale-105
                animate-[float_4s_ease-in-out_infinite]
              "
            />
          </div>

          {/* RIGHT ITEMS */}
          <div className="flex flex-col gap-7 w-full items-start lg:items-end">
            {rightItems.map((item, i) => (
              <ExpertiseItem
                key={item.id}
                item={item}
                align="right"
                delay={i * 100}
              />
            ))}
          </div>
        </div>

        {/* Bottom Item */}
        {bottomItem && (
          <div className="mt-8 md:mt-10 w-full flex justify-center lg:px-4">
            <div
              className="
                group
                w-full
                max-w-[770px]
                flex
                items-start
                gap-2
                text-left
                lg:text-center
                lg:items-center
                lg:flex-col
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* Colored Bullet */}
              <div
                className="
                  w-3
                  h-3
                  rounded-full
                  mt-2
                  lg:mt-0
                  flex-shrink-0
                  transition-all
                  duration-500
                  group-hover:scale-[1.8]
                "
                style={{ backgroundColor: bottomItem.color }}
              />

              {/* Content */}
              <div>
                <h4
                  className="
                    roboto-condensed
                    font-medium
                    text-[15px]
                    leading-[24px]
                    text-[#1E3D88]
                    lg:text-center
                    transition-all
                    duration-300
                  "
                >
                  {bottomItem.title}
                </h4>

                <p
                  className="
                    text-gray-500
                    text-[14px]
                    leading-[22px]
                    lg:text-center
                    transition-all
                    duration-300
                    group-hover:text-gray-700
                  "
                >
                  {bottomItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}