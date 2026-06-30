import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NEWS, NEWS_CONTENT } from "../data/content";

export const News = () => {
    const [featured, ...rest] = NEWS;

    return (
        <section
            id="news"
            data-testid="news-section"
            className="py-16 sm:py-20 lg:py-36 bg-bn-sand"
        >
            <div className="container-bn">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">

                    <div className="max-w-2xl">
                        <span className="label-eyebrow">
                            {NEWS_CONTENT.eyebrow}
                        </span>

                        <h2 className="heading-display text-bn-indigo text-4xl sm:text-5xl lg:text-6xl mt-5 sm:mt-6 leading-tight">
                            {NEWS_CONTENT.title.before}{" "}
                            <em className="heading-italic-accent">
                                {NEWS_CONTENT.title.highlight}
                            </em>
                        </h2>
                    </div>

                    <a
                        href={NEWS_CONTENT.viewAll.href}
                        data-testid="news-view-all"
                        className="btn-ghost self-start lg:self-auto"
                    >
                        {NEWS_CONTENT.viewAll.text}
                    </a>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">

                    {/* Featured */}
                    <motion.a
                        href="#news"
                        data-testid="news-featured"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-white border border-bn-line/60"
                    >
                        <div className="aspect-[16/10] overflow-hidden">
                            <img
                                src={featured.img}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                            />
                        </div>

                        <div className="p-6 sm:p-8 lg:p-10">

                            <div className="flex flex-wrap items-center gap-3 mb-4">

                                <span className="px-3 py-1 rounded-full bg-bn-gold/15 text-bn-gold text-[10px] uppercase tracking-[0.22em] font-semibold">
                                    {featured.tag}
                                </span>

                                <span className="text-bn-mute text-xs">
                                    {featured.date}
                                </span>

                            </div>

                            <h3 className="heading-display text-bn-indigo text-2xl sm:text-3xl lg:text-4xl mb-3 leading-tight">
                                {featured.title}
                            </h3>

                            <p className="text-bn-mute leading-relaxed mb-5">
                                {featured.excerpt}
                            </p>

                            <span className="inline-flex items-center gap-2 text-bn-indigo font-medium text-sm">
                                {NEWS_CONTENT.readMore}

                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>

                        </div>
                    </motion.a>

                    {/* Side Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-5">

                        {rest.map((item, index) => (
                            <motion.a
                                key={item.title}
                                href="#news"
                                data-testid={`news-card-${index}`}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{
                                    once: true,
                                    margin: "-30px",
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className="group flex flex-col sm:flex-row gap-4 sm:gap-5 bg-white rounded-3xl p-4 border border-bn-line/60 hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <div className="w-full sm:w-32 lg:w-40 aspect-video sm:aspect-square rounded-2xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="flex-1 py-1 sm:py-2">

                                    <div className="text-[10px] uppercase tracking-[0.22em] text-bn-gold mb-2 font-semibold">
                                        {item.tag} · {item.date}
                                    </div>

                                    <h4 className="text-bn-indigo font-serif text-xl font-semibold mb-2 leading-snug">
                                        {item.title}
                                    </h4>

                                    <p className="text-bn-mute text-sm leading-relaxed line-clamp-2">
                                        {item.excerpt}
                                    </p>

                                </div>
                            </motion.a>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
};