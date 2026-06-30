import { motion } from "framer-motion";
import { useRef } from "react";
import {
    Phone,
    Mail,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import {
    BUSINESSES,
    BUSINESS_CONTENT,
} from "../data/content";

export const BusinessDirectory = () => {
    const scrollerRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollerRef.current) return;

        const width = scrollerRef.current.offsetWidth * 0.7;

        scrollerRef.current.scrollBy({
            left: direction * width,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="business"
            data-testid="business-section"
            className="py-16 sm:py-20 lg:py-36 bg-white"
        >
            <div className="container-bn">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">

                    <div className="max-w-4xl">
                        <span className="label-eyebrow">
                            {BUSINESS_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight">
                            {BUSINESS_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {BUSINESS_CONTENT.title.highlight}
                            </em>{" "}
                            {BUSINESS_CONTENT.title.after}
                        </h2>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button
                            data-testid="business-prev"
                            onClick={() => scroll(-1)}
                            aria-label={BUSINESS_CONTENT.previousLabel}
                            className="w-12 h-12 rounded-full border border-bn-indigo/15 hover:bg-bn-indigo hover:text-white text-bn-indigo flex items-center justify-center transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            data-testid="business-next"
                            onClick={() => scroll(1)}
                            aria-label={BUSINESS_CONTENT.nextLabel}
                            className="w-12 h-12 rounded-full border border-bn-indigo/15 hover:bg-bn-indigo hover:text-white text-bn-indigo flex items-center justify-center transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>

                {/* Cards */}
                <div
                    ref={scrollerRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto scroll-x-hide pb-4 snap-x snap-mandatory"
                >
                    {BUSINESSES.map((business, index) => (
                        <motion.div
                            key={business.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.05,
                            }}
                            data-testid={`business-card-${index}`}
                            className="min-w-[280px] sm:min-w-[330px] lg:min-w-[340px] snap-start group bg-bn-sand rounded-3xl p-6 sm:p-7 border border-bn-line/60 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-6">

                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-serif text-xl font-semibold"
                                    style={{
                                        backgroundColor: business.accent,
                                    }}
                                >
                                    {business.initials}
                                </div>

                                <div className="text-[10px] uppercase tracking-[0.22em] text-bn-mute">
                                    {BUSINESS_CONTENT.badge}
                                </div>
                            </div>

                            <h3 className="text-bn-indigo font-serif text-2xl font-semibold mb-2 leading-tight">
                                {business.name}
                            </h3>

                            <p className="text-bn-mute text-sm mb-6 leading-relaxed">
                                {business.tag}
                            </p>

                            <div className="space-y-3 pt-5 border-t border-bn-line/70">

                                <a
                                    href={`tel:${business.phone}`}
                                    className="flex items-center gap-2.5 text-sm text-bn-ink hover:text-bn-indigo transition-colors"
                                >
                                    <Phone className="w-3.5 h-3.5 text-bn-gold shrink-0" />
                                    {business.phone}
                                </a>

                                <a
                                    href={`mailto:${business.email}`}
                                    className="flex items-center gap-2.5 text-sm text-bn-ink hover:text-bn-indigo transition-colors break-all"
                                >
                                    <Mail className="w-3.5 h-3.5 text-bn-gold shrink-0" />
                                    {business.email}
                                </a>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};