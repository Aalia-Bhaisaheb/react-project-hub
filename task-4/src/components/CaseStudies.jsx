// CaseStudies.jsx
// Title + intro text + card slider (brown parchment bg cards)
// Each card: title, client, sector, challenge/solution/results with icons, testimonial
// Navigation: dot indicators + prev/next arrows
// CTA button uses PrimaryButton → routes to /connect

import { useState, useRef, useEffect } from "react";
import { caseStudiesData } from "../data/caseStudyData";
import PrimaryButton from "./PrimaryButton";

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// Single case study card
function CaseStudyCard({ study, cardBg, icons }) {
  return (
    <div
      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] overflow-hidden shadow-lg"
      style={{
        backgroundImage: cardBg ? `url(${cardBg})` : undefined,
        backgroundColor: cardBg ? undefined : "#f5ede0",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Inner content with semi-transparent overlay */}
      <div className="w-full h-full  backdrop-blur-[2px] p-6 flex flex-col gap-4">

        {/* Title */}
        <h3 className="text-[#1e3a8a] font-semibold text-[15px] md:text-[18px] leading-snug">
          {study.title}
        </h3>

        {/* Client + Sector */}
        <div className="text-[15px] text-gray-600 space-y-0.5">
          <p><span className="font-semibold text-gray-800">Client:</span> {study.client}</p>
          <p><span className="font-semibold text-gray-800">Sector:</span> {study.sector}</p>
        </div>

        {/* Challenge */}
        <div className="flex gap-3 items-start">
          {icons.challenge && (
            <img src={icons.challenge} alt="" className="w-8 h-8 object-contain flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-semibold text-gray-900 text-[16px] mb-1">{study.challenge.heading}</p>
            <p className="text-gray-800 text-[14px] leading-[22px] text-justify">{study.challenge.text}</p>
          </div>
        </div>

        {/* Solution */}
        <div className="flex gap-3 items-start">
          {icons.solution && (
            <img src={icons.solution} alt="" className="w-8 h-8 object-contain flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-semibold text-gray-900 text-[16px] mb-1">{study.solution.heading}</p>
            <p className="text-gray-800 text-[14px] leading-[22px] text-justify">{study.solution.text}</p>
            <ul className="mt-1 space-y-0.5">
              {study.solution.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[13px] text-gray-700">
                  <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-gray-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="flex gap-3 items-start">
          {icons.results && (
            <img src={icons.results} alt="" className="w-8 h-8 object-contain flex-shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-semibold text-gray-800 text-[16px] mb-1">{study.results.heading}</p>
            <ul className="space-y-0.5">
              {study.results.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[14px] text-gray-800">
                  <span className="mt-[6px] w-[4px] h-[4px] rounded-full bg-gray-700 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Testimonial */}
        <p className="text-gray-700 text-[12px] leading-[22px] border-t border-gray-300 pt-3 mt-auto">
          <span className="font-semibold">Testimonial: </span>
          {study.testimonial}
          <br />
          <span className="font-semibold">{study.testimonialAuthor}</span>
        </p>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const { studies, cardBg, icons, title, intro, introHighlight, ctaText, ctaButtonLabel, ctaButtonLink } = caseStudiesData;

  // Show 2 cards per slide on md+, 1 on mobile
  const [page, setPage]       = useState(0);
  const [perPage, setPerPage] = useState(2);
  const sectionRef            = useScrollReveal(0);

  useEffect(() => {
    function updatePerPage() {
      setPerPage(window.innerWidth >= 768 ? 2 : 1);
    }
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const totalPages = Math.ceil(studies.length / perPage);
  const visible    = studies.slice(page * perPage, page * perPage + perPage);

  function prev() { setPage((p) => Math.max(0, p - 1)); }
  function next() { setPage((p) => Math.min(totalPages - 1, p + 1)); }

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] py-16 md:py-20"
    >
      {/* Title */}
      <div className="mb-2">
        <h2 className="text-[#1e3a8a] font-condensed font-semibold text-[20px] md:text-[28px] leading-tight">
          {title}
        </h2>
      </div>

      {/* Intro */}
      <p className="text-gray-600 text-[13px] md:text-[14px] leading-[26px] text-justify mt-4 mb-1">
        {intro}
      </p>
      <p className="text-gray-800 font-semibold text-[13px] md:text-[14px] mb-8">
        {introHighlight}
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch transition-all duration-500">
        {visible.map((study) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            cardBg={cardBg}
            icons={icons}
          />
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          onClick={prev}
          disabled={page === 0}
          className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30 flex items-center justify-center transition-all"
          aria-label="Previous"
        >
          <span className="text-gray-600 text-sm">‹</span>
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === page ? "bg-[#1e3a8a] scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Page ${i + 1}`}
          />
        ))}

        <button
          onClick={next}
          disabled={page === totalPages - 1}
          className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-30 flex items-center justify-center transition-all"
          aria-label="Next"
        >
          <span className="text-gray-600 text-sm">›</span>
        </button>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-5 mt-10">
        <p className="text-gray-600 text-[13px] md:text-[14px] text-center">{ctaText}</p>
        <PrimaryButton label={ctaButtonLabel} to={ctaButtonLink} variant="primary" />
      </div>
    </section>
  );
}