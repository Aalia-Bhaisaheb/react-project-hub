import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, NAVBAR_CONTENT } from "../data/content";

export const Navbar = ({ onSearchOpen }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b border-bn-line/60 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container-bn flex items-center justify-between">
                {/* Logo */}
                <a href="#home" data-testid="logo-link" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-bn-indigo flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
                        <span className="font-serif text-bn-gold text-xl font-semibold">{NAVBAR_CONTENT.logo.letter}</span>
                    </div>
                    <div className="leading-tight">
                        <div className={`font-serif text-xl font-semibold tracking-tight ${scrolled ? "text-bn-indigo" : "text-white"}`}>
                            {NAVBAR_CONTENT.logo.title}
                        </div>
                        <div className={`text-[10px] uppercase tracking-[0.25em] ${scrolled ? "text-bn-mute" : "text-white/70"}`}>
                            {NAVBAR_CONTENT.logo.subtitle }
                        </div>
                    </div>
                </a>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.children && setOpenDrop(link.label)}
                            onMouseLeave={() => setOpenDrop(null)}
                        >
                            <a
                                href={link.href}
                                data-testid={`nav-link-${link.label.toLowerCase()}`}
                                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? "text-bn-ink hover:text-bn-indigo hover:bg-bn-indigo/5" : "text-white/90 hover:text-white hover:bg-white/10"
                                    }`}
                            >
                                {link.label}
                                {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
                            </a>
                            <AnimatePresence>
                                {link.children && openDrop === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.18 }}
                                        className="absolute top-full left-0 mt-2 min-w-[220px] bg-white rounded-2xl shadow-hover border border-bn-line/60 p-2"
                                    >
                                        {link.children.map((c) => (
                                            <a
                                                key={c.label}
                                                href={c.href}
                                                className="block px-4 py-2.5 text-sm text-bn-ink hover:bg-bn-sand hover:text-bn-indigo rounded-xl transition-colors"
                                            >
                                                {c.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <button
                        data-testid="open-search-button"
                        onClick={onSearchOpen}
                        className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${scrolled ? "bg-bn-sand text-bn-ink hover:bg-bn-sandDeep" : "bg-white/15 text-white hover:bg-white/25"
                            }`}
                    >
                        <Search className="w-4 h-4" />
                        <span className="hidden md:inline">Search…</span>
                    </button>
                    <a
                        href="tel:18002331010"
                        data-testid="helpline-button"
                        className={`hidden xl:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? "bg-bn-indigo text-white hover:bg-bn-indigoSoft" : "bg-bn-gold text-white hover:bg-bn-goldSoft"
                            }`}
                    >
                        <Phone className="w-3.5 h-3.5" />
                        Helpline
                    </a>
                    <button
                        data-testid="mobile-menu-toggle"
                        onClick={() => setMobileOpen((s) => !s)}
                        className={`lg:hidden p-2 rounded-full ${scrolled ? "text-bn-indigo" : "text-white"}`}
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-white border-t border-bn-line/60 overflow-hidden"
                    >
                        <div className="container-bn py-4 flex flex-col gap-1">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-bn-ink hover:bg-bn-sand rounded-xl text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};