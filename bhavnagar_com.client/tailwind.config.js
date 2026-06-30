/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],

    theme: {
        extend: {
            fontFamily: {
                serif: ["Cormorant Garamond", "serif"],
                sans: ["Outfit", "system-ui", "sans-serif"],
            },

            colors: {
                bn: {
                    indigo: "#1C2A4F",
                    indigoSoft: "#2A3C6B",
                    sand: "#FDFBF7",
                    sandDeep: "#F4EFE6",
                    gold: "#C5A059",
                    goldSoft: "#D6B36B",
                    ink: "#1F2937",
                    mute: "#6B7280",
                    line: "#E5E7EB",
                    night: "#0F1424",
                    nightSoft: "#1A2138",
                },

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",

                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },

                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },

                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },

                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },

                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },

                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },

                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },

                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },

            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            boxShadow: {
                soft: "0 8px 32px rgba(28, 42, 79, 0.08)",
                hover: "0 20px 60px rgba(28, 42, 79, 0.15)",
                gold: "0 12px 40px rgba(197, 160, 89, 0.25)",
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },

                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },

                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },

                shimmer: {
                    "0%": { backgroundPosition: "-1000px 0" },
                    "100%": { backgroundPosition: "1000px 0" },
                },
            },

            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                marquee: "marquee 40s linear infinite",
                shimmer: "shimmer 2s linear infinite",
            },
        },
    },

    plugins: [require("tailwindcss-animate")],
};