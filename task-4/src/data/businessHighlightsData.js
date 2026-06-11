import heroBg from "../assets/images/business-highlight-bg.png"
import marketingGuide from "../assets/images/marketing-guide-image.png"
import worldMapBg from "../assets/images/bbc-worldmap-bg.png";

export const brandHeroData = {
  title: "Market Mastery | Business Highlights",
  breadcrumb: ["Home", "Business Highlights"],
  backgroundImage: heroBg ,
};

export const marketingGuideData = {
  title: "Marcost: Your guide for marketing",
  paragraphs: [
    "We harness the pulse of marketing world to drive your brand forward. Stay ahead with our Latest Trends and Industry News section, delivering fresh insights into the ever-evolving landscape of marketing and advertising. From emerging trends to industry shifts, we offer you a curated perspective coupled with insightful commentary on how these developments could influence your business. Stay informed, stay empowered, and let Marcost guide you through the dynamic currents of the marketing realm."
  ],
  highlightWord: "",
  badges: [
    { label: "Insights on Current Trends" },
    { label: "Industry related News" },
  ],
  image: marketingGuide,
};

// ============================================================
// MARCOST - BBC Partnership Section Data
// One single line image used for all 3 cards
// ============================================================

import cardLine   from "../assets/images/bbc-line.png"; // single line image for all cards

export const bbcPartnershipData = {
  title: "BBC Partnership",
  backgroundImage: worldMapBg,
  cardLine: cardLine, // shared across all 3 cards

  cards: [
    {
      id: "brands",
      number: "1",
      label: "Brands",
      accentColor: "#2647a8",
      paragraphs: [
        "We empower brands to expand their reach and enhance their presence through strategic co-branding and promotional initiatives. By integrating our products with our proven marketing channels, we position your brand at the forefront of your target audience's consciousness.",
        "Partner with us to unlock new avenues of brand building and propel your business towards unparalleled success.",
      ],
    },
    {
      id: "businesses",
      number: "2",
      label: "Businesses",
      accentColor: "#22c55e",
      paragraphs: [
        "We specialize in empowering businesses across diverse sectors to thrive by enhancing their sales performance and foot traffic. Through our tailored marketing techniques, we create impactful strategies that strengthen relationships with the consumers and elevate sales performance. By generating buzz and improving public relations.",
        "We ensure your business attracts more customers and achieves measurable growth in sales.",
      ],
    },
    {
      id: "consumers",
      number: "3",
      label: "Consumers",
      accentColor: "#2647a8",
      paragraphs: [
        "We enrich the consumer experience by making premium products with rich content accessible through strategic co-branding partnerships. We bring high-quality resources to consumers that are typically beyond mass availability, ensuring convenience and satisfaction through our collaborations with leading brands and businesses.",
        "Discover a seamless consumer experience where quality meets accessibility, at NO COST.",
      ],
    },
  ],
};