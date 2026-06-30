import {
    motion,
    useInView,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { STATS, DISTRICT_CONTENT } from "../data/content";

const Counter = ({ to }) => {
    const ref = useRef(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-50px",
    });

    const num = parseFloat(to.replace(/[^\d.]/g, ""));

    const mv = useMotionValue(0);

    const rounded = useTransform(mv, (v) => {
        if (to.includes("M")) return `${v.toFixed(2)}M`;
        if (to.includes(".")) return v.toFixed(2);
        if (to.includes(",")) return Math.round(v).toLocaleString();
        return Math.round(v).toString();
    });

    useEffect(() => {
        if (!inView) return;

        const controls = animate(mv, num, {
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
        });

        return controls.stop;
    }, [inView, mv, num]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const DistrictAtGlance = () => {
    return (
        <section
            id="about"
            data-testid="district-section"
            className="relative py-16 sm:py-20 lg:py-36 bg-bn-sand"
        >
            <div className="container-bn">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:col-span-5"
                    >
                        <span className="label-eyebrow">
                            {DISTRICT_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 leading-tight">
                            {DISTRICT_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {DISTRICT_CONTENT.title.highlight}
                            </em>{" "}
                            {DISTRICT_CONTENT.title.after}
                        </h2>

                        <p className="mt-6 sm:mt-8 text-bn-mute leading-relaxed text-base sm:text-lg max-w-lg">
                            {DISTRICT_CONTENT.description}

                            <span className="italic text-bn-indigo">
                                {DISTRICT_CONTENT.highlightWords.first}
                            </span>{" "}

                            and{" "}

                            <span className="italic text-bn-indigo">
                                {DISTRICT_CONTENT.highlightWords.second}
                            </span>.
                        </p>

                        <a
                            href={DISTRICT_CONTENT.cta.href}
                            data-testid="about-cta"
                            className="btn-primary mt-8 sm:mt-10 inline-flex"
                        >
                            {DISTRICT_CONTENT.cta.text}
                        </a>
                    </motion.div>

                    {/* Right */}
                    {/* Right: Stats Grid Layout */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {STATS.map((s, idx) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: idx * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                data-testid={`stat-card-${idx}`}
                                className={`relative p-6 sm:p-8 lg:p-9 rounded-3xl border border-bn-line/70 bg-white shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-1 ${idx === 0 ? "sm:row-span-2 flex flex-col justify-between" : ""
                                    }`}
                            >
                                {/* Top Stat Summary */}
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.28em] text-bn-gold font-semibold mb-4">
                                        {s.label}
                                    </div>

                                    <div className="flex items-end gap-2 flex-wrap">
                                        <span className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl">
                                            <Counter to={s.value} />
                                        </span>

                                        {s.unit && (
                                            <span className="text-bn-mute text-sm font-medium mb-2">
                                                {s.unit}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-4 text-sm text-bn-mute leading-relaxed">
                                        {s.caption}
                                    </p>
                                </div>

                                {/* Micro-Dashboard Subgrid: Seals all extra space efficiently */}
                                {s.subStats && (
                                    <div className="mt-8 pt-6 border-t border-bn-line/40 grid grid-cols-2 gap-x-6 gap-y-4">
                                        {s.subStats.map((sub) => (
                                            <div key={sub.label} className="leading-tight">
                                                <div className="text-[9px] uppercase tracking-wider text-bn-gold font-semibold mb-1">
                                                    {sub.label}
                                                </div>
                                                <div className="text-base font-semibold text-bn-indigo">
                                                    {sub.value}
                                                </div>
                                                <div className="text-[11px] text-bn-mute mt-0.5">
                                                    {sub.desc}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="absolute top-7 right-7 w-1.5 h-1.5 rounded-full bg-bn-gold" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};