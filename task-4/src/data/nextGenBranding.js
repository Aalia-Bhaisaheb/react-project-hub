import heroBg from "../assets/images/nextgen-branding-hero.png"
import brandheroImg from "../assets/images/brand-positioning-img.png"
import foundationBg from "../assets/images/branding-nex-foundation-img.png"
import creativeImg from "../assets/images/creative-designing.png";
import brandImg from "../assets/images/brand-storytelling.png";
import campaignImg from "../assets/images/campaign-analytics.png";
import monitoringImg from "../assets/images/monitoring-img.png"

import creativeIcon from "../assets/images/creative-icon.png";
import brandIcon from "../assets/images/brand-icon.png";
import campaignIcon from "../assets/images/campaign-icon.png";

export const brandHeroData = {
  title: "Innovative Solutions | NexGen Branding",
  breadcrumb: ["Home", "NexGen Branding"],
  backgroundImage: heroBg ,
};

export const brandPositioningData = {
  title: "Advanced Brand Positioning",
  paragraphs: [
    "Strategic brand positioning is our specialty. We're not just about advertising; we're about crafting experiences that resonate with your audience on a profound level. Our approach is as unique as your brand, utilizing regularly used products along with innovative advertising techniques to ensure maximum exposure and cost-effectiveness.Through in-depth analysis, we uncover the essence of your brand, identifying what sets you apart from the competition. Armed with this knowledge, we tailor strategies that position your brand strategically in the market, amplifying your message and driving brand awareness."
  ],
  highlightWord: "",
  badges: [
    { label: "Multi-Channel Visibility" },
    { label: "Audience Engagement" },
  ],
  image: brandheroImg,
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

export const servicesCards = [
  {
    id: 1,
    title: "Creative Designing",
    description:
      "We craft visually compelling designs that capture your brand essence — from logos and brand identities to UI/UX layouts that leave a lasting impression on every audience.",
    image: creativeImg,       // ← replace null with creativeImg
    icon: creativeIcon,        // ← replace null with creativeIcon
    hoverColor: "#7C3AED",   // purple
  },
  {
    id: 2,
    title: "Brand Storytelling",
    description:
      "Every great brand has a story. We help you articulate yours — building narratives that connect emotionally, build trust, and differentiate you in a crowded marketplace.",
    image: brandImg,       // ← replace null with brandImg
    icon: brandIcon,        // ← replace null with brandIcon
    hoverColor: "#DB2777",   // pink/magenta
  },
  {
    id: 3,
    title: "Campaign Analytics",
    description:
      "Data-driven decisions power great campaigns. We track, analyse, and optimise every metric — giving you clear insights to maximise ROI and refine your marketing strategy.",
    image: campaignImg,       // ← replace null with campaignImg
    icon: campaignIcon,        // ← replace null with campaignIcon
    hoverColor: "#EA580C",   // orange
  },
];


export const monitoringReportingData = {
  title: "Real-Time Monitoring and Reporting",
  // image: import from assets
  image: monitoringImg,
   // replace: import salesTrackingImage from "../assets/images/sales-tracking.png"
 
  paragraphs: [
    {
      text: "At Marcost, we take the guesswork out of campaign management with our   real-time monitoring and reporting services fueled by Marcost’s customized dashboard. Our cutting-edge technology allows us to track campaigns as they happen, enabling prompt adjustments to maximize impact. Our detailed reports provide insights into Campaign Performance and key Metrics, giving you a clear view of your brand's reach and effectiveness. ",
      highlights: [
        { }, // orange
        { word: "Campaign Performance and key Metrics", color: "#22c55e" }, // green
      ],
    },
    {
      text: "With us, you will gain the power to refine your strategies and drive measurable success. Stay ahead in the dynamic world of marketing with our expertise and precision-driven approach to campaign management.",
      highlights: [
        { word: "precision-driven", color: "#22c55e" }, // green
      ],
    },
  ],
};