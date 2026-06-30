import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { NAV_LINKS, TOURISM, SERVICES, BUSINESSES } from "../data/content";

const SUGGESTIONS = [
    "Birth certificate",
    "Property tax",
    "Tourism: Takhteshwar Temple",
    "Trade license renewal",
    "Upcoming events",
];

export const SearchOverlay = ({ open, onClose }) => {
    const [q, setQ] = useState("");

    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        if (open) {
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", onKey);
        }
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", onKey);
        };
    }, [open, onClose]);

    const results = useMemo(() => {
        if (!q.trim()) return [];
        const query = q.toLowerCase();
        const pool = [
            ...NAV_LINKS.map((n) => ({ type: "Section", label: n.label, href: n.href })),
            ...TOURISM.map((t) => ({ type: "Tourism", label: t.title, href: "#tourism" })),
            ...SERVICES.map((s) => ({ type: "Service", label: s.title, href: "#services" })),
            ...BUSINESSES.map((b) => ({ type: "Business", label: b.name, href: "#business" })),
        ];
        return pool.filter((p) => p.label.toLowerCase().includes(query)).slice(0, 8);
    }, [q]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    data-testid="search-overlay"
                    className="fixed inset-0 z-[80] bg-bn-night/85 backdrop-blur-md flex items-start justify-center pt-24 px-6"
                >
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-2xl bg-white rounded-3xl shadow-hover overflow-hidden"
                    >
                        <div className="flex items-center gap-4 px-6 py-5 border-b border-bn-line">
                            <Search className="w-5 h-5 text-bn-mute" />
                            <input
                                autoFocus
                                data-testid="search-input"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search services, places, businesses…"
                                className="flex-1 bg-transparent outline-none text-bn-ink placeholder:text-bn-mute text-base"
                            />
                            <button
                                data-testid="close-search-button"
                                onClick={onClose}
                                className="w-9 h-9 rounded-full bg-bn-sand flex items-center justify-center text-bn-ink hover:bg-bn-sandDeep"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="px-6 py-5 max-h-[60vh] overflow-y-auto">
                            {q.trim() === "" ? (
                                <>
                                    <p className="text-[11px] uppercase tracking-[0.25em] text-bn-mute mb-3">Suggested</p>
                                    <div className="flex flex-wrap gap-2">
                                        {SUGGESTIONS.map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => setQ(s)}
                                                className="px-4 py-2 rounded-full bg-bn-sand hover:bg-bn-sandDeep text-sm text-bn-ink transition-colors"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </>
                            ) : results.length === 0 ? (
                                <p className="text-bn-mute py-8 text-center">No results for "{q}"</p>
                            ) : (
                                <div className="flex flex-col gap-1">
                                    {results.map((r, i) => (
                                        <a
                                            key={i}
                                            href={r.href}
                                            onClick={onClose}
                                            data-testid={`search-result-${i}`}
                                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-bn-sand transition-colors group"
                                        >
                                            <div>
                                                <div className="text-[10px] uppercase tracking-[0.22em] text-bn-gold">{r.type}</div>
                                                <div className="text-bn-ink font-medium">{r.label}</div>
                                            </div>
                                            <ArrowUpRight className="w-4 h-4 text-bn-mute group-hover:text-bn-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};