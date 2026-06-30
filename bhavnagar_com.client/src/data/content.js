// Static content for Bhavnagar portal
import {
    Building2, Briefcase, FileText, Users, Droplets, Zap, ShieldAlert,
    GraduationCap, HeartPulse, Bus, Trash2, Receipt, Trees, Landmark,
} from "lucide-react";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

export const NAVBAR_CONTENT = {
    logo: {
        letter: "B",
        title: "Bhavnagar",
        subtitle: "Saurashtra · Est. 1723",
        href: "#home",
    },

    search: {
        placeholder: "Search…",
    },

    helpline: {
        label: "Helpline",
        phone: "18002331010",
        href: "tel:18002331010",
    },
};

export const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    {
        label: "Tourism",
        href: "#tourism",
        children: [
            { label: "Heritage Sites", href: "#tourism" },
            { label: "Temples", href: "#tourism" },
            { label: "Beaches & Parks", href: "#tourism" },
            { label: "Plan Your Visit", href: "#tourism" },
        ],
    },
    {
        label: "Forms",
        href: "#services",
        children: [
            { label: "Birth Certificate", href: "#services" },
            { label: "Death Certificate", href: "#services" },
            { label: "Property Tax", href: "#services" },
            { label: "Trade License", href: "#services" },
        ],
    },
    { label: "Business", href: "#business" },
    { label: "Jobs", href: "#services" },
    { label: "Events", href: "#events" },
    { label: "Services", href: "#services" },
];

export const HERO_CONTENT = {
    image:
        "https://images.unsplash.com/photo-1764858147489-47a546c6e8ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXR5JTIwZXZlbmluZyUyMGxpZ2h0cyUyMGhlcml0YWdlJTIwdG91cmlzbXxlbnwwfHx8fDE3ODI3Mjc4NjF8MA&ixlib=rb-4.1.0&q=85",

    imageAlt: "Bhavnagar heritage city at evening",

    badge: {
        text: "Official City Portal · Saurashtra",
    },

    title: {
        prefix: "Welcome to",
        city: "Bhavnagar",
        line2Start: "A city of heritage",
        line2Middle: "tides &",
        line2End: "trade.",
    },

    description:
        "Founded in 1723 by Bhavsinhji Gohil — today a thriving cultural capital of Gujarat, home to 2.4 million citizens, world-class industries, and timeless traditions.",

    buttons: {
        search: "Search citizen services, places…",
        explore: "Explore the city",
    },

    scrollText: "Scroll",
};

export const DISTRICT_CONTENT = {
    eyebrow: "District at a glance",

    title: {
        highlight: "Bhavnagar District",
        after: "— a chapter of Gujarat's living history.",
    },

    description:
        "Founded in 1723 by Bhavsinhji Gohil, Bhavnagar was once the capital of a princely state that merged with the Indian Union in February 1948. Today, 190 km from Gandhinagar and a few miles west of the Gulf of Khambhat, it thrives as a hub of diamond polishing, plastics, shipbreaking — and of course, the world's most beloved ",

    cta: {
        text: "Discover the city",
        href: "#tourism",
    },

    highlightWords: {
        first: "ganthiya",
        second: "jalebi",
    },
};

export const STATS = [
    {
        value: "7,034",
        unit: "Sq Km",
        label: "Total Area",
        caption: "Spanning coastline to inland plains.",
        subStats: [
            { label: "Coastline", value: "152 Km", desc: "Maritime infrastructure" },
            { label: "National Park", value: "34.08 km²", desc: "Velavadar savanna" },
            { label: "Major Ports", value: "02 Hubs", desc: "Alang & Pipavav vicinity" },
            { label: "Administration", value: "11 Talukas", desc: "Regional subdivisions" }
        ]
    },
    { value: "2.41M", unit: "Citizens", label: "Population", caption: "A growing metropolitan community" },
    { value: "70.57", unit: "%", label: "Literacy Rate", caption: "Above the national average" },
    { value: "699", unit: "", label: "Villages", caption: "Across 11 administrative talukas" },
];

export const TOURISM = [
    {
        title: "Takhteshwar Temple",
        category: "Heritage Temple",
        img: "https://images.unsplash.com/photo-1735192683809-3fcd83233e19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB0ZW1wbGUlMjBndWphcmF0fGVufDB8fHx8MTc4MjcyNzg3Nnww&ixlib=rb-4.1.0&q=85",
        blurb: "A 1,000-foot hilltop temple offering panoramic views of the Gulf of Khambhat.",
    },
    {
        title: "Nilambagh Palace",
        category: "Royal Heritage",
        img: "https://images.pexels.com/photos/14702568/pexels-photo-14702568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        blurb: "The 1859 palace of the Gohil dynasty, now a heritage hotel of timeless grandeur.",
    },
    {
        title: "Alang Shipyard",
        category: "Industrial Wonder",
        img: "https://images.unsplash.com/photo-1695411559880-06b2b3f1b83c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwxfHxzaGlweWFyZCUyMGluZGlhfGVufDB8fHx8MTc4MjcyNzg3Nnww&ixlib=rb-4.1.0&q=85",
        blurb: "The world's largest ship-breaking yard, 50 km from the city — a marvel of industry.",
    },
    {
        title: "Gandhi Smriti",
        category: "Museum",
        img: "https://images.pexels.com/photos/7551840/pexels-photo-7551840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        blurb: "A serene memorial preserving the legacy of Mahatma Gandhi's formative years.",
    },
    {
        title: "Victoria Park",
        category: "Nature Reserve",
        img: "https://images.unsplash.com/photo-1716075135988-7e8965fe8366?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmljdG9yaWElMjBwYXJrfGVufDB8fDB8fHww",
        blurb: "200 acres of lush biodiversity in the heart of the city — home to peacocks and gazelles.",
    },
    {
        title: "Gaurishankar Lake",
        category: "Scenic Lake",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Gaurishankar_Lake.jpg/1920px-Gaurishankar_Lake.jpg",
        blurb: "A man-made lake commissioned in 1872 — a sunset destination for locals.",
    },
];

export const TOURISM_CONTENT = {
    eyebrow: "Places to wander",

    title: {
        before: "Where the past",
        highlight: "meets",
        after: "the present.",
    },

    description:
        "From hilltop temples to the world's largest shipyard — Bhavnagar offers an unhurried tapestry of heritage, faith, nature and craft.",

    buttonText: "Explore",
};

export const SERVICES = [
    { icon: FileText, title: "Certificates", desc: "Birth, death & marriage", testId: "service-certificates" },
    { icon: Receipt, title: "Property Tax", desc: "Pay & view receipts", testId: "service-property-tax" },
    { icon: Droplets, title: "Water Bill", desc: "Pay your water dues", testId: "service-water" },
    { icon: Zap, title: "Electricity", desc: "Bill payment portal", testId: "service-electricity" },
    { icon: Briefcase, title: "Trade License", desc: "Apply & renew", testId: "service-trade" },
    { icon: GraduationCap, title: "Education", desc: "Schools & scholarships", testId: "service-education" },
    { icon: HeartPulse, title: "Health", desc: "Hospitals & schemes", testId: "service-health" },
    { icon: Bus, title: "Transport", desc: "City bus & permits", testId: "service-transport" },
    { icon: Trash2, title: "Sanitation", desc: "Waste & complaints", testId: "service-sanitation" },
    { icon: ShieldAlert, title: "Grievances", desc: "Lodge a complaint", testId: "service-grievance" },
    { icon: Users, title: "Citizen ID", desc: "Aadhaar & PAN linking", testId: "service-id" },
    { icon: Trees, title: "Parks & Gardens", desc: "Bookings & permits", testId: "service-parks" },
];

export const SERVICES_CONTENT = {
    eyebrow: "Citizen services",

    title: {
        before: "Everything you need,",
        highlight: "in one tap.",
    },

    description:
        "Pay bills, download forms, apply for licenses or raise a grievance — the new Bhavnagar portal brings every municipal service under one roof.",

    cta: {
        title: {
            before: "Looking for a",
            highlight: "job",
            after: "?",
        },

        description:
            "Explore openings across municipal departments, contractual posts and private sector listings within Bhavnagar district.",

        button: "View open positions",

        href: "#services",
    },
};

export const BUSINESSES = [
    { name: "Triveni Private Limited", tag: "Quality Steel Products · Since 1967", phone: "+91 94269 10922", email: "info@trivenisteels.com", initials: "TPL", accent: "#B91C1C" },
    { name: "Accmark Consultancy", tag: "Financial & Business Advisory", phone: "+91 76238 08056", email: "info@accmark.com", initials: "AC", accent: "#1E3A8A" },
    { name: "Earth Expo Company", tag: "Sustainable Trade Exhibitions", phone: "+91 97254 04094", email: "info@earthexpocompany.com", initials: "EE", accent: "#15803D" },
    { name: "Saurashtra Cotton Mills", tag: "Textile Manufacturing · Since 1985", phone: "+91 98250 12345", email: "contact@saurashtracotton.in", initials: "SCM", accent: "#9333EA" },
    { name: "Bhavnagar Marine Foods", tag: "Seafood Export · ISO 9001", phone: "+91 99098 76543", email: "exports@bnmarine.com", initials: "BMF", accent: "#0369A1" },
    { name: "Gohil Diamonds", tag: "Polished Diamonds & Jewellery", phone: "+91 90999 22110", email: "sales@gohildiamonds.com", initials: "GD", accent: "#C5A059" },
];

export const BUSINESS_CONTENT = {
    eyebrow: "Business directory",

    title: {
        before: "Bhavnagar's",
        highlight: "enterprises",
        after: "in one place.",
    },

    badge: "Verified · Listed",

    previousLabel: "Previous",
    nextLabel: "Next",
};

export const NEWS = [
    {
        date: "10 Dec 2025",
        title: "Metro station design plan unveiled for 2026",
        excerpt: "A new transit blueprint connecting downtown to the industrial corridor enters its design phase.",
        img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80",
        tag: "Infrastructure",
    },
    {
        date: "08 Dec 2025",
        title: "Standing committee meeting on city development",
        excerpt: "Officials review the next quarter's allocation across heritage conservation and public works.",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
        tag: "Governance",
    },
    {
        date: "05 Dec 2025",
        title: "City bus service expanded to 14 new routes",
        excerpt: "BMC announces an electric fleet expansion improving last-mile connectivity for citizens.",
        img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
        tag: "Transport",
    },
    {
        date: "02 Dec 2025",
        title: "Heritage walk launched across old Bhavnagar",
        excerpt: "A curated 3-km route through the city's 18th-century havelis and bazaars now open to visitors.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
        tag: "Tourism",
    },
];

export const NEWS_CONTENT = {
    eyebrow: "News & publications",

    title: {
        before: "Stories shaping",
        highlight: "our city.",
    },

    viewAll: {
        text: "All publications",
        href: "#news",
    },

    readMore: "Read story",
};

export const EVENTS = [
    {
        date: { day: "15", month: "Dec" },
        title: "Rishta-E-Relationship — Gujarati Standup",
        venue: "Sanskar Mandap, Kalanala",
        time: "7:30 PM onwards",
        img: "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?auto=format&fit=crop&w=1200&q=80",
        category: "Comedy",
    },
    {
        date: { day: "20", month: "Dec" },
        title: "Kavi Kant — Film Screening & Tribute",
        venue: "Pattani Archives Auditorium",
        time: "6:00 PM",
        img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
        category: "Cultural",
    },
    {
        date: { day: "25", month: "Dec" },
        title: "Bhavnagar Heritage Festival",
        venue: "Nilambagh Palace Lawns",
        time: "5:00 PM – 10:00 PM",
        img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?auto=format&fit=crop&w=1200&q=80",
        category: "Festival",
    },
    {
        date: { day: "02", month: "Jan" },
        title: "Kite Festival — Uttarayan Celebrations",
        venue: "Ghogha Beach",
        time: "All Day",
        img: "https://images.unsplash.com/photo-1571849291280-89f81a772893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0ZSUyMGZlc3RpdmFsfGVufDB8fDB8fHww",
        category: "Festival",
    },
];

export const EVENTS_CONTENT = {
    eyebrow: "Upcoming events",

    title: {
        before: "Be where the",
        highlight: "city gathers.",
    },

    button: {
        text: "View full calendar",
        href: "#events",
    },
};



export const EMERGENCY = [
    { label: "Police", number: "100", color: "#1E3A8A" },
    { label: "Fire", number: "101", color: "#B91C1C" },
    { label: "Ambulance", number: "108", color: "#15803D" },
    { label: "Women Helpline", number: "1091", color: "#9333EA" },
    { label: "Disaster Mgmt.", number: "1077", color: "#C5A059" },
    { label: "Municipal Helpline", number: "1800-233-1010", color: "#0369A1" },
];

export const FOOTER_CONTENT = {
    brand: {
        logo: "B",
        title: "Bhavnagar",
        subtitle: "Saurashtra · Est. 1723",
        description:
            "The official portal of Bhavnagar — connecting citizens, businesses and visitors to the heritage city of Gujarat. Built with care, for the next century.",
    },

    contact: {
        address:
            "Municipal Corporation, Multi-Storey Building, Bhavnagar 364001",
        email: "contact@bhavnagar.gov.in",
        phone: "1800-233-1010 (Toll Free)",
    },

    explore: {
        title: "Explore",
        links: [
            { label: "About", href: "#about" },
            { label: "Tourism", href: "#tourism" },
            { label: "Business", href: "#business" },
            { label: "Events", href: "#events" },
            { label: "Citizen Services", href: "#services" },
        ],
    },

    forms: {
        title: "Forms",
        links: [
            { label: "Birth Certificate", href: "#services" },
            { label: "Death Certificate", href: "#services" },
            { label: "Property Tax", href: "#services" },
            { label: "Trade License", href: "#services" },
            { label: "Water Bill", href: "#services" },
            { label: "Grievance", href: "#services" },
        ],
    },

    newsletter: {
        title: "Stay Updated",
        description:
            "Subscribe to monthly civic updates, events and notices from the municipal office.",
        placeholder: "your@email.com",
        success: "Thank you — you'll hear from us soon.",
    },

    
    social: [
        {
            id: "facebook",
            icon: FaFacebookF,
            href: "#",
        },
        {
            id: "twitter",
            icon: FaTwitter,
            href: "#",
        },
        {
            id: "instagram",
            icon: FaInstagram,
            href: "#",
        },
        {
            id: "youtube",
            icon: FaYoutube,
            href: "#",
        },
        {
            id: "linkedin",
            icon: FaLinkedinIn,
            href: "#",
        },
    ],

    emergencyTitle: "Emergency · 24x7",
    emergencySubtitle: "Tap to call directly",

    bottomLinks: [
        {
            label: "Privacy",
            href: "#",
        },
        {
            label: "Terms",
            href: "#",
        },
        {
            label: "Accessibility",
            href: "#",
        },
        {
            label: "Sitemap",
            href: "#",
        },
    ],
};