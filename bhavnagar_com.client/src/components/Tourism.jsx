import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TOURISM, TOURISM_CONTENT } from "../data/content";

export const Tourism = () => {
    return (
        <section
            id="tourism"
            data-testid="tourism-section"
            className="py-16 sm:py-20 lg:py-36 bg-white"
        >
            <div className="container-bn">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-10 sm:mb-14 lg:mb-16">

                    <div className="max-w-2xl">
                        <span className="label-eyebrow">
                            {TOURISM_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight">
                            {TOURISM_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {TOURISM_CONTENT.title.highlight}
                            </em>{" "}
                            {TOURISM_CONTENT.title.after}
                        </h2>
                    </div>

                    <p className="text-bn-mute max-w-md leading-relaxed text-base sm:text-lg">
                        {TOURISM_CONTENT.description}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                    {TOURISM.map((t, i) => (
                        <motion.a
                            key={t.title}
                            href="#tourism"
                            data-testid={`tourism-card-${i}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: (i % 3) * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-bn-sand"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">

                                <img
                                    src={t.img}
                                    alt={t.title}
                                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-bn-night via-bn-night/30 to-transparent opacity-90" />

                                {/* Category */}
                                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                                    <span className="text-[10px] uppercase tracking-[0.22em] text-white font-medium">
                                        {t.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                                    <h3 className="heading-display text-white text-2xl sm:text-3xl lg:text-4xl mb-3">
                                        {t.title}
                                    </h3>

                                    <p className="text-white/75 text-sm leading-relaxed mb-5 line-clamp-2">
                                        {t.blurb}
                                    </p>

                                    <div className="flex items-center gap-2 text-bn-gold text-sm font-medium">
                                        <span>{TOURISM_CONTENT.buttonText}</span>

                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

            </div>
        </section>
    );
};