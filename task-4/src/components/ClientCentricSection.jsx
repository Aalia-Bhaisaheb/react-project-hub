// ClientCentricSection.jsx
// Responsive client-centric section with directional hover animations

import { useEffect, useRef } from "react";
import { clientCentricData } from "../data/aboutData";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "scale(0.97)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition =
              "opacity 0.6s ease, transform 0.6s ease";

            el.style.opacity = "1";
            el.style.transform = "scale(1)";
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

const quadrantOrder = [
  "commitment",
  "execution",
  "innovation",
  "engagement",
];

export default function ClientCentricSection() {
  const titleRef = useScrollReveal(0);
  const gridRef = useScrollReveal(150);

  const quadrantMap = {};

  clientCentricData.quadrants.forEach((q) => {
    quadrantMap[q.id] = q;
  });

  const [topLeft, topRight, bottomLeft, bottomRight] =
    quadrantOrder.map((id) => quadrantMap[id]);

  return (
    <section className="w-full bg-white py-6 md:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        {/* Section Title */}
        {clientCentricData?.title && (
          <h2
            ref={titleRef}
            className="
              text-left md:text-center
              text-[#1c3d99]
              text-[26px] md:text-3xl
              font-normal
              mb-8 md:mb-12
            "
          >
            {clientCentricData.title}
          </h2>
        )}

        {/* Grid */}
        <div
          ref={gridRef}
          className="
            relative
            grid
            grid-cols-1 md:grid-cols-2
            gap-5 md:gap-4
            bg-white
          "
        >
          {/* TOP LEFT */}
          <div
            className="
              group
              relative
              bg-[#1c3d99]
              min-h-[280px] md:min-h-[336px]
              rounded-[10px]
              overflow-hidden
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Hover Fill */}
            <div
              className="
                absolute inset-0
                bg-[#6a3cb8]
                scale-0
                origin-bottom-right
                transition-transform
                duration-700
                ease-out
                group-hover:scale-100
              "
            />

            {/* Corner Arc */}
            <div
              className="
                hidden md:block
                absolute
                bottom-0
                right-0
                w-36
                h-36
                bg-[#6a3cb8]
                rounded-tl-full
                pointer-events-none
                z-10
              "
            />

            {/* Content */}
            <div className="relative z-20 px-6 md:px-[40px] pt-8 md:pt-[35px]">
              <h3
                className="
                  text-white
                  font-condensed
                  font-medium
                  text-[22px] md:text-[30px]
                  leading-[30px] md:leading-[35px]
                  w-full md:w-[330px]
                  mb-4 md:mb-6
                  transition-all duration-300
                "
              >
                {topLeft?.title}
              </h3>

              <p
                className="
                  text-white/90
                  font-roboto
                  font-normal
                  text-[14px] md:text-[16px]
                  leading-[24px] md:leading-[25px]
                  max-w-full md:max-w-[470px]
                  transition-all duration-300
                "
              >
                {topLeft?.description}
              </p>
            </div>
          </div>

          {/* TOP RIGHT */}
          <div
            className="
              group
              relative
              bg-[#1c3d99]
              min-h-[280px] md:min-h-[336px]
              rounded-[10px]
              overflow-hidden
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Hover Fill */}
            <div
              className="
                absolute inset-0
                bg-[#ff8138]
                scale-0
                origin-bottom-left
                transition-transform
                duration-700
                ease-out
                group-hover:scale-100
              "
            />

            {/* Corner Arc */}
            <div
              className="
                hidden md:block
                absolute
                bottom-0
                left-0
                w-36
                h-36
                bg-[#ff8138]
                rounded-tr-full
                pointer-events-none
                z-10
              "
            />

            {/* Content */}
            <div className="relative z-20 px-6 md:px-[40px] pt-8 md:pt-[35px] text-left md:text-right">
              <h3
                className="
                  text-white
                  font-condensed
                  font-medium
                  text-[22px] md:text-[30px]
                  leading-[30px] md:leading-[35px]
                  w-full md:w-[330px]
                  mb-4 md:mb-6
                  md:ml-auto
                  transition-all duration-300
                "
              >
                {topRight?.title}
              </h3>

              <p
                className="
                  text-white/90
                  font-roboto
                  font-normal
                  text-[14px] md:text-[16px]
                  leading-[24px] md:leading-[25px]
                  max-w-full md:max-w-[470px]
                  md:ml-auto
                  transition-all duration-300
                "
              >
                {topRight?.description}
              </p>
            </div>
          </div>

          {/* BOTTOM LEFT */}
          <div
            className="
              group
              relative
              bg-[#1c3d99]
              min-h-[280px] md:min-h-[336px]
              rounded-[10px]
              overflow-hidden
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Hover Fill */}
            <div
              className="
                absolute inset-0
                bg-[#b84cd4]
                scale-0
                origin-top-right
                transition-transform
                duration-700
                ease-out
                group-hover:scale-100
              "
            />

            {/* Corner Arc */}
            <div
              className="
                hidden md:block
                absolute
                top-0
                right-0
                w-36
                h-36
                bg-[#b84cd4]
                rounded-bl-full
                pointer-events-none
                z-10
              "
            />

            {/* Content */}
            <div className="relative z-20 px-6 md:px-[40px] pt-8 md:pt-[35px]">
              <h3
                className="
                  text-white
                  font-condensed
                  font-medium
                  text-[22px] md:text-[30px]
                  leading-[30px] md:leading-[35px]
                  w-full md:w-[330px]
                  mb-4 md:mb-6
                  transition-all duration-300
                "
              >
                {bottomLeft?.title}
              </h3>

              <p
                className="
                  text-white/90
                  font-roboto
                  font-normal
                  text-[14px] md:text-[16px]
                  leading-[24px] md:leading-[25px]
                  max-w-full md:max-w-[470px]
                  transition-all duration-300
                "
              >
                {bottomLeft?.description}
              </p>
            </div>
          </div>

          {/* BOTTOM RIGHT */}
          <div
            className="
              group
              relative
              bg-[#1c3d99]
              min-h-[280px] md:min-h-[336px]
              rounded-[10px]
              overflow-hidden
              transition-all
              duration-500
              ease-out
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >
            {/* Hover Fill */}
            <div
              className="
                absolute inset-0
                bg-[#ec407a]
                scale-0
                origin-top-left
                transition-transform
                duration-700
                ease-out
                group-hover:scale-100
              "
            />

            {/* Corner Arc */}
            <div
              className="
                hidden md:block
                absolute
                top-0
                left-0
                w-36
                h-36
                bg-[#ec407a]
                rounded-br-full
                pointer-events-none
                z-10
              "
            />

            {/* Content */}
            <div className="relative z-20 px-6 md:px-[40px] pt-8 md:pt-[35px] text-left md:text-right">
              <h3
                className="
                  text-white
                  font-condensed
                  font-medium
                  text-[22px] md:text-[30px]
                  leading-[30px] md:leading-[35px]
                  w-full md:w-[330px]
                  mb-4 md:mb-6
                  md:ml-auto
                  transition-all duration-300
                "
              >
                {bottomRight?.title}
              </h3>

              <p
                className="
                  text-white/90
                  font-roboto
                  font-normal
                  text-[14px] md:text-[16px]
                  leading-[24px] md:leading-[25px]
                  max-w-full md:max-w-[470px]
                  md:ml-auto
                  transition-all duration-300
                "
              >
                {bottomRight?.description}
              </p>
            </div>
          </div>

          {/* CENTER CLIENT BADGE */}
          <div
            className="
              hidden md:flex
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[120px]
              h-[120px]
              rounded-full
              bg-[#00a852]
              items-center
              justify-center
              flex-col
              shadow-2xl
              border
              border-white/10
              z-30
            "
          >
            <svg
              className="w-12 h-12 text-white mb-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-4-8-4z" />
              <path d="M17 12c1.66 0 3-1.34 3-3s-1.34-3-3-3c-.43 0-.83.1-1.2.26 1.13 1.35 1.2 3.19.2 4.48.37.16.77.26 1.2.26zm3 2c.63 0 1.34.1 2 .34V18c0-1.23-.74-2.31-2-2.73V14z" />
            </svg>

            <span className="text-white font-extrabold text-[13px] tracking-[0.12em]">
              CLIENT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}