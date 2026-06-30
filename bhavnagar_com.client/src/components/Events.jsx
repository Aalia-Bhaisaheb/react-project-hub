import { motion } from "framer-motion";
import {
    Calendar,
    MapPin,
    Clock,
    ArrowUpRight,
} from "lucide-react";

import {
    EVENTS,
    EVENTS_CONTENT,
} from "../data/content";

export const Events = () => {
    return (
        <section
            id="events"
            data-testid="events-section"
            className="py-16 sm:py-20 lg:py-36 bg-white"
        >
            <div className="container-bn">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">

                    <div className="max-w-2xl">
                        <span className="label-eyebrow">
                            {EVENTS_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight">
                            {EVENTS_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {EVENTS_CONTENT.title.highlight}
                            </em>
                        </h2>
                    </div>

                    <a
                        href={EVENTS_CONTENT.button.href}
                        data-testid="events-view-all"
                        className="btn-primary self-start lg:self-auto"
                    >
                        {EVENTS_CONTENT.button.text}
                        <Calendar className="w-4 h-4" />
                    </a>

                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">

                    {EVENTS.map((event, index) => (
                        <motion.a
                            key={event.title}
                            href="#events"
                            data-testid={`event-card-${index}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{
                                once: true,
                                margin: "-40px",
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            className="group relative overflow-hidden rounded-3xl bg-bn-sand border border-bn-line/60 hover:shadow-hover transition-all duration-500 hover:-translate-y-1"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">

                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-bn-night via-bn-night/30 to-transparent" />

                                {/* Date */}
                                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 text-center min-w-[64px]">

                                    <div className="heading-display text-bn-indigo text-2xl leading-none">
                                        {event.date.day}
                                    </div>

                                    <div className="text-[10px] uppercase tracking-[0.22em] text-bn-gold font-semibold mt-1">
                                        {event.date.month}
                                    </div>

                                </div>

                                {/* Category */}
                                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">

                                    <span className="text-[10px] uppercase tracking-[0.22em] text-white font-medium">
                                        {event.category}
                                    </span>

                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                                    <h3 className="heading-display text-white text-xl sm:text-2xl leading-tight mb-4">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-2">

                                        <div className="flex items-center gap-2 text-white/75 text-xs">
                                            <MapPin className="w-3 h-3 flex-shrink-0" />

                                            <span className="truncate">
                                                {event.venue}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-white/75 text-xs">
                                            <Clock className="w-3 h-3 flex-shrink-0" />

                                            <span>{event.time}</span>
                                        </div>

                                    </div>

                                </div>

                                {/* Hover Icon */}
                                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-9 h-9 rounded-full bg-bn-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">

                                    <ArrowUpRight className="w-4 h-4 text-white" />

                                </div>

                            </div>
                        </motion.a>
                    ))}

                </div>

            </div>
        </section>
    );
};