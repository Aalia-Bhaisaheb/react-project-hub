import heroBg from "../assets/images/marketing-bg.png"
import outReachImage from "../assets/images/outreach-image.png"
import foundationBg from "../assets/images/marketing-foundation.png"
import worldMapBg from "../assets/images/world-map-bg.png"
import arc1 from "../assets/images/arc-1.png"
import iconFootprint from "../assets/images/icon-footprint.png"
import iconSales from "../assets/images/icon-sales.png"
import arc2 from "../assets/images/arc-2.png"
import iconGainPR from "../assets/images/icon-gainpr.png"
import arc3 from "../assets/images/arc-3.png"
import salesTrackingImage from "../assets/images/sales-tracking-image.png"

export const brandHeroData = {
  title: "Visionary Branding | Creative Marketing",
  breadcrumb: ["Home", "Creative Marketing"],
  backgroundImage: heroBg ,
};

export const creativeMarketingData = {
  title: "Customer Outreach",
  paragraphs: [
    "In today's competitive landscape, effective product marketing isn't just about selling—it's about crafting experiences, building relationships, and leaving a lasting impact. We understand the power of strategic co-branding and advertising. By leveraging our own products as advertising platforms, we create win-win scenarios where brands gain exposure while offsetting costs. Our commitment goes beyond profit, it's about making a difference; through consumer sentiment surveys and meticulous data analysis, we uncover insights that drive growth and foster brand loyalty."
  ],
  highlightWord: "",
  badges: [
    { label: "Effective Sales" },
    { label: "Strengthening Relationships" },
  ],
  image: outReachImage,
};

export const foundationCardsData = {
  backgroundImage: foundationBg,
  cards: [
    {
      id: "effective-sales",
      title: "Effective Sales",
      watermarkImage:"",
      bullets: [
        "Amplify brand presence through effective white-labeling.",
        "Partner with Brands to enhance credibility.",
        "Tailor your sales approach with personalized strategies.",
        "Enhance sales of your underperforming products.",
      ],
    },
    {
      id: "strengthening-brands",
      title: "Strengthening Brands",
      watermarkImage: "",
      bullets: [
        "Passionate about customer engagement.",
        "Focus on building relationships.",
        "Drive conversions, foster loyalty.",
        "Create attention with your brand buzz.",
      ],
    },
  ],
};

// ── CORE BENEFITS ──
// bgImage        → world map background
// Each benefit:
//   arcImage     → the colored arc/semicircle image on top
//   iconImage    → the white circle with icon inside
//   label        → colored text below
//   labelColor   → exact color for the label text
export const coreBenefitsData = {
  title: "Core Benefits",
  // bgImage: import from assets — add below
  bgImage: worldMapBg,
 
  benefits: [
    {
      id: "increase-footprint",
      arcImage: arc1,   // replace: import arc1 from "../assets/images/arc-orange.png"
      iconImage: iconFootprint,  // replace: import icon1 from "../assets/images/icon-footprint.png"
      label: "Increase Footprint",
      labelColor: "#F97316", // orange
    },
    {
      id: "improve-sales",
      arcImage: arc2,   // replace: import arc2 from "../assets/images/arc-pink.png"
      iconImage: iconSales,  // replace: import icon2 from "../assets/images/icon-sales.png"
      label: "Improve Sales",
      labelColor: "#EC4899", // pink
    },
    {
      id: "gain-pr",
      arcImage: arc3,   // replace: import arc3 from "../assets/images/arc-purple.png"
      iconImage: iconGainPR,  // replace: import icon3 from "../assets/images/icon-pr.png"
      label: "Gain PR",
      labelColor: "#A855F7", // purple
    },
  ],
};
 
// ── SALES PERFORMANCE TRACKING ──
// highlights: array of { word, color } — each word gets colored inline
export const salesPerformanceData = {
  title: "Sales Performance Tracking",
  // image: import from assets
  image: salesTrackingImage,
   // replace: import salesTrackingImage from "../assets/images/sales-tracking.png"
 
  paragraphs: [
    {
      text: "We believe in tracking, analyzing, and optimizing sales performance for business success. With our meticulous approach, we monitor every aspect to ensure maximum effectiveness. From PR to conversion rates, no metric is overlooked. Our experts uncover insights driving informed decisions and strategic optimizations.",
      highlights: [
        { word: "meticulous approach",   color: "#F97316" }, // orange
        { word: "maximum effectiveness", color: "#22c55e" }, // green
      ],
    },
    {
      text: "Rest assured that your sales are not just improving—they're exceeding expectations. Let's unlock the full potential of your marketing efforts together and pave the way for unparalleled success.",
      highlights: [
        { word: "exceeding expectations", color: "#22c55e" }, // green
      ],
    },
  ],
};