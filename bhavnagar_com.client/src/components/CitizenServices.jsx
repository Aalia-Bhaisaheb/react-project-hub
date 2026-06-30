import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICES_CONTENT } from "../data/content";

export const CitizenServices = () => {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative py-16 sm:py-20 lg:py-36 bg-bn-sandDeep grain"
        >
            <div className="container-bn relative">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-10 sm:mb-14">

                    <div className="max-w-2xl">
                        <span className="label-eyebrow">
                            {SERVICES_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight">
                            {SERVICES_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {SERVICES_CONTENT.title.highlight}
                            </em>
                        </h2>
                    </div>

                    <p className="text-bn-mute max-w-md leading-relaxed text-base sm:text-lg">
                        {SERVICES_CONTENT.description}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.a
                                key={service.title}
                                href="#services"
                                data-testid={service.testId}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 4) * 0.06,
                                    ease: "easeOut",
                                }}
                                className="group relative p-5 sm:p-6 lg:p-7 rounded-3xl bg-white border border-bn-line/60 hover:border-bn-gold/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                            >
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-bn-indigo/5 text-bn-indigo flex items-center justify-center mb-5 group-hover:bg-bn-indigo group-hover:text-white transition-colors duration-300">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <h3 className="text-bn-ink font-semibold text-base mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-bn-mute text-sm leading-relaxed">
                                    {service.desc}
                                </p>

                                <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-bn-mute opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-12 sm:mt-14 relative overflow-hidden rounded-3xl bg-bn-indigo p-6 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
                >
                    <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-bn-gold/10 blur-3xl" />

                    <div className="relative max-w-xl">
                        <h3 className="heading-display text-white text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight">
                            {SERVICES_CONTENT.cta.title.before}{" "}
                            <em className="heading-italic-accent">
                                {SERVICES_CONTENT.cta.title.highlight}
                            </em>
                            {SERVICES_CONTENT.cta.title.after}
                        </h3>

                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                            {SERVICES_CONTENT.cta.description}
                        </p>
                    </div>

                    <a
                        href={SERVICES_CONTENT.cta.href}
                        data-testid="jobs-cta"
                        className="relative btn-gold whitespace-nowrap"
                    >
                        {SERVICES_CONTENT.cta.button}

                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};