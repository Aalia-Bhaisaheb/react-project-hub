import { useEffect, useRef } from "react";
import { foundersData } from "../data/aboutData";

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
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

function FounderCard({ founder, delay }) {
  const ref = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className="
        group
        w-full
        max-w-[372px]
        flex
        flex-col
        bg-white
        rounded-b-[10px]
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-4
      "
    >
      {/* IMAGE BLOCK */}
      {/* IMAGE BLOCK */}
      <div
        className="
    relative
    w-full
    h-[370px]
    overflow-hidden
  "
      >
        {/* COLOR BACKGROUND */}
        <div
          className="
      absolute
      bottom-0
      left-0
      w-full
      h-full
      rounded-t-[10px]
      transition-all
      duration-500
      ease-out
      group-hover:h-[270px]
    "
          style={{ background: founder.bgColor }}
        />

        {/* IMAGE */}
        <img
          src={founder.image}
          alt={founder.name}
          className="
      absolute
      -bottom-6
      left-1/2
      -translate-x-1/2
      w-auto
      h-[100%]
      object-cover
      object-bottom
      transition-all
      duration-700
      ease-out
      group-hover:scale-105
      group-hover:-translate-y-4
      z-10
    "
        />
      </div>

      {/* INFO BLOCK */}
      <div
        className="
          flex-1
          border
          border-t-0
          border-gray-200
          rounded-b-[10px]
          px-5
          pt-5
          pb-6
          bg-white
          transition-all
          duration-500
          group-hover:py-4
        "
      >
        {/* NAME */}
        <h3
          className="
            font-condensed
            font-medium
            text-[20px]
            leading-[32px]
            text-gray-900
            transition-all
            duration-300
          "
        >
          {founder.name}
        </h3>

        {/* ROLE */}
        <p
          className="
            font-roboto
            font-medium
            text-[16px]
            leading-[20px]
            text-gray-400
            mt-1
            transition-all
            duration-300
          "
        >
          {founder.role}
        </p>

        {/* DESCRIPTION */}
        <p
          className="
            font-roboto
            font-normal
            text-[16px]
            leading-[26px]
            text-gray-600
            mt-4
            transition-all
            duration-300
          "
        >
          {founder.description}
        </p>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  const titleRef = useScrollReveal(0);

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* TITLE */}
        <h2
          ref={titleRef}
          className="
            text-center
            text-[#1e3a8a]
            text-2xl
            md:text-3xl
            font-medium
            mb-12
            font-condensed
          "
        >
          {foundersData.title}
        </h2>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            md:gap-10
            items-stretch
            justify-items-center
          "
        >
          {foundersData.founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
