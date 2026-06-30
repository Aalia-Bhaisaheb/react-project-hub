import heroBg from "../assets/images/case-study-herobg.png"
// Brown parchment background image for case study cards
import caseStudyCardBg from "../assets/images/case-bg.png";
// Icons for challenge / solution / results sections
import challengeIcon from "../assets/images/icon-challenge.png";
import solutionIcon  from "../assets/images/icon-solution.png";
import resultsIcon   from "../assets/images/icon-results.png";

export const brandHeroData = {
  title: "Market Mastery | Case Study",
  breadcrumb: ["Home", "Case Study"],
  backgroundImage: heroBg ,
};

export const caseStudiesData = {
  title: "Case Studies and Success Stories",
  cardBg: caseStudyCardBg,

  intro:
    "Welcome to Marcost, where success stories are not just tales, but blueprints for your brand's triumph. Delve into our Case Studies and Success Stories section for a firsthand glimpse into the power of strategic marketing. Through in-depth analysis, we uncover the secrets behind successful campaigns, dissecting the strategies that drove tangible results. Explore real-world examples of how our innovative cobranding and advertising solutions have propelled our clients to new heights. From boosting brand awareness to optimizing marketing costs, witness the transformative impact of our services.",

  introHighlight:
    "Here are a couple of case studies showcasing the success stories of our clients:",

  icons: {
    challenge: challengeIcon,
    solution:  solutionIcon,
    results:   resultsIcon,
  },

  studies: [
    {
      id: "siyavar-energy",
      title: "Siyavar Energy's Success through Marcost's Marketing Solutions",
      client: "Siyavar Energy Company",
      sector: "Renewable Energies (Retail and Commercial)",
      challenge: {
        heading: "Challenge",
        text: "Siyavar Energy aimed to increase their market share in the highly competitive renewable energy sector, focusing on Solar EPC and Power solutions for businesses. They needed to enhance their brand awareness and public reach to drive new client acquisition and generate business inquiries.",
      },
      solution: {
        heading: "Solution",
        text: "Marcost, specialized in cobranding and advertising, collaborated with Siyavar Energy to devise a comprehensive marketing strategy. Our approach included:",
        bullets: [
          "Cobranding on Marcost Products",
          "Data-Driven Market Insights",
          "Innovative Marketing Campaigns",
        ],
      },
      results: {
        heading: "Results",
        bullets: [
          "Growth in New Client Acquisition",
          "Significant Increase in Inquiries",
        ],
      },
      testimonial:
        "\"Marcost's expertise in cobranding and strategic marketing has been instrumental in our recent growth. Their campaigns not only increased our visibility but also drove a significant number of new business inquiries. We highly recommend their services for any company looking to enhance their market presence.\"",
      testimonialAuthor: "- Siyavar Energy Team.",
    },
    {
      id: "vit-engineering",
      title: "Enhancing VIT Engineering College's Public Reach",
      client: "VIT Engineering College",
      sector: "Education",
      challenge: {
        heading: "Challenge",
        text: "VIT Engineering College aimed to increase the visibility of their brand and the variety of courses they offer. Their target audience included high school and graduate students. They needed to effectively reach these groups and enhance public reach.",
      },
      solution: {
        heading: "Solution",
        text: "Marcost partnered with VIT Engineering College to execute a comprehensive marketing strategy. Key initiatives included:",
        bullets: [
          "Cobranding on Marcost Products",
          "Targeted Advertising",
          "Data-Driven Insights",
        ],
      },
      results: {
        heading: "Results",
        bullets: [
          "Significant Growth in Admissions",
          "Increased Inquiries",
        ],
      },
      testimonial:
        "\"Marcost's innovative marketing strategies significantly boosted our brand awareness. We saw a significant rise in inquiries for our courses. Their expertise and targeted approach made a substantial impact. We highly recommend Marcost.\"",
      testimonialAuthor: "- VIT Engineering College Team.",
    },
    {
      id: "green-horizon",
      title: "Green Horizon's Brand Breakthrough with Marcost",
      client: "Green Horizon Pvt. Ltd.",
      sector: "FMCG & Sustainable Products",
      challenge: {
        heading: "Challenge",
        text: "Green Horizon wanted to introduce their eco-friendly product line to a broader audience and drive retail sales in tier-2 and tier-3 cities. They struggled with limited brand visibility and consumer trust in new markets.",
      },
      solution: {
        heading: "Solution",
        text: "Marcost developed a hyper-local cobranding strategy that embedded Green Horizon's messaging into everyday consumer touchpoints. Key initiatives included:",
        bullets: [
          "Product Cobranding across Marcost Distribution Network",
          "Consumer Engagement Campaigns",
          "Influencer & Community Outreach",
        ],
      },
      results: {
        heading: "Results",
        bullets: [
          "35% Increase in Retail Footfall",
          "Expanded Presence in 12 New Cities",
          "Significant Uplift in Brand Recall",
        ],
      },
      testimonial:
        "\"Marcost helped us reach consumers we had never connected with before. Their distribution-led branding approach was a game changer for our market expansion goals.\"",
      testimonialAuthor: "- Green Horizon Marketing Team.",
    },
    {
      id: "nova-fintech",
      title: "Nova Fintech's Customer Acquisition Drive via Marcost",
      client: "Nova Fintech Solutions",
      sector: "Financial Services & Technology",
      challenge: {
        heading: "Challenge",
        text: "Nova Fintech needed to rapidly grow their user base for their new digital lending app while maintaining low customer acquisition costs. Traditional digital advertising was proving expensive and inefficient.",
      },
      solution: {
        heading: "Solution",
        text: "Marcost created a targeted offline-to-online funnel using product cobranding as the primary touchpoint. Key initiatives included:",
        bullets: [
          "QR-Code Cobranding on Marcost Products",
          "Geo-targeted Distribution in High-Potential Zones",
          "Performance Tracking & Analytics",
        ],
      },
      results: {
        heading: "Results",
        bullets: [
          "40% Reduction in Customer Acquisition Cost",
          "Surge in App Downloads within 60 Days",
          "High Conversion Rate from Offline Touchpoints",
        ],
      },
      testimonial:
        "\"The cobranding model Marcost offered was unlike anything we had tried before. The results spoke for themselves — low cost, high impact, and measurable outcomes.\"",
      testimonialAuthor: "- Nova Fintech Growth Team.",
    },
  ],

  ctaText: "For more information on how Marcost can help your business achieve similar success.",
  ctaButtonLabel: "Contact Us Today",
  ctaButtonLink: "/connect-corner",
};