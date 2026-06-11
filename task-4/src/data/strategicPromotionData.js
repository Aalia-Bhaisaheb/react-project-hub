import heroBg from "../assets/images/strategic-promotion-herobg.png"
import brandheroImg from "../assets/images/strategic-brand-image.png"
import foundationBg from "../assets/images/strategy-foundation.png"
import greenFrame  from "../assets/images/green-frame.png";
import blueFrame   from "../assets/images/blue-frame.png";
import waterImg    from "../assets/images/water-img.png";
import backFrame   from "../assets/images/back-frame.png";
import campaignImg from "../assets/images/campaign-img.png"

export const brandHeroData = {
  title: "Innovative Solutions | Strategic Promotions",
  breadcrumb: ["Home", "Strategic Promotions"],
  backgroundImage: heroBg ,
};

export const brandPositioningData = {
  title: "Strategic Brand Promotion",
  paragraphs: [
    "At Marcost, we redefine brand promotion with strategic branding and innovative advertising. Our specialty is crafting a lasting impact from the first encounter, ensuring your brand captivates and leaves an indelible mark. We seamlessly harmonize branding with our products, using data analysis and consumer insights to empower your brand in a competitive landscape. ."
  ],
  highlightWord: "",
  badges: [
    { label: "Redefine promotion" },
    { label: "Strong impression" },
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

export const presenceCanvasData = {
  // Center circular image
  centerImage: waterImg,
  centerFrame: backFrame, // the green+blue quarter circle frame around center image
 
  // Left card — green frame
  leftCard: {
    frame: greenFrame,
    title: "Multichannel Presence",
    paragraphs: [
      {
        text: "At Marcost, we excel in amplifying your brand's reach and resonance through consistent messaging across diverse channels. From traditional to digital, we seamlessly integrate captivating visuals, compelling narratives, and interactive experiences to drive engagement.",
        // words to highlight in green + bold
        highlights: [
          { word: "captivating visuals,",           color: "#22c55e" },
          { word: "compelling narratives,",         color: "#22c55e" },
          { word: "and interactive experiences",    color: "#22c55e" },
        ],
      },
      {
        text: "Join us in expanding your brand's footprint across the marketing multiverse for maximum connection and conversion.",
        highlights: [],
      },
    ],
  },
 
  // Right card — blue frame
  rightCard: {
    frame: blueFrame,
    title: "Advertising Canvas",
    paragraphs: [
      {
        text: "At Marcost, we craft brands on our products and advertise dynamically that will captivate and drive results. By integrating our products, we create narratives for maximum consumer resonance. We ensure heightened brand visibility and engagement.",
        highlights: [
          { word: "our products,",                   color: "#22c55e" },
          { word: "brand visibility and engagement", color: "#1e3a8a" },
        ],
      },
      {
        text: "Join us in innovating the future of advertising with strategic storytelling and execution.",
        highlights: [],
      },
    ],
  },
};

export const campaignData = {
  title: "Structuring Campaign",
  // image: import from assets
  image: campaignImg,
   // replace: import salesTrackingImage from "../assets/images/sales-tracking.png"
 
  paragraphs: [
    {
      text: "Every campaign is a masterpiece. We craft experiences that resonate deeply with your audience. Our approach: listen, innovate, and execute with precision. From creative concepts to targeted messaging, we elevate your brand with captivating visuals, compelling storytelling, and immersive experiences for maximum impact.",
      highlights: [
        {
          word: "listen, innovate, and execute",
          color: "#22c55e"
        },
        {
          word: "captivating visuals, compelling storytelling, and immersive experiences",
          color: "#22c55e"
        },
      ],
    },
    {
      text: "Your brand's journey is not just a campaign—it's a transformational experience that leaves a lasting impression. Let's collaborate and bring your vision to life, one unforgettable campaign at a time.",
      highlights: [
        { }, // green
      ],
    },
  ],
};