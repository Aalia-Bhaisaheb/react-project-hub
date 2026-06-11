import heroBg from "../assets/images/market-herobg.png"
import brandheroImg from "../assets/images/research-hero.png"
import foundationBg from "../assets/images/market-in-foundation.png"
import costImg from "../assets/images/cost-img.png"

export const brandHeroData = {
  title: "Innovative Solutions | Market Insights",
  breadcrumb: ["Home", "Market Insights"],
  backgroundImage: heroBg ,
};

export const brandPositioningData = {
  title: "Market Research and Analysis",
  paragraphs: [
    "At Marcost, we transform data into actionable insights for your brand's success. Our strategic analysis delves into market trends, competitors, and consumer behavior, driving growth opportunities. With precise understanding of your audience, our campaigns resonate effectively.We believe in the power of opportunity. Through comprehensive research, we uncover untapped markets and growth areas, guiding your brand to new heights. Let us navigate market complexities, turning insights into action and propelling your brand forward. Strategic analysis opens doors to endless possibilities."
  ],
  highlightWord: "",
  badges: [
    { label: "Market Research" },
    { label: "In-depth Analysis" },
  ],
  image: brandheroImg,
};

export const foundationCardsData = {
  backgroundImage: foundationBg,
  cards: [
    {
      id: "In-depth Analysis",
      title: "In-depth Analysis",
      watermarkImage:"",
      bullets: [
        "Gain a deep understanding of your target market.",
        "Utilize data-driven insights to position your brand.",
        "Develop customized marketing plans.",
        "Empower your brand with actionable insights..",
      ],
    },
    {
      id: "Market Research",
      title: "Market Research",
      watermarkImage: "",
      bullets: [
        "Meticulous market analysis for invaluable insights.",
        "Fuelling product marketing and its research.",
        "Collaborative journey towards realizing brand dreams.",
        "Identifying emerging trends and untapped opportunities.",
      ],
    },
  ],
};

export const costOptimizationData = {
  title: "Real-Time Monitoring and Reporting",
  // image: import from assets
  image: costImg,
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