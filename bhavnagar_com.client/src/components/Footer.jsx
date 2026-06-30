import { motion } from "framer-motion";
import { useState } from "react";

import {
    MapPin,
    Mail,
    Phone,
    ArrowRight,
    Shield,
} from "lucide-react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

import { EMERGENCY, FOOTER_CONTENT } from "../data/content";

export const Footer = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3500);
        }
    };

    return (
        <footer id="footer" data-testid="footer" className="relative bg-bn-night text-white">
            {/* Emergency strip */}
            <div className="border-b border-white/10">
                <div className="container-bn py-10">
                    <div className="flex items-center gap-3 mb-7">
                        <div className="w-10 h-10 rounded-full bg-bn-gold/20 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-bn-gold" />
                        </div>
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.28em] text-bn-gold font-semibold">{FOOTER_CONTENT.emergencyTitle}</div>
                            <div className="text-sm text-white/70">{FOOTER_CONTENT.emergencySubtitle}</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                        {EMERGENCY.map((e) => (
                            <a
                                key={e.label}
                                href={`tel:${e.number.replace(/[-\s]/g, "")}`}
                                data-testid={`emergency-${e.label.toLowerCase().replace(/\s/g, "-")}`}
                                className="group flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all"
                            >
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${e.color}30` }}
                                >
                                    <Phone className="w-3.5 h-3.5" style={{ color: e.color }} />
                                </div>
                                <div className="leading-tight">
                                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{e.label}</div>
                                    <div className="font-serif text-lg font-semibold text-white">{e.number}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main grid */}
            <div className="container-bn py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                {/* Brand */}
                <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-bn-gold flex items-center justify-center">
                            <span className="font-serif text-bn-indigo text-xl sm:text-2xl font-semibold">
                                {FOOTER_CONTENT.brand.logo}
                            </span>
                        </div>
                        <div className="leading-tight">
                            <div className="font-serif text-2xl font-semibold">{FOOTER_CONTENT.brand.title}</div>
                            <div className="text-[10px] uppercase tracking-[0.28em] text-white/50">{FOOTER_CONTENT.brand.subtitle}</div>
                        </div>
                    </div>
                    <p className="text-white/65 leading-relaxed text-sm mb-6 max-w-md">
                        {FOOTER_CONTENT.brand.description}
                    </p>
                    <div className="space-y-2.5 text-sm text-white/70">
                        <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-bn-gold mt-0.5 flex-shrink-0" />{FOOTER_CONTENT.contact.address}</div>
                        <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-bn-gold flex-shrink-0" /> {FOOTER_CONTENT.contact.email}</div>
                        <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-bn-gold flex-shrink-0" /> {FOOTER_CONTENT.contact.phone}</div>
                    </div>
                </div>

                {/* Quick links */}
                <div className="lg:col-span-2">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-bn-gold font-semibold mb-5">Explore</div>
                    <ul className="space-y-3 text-sm">
                        {FOOTER_CONTENT.explore.links.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-white/70 hover:text-bn-gold transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:col-span-2">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-bn-gold font-semibold mb-5">Forms</div>
                    <ul className="space-y-3 text-sm">
                        {FOOTER_CONTENT.forms.links.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="text-white/70 hover:text-bn-gold transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="lg:col-span-4">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-bn-gold font-semibold mb-5">{FOOTER_CONTENT.newsletter.title}</div>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">
                        {FOOTER_CONTENT.newsletter.description}
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
                        <input
                            data-testid="newsletter-input"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={FOOTER_CONTENT.newsletter.placeholder}
                            className="flex-1 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-bn-gold transition-colors"
                        />
                        <button
                            type="submit"
                            data-testid="newsletter-submit"
                            className="w-full sm:w-12 h-12 rounded-full bg-bn-gold hover:bg-bn-goldSoft text-white flex items-center justify-center transition-colors flex-shrink-0"
                            aria-label="Subscribe"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                    {subscribed && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-bn-gold text-xs mb-5"
                        >
                            {FOOTER_CONTENT.newsletter.success}
                        </motion.div>
                    )}

                    <div className="text-[10px] uppercase tracking-[0.28em] text-bn-gold font-semibold mb-3">Follow</div>
                    <div className="flex items-center gap-2">
                        {FOOTER_CONTENT.social.map(({ id, icon: Icon, href }) => (
                            <a
                                key={id}
                                href={href}
                                data-testid={`social-${id}`}
                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-bn-gold hover:text-bn-indigo border border-white/10 hover:border-bn-gold flex items-center justify-center text-white/70 transition-all"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container-bn py-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-white/50">
                    <div>© {new Date().getFullYear()} Bhavnagar Municipal Corporation · All rights reserved.</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#" className="hover:text-bn-gold transition-colors">Privacy</a>
                        <a href="#" className="hover:text-bn-gold transition-colors">Terms</a>
                        <a href="#" className="hover:text-bn-gold transition-colors">Accessibility</a>
                        <a href="#" className="hover:text-bn-gold transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};