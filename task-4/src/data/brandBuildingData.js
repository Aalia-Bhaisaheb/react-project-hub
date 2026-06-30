// ============================================================
// MARCOST - Brand Building Page Data File
// Visionary Branding > Brand Building
// ============================================================

import communityImage        from "../assets/images/community-engagement.png";
import foundationBg          from "../assets/images/foundation-bg.png";
import watermarkIcon1        from "../assets/images/watermark-icon-1.png";
import watermarkIcon2        from "../assets/images/watermark-icon-2.png";
import reputationImage       from "../assets/images/reputation-management.png";
import strongStorylineImage  from "../assets/images/strong-storyline.png";
import longTermVisionImage   from "../assets/images/long-term-vision.png";
import heroBg from "../assets/images/marcost-hero-bg.png"

// ----- HERO -----
export const brandHeroData = {
  title: "Visionary Branding | Brand Building",
  breadcrumb: ["Home", "Brand Building"],
  backgroundImage: heroBg ,
};

// ----- COMMUNITY ENGAGEMENT -----
export const communityEngagementData = {
  title: "Community Engagement",
  paragraphs: [
    "We believe in fostering meaningful connections with audiences through interactive engagement. From integrated products in bustling public spaces to engaging campaigns, we seamlessly integrate interactive elements into our promotions. Picture this: passers-by interact with our products, triggering captivating public sentiments and fostering genuine connections, Marcost encourages audiences to actively participate in brand building journey.",
    "Join us in transforming passive observers into active brand advocates, as we pioneer the future of interactive sales promotion together.",
  ],
  highlightWord: "sales",
  badges: [
    { label: "Strong Foundation" },
    { label: "Reaching Heights" },
  ],
  image: communityImage,
};

// ----- FOUNDATION CARDS -----
export const foundationCardsData = {
  backgroundImage: foundationBg,
  cards: [
    {
      id: "strong-foundation",
      title: "Strong Foundation",
      watermarkImage: watermarkIcon1,
      bullets: [
        "Ensuring resonance across all channels.",
        "Strength bond between brand & audience.",
        "Adopting a customer-centric approach.",
        "Engagement via immersive experiences.",
      ],
    },
    {
      id: "on-cloud-nine",
      title: "On Cloud Nine",
      watermarkImage: watermarkIcon2,
      bullets: [
        "Elevating sales to new heights.",
        "Prioritization of strong brand identity.",
        "Offering surveys and data insights.",
        "Prioritization of strong brand identity.",
      ],
    },
  ],
};

// ----- REPUTATION SLIDER -----
// Each slide: label shown vertically on the panel, full content shown on the left when active
export const reputationSliderData = {
  slides: [
    {
      id: "reputation-management",
      label: "Reputation Management",
      image: reputationImage,
      title: "Reputation Management",
      missionText: "Our Mission: Increase Footprints, Improve Sales and Gain Public reach.",
      paragraphs: [
        "We are your partner in innovative co-branding and advertising. By using our products as ad platforms, we ensure cost recovery and maximum exposure for diverse brands.",
        "At Marcost, we understand the critical role of public perception in building trust and loyalty. Our tailored strategies and proactive measures safeguard and elevate your reputation, fostering positive consumer relationships. With a proven track record, we are a trusted partner in brand building.",
        "Join us at Marcost, where creativity, sustainability, and data-driven strategies propel sales towards success in the competitive market.",
      ],
    },
    {
      id: "strong-storyline",
      label: "Strong Storyline",
      image: strongStorylineImage,
      title: "Strong Storyline",
      missionText: "Our Mission: Craft Compelling Narratives that Resonate with Your Audience.",
      paragraphs: [
        "Every great brand has a story that connects with its audience on a deeper level. At Marcost, we help you craft and communicate that story effectively.",
        "Our team of creative strategists work closely with you to develop narratives that align with your brand values, engage your target audience, and set you apart in a crowded marketplace.",
        "From concept to execution, we ensure your brand story is told consistently across every touchpoint, building lasting emotional connections.",
      ],
    },
    {
      id: "long-term-vision",
      label: "Long-Term Vision",
      image: longTermVisionImage,
      title: "Long-Term Vision",
      missionText: "Our Mission: Build Sustainable Growth Strategies for Lasting Brand Impact.",
      paragraphs: [
        "Success in branding is not just about today — it's about building a foundation that sustains growth for years to come.",
        "At Marcost, we partner with you to develop forward-thinking strategies that anticipate market shifts, evolve with consumer behaviour, and keep your brand ahead of the curve.",
        "Our long-term vision approach ensures your brand investments deliver compounding returns, creating enduring value and competitive advantage.",
      ],
    },
  ],
};