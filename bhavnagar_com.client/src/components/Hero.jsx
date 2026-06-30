import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { HERO_CONTENT } from "../data/content";

export const Hero = ({ onSearchOpen }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

    return (
        <section
            ref={ref}
            id="home"
            data-testid="hero-section"
            className="relative min-h-[100svh] w-full overflow-hidden bg-bn-night"
        >
            {/* Background */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0"
            >
                <img
                    src={HERO_CONTENT.image}
                    alt={HERO_CONTENT.imageAlt}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-bn-night/40 via-bn-night/30 to-bn-night/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-bn-night/70 via-transparent to-transparent" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative container-bn min-h-[100svh] flex flex-col justify-end pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-20 md:pb-24 lg:pb-20"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-flex items-center gap-2 self-start px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
                >
                    <Sparkles className="w-3.5 h-3.5 text-bn-gold" />

                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/90 font-medium">
                        {HERO_CONTENT.badge.text}
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.55,
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="heading-display text-white text-4xl xs:text-5xl sm:text-6xl lg:text-8xl leading-[1.05] max-w-5xl"
                >
                    {HERO_CONTENT.title.prefix}{" "}
                    <span className="heading-italic-accent">
                        {HERO_CONTENT.title.city}
                    </span>

                    <br />

                    <span className="text-white/95">
                        {HERO_CONTENT.title.line2Start}
                    </span>

                    <span className="heading-italic-accent">,</span>{" "}

                    <span className="text-white/95">
                        {HERO_CONTENT.title.line2Middle}
                    </span>{" "}

                    <span className="heading-italic-accent">
                        {HERO_CONTENT.title.line2End}
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.75,
                        duration: 0.8,
                    }}
                    className="text-white/75 text-base sm:text-lg max-w-full sm:max-w-xl mt-6 sm:mt-8 leading-relaxed font-light"
                >
                    {HERO_CONTENT.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.95,
                        duration: 0.7,
                    }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
                >
                    <button
                        onClick={onSearchOpen}
                        data-testid="hero-cta-search"
                        className="group w-full sm:w-auto flex items-center justify-between gap-5 px-5 sm:px-6 py-4 rounded-full bg-white/95 hover:bg-white text-bn-ink transition-all duration-300 shadow-hover"
                    >
                        <span className="text-sm text-bn-mute text-left">
                            {HERO_CONTENT.buttons.search}
                        </span>

                        <span className="w-9 h-9 rounded-full bg-bn-indigo text-white flex items-center justify-center group-hover:bg-bn-gold transition-colors shrink-0">
                            <ArrowDown className="w-4 h-4 -rotate-45" />
                        </span>
                    </button>

                    <a
                        href="#about"
                        data-testid="hero-cta-explore"
                        className="btn-ghost border-white/30 text-white hover:bg-white/10 w-full sm:w-auto justify-center text-center"
                    >
                        {HERO_CONTENT.buttons.explore}
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 1.4,
                    duration: 0.6,
                }}
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
                    {HERO_CONTENT.scrollText}
                </span>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent"
                />
            </motion.div>
        </section>
    );
};