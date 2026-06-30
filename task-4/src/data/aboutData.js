import aboutMeeting from "../assets/images/about-meeting.png";
import visionImage from "../assets/images/vision-bg.png";
import expertiseImage from "../assets/images/expertise-image.png";
import connectorRing from "../assets/images/connector.png";
import topIcon from "../assets/images/01.png";
import leftIcon from "../assets/images/02.png";
import rightIcon from "../assets/images/03.png";
import preciousImage from "../assets/images/precious.png";
import founderAmanImage from "../assets/images/founder-aman.png";
import founderKapilImage from "../assets/images/founder-kapil.png";
import founderVipulImage from "../assets/images/founder-vipul.png";
import footerLogo from "../assets/images/footer-logo.png";
import footerBg from "../assets/images/footer-bg.png";

// ----- ABOUT SECTION -----
export const aboutData = {
  title: "About Marcost",
  paragraphs: [
    "MarCost leads a marketing revolution, specializing in eco-conscious advertising that seamlessly connects brands with consumers. By strategically embedding brand messages on eco-friendly products, we ensure widespread visibility, fostering direct consumer engagement and valuable feedback. Our mission is to cultivate an interconnected marketing ecosystem, promoting collaboration among brands, distributors, and consumers for impactful, sustainable connections and mutual success. Our journey began with a shared passion for blending marketing, innovation, and sustainability, transforming everyday products into eco-friendly advertising canvases.",
    "MarCost embodies interconnectedness, where brands, consumers, and distributors harmoniously converge in a shared commitment to environmental consciousness and marketing innovation.",
  ],
  badges: [
    { label: "Eco-Conscious Advertising" },
    { label: "Environmental Consciousness" },
  ],
  image: aboutMeeting,
};

// ----- VISION & MISSION SECTION -----
export const visionMissionData = {
  backgroundImage: visionImage,
  vision: {
    title: "Vision",
    description:
      "MarCost envisions revolutionizing the advertising landscape by seamlessly embedding sustainable brand messaging on products, fostering genuine engagement between conscious consumers and diverse brands globally. Our long-term goal is to create an interconnected ecosystem that promotes sustainable practices, redefining the future of marketing and advertising as a catalyst for positive change.",
  },
  mission: {
    title: "Mission",
    description:
      "At MarCost, our mission is to seamlessly integrate sustainability with impactful marketing and advertising practices. We are committed to leveraging our products as dynamic advertising mediums, connecting brands with consumers across diverse locations through our distribution channels.",
  },
};

// ----- EXPERTISE SECTION -----
export const expertiseData = {
  title: "Expertise",
  subtitle:
    "At MarCost, our core competencies in marketing span a wide spectrum of strategic approaches and innovative practices. We take pride in our expertise across the following key areas:",
  centerImage: expertiseImage,
  items: [
    {
      id: "01",
      title: "Specialised Marketing Solutions",
      description:
        "Crafting customised marketing solutions that align with each client's requirements, ensuring effective brand visibility and engagement.",
      position: "right",
      color: "#F97316",
    },
    {
      id: "02",
      title: "Distribution Network Management",
      description:
        "Managing a vigorous network of distributors across diverse sectors to ensure maximum public reach and visibility for our clients.",
      position: "right",
      color: "#8B5CF6",
    },
    {
      id: "03",
      title: "Cross Marketing",
      description:
        "Tailoring marketing strategies to cater various industries, ensuring industry-specific and impactful brand promotions.",
      position: "right",
      color: "#3B82F6",
    },
    {
      id: "04",
      title: "Collaborative Partnerships",
      description:
        "We value collaborative partnerships with distributors and businesses across various industries. This collaborative approach ensures widespread distribution and effective brand exposure for our clients.",
      position: "bottom",
      color: "#22C55E",
    },
    {
      id: "05",
      title: "Consumer Engagement Programs",
      description:
        "Designing and implementing consumer engagement initiatives that enable direct interaction between consumers and brands, facilitating feedback mechanisms for valuable insights.",
      position: "left",
      color: "#A855F7",
    },
    {
      id: "06",
      title: "Strategic Brand Placement",
      description:
        "Expertly positioning brand advertisements on our distributed products in high-footfall areas. This targeted approach ensures maximum visibility for our clients' brands.",
      position: "left",
      color: "#10B981",
    },
    {
      id: "07",
      title: "Eco-friendly Product Advertising",
      description:
        "Leveraging eco-friendly products as powerful advertising mediums to connect brands with consumers in diverse industries and sectors.",
      position: "left",
      color: "#F97316",
    },
  ],
};

// ----- APPROACH & PHILOSOPHY SECTION -----
export const approachData = {
  title: "Approach and Philosophy",
  description:
    "At MarCost, our approach to serving clients is deeply rooted in innovation, sustainability, and fostering genuine connections. We pride ourselves on our unique methodologies that set us apart in the marketing and advertising landscape.",
  diagram: {
    // Connector ring — the 3-arc colored ring image
    connectorRing: connectorRing,
    // precious.png — placed in the static center circle
    preciousImage: preciousImage,
    // Three icon circles sitting on the arc junctions
    topIcon: topIcon,       // brain icon — orange border — top-right junction
    leftIcon: leftIcon,     // people icon — green border — left junction
    rightIcon: rightIcon,   // stamp icon  — blue border  — bottom-right junction
  },
};

// ----- FOUNDERS SECTION -----
export const foundersData = {
  title: "Meet Our Founders",
  founders: [
    {
      name: "Kapil Kashyap",
      role: "Co-Founder & Business Strategist",
      description:
        "With a remarkable 14 years of experience spanning various sectors, Kapil Kashyap is the driving force behind MarCost's business strategy. An established professional, he has contributed to the growth of numerous corporates through his expertise in business and strategy development. His visionary approach shapes innovative growth strategies.",
      bgColor: "#F97316",
      image: founderKapilImage,
    },
    {
      name: "Vipul Mishra",
      role: "Co-Founder & Marketing Maestro",
      description:
        "As the Co-Founder responsible for marketing and business development, Vipul Mishra brings 8 years of diverse experience to MarCost with a background in sales, marketing, and business analytics, his strategic insights and multifaceted skills play a pivotal role in steering business growth.",
      bgColor: "#22C55E",
      image: founderVipulImage,
    },
    {
      name: "Aman Joshi",
      role: "Co-Founder & Operations Expert",
      description:
        "Aman Joshi, our Co-Founder, with 8 years of experience, is the operational backbone of MarCost. Specialising in operations and delivery management, his expertise ensures the seamless operations and distribution of our products, contributing to the efficiency that defines MarCost.",
      bgColor: "#1E3A8A",
      image: founderAmanImage,
    },
  ],
};

// ----- CLIENT-CENTRIC SECTION -----
export const clientCentricData = {
  title: "Client-Centric Focus",
  quadrants: [
    {
      id: "commitment",
      title: "Commitment to Client Success",
      description:
        "At MarCost, our foundation is built on an unwavering commitment to our clients' success and satisfaction. We understand that each client is unique, and our approach is tailored to ensure their specific marketing and advertising needs are not just met but exceeded.",
      position: "top-left",
    },
    {
      id: "execution",
      title: "Seamless Execution",
      description:
        "From concept to delivery, we prioritize seamless execution. Our robust processes, combined with years of industry expertise, ensure that every advertising campaign is executed with precision, reaching consumers in diverse locations.",
      position: "top-right",
    },
    {
      id: "innovation",
      title: "Continuous Innovation",
      description:
        "We are dedicated to staying at the forefront of innovation in marketing and advertising. Our team constantly explores new avenues and technologies to ensure that our clients benefit from our innovations, keeping their brands ahead in the competitive landscape.",
      position: "bottom-left",
    },
    {
      id: "engagement",
      title: "Real-time Consumer Engagement",
      description:
        "Our commitment goes beyond visibility – we strive for real-time consumer engagement. Through our products, consumers not only see brand ads but can also share valuable inputs through our feedback mechanism. This unique approach establishes a direct connection between brands and consumers, fostering meaningful interactions.",
      position: "bottom-right",
    },
  ],
};

// ----- FOOTER DATA -----
export const footerData = {
  logo: footerLogo,
  backgroundImage: footerBg,
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Success Showcase", href: "#" },
      { label: "Business Highlights", href: "#" },
      { label: "Discover Us", href: "#" },
      { label: "Connect Corner", href: "#" },
    ],
  },
  innovativeSolutions: {
    title: "Innovative Solutions",
    links: [
      { label: "NexGen Branding", href: "#" },
      { label: "Strategic Promotion", href: "#" },
      { label: "Market Insights", href: "#" },
    ],
  },
  contact: {
    title: "Connect with us",
    phone: "+91 9876 54321",
    email: "connect@marcostads.com",
    address: "1234 Elm Street, Anytown, USA",
    socials: [
      { platform: "linkedin", href: "#" },
      { platform: "youtube", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "google", href: "#" },
    ],
  },
  copyright: "Copyright © 2024 Marcost, All Rights Reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  designCredit: "Website Design by D&C",
};