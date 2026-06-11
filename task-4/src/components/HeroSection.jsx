import { useEffect, useRef } from "react";
import { heroData as defaultHeroData } from "../data/heroData";

export default function HeroSection({ data }) {
  const titleRef      = useRef(null);
  const breadcrumbRef = useRef(null);

  const hero = data || defaultHeroData;

  useEffect(() => {
    const title      = titleRef.current;
    const breadcrumb = breadcrumbRef.current;

    if (title) {
      title.style.opacity = "0";
      title.style.transform = "translateY(30px)";
      setTimeout(() => {
        title.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      }, 100);
    }
    if (breadcrumb) {
      breadcrumb.style.opacity = "0";
      breadcrumb.style.transform = "translateX(20px)";
      setTimeout(() => {
        breadcrumb.style.transition = "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s";
        breadcrumb.style.opacity = "1";
        breadcrumb.style.transform = "translateX(0)";
      }, 100);
    }
  }, []);

  // Build background style
  const gradient = "linear-gradient(271.39deg, rgba(11,55,150,0.35) 18.07%, rgba(91,113,233,0.4) 100%)";
  const bgStyle  = hero.backgroundImage
    ? { backgroundImage: `${gradient}, url(${hero.backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : { backgroundImage: gradient, background: undefined };

  // Split title on " | " for bold-right rendering
  const titleParts = (hero?.title || "").split(" | ");

  return (
    <section
      className="relative w-full h-[460px] md:h-[566px] flex items-end pb-8 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={bgStyle}
    >
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[165px] flex flex-col md:flex-row md:items-end md:justify-between">

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-white text-[28px] font-condensed md:text-[38px] tracking-normal drop-shadow-md font-light"
        >
          {titleParts.length > 1 ? (
            <>
              {titleParts[0]} |{" "}
              <span className="font-semibold">{titleParts[1]}</span>
            </>
          ) : (
            hero.title || ""
          )}
        </h1>

        {/* Breadcrumb */}
        <nav
          ref={breadcrumbRef}
          className="mt-3 md:mt-0 text-white text-xs md:text-[19px] leading-none flex items-center gap-2 drop-shadow-sm"
        >
          {hero.breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/60">&gt;</span>}
              <span className={i === hero.breadcrumb.length - 1 ? "text-white" : "text-white/70 hover:text-white cursor-pointer transition-colors"}>
                {crumb}
              </span>
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}